import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Loader2, RefreshCw } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export const AITutorChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-welcome",
      sender: "bot",
      text: "Xin chào bạn! Mình là Gia sư Hóa học AI ChemBot 🔬. Mình có thể hỗ trợ bạn giải thích hiện tượng thí nghiệm trực quan, tư duy cân bằng phương trình oxi hóa - khử, hoặc làm rõ các khái niệm theo chương trình GDPT 2026 (Lớp 10, 11, 12). Bạn muốn khám phá điều gì hôm nay?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Vì sao nước đá lại nổi trên mặt nước lỏng?",
    "Hướng dẫn cân bằng phản ứng Cu + HNO3 đặc",
    "Quy tắc bát tử Octet và cấu hình ion",
    "Tại sao mở nắp chai nước ngọt lại sủi bọt CO2?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("Không thể kết nối đến máy chủ AI");
      }

      const data = await response.json();
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: data.reply || "Xin lỗi, mình chưa xử lý được câu trả lời này.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      const errorReply: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: "bot",
        text: "Hiện tại hệ thống gia sư AI đang bận hoặc cần thiết lập API Key. Tuy nhiên bạn vẫn có thể trải nghiệm mô phỏng 3D, phòng thí nghiệm ảo và các bài tập tương tác trên thanh công cụ!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-tutor-chat-module" className="flex flex-col h-[650px] bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-4 bg-[#020617]/80 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              Gia Sư AI ChemBot 24/7
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </h3>
            <p className="text-[11px] text-slate-400">
              Trợ lý giải thích hiện tượng hóa học & gợi ý tư duy GDPT 2026
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            setMessages([
              {
                id: "msg-welcome-reset",
                sender: "bot",
                text: "Đã làm mới đoạn chat! Bạn đang muốn tìm hiểu về hiện tượng hoặc bài tập hóa học nào?",
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              },
            ])
          }
          className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 rounded-xl transition-colors text-xs flex items-center gap-1.5 border border-slate-700/50"
          title="Làm mới cuộc trò chuyện"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Làm mới</span>
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser
                    ? "bg-cyan-500 text-black shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                    : "bg-[#020617] text-cyan-400 border border-slate-800"
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                  isUser
                    ? "bg-cyan-500 text-black font-medium rounded-tr-none shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    : "bg-[#020617]/90 text-slate-200 border border-slate-800 rounded-tl-none shadow-md"
                }`}
              >
                {msg.text}
                <span
                  className={`block text-[10px] mt-1.5 font-mono ${
                    isUser ? "text-slate-800 text-right" : "text-slate-500"
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2.5 text-xs text-slate-400 pl-2">
            <Bot className="w-4 h-4 text-cyan-400 animate-spin" />
            <span>ChemBot đang suy luận & soạn thảo câu trả lời...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Bar */}
      <div className="px-4 py-2 bg-[#020617]/90 border-t border-slate-800 flex items-center gap-2 overflow-x-auto">
        <span className="text-[11px] text-slate-400 shrink-0 flex items-center gap-1 font-medium font-mono">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Câu hỏi gợi ý:
        </span>
        {quickPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(prompt)}
            className="px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] whitespace-nowrap transition-colors border border-slate-800 hover:border-slate-700"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 bg-[#020617] border-t border-slate-800 flex items-center gap-2">
        <input
          id="input-chat-message"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          placeholder="Đặt câu hỏi về hóa học, hiện tượng thí nghiệm, cấu hình e..."
          className="flex-1 bg-slate-900/80 border border-slate-700 text-slate-100 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(34,211,238,0.25)] placeholder:text-slate-500"
        />
        <button
          id="btn-send-chat"
          disabled={!inputMessage.trim() || isLoading}
          onClick={() => handleSendMessage()}
          className="p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 text-black disabled:text-slate-600 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.4)] disabled:shadow-none font-bold"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
