import { useEffect } from "react";
import { GradeLevel } from "../types";
import { Language } from "../i18n/translations";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  tabHash?: string;
}

const TAB_SEO_MAP_VI: Record<string, SEOConfig> = {
  molecules: {
    title: "Mô Phỏng Phân Tử 3D Tương Tác | Hóa Học Trực Quan 3D",
    description: "Khám phá cấu trúc không gian 3D tương tác của các phân tử hóa học (H2O, CH4, Benzen, Este, Polyme...). Xoay 360 độ, kiểm tra liên kết hóa học và góc liên kết theo chương trình GDPT 2026.",
    keywords: "mô phỏng phân tử 3d, cấu trúc phân tử hóa học, liên kết hóa học, góc liên kết vũng không gian, hóa học thpt 3d",
    tabHash: "#molecules-3d",
  },
  "periodic-table": {
    title: "Bảng Tuần Hoàn Các Nguyên Tố Hóa Học 3D | Hóa Học Trực Quan 3D",
    description: "Tra cứu 118 nguyên tố hóa học với thông số chuẩn IUPAC: độ âm điện, bán kính nguyên tử, năng lượng ion hóa, cấu hình electron và ứng dụng thực tế.",
    keywords: "bảng tuần hoàn các nguyên tố, periodic table 3d, cấu hình electron, độ âm điện, nguyên tố hóa học gdpt 2026",
    tabHash: "#periodic-table",
  },
  "virtual-lab": {
    title: "Phòng Thí Nghiệm Ảo 3D An Toàn | Hóa Học Trực Quan 3D",
    description: "Tiến hành thí nghiệm hóa học ảo trực quan: chuẩn độ axit - bazơ, phản ứng kết tủa, phản ứng oxi hóa - khử, phản ứng tráng bạc hữu cơ hoàn toàn an toàn và sinh động.",
    keywords: "phòng thí nghiệm ảo 3d, thực nghiệm hóa học, chuẩn độ axit bazơ, phản ứng hóa học ảo, an toàn phòng thí nghiệm",
    tabHash: "#virtual-lab",
  },
  reactions: {
    title: "Mô Phỏng Phản Ứng & Nhiệt Động Hóa Học | Hóa Học Trực Quan 3D",
    description: "Quan sát cơ chế phản ứng hóa học cấp độ phân tử, tính toán biến thiên enthalpy chuẩn (ΔrH°298), tốc độ phản ứng và chuyển dịch cân bằng Le Chatelier.",
    keywords: "mô phỏng phản ứng hóa học, biến thiên enthalpy, cân bằng hóa học, le chatelier, tốc độ phản ứng",
    tabHash: "#reactions-simulator",
  },
  curriculum: {
    title: "Lộ Trình Kiến Thức Hóa Học GDPT 2026 | Hóa Học Trực Quan 3D",
    description: "Toàn bộ lộ trình kiến thức Hóa học Lớp 10, Lớp 11 và Lớp 12 bám sát 3 bộ sách Kết nối tri thức, Cánh Diều và Chân trời sáng tạo với sơ đồ tư duy tương tác.",
    keywords: "hóa học lớp 10, hóa học lớp 11, hóa học lớp 12, gdpt 2026, kết nối tri thức, cánh diều, chân trời sáng tạo",
    tabHash: "#curriculum-gdpt",
  },
  "thpt-practice": {
    title: "Luyện Thi THPT Quốc Gia Môn Hóa 2026 (125 Câu Chuẩn) | Hóa Học Trực Quan 3D",
    description: "Hệ thống 5 đề thi thử THPT Quốc Gia môn Hóa chuẩn cấu trúc GDPT 2026 gồm 125 câu hỏi có lời giải chi tiết, phân loại 4 dạng câu hỏi: Nhiều lựa chọn, Đúng/Sai và Trả lời ngắn.",
    keywords: "luyện thi thpt quốc gia môn hóa 2026, đề thi thử hóa học gdpt 2026, câu hỏi đúng sai môn hóa, câu hỏi trả lời ngắn hóa học, ôn thi đại học hóa",
    tabHash: "#thpt-exam-practice",
  },
  gamification: {
    title: "Đấu Trường & Bảng Xếp Hạng Thi Đua Hóa Học | Hóa Học Trực Quan 3D",
    description: "Tham gia thử thách nhiệm vụ hóa học hàng ngày, cân bằng phương trình nhanh, giải câu đố nguyên tố và tranh tài trên bảng xếp hạng thi đua học tập toàn quốc.",
    keywords: "bảng xếp hạng hóa học, thi đua học tập hóa học, game hóa học thpt, cân bằng phương trình nhanh, câu đố hóa học",
    tabHash: "#gamification-arena",
  },
  community: {
    title: "Diễn Đàn Thảo Luận & Hỏi Đáp Hóa Học THPT | Hóa Học Trực Quan 3D",
    description: "Cộng đồng học sinh và giáo viên Hóa học THPT: hỏi đáp bài tập khó, chia sẻ tài liệu ôn thi, kinh nghiệm thực hành và thảo luận chuyên đề GDPT 2026.",
    keywords: "diễn đàn hóa học, hỏi đáp bài tập hóa học thpt, cộng đồng học sinh yêu hóa, chia sẻ tài liệu hóa học 2026",
    tabHash: "#chemistry-forum",
  },
  "ai-tutor": {
    title: "ChemBot AI - Trợ Lý Gia Sư Hóa Học 24/7 | Hóa Học Trực Quan 3D",
    description: "Gia sư AI chuyên sâu giải đáp thắc mắc Hóa học THPT mọi lúc mọi nơi: cân bằng phản ứng oxi hóa - khử, phân tích cơ chế hữu cơ và giải thích thí nghiệm.",
    keywords: "gia sư ai hóa học, chembot ai, giải bài tập hóa bằng ai, trợ lý học tập hóa học 24/7",
    tabHash: "#ai-tutor",
  },
};

