export type Language = "vi" | "en";

export interface Translations {
  // Brand & Header
  header: {
    tagline: string;
    level: string;
    xp: string;
    streak: string;
    visitors: string;
    visitorsTitle: string;
    loginGmail: string;
    loginTitle: string;
    syncTitle: string;
    cloudSync: string;
    student: string;
    gradePrefix: string;
    quickAi: string;
    quickAiShort: string;
    quickAiTitle: string;
    xpGained: string;
  };

  // Navigation Groups & Submenu Items
  nav: {
    groupSimulation: string;
    groupSimulationShort: string;
    groupSimulationDesc: string;
    molecules: string;
    moleculesShort: string;
    moleculesDesc: string;
    moleculesBadge: string;
    periodicTable: string;
    periodicTableShort: string;
    periodicTableDesc: string;
    periodicTableBadge: string;
    virtualLab: string;
    virtualLabShort: string;
    virtualLabDesc: string;
    virtualLabBadge: string;
    reactions: string;
    reactionsShort: string;
    reactionsDesc: string;
    reactionsBadge: string;

    groupCurriculum: string;
    groupCurriculumShort: string;
    groupCurriculumDesc: string;
    curriculum: string;
    curriculumShort: string;
    curriculumDesc: string;
    curriculumBadge: string;
    thptPractice: string;
    thptPracticeShort: string;
    thptPracticeDesc: string;
    thptPracticeBadge: string;

    groupCommunity: string;
    groupCommunityShort: string;
    groupCommunityDesc: string;
    gamification: string;
    gamificationShort: string;
    gamificationDesc: string;
    gamificationBadge: string;
    community: string;
    communityShort: string;
    communityDesc: string;
    communityBadge: string;

    aiTutor: string;
    aiTutorShort: string;
    aiTutorDesc: string;

    ribbonSection: string;
    mobileMenu: string;
    closeMenu: string;
  };

  // Footer
  footer: {
    platformTitle: string;
    platformDesc: string;
    aboutDesc: string;
    coreModulesTitle: string;
    toolsTitle: string;
    molecules3D: string;
    periodicTable: string;
    virtualLab: string;
    reactionSim: string;
    aiTutor: string;
    curriculumTitle: string;
    examsTitle: string;
    thptExams: string;
    curriculumMaps: string;
    leaderboard: string;
    forum: string;
    aboutTitle: string;
    author: string;
    contact: string;
    contactEmail: string;
    emailTooltip: string;
    copyright: string;
    standard: string;
    features: {
      molecules: string;
      periodicTable: string;
      virtualLab: string;
      reactions: string;
      curriculum10: string;
      curriculum11: string;
      curriculum12: string;
      thptPractice: string;
      gamification: string;
      community: string;
      chemBot: string;
    };
  };

  // General & Common UI
  common: {
    language: string;
    search: string;
    close: string;
    loading: string;
    cancel: string;
    confirm: string;
    save: string;
    reset: string;
    clear: string;
    all: string;
    details: string;
    viewMore: string;
    grade: string;
    online: string;
    offline: string;
    points: string;
    rank: string;
  };
}

