import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Persistent Visitor Stats Tracking - REAL COUNTS
interface VisitorStats {
  total: number;
  todayDate: string;
  todayCount: number;
  gradeViews: {
    grade10: number;
    grade11: number;
    grade12: number;
  };
  lastUpdated: string;
}

const STATS_FILE = path.join(process.cwd(), "visitor_stats.json");

// Real Active Connected Sessions (Heartbeat tracking)
const activeSessions = new Map<string, number>();

function cleanOldSessions(): number {
  const now = Date.now();
  for (const [id, lastTime] of activeSessions.entries()) {
    if (now - lastTime > 75000) { // Inactive for more than 75s
      activeSessions.delete(id);
    }
  }
  // At least 1 active user when the current request is being processed
  return Math.max(1, activeSessions.size);
}

function getInitialStats(): VisitorStats {
  const todayStr = new Date().toISOString().split("T")[0];
  try {
    if (fs.existsSync(STATS_FILE)) {
      const data = JSON.parse(fs.readFileSync(STATS_FILE, "utf8"));
      // Reset if it had legacy simulated stats > 1000
      if (data.total > 1000) {
        data.total = 1;
        data.todayCount = 1;
      }
      if (!data.gradeViews) {
        data.gradeViews = { grade10: 1, grade11: 1, grade12: 1 };
      }
      if (data.todayDate !== todayStr) {
        data.todayDate = todayStr;
        data.todayCount = 1;
      }
      return data;
    }
  } catch (e) {
    console.error("Error reading visitor stats file:", e);
  }
  // True real baseline starting from real visits
  const initial: VisitorStats = {
    total: 1,
    todayDate: todayStr,
    todayCount: 1,
    gradeViews: {
      grade10: 1,
      grade11: 1,
      grade12: 1,
    },
    lastUpdated: new Date().toISOString(),
  };
  try {
    fs.writeFileSync(STATS_FILE, JSON.stringify(initial, null, 2), "utf8");
  } catch (e) {
    console.error("Error creating initial visitor stats file:", e);
  }
  return initial;
}

const cachedStats: VisitorStats = getInitialStats();

function saveStats(stats: VisitorStats) {
  try {
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2), "utf8");
  } catch (e) {
    console.error("Error writing visitor stats file:", e);
  }
}

// Real Visitor Tracking API Endpoints
app.get("/api/visitors", (req, res) => {
  const todayStr = new Date().toISOString().split("T")[0];
  if (cachedStats.todayDate !== todayStr) {
    cachedStats.todayDate = todayStr;
    cachedStats.todayCount = 1;
    saveStats(cachedStats);
  }

  const sessionId = (req.query.sessionId as string) || (req.ip as string) || "session-live";
  activeSessions.set(sessionId, Date.now());
  const online = cleanOldSessions();

  res.json({
    total: cachedStats.total,
    today: cachedStats.todayCount,
    online,
    gradeViews: cachedStats.gradeViews || { grade10: 1, grade11: 1, grade12: 1 },
    lastUpdated: cachedStats.lastUpdated,
    isRealtime: true,
  });
});

app.post("/api/visitors/hit", (req, res) => {
  const todayStr = new Date().toISOString().split("T")[0];
  if (cachedStats.todayDate !== todayStr) {
    cachedStats.todayDate = todayStr;
    cachedStats.todayCount = 0;
  }

  const { sessionId, grade } = req.body || {};
  if (sessionId) {
    activeSessions.set(sessionId, Date.now());
  }

  cachedStats.total += 1;
  cachedStats.todayCount += 1;
  if (!cachedStats.gradeViews) {
    cachedStats.gradeViews = { grade10: 1, grade11: 1, grade12: 1 };
  }
  if (grade === 10) cachedStats.gradeViews.grade10 += 1;
  else if (grade === 11) cachedStats.gradeViews.grade11 += 1;
  else if (grade === 12) cachedStats.gradeViews.grade12 += 1;

  cachedStats.lastUpdated = new Date().toISOString();
  saveStats(cachedStats);

  const online = cleanOldSessions();

  res.json({
    total: cachedStats.total,
    today: cachedStats.todayCount,
    online,
    gradeViews: cachedStats.gradeViews,
    lastUpdated: cachedStats.lastUpdated,
    isRealtime: true,
  });
});