const TAB_SEO_MAP_EN: Record<string, SEOConfig> = {
  molecules: {
    title: "3D Molecular Simulation | ChemLab Interactive 3D",
    description: "Explore interactive 3D spatial structures of chemical molecules (H2O, CH4, Benzene, Esters, Polymers). 360-degree rotation, VSEPR geometry, and bond angles.",
    keywords: "3d molecular simulation, vsepr geometry, chemical bonding, bond angles, high school chemistry",
    tabHash: "#molecules-3d",
  },
  "periodic-table": {
    title: "Dynamic Periodic Table of Elements | ChemLab Interactive 3D",
    description: "Look up 118 chemical elements with IUPAC data: electronegativity, atomic radius, ionization energy, electron configuration, and real-world applications.",
    keywords: "periodic table 3d, chemical elements, electron configuration, electronegativity, iupac elements",
    tabHash: "#periodic-table",
  },
  "virtual-lab": {
    title: "Safe 3D Virtual Chemistry Lab | ChemLab Interactive 3D",
    description: "Conduct virtual chemical experiments safely: acid-base titrations, precipitation reactions, redox reactions, and organic silver mirror tests.",
    keywords: "virtual chemistry lab, lab simulations, acid base titration, chemical experiments, lab safety",
    tabHash: "#virtual-lab",
  },
  reactions: {
    title: "Reaction & Thermodynamic Simulator | ChemLab Interactive 3D",
    description: "Observe molecular reaction mechanisms, standard enthalpy changes (ΔrH°298), reaction rates, and Le Chatelier equilibrium shifts.",
    keywords: "chemical reaction simulator, enthalpy change, chemical equilibrium, le chatelier, reaction kinetics",
    tabHash: "#reactions-simulator",
  },
  curriculum: {
    title: "Chemistry Curriculum & Study Notes | ChemLab Interactive 3D",
    description: "Comprehensive Grade 10, 11, and 12 Chemistry roadmaps with interactive mindmaps, core concepts, and key exercises.",
    keywords: "grade 10 chemistry, grade 11 chemistry, grade 12 chemistry, high school syllabus, chemistry roadmaps",
    tabHash: "#curriculum-gdpt",
  },
  "thpt-practice": {
    title: "National Graduation Exam Practice | ChemLab Interactive 3D",
    description: "Comprehensive exam training with detailed explanations across multiple-choice, true/false, and short-answer questions.",
    keywords: "chemistry exam practice, graduation exam training, national chemistry test, multiple choice chemistry",
    tabHash: "#thpt-exam-practice",
  },
  gamification: {
    title: "RPG Arena & Golden Leaderboard | ChemLab Interactive 3D",
    description: "Conquer daily chemistry quests, fast equation balancing, element quizzes, and climb the national leaderboard.",
    keywords: "chemistry leaderboard, chemistry games, gamified science, equation balancing, element quiz",
    tabHash: "#gamification-arena",
  },
  community: {
    title: "Discussion & Homework Forum | ChemLab Interactive 3D",
    description: "Connect with students and teachers: solve homework problems, share exam tactics, and discuss advanced chemistry.",
    keywords: "chemistry forum, chemistry homework help, science community, chemistry questions",
    tabHash: "#chemistry-forum",
  },
  "ai-tutor": {
    title: "ChemBot AI - 24/7 Smart Chemistry Assistant | ChemLab Interactive 3D",
    description: "24/7 AI tutor for balancing redox reactions, analyzing organic mechanisms, and solving chemistry problems step-by-step.",
    keywords: "chemistry ai tutor, chembot ai, solve chemistry with ai, smart science assistant",
    tabHash: "#ai-tutor",
  },
};

export function usePageSEO(activeTab: string, currentGrade: GradeLevel, language: Language = "vi") {
  useEffect(() => {
    const map = language === "en" ? TAB_SEO_MAP_EN : TAB_SEO_MAP_VI;
    const defaultTitle = language === "en" ? "ChemLab Interactive 3D" : "Hóa Học Trực Quan 3D & Thí Nghiệm Ảo";
    const defaultDesc =
      language === "en"
        ? "Interactive 3D chemistry platform with molecular simulations, dynamic periodic table, virtual lab, gamification, and AI tutor."
        : "Nền tảng học Hóa học THPT (Lớp 10, 11, 12 GDPT 2026) với mô phỏng 3D tương tác, bảng tuần hoàn động, thí nghiệm ảo, gamification và trợ lý AI 24/7.";

    const config = map[activeTab] || {
      title: defaultTitle,
      description: defaultDesc,
      keywords: "chemistry 3d, virtual lab, periodic table",
      tabHash: "",
    };

    // Update Document Title
    const gradeLabel = language === "en" ? `(Grade ${currentGrade})` : `(Khối ${currentGrade})`;
    const fullTitle = `${config.title} ${gradeLabel}`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", config.description);
    }

    // Update Meta Keywords if available
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && config.keywords) {
      metaKeywords.setAttribute("content", `${config.keywords}`);
    }

    // Update Open Graph tags dynamically
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", config.description);
    }

    // Update Twitter Card tags dynamically
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", fullTitle);
    }

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute("content", config.description);
    }

    // Update URL hash smoothly for linkable SEO anchors without page reload
    if (config.tabHash && window.location.hash !== config.tabHash) {
      try {
        window.history.replaceState(null, fullTitle, config.tabHash);
      } catch {
        // Fallback for sandboxed iframe if history API is restricted
      }
    }
  }, [activeTab, currentGrade, language]);
}
