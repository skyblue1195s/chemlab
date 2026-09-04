import { useEffect } from "react";
import { GradeLevel } from "../types";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  tabHash?: string;
}

const TAB_SEO_MAP: Record<string, SEOConfig> = {
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

export function usePageSEO(activeTab: string, currentGrade: GradeLevel) {
  useEffect(() => {
    const config = TAB_SEO_MAP[activeTab] || {
      title: "Hóa Học Trực Quan 3D & Thí Nghiệm Ảo",
      description: "Nền tảng học Hóa học THPT (Lớp 10, 11, 12 GDPT 2026) với mô phỏng 3D tương tác, bảng tuần hoàn động, thí nghiệm ảo, gamification và trợ lý AI 24/7.",
      keywords: "hóa học 3d, thí nghiệm ảo, bảng tuần hoàn, gdpt 2026",
      tabHash: "",
    };

    // Update Document Title
    const fullTitle = `${config.title} (Khối ${currentGrade})`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", config.description);
    }

    // Update Meta Keywords if available
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && config.keywords) {
      metaKeywords.setAttribute("content", `${config.keywords}, hóa học khối ${currentGrade}`);
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
  }, [activeTab, currentGrade]);
}