app.post("/api/visitors/heartbeat", (req, res) => {
  const { sessionId, grade } = req.body || {};
  if (sessionId) {
    activeSessions.set(sessionId, Date.now());
  }
  if (!cachedStats.gradeViews) {
    cachedStats.gradeViews = { grade10: 1, grade11: 1, grade12: 1 };
  }
  if (grade === 10) cachedStats.gradeViews.grade10 += 1;
  else if (grade === 11) cachedStats.gradeViews.grade11 += 1;
  else if (grade === 12) cachedStats.gradeViews.grade12 += 1;

  const online = cleanOldSessions();
  res.json({
    online,
    total: cachedStats.total,
    today: cachedStats.todayCount,
    gradeViews: cachedStats.gradeViews,
  });
});

// Real Leaderboard Management (No schools, real avatars, real XP tracking)
const LEADERBOARD_FILE = path.join(process.cwd(), "leaderboard_data.json");

interface LeaderboardRecord {
  id: string;
  rank?: number;
  name: string;
  avatar: string;
  title: string;
  grade: number;
  xp: number;
  streak: number;
  completedCount?: number;
  badge?: string;
  lastActive?: string;
}

function getLeaderboard(): LeaderboardRecord[] {
  try {
    if (fs.existsSync(LEADERBOARD_FILE)) {
      const data = JSON.parse(fs.readFileSync(LEADERBOARD_FILE, "utf8"));
      if (Array.isArray(data)) {
        return data.sort((a, b) => b.xp - a.xp).map((item, idx) => ({
          ...item,
          rank: idx + 1,
        }));
      }
    }
  } catch (e) {
    console.error("Error reading leaderboard:", e);
  }
  return [];
}

function saveLeaderboard(list: LeaderboardRecord[]) {
  try {
    const sorted = list.sort((a, b) => b.xp - a.xp).map((item, idx) => ({
      ...item,
      rank: idx + 1,
    }));
    fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(sorted, null, 2), "utf8");
    return sorted;
  } catch (e) {
    console.error("Error saving leaderboard:", e);
    return list;
  }
}

app.get("/api/leaderboard", (req, res) => {
  const list = getLeaderboard();
  const currentUserId = req.query.userId as string | undefined;

  res.json({
    leaderboard: list,
    currentUserRank: currentUserId
      ? list.findIndex((u) => u.id === currentUserId) + 1
      : null,
    totalParticipants: list.length,
    updatedAt: new Date().toISOString(),
  });
});