export const translations: Record<Language, Translations> = {
  vi: {
    header: {
      tagline: "Mô phỏng phân tử 3D • Thí nghiệm tương tác • Cây kỹ năng RPG • ChemBot AI",
      level: "CẤP",
      xp: "XP",
      streak: "ngày streak",
      visitors: "lượt thực tế",
      visitorsTitle: "Số người truy cập thực tế • Nhấp để xem phân tích chi tiết",
      loginGmail: "Đăng nhập Gmail",
      loginTitle: "Đăng nhập tài khoản Gmail để lưu điểm XP và tiến độ",
      syncTitle: "Đã đăng nhập - Xem chi tiết tài khoản & Cloud Sync",
      cloudSync: "Cloud Sync",
      student: "Học viên",
      gradePrefix: "Lớp",
      quickAi: "Trợ Lý ChemBot AI",
      quickAiShort: "ChemBot",
      quickAiTitle: "Trợ lý gia sư AI ChemBot 24/7",
      xpGained: "XP KINH NGHIỆM",
    },
    nav: {
      groupSimulation: "Mô Phỏng & Thí Nghiệm",
      groupSimulationShort: "Thí Nghiệm",
      groupSimulationDesc: "Không gian thí nghiệm ảo tương tác và mô phỏng hạt vi mô",
      molecules: "Mô Phỏng Phân Tử 3D",
      moleculesShort: "Phân tử 3D",
      moleculesDesc: "Khảo sát cấu trúc hình học VSEPR, orbital và góc liên kết",
      moleculesBadge: "3D Tương tác",
      periodicTable: "Bảng Tuần Hoàn Động",
      periodicTableShort: "Bảng tuần hoàn",
      periodicTableDesc: "118 nguyên tố, cấu hình electron & quy luật biến thiên",
      periodicTableBadge: "118 Nguyên tố",
      virtualLab: "Phòng Thí Nghiệm Ảo",
      virtualLabShort: "Phòng lab ảo",
      virtualLabDesc: "Pha chế dung dịch, kiểm tra kết tủa & hiện tượng quang phổ",
      virtualLabBadge: "+XP Thực nghiệm",
      reactions: "Mô Phỏng Phản Ứng Hóa Học",
      reactionsShort: "Phản ứng hóa học",
      reactionsDesc: "Cân bằng oxi hóa - khử, nhiệt hóa & Le Chatelier",
      reactionsBadge: "Động học & Cân bằng",

      groupCurriculum: "Học Tập & Luyện Thi",
      groupCurriculumShort: "Luyện Thi GDPT",
      groupCurriculumDesc: "Chương trình GDPT 2026 và bộ đề thi tốt nghiệp THPT chuẩn quy chế",
      curriculum: "Chương Trình GDPT 2026",
      curriculumShort: "Lý thuyết & Bài tập",
      curriculumDesc: "Khung bài học Lớp {grade} (Kết nối tri thức, Cánh Diều, Chân trời sáng tạo)",
      curriculumBadge: "Lớp {grade}",
      thptPractice: "Luyện Thi Tốt Nghiệp THPT 2026",
      thptPracticeShort: "Đề thi THPT 2026",
      thptPracticeDesc: "Bộ 05 đề thực chiến cấu trúc 3 phần mới theo quy chuẩn Bộ GD&ĐT",
      thptPracticeBadge: "CẤU TRÚC 3 PHẦN",

      groupCommunity: "Đấu Trường & Cộng Đồng",
      groupCommunityShort: "Đấu Trường & Hỏi Đáp",
      groupCommunityDesc: "Hệ thống nhiệm vụ game hóa RPG, câu đố và diễn đàn chia sẻ",
      gamification: "Đấu Trường & Nhiệm Vụ RPG",
      gamificationShort: "Gamification & RPG",
      gamificationDesc: "Cây kỹ năng hóa học, 24 nhiệm vụ ngày, mini-game & bảng vàng thi đua",
      gamificationBadge: "Cây kỹ năng RPG",
      community: "Diễn Đàn Thảo Luận GDPT",
      communityShort: "Diễn đàn hỏi đáp",
      communityDesc: "Cộng đồng hỏi đáp bài tập, chia sẻ kinh nghiệm học tập & thi cử",
      communityBadge: "Hỏi đáp 24/7",

      aiTutor: "Trợ Lý ChemBot AI",
      aiTutorShort: "ChemBot AI",
      aiTutorDesc: "Gia sư Hóa học 24/7 giải đáp bài tập và phương trình hóa học",

      ribbonSection: "Phân hệ:",
      mobileMenu: "Menu Phân Hệ",
      closeMenu: "Đóng Menu",
    },
    footer: {
      platformTitle: "Nền tảng Hóa học Trực quan 3D hàng đầu",
      platformDesc: "Nền tảng Hóa học Trực quan 3D hàng đầu dành cho học sinh THPT (Lớp 10, 11, 12 GDPT 2026). Tích hợp phòng lab thí nghiệm ảo, bảng tuần hoàn 3D, mô phỏng cấu trúc phân tử và luyện thi tốt nghiệp THPT.",
      aboutDesc: "Nền tảng Hóa học số và thí nghiệm ảo 3D hàng đầu dành cho học sinh THPT (Lớp 10, 11, 12). Tích hợp mô phỏng phân tử 3D tương tác, bảng tuần hoàn 118 nguyên tố, 5 đề thi tốt nghiệp THPT 2026 chuẩn 125 câu và gia sư ChemBot AI giải đáp 24/7.",
      coreModulesTitle: "PHÂN HỆ TRỌNG TÂM",
      toolsTitle: "Công Cụ Trực Quan 3D",
      molecules3D: "Mô phỏng phân tử 3D",
      periodicTable: "Bảng tuần hoàn 118 nguyên tố",
      virtualLab: "Phòng thí nghiệm ảo phản ứng",
      reactionSim: "Động học & Enthalpy nhiệt động",
      aiTutor: "Gia sư ChemBot AI 24/7",
      curriculumTitle: "CHƯƠNG TRÌNH & ÔN THI",
      examsTitle: "Luyện Thi & Thi Đua",
      thptExams: "5 Đề thi thử THPT GDPT 2026 (125 câu)",
      curriculumMaps: "Sơ đồ tư duy Lớp 10, 11, 12",
      leaderboard: "Bảng xếp hạng & Gamification",
      forum: "Diễn đàn hỏi đáp Hóa học THPT",
      aboutTitle: "THÔNG TIN & TÁC GIẢ",
      author: "Tác giả",
      contact: "Email liên hệ:",
      contactEmail: "Gửi email liên hệ tác giả",
      emailTooltip: "Gửi email liên hệ tác giả",
      copyright: "© 2026 Hóa Học Trực Quan 3D • Bám sát 3 bộ sách giáo khoa: Kết nối tri thức • Cánh Diều • Chân trời sáng tạo",
      standard: "Quy chuẩn CT GDPT 2018 - Định hướng đề thi tốt nghiệp THPT 2026:",
      features: {
        molecules: "Mô phỏng Phân tử 3D VSEPR",
        periodicTable: "Bảng tuần hoàn 118 nguyên tố động",
        virtualLab: "Phòng thí nghiệm ảo đa dụng cụ",
        reactions: "Mô phỏng phản ứng & Nhiệt động",
        curriculum10: "Chuyên đề Hóa học Lớp 10 GDPT",
        curriculum11: "Chuyên đề Hóa học Lớp 11 GDPT",
        curriculum12: "Chuyên đề Hóa học Lớp 12 GDPT",
        thptPractice: "Luyện thi tốt nghiệp THPT 2026",
        gamification: "Đấu trường nhiệm vụ & Bảng vàng",
        community: "Diễn đàn thảo luận & Hỏi đáp",
        chemBot: "Trợ lý AI ChemBot 24/7",
      },
    },
    common: {
      language: "Ngôn ngữ",
      search: "Tìm kiếm...",
      close: "Đóng",
      loading: "Đang tải...",
      cancel: "Hủy bỏ",
      confirm: "Xác nhận",
      save: "Lưu lại",
      reset: "Đặt lại",
      clear: "Xóa",
      all: "Tất cả",
      details: "Chi tiết",
      viewMore: "Xem thêm",
      grade: "Khối Lớp",
      online: "Trực tuyến",
      offline: "Ngoại tuyến",
      points: "Điểm",
      rank: "Hạng",
    },
  },
  en: {
    header: {
      tagline: "3D Molecule Simulation • Interactive Lab • RPG Skill Tree • ChemBot AI",
      level: "LVL",
      xp: "XP",
      streak: "day streak",
      visitors: "real visits",
      visitorsTitle: "Real-time verified visits • Click to inspect detailed metrics",
      loginGmail: "Sign in with Gmail",
      loginTitle: "Sign in with Gmail to save XP and study progress",
      syncTitle: "Signed in - View profile details & Cloud Sync",
      cloudSync: "Cloud Sync",
      student: "Student",
      gradePrefix: "Grade",
      quickAi: "ChemBot AI Tutor",
      quickAiShort: "ChemBot",
      quickAiTitle: "ChemBot 24/7 AI Chemistry Tutor",
      xpGained: "EXPERIENCE XP",
    },
    nav: {
      groupSimulation: "Simulations & Labs",
      groupSimulationShort: "Labs & 3D",
      groupSimulationDesc: "Interactive virtual laboratory and microscopic molecular simulation",
      molecules: "3D Molecule Simulation",
      moleculesShort: "3D Molecules",
      moleculesDesc: "Investigate VSEPR geometry, orbitals, bond lengths, and angles",
      moleculesBadge: "Interactive 3D",
      periodicTable: "Dynamic Periodic Table",
      periodicTableShort: "Periodic Table",
      periodicTableDesc: "118 elements, electron configurations & periodic trends",
      periodicTableBadge: "118 Elements",
      virtualLab: "Virtual Chemistry Lab",
      virtualLabShort: "Virtual Lab",
      virtualLabDesc: "Formulate solutions, inspect precipitation & observe spectral lines",
      virtualLabBadge: "+Lab XP",
      reactions: "Chemical Reaction Simulator",
      reactionsShort: "Reactions",
      reactionsDesc: "Redox balance, thermochemical enthalpy & Le Chatelier equilibrium",
      reactionsBadge: "Kinetics & Equilibrium",

      groupCurriculum: "Curriculum & Exams",
      groupCurriculumShort: "Curriculum",
      groupCurriculumDesc: "High school syllabus 2026 and standard graduation exam preparation",
      curriculum: "National Curriculum 2026",
      curriculumShort: "Theory & Practice",
      curriculumDesc: "Grade {grade} Syllabus (Official textbook alignment & study notes)",
      curriculumBadge: "Grade {grade}",
      thptPractice: "Graduation Exam Practice 2026",
      thptPracticeShort: "Exam Practice",
      thptPracticeDesc: "5 standard practice exams with new 3-part format by the Ministry of Education",
      thptPracticeBadge: "3-PART FORMAT",

      groupCommunity: "Arena & Community",
      groupCommunityShort: "Arena & Q&A",
      groupCommunityDesc: "Gamified RPG quests, quiz battles, and community exchange",
      gamification: "RPG Arena & Quests",
      gamificationShort: "Gamification & RPG",
      gamificationDesc: "Chemistry skill tree, 24 daily quests, mini-games & leaderboard",
      gamificationBadge: "RPG Skill Tree",
      community: "Discussion Forum",
      communityShort: "Q&A Forum",
      communityDesc: "Peer chemistry learning community, homework help & study tactics",
      communityBadge: "24/7 Q&A",

      aiTutor: "ChemBot AI Tutor",
      aiTutorShort: "ChemBot AI",
      aiTutorDesc: "24/7 smart chemistry tutor for equation balancing and problem solving",

      ribbonSection: "Module:",
      mobileMenu: "Navigation Menu",
      closeMenu: "Close Menu",
    },
    footer: {
      platformTitle: "Leading 3D Interactive Chemistry Platform",
      platformDesc: "Leading 3D Interactive Chemistry Platform for high school students (Grades 10, 11, 12). Integrated with virtual lab experiments, dynamic periodic table, 3D molecular structures, and graduation exam preparation.",
      aboutDesc: "Premier 3D digital chemistry and virtual laboratory platform for high school students (Grades 10, 11, 12). Features interactive 3D molecular modeling, 118-element periodic table, 5 standardized high school graduation practice exams, and 24/7 ChemBot AI tutor.",
      coreModulesTitle: "CORE MODULES",
      toolsTitle: "3D Visual Tools",
      molecules3D: "3D Molecular Simulation",
      periodicTable: "118-Element Periodic Table",
      virtualLab: "Virtual Reaction Laboratory",
      reactionSim: "Kinetics & Thermodynamics",
      aiTutor: "24/7 ChemBot AI Tutor",
      curriculumTitle: "CURRICULUM & EXAMS",
      examsTitle: "Exams & Competitions",
      thptExams: "5 Standardized Exam Sets (125 Questions)",
      curriculumMaps: "Mindmaps for Grades 10, 11, 12",
      leaderboard: "Leaderboards & Gamification",
      forum: "High School Chemistry Discussion Forum",
      aboutTitle: "ABOUT & AUTHOR",
      author: "Author",
      contact: "Contact Email:",
      contactEmail: "Send email to author",
      emailTooltip: "Send email to author",
      copyright: "© 2026 3D Interactive Chemistry • Aligned with national textbooks: Knowledge Connection • Kite • Creative Horizons",
      standard: "National Standard Curriculum 2018 - High School Exam 2026:",
      features: {
        molecules: "3D VSEPR Molecular Simulator",
        periodicTable: "Interactive 118-Element Table",
        virtualLab: "Multi-tool Virtual Chemistry Lab",
        reactions: "Reactions & Thermodynamics",
        curriculum10: "Grade 10 Chemistry Modules",
        curriculum11: "Grade 11 Chemistry Modules",
        curriculum12: "Grade 12 Chemistry Modules",
        thptPractice: "High School Exam Practice 2026",
        gamification: "RPG Arena & Golden Leaderboard",
        community: "Peer Discussion & Homework Help",
        chemBot: "ChemBot 24/7 AI Chemistry Tutor",
      },
    },
    common: {
      language: "Language",
      search: "Search...",
      close: "Close",
      loading: "Loading...",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      reset: "Reset",
      clear: "Clear",
      all: "All",
      details: "Details",
      viewMore: "View more",
      grade: "Grade",
      online: "Online",
      offline: "Offline",
      points: "Points",
      rank: "Rank",
    },
  },
};