app.post("/api/leaderboard/submit", (req, res) => {
  const {
    id,
    name,
    avatar,
    title,
    grade,
    xp,
    streak,
    completedCount,
    badge,
  } = req.body || {};

  if (!id || !name) {
    return res.status(400).json({ error: "id and name are required" });
  }

  const list = getLeaderboard();
  const existingIdx = list.findIndex((u) => u.id === id);

  const defaultAvatar =
    avatar ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";

  const updatedEntry: LeaderboardRecord = {
    id,
    name,
    avatar: defaultAvatar,
    title: title || "Học Viên Hóa Học",
    grade: Number(grade) || 10,
    xp: typeof xp === "number" ? xp : (existingIdx >= 0 ? list[existingIdx].xp : 100),
    streak: typeof streak === "number" ? streak : (existingIdx >= 0 ? list[existingIdx].streak : 1),
    completedCount: typeof completedCount === "number" ? completedCount : (existingIdx >= 0 ? list[existingIdx].completedCount || 0 : 1),
    badge: badge || (existingIdx >= 0 ? list[existingIdx].badge : "Học Viên Tích Cực"),
    lastActive: new Date().toISOString(),
  };

  if (existingIdx >= 0) {
    // Keep highest XP if previous was higher, otherwise update
    updatedEntry.xp = Math.max(list[existingIdx].xp, updatedEntry.xp);
    updatedEntry.streak = Math.max(list[existingIdx].streak, updatedEntry.streak);
    list[existingIdx] = { ...list[existingIdx], ...updatedEntry };
  } else {
    list.push(updatedEntry);
  }

  const savedList = saveLeaderboard(list);
  const myRank = savedList.findIndex((u) => u.id === id) + 1;

  res.json({
    success: true,
    leaderboard: savedList,
    myRank,
    updatedEntry,
  });
});

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Gemini Chemistry AI Assistant API
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history, context } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Friendly fallback if API key is not yet set
      return res.json({
        reply: `Chào bạn! Mình là Trợ lý Hóa học AI GDPT 2018. Hiện tại khóa API Gemini chưa được cấu hình, nhưng đây là gợi ý nhanh cho bạn: "${message}": Hãy nhớ xem lại phương pháp thăng bằng electron, bảng tính tan và quy tắc bảo toàn khối lượng/nguyên tố trong SGK nhé! (Bạn có thể thêm GEMINI_API_KEY trong Settings > Secrets để bật AI giải đáp chi tiết full-context).`,
      });
    }

    const systemPrompt = `Bạn là Trợ lý Hóa học AI (ChemTutor AI) cho học sinh THPT Việt Nam (Lớp 10, 11, 12 theo Chương trình Giáo dục phổ thông 2018).
Nhiệm vụ của bạn:
1. Hỗ trợ giải thích các khái niệm hóa học trực quan, sinh động (cấu hình electron, liên kết ion/cộng hóa trị, biến thiên enthalpy, cân bằng hóa học, pin điện, phản ứng hữu cơ như este, amin, cacbohidrat...).
2. Hướng dẫn từng bước cân bằng phản ứng (đặc biệt là oxi hóa - khử theo phương pháp thăng bằng electron).
3. Đưa ra ví dụ thực tiễn đời sống (ví dụ: tại sao đinh sắt bị gỉ sét, tại sao vôi sống tỏa nhiệt, cơ chế xà phòng làm sạch...).
4. Trả lời bằng tiếng Việt chuẩn xác, ngắn gọn, thân thiện, dùng định dạng Markdown với công thức hóa học rõ ràng (VD: H₂O, Fe + CuSO₄ → FeSO₄ + Cu, ΔrH°₂₉₈).
${context ? `Ngữ cảnh học sinh đang xem: ${context}` : ""}`;

    const promptText = history && history.length > 0
      ? `${history.map((h: { role: string; content: string }) => `${h.role === "user" ? "Học sinh" : "ChemTutor"}: ${h.content}`).join("\n")}\nHọc sinh: ${message}\nChemTutor:`
      : message;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: promptText,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Xin lỗi, mình chưa thể tạo câu trả lời lúc này. Bạn hãy thử đặt lại câu hỏi nhé!";
    res.json({ reply });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({ error: errorMessage });
  }
});

// Explicit SEO Endpoints for Search Engine Crawlers
app.get("/robots.txt", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "robots.txt");
  if (fs.existsSync(filePath)) {
    res.type("text/plain");
    res.sendFile(filePath);
  } else {
    res.type("text/plain").send("User-agent: *\nAllow: /\n");
  }
});

app.get("/sitemap.xml", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "sitemap.xml");
  if (fs.existsSync(filePath)) {
    res.type("application/xml");
    res.sendFile(filePath);
  } else {
    res.status(404).send("Sitemap not found");
  }
});

app.get("/manifest.json", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "manifest.json");
  if (fs.existsSync(filePath)) {
    res.type("application/json");
    res.sendFile(filePath);
  } else {
    res.status(404).send("Manifest not found");
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ChemLab Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
