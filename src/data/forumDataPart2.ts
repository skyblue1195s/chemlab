import { ForumPost } from "../types";

export const FORUM_POSTS_PART2: ForumPost[] = [
  {
    id: "post-27",
    authorName: "Nguyễn Vũ Phong (Lớp 12A3)",
    authorAvatar: "🚢",
    school: "THPT Chuyên Lương Văn Tụy, Ninh Bình",
    grade: 12,
    title: "Tại sao người ta lại gắn các khối kẽm (Zn) vào vỏ tàu thủy bằng thép đi biển?",
    content:
      "Em thấy câu hỏi ứng dụng thực tế này xuất hiện trong nhiều đề thi thử tốt nghiệp THPT. Cơ chế bảo vệ kim loại bằng phương pháp điện hóa ở đây diễn ra như thế nào?",
    tags: ["Ăn mòn điện hóa", "Kim loại", "Bảo vệ catot", "Vỏ tàu biển"],
    upvotes: 53,
    createdAt: "Hôm qua",
    answers: [
      {
        id: "ans-27-1",
        authorName: "Thầy Lê Văn Thành",
        content:
          "Đây là phương pháp BẢO VỆ KIM LOẠI BẰNG ĐIỆN HÓA (dùng kim loại hy sinh / anot hy sinh):\n- Vỏ tàu làm bằng thép (hợp kim của Fe và C). Nước biển chứa nhiều muối NaCl là dung dịch chất điện ly dẫn điện rất mạnh.\n- Khi gắn tấm Zn vào vỏ tàu, tạo thành pin điện hóa Fe - Zn: \n  + Kẽm (Zn) có tính khử mạnh hơn sắt (E° Zn2+/Zn = -0.76V < E° Fe2+/Fe = -0.44V).\n  + Do đó Zn đóng vai trò là ANOT (cực âm) và bị ăn mòn oxi hóa hy sinh: Zn -> Zn2+ + 2e.\n  + Sắt (Fe) đóng vai trò là CATOT (cực dương) và được bảo vệ an toàn tuyệt đối khỏi bị gỉ sét, electron từ Zn chạy sang khử oxi hòa tan: O2 + 2H2O + 4e -> 4OH-.\nĐịnh kỳ người ta chỉ cần thay thế các khối kẽm bị mòn là xong!",
        upvotes: 69,
        createdAt: "Hôm qua",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-28",
    authorName: "Hoàng Nhật Linh (Lớp 10A5)",
    authorAvatar: "🌊",
    school: "THPT Chu Văn An, Hà Nội",
    grade: 10,
    title: "Mẹo nhớ thần chú Dãy hoạt động hóa học của kim loại và ý nghĩa thế điện cực chuẩn",
    content:
      "Có câu vè hay thần chú nào dễ nhớ toàn bộ dãy điện hóa từ K đến Au không ạ?",
    tags: ["Dãy điện hóa", "Thế điện cực", "Kim loại", "Mẹo nhớ"],
    upvotes: 64,
    createdAt: "Hôm qua",
    answers: [
      {
        id: "ans-28-1",
        authorName: "Vũ Tuấn Anh",
        content:
          "Câu thần chú kinh điển 3 thế hệ học sinh chuyên Hóa:\n'K - Na - Ba - Ca - Mg - Al - Zn - Fe - Ni - Sn - Pb - (H) - Cu - Hg - Ag - Pt - Au'\nĐọc là: \n'Khi Nào Bạn Cần May Áo Giáp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu'!\n- Chiều từ trái sang phải: Tính khử của kim loại GIẢM DẦN, tính oxi hóa của cation TĂNG DẦN.\n- Kim loại đứng TRƯỚC H đẩy được H+ ra khỏi dung dịch axit loãng HCl, H2SO4 loãng.\n- Kim loại đứng TRƯỚC (từ Mg trở đi) đẩy được kim loại đứng SAU ra khỏi dung dịch muối của chúng theo quy tắc alpha (α)!",
        upvotes: 88,
        createdAt: "Hôm qua",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-29",
    authorName: "Phạm Tấn Đạt (Lớp 11A1)",
    authorAvatar: "🧬",
    school: "THPT Chuyên Lê Quý Đôn, Đà Nẵng",
    grade: 11,
    title: "Tại sao nhiệt độ sôi của Ancol cao hơn hẳn so với Ete và Hidrocacbon có cùng phân tử khối?",
    content:
      "Ví dụ C2H5OH (M=46) sôi ở 78.3°C trong khi đimetyl ete CH3-O-CH3 (M=46) lại là chất khí sôi ở -24°C và propan C3H8 (M=44) sôi ở -42°C. Bản chất lực liên kết nào quyết định?",
    tags: ["Liên kết Hydrogen", "Nhiệt độ sôi", "Ancol", "Ete"],
    upvotes: 42,
    createdAt: "2 ngày trước",
    answers: [
      {
        id: "ans-29-1",
        authorName: "Thầy Trần Đức",
        content:
          "Chìa khóa ở đây là LIÊN KẾT HYDROGEN LIÊN PHÂN TỬ:\n1. Phân tử ancol C2H5OH chứa nhóm -O-H phân cực mạnh, nguyên tử H linh động tích điện dương có thể tạo liên kết hydrogen liên phân tử bền vững giữa các phân tử ancol với nhau (...O-H···O-H...). Cần cung cấp năng lượng nhiệt rất lớn để bẻ gãy các liên kết này, nên nhiệt độ sôi cao vọt (78.3°C)!\n2. Phân tử đimetyl ete CH3-O-CH3 và propan C3H8 KHÔNG có liên kết O-H nên không thể tạo liên kết hydrogen giữa các phân tử cùng loại, chỉ có lực tương tác van der Waals rất yếu => Chúng tồn tại ở thể khí và bay hơi ở nhiệt độ rất thấp!",
        upvotes: 58,
        createdAt: "2 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-30",
    authorName: "Lê Thị Thảo (Lớp 12A2)",
    authorAvatar: "🥖",
    school: "THPT Chuyên Hùng Vương, Phú Thọ",
    grade: 12,
    title: "Phân biệt cấu trúc phân nhánh và không phân nhánh của Tinh bột (Amylose vs Amylopectin)",
    content:
      "Gạo tẻ và gạo nếp khác nhau ở hàm lượng chất nào? Liên kết α-1,4 và α-1,6-glycoside nằm ở đâu?",
    tags: ["Tinh bột", "Carbohydrate", "Amylose", "Amylopectin"],
    upvotes: 37,
    createdAt: "2 ngày trước",
    answers: [
      {
        id: "ans-30-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Điểm phân biệt cốt lõi:\n1. AMYLOSE: Chiếm ~20-30% tinh bột, cấu trúc mạch KHÔNG PHÂN NHÁNH, xoắn lò xo hình chuỗi. Các gốc α-glucose nối với nhau chỉ bằng LIÊN KẾT α-1,4-GLYCOSIDE. Khoang rỗng hình xoắn này bắt giữ phân tử I2 tạo phức màu xanh tím đặc trưng!\n2. AMYLOPECTIN: Chiếm ~70-80% tinh bột, cấu trúc mạch PHÂN NHÁNH khổng lồ. Mạch thẳng nối bằng liên kết α-1,4-glycoside, tại các điểm nhánh nối bằng LIÊN KẾT α-1,6-GLYCOSIDE.\n*Ứng dụng: Gạo nếp chứa tới 98% là Amylopectin, khi nấu chín hạt hồ hóa trương nở giữ nước dẻo quánh, làm xôi dẻo dính hơn nhiều so với gạo tẻ giàu Amylose!",
        upvotes: 49,
        createdAt: "2 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-31",
    authorName: "Trần Anh Quân (Lớp 11A3)",
    authorAvatar: "🎈",
    school: "THPT Chuyên Bắc Giang",
    grade: 11,
    title: "Thí nghiệm điều chế khí Etilen (C2H4) trong phòng thí nghiệm: Vai trò của bông tẩm kiềm và đá bọt",
    content:
      "Khi đun cồn C2H5OH với H2SO4 đặc ở 170°C, tại sao phải cho vài mẩu đá bọt và miệng ống nghiệm dẫn khí phải có nút bông tẩm dung dịch NaOH đặc?",
    tags: ["Thực hành thí nghiệm", "Etilen", "Anken", "Điều chế C2H4"],
    upvotes: 55,
    createdAt: "2 ngày trước",
    answers: [
      {
        id: "ans-31-1",
        authorName: "ThS. Đỗ Phương Loan",
        content:
          "2 chi tiết đắt giá hay hỏi nhất trong đề thi tốt nghiệp:\n1. ĐÁ BỌT (các mẩu gốm sứ xốp): Giúp chất lỏng sôi êm dịu, phân tán đều bọt khí, tránh hiện tượng chậm sôi gây trào bùng chất lỏng nóng axit đặc ra ngoài ống nghiệm gây nổ vỡ.\n2. BÔNG TẨM DUNG DỊCH NaOH ĐẶC: Axit H2SO4 đặc ở nhiệt độ cao có tính oxi hóa mạnh, oxi hóa một phần cồn thành muội than C và sinh ra khí độc SO2 và CO2 (C + 2H2SO4 -> CO2 + 2SO2 + 2H2O). Khí SO2 làm mất màu nước Brom gây sai lệch kết quả thí nghiệm nhận biết etilen. Bông tẩm NaOH sẽ hấp thụ sạch khí SO2 và CO2: SO2 + 2NaOH -> Na2SO3 + H2O, chỉ cho khí C2H4 tinh khiết đi qua!",
        upvotes: 72,
        createdAt: "2 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-32",
    authorName: "Ngô Mỹ Duyên (Lớp 10A1)",
    authorAvatar: "💎",
    school: "THPT Chuyên Nguyễn Bỉnh Khiêm, Quảng Nam",
    grade: 10,
    title: "Tại sao than chì (graphite) dẫn được điện còn kim cương lại hoàn toàn cách điện?",
    content:
      "Cả hai đều được cấu tạo từ 100% nguyên tử Carbon (các dạng thù hình của C). Tại sao cấu trúc tinh thể lại quyết định tính dẫn điện trái ngược nhau như vậy?",
    tags: ["Thù hình Cacbon", "Than chì", "Kim cương", "Dẫn điện"],
    upvotes: 40,
    createdAt: "2 ngày trước",
    answers: [
      {
        id: "ans-32-1",
        authorName: "Bùi Tiến Đạt",
        content:
          "Sự khác biệt nằm ở trạng thái lai hóa của nguyên tử Carbon:\n1. KIM CƯƠNG: Mỗi nguyên tử C ở trạng thái LAI HÓA sp3, liên kết cộng hóa trị với 4 nguyên tử C lân cận tạo mạng không gian 3 chiều tứ diện đều cực kỳ vững chắc. Cả 4 electron hóa trị đều tham gia liên kết, KHÔNG CÓ ELECTRON TỰ DO di chuyển => Hoàn toàn cách điện và cứng nhất tự nhiên.\n2. THAN CHÌ (Graphite): Mỗi nguyên tử C ở trạng thái LAI HÓA sp2, liên kết với 3 nguyên tử C khác tạo thành các lớp phẳng lục giác liên kết lỏng lẻo. Mỗi C còn 1 electron ở orbital p không lai hóa, các electron này giải tỏa linh động tự do di chuyển dọc theo các lớp => Than chì dẫn điện rất tốt (dùng làm điện cực than chì trong pin và điện phân)!",
        upvotes: 56,
        createdAt: "2 ngày trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-33",
    authorName: "Đặng Hữu Lộc (Lớp 12A6)",
    authorAvatar: "🧪",
    school: "THPT Nguyễn Thị Minh Khai, TP.HCM",
    grade: 12,
    title: "Phản ứng trùng hợp khác phản ứng trùng ngưng ở điểm bản chất nào?",
    content:
      "Làm thế nào để nhìn vào công thức cấu tạo của monome biết ngay nó tham gia phản ứng trùng hợp hay trùng ngưng?",
    tags: ["Polime", "Trùng hợp", "Trùng ngưng", "Monome"],
    upvotes: 46,
    createdAt: "3 ngày trước",
    answers: [
      {
        id: "ans-33-1",
        authorName: "Thầy Lê Văn Thành",
        content:
          "Dấu hiệu nhận biết 100% chuẩn xác:\n1. TRÙNG HỢP: Quá trình kết hợp nhiều phân tử nhỏ (monome) giống nhau thành phân tử lớn (polime) KHÔNG GIẢI PHÓNG PHÂN TỬ NHỎ NÀO KHÁC.\n- Điều kiện monome: Phân tử phải có LIÊN KẾT ĐÔI/BA (như CH2=CH2, CH2=CH-Cl, isopren) hoặc vòng kém bền (caprolactam).\n2. TRÙNG NGƯNG: Quá trình kết hợp nhiều monome thành polime ĐỒNG THỜI GIẢI PHÓNG CÁC PHÂN TỬ NHỎ (thường là H2O, HCl).\n- Điều kiện monome: Phải chứa ÍT NHẤT 2 NHÓM CHỨC có khả năng phản ứng với nhau (ví dụ: nhóm -NH2 và -COOH trong amino axit; nhóm -COOH và -OH trong tổng hợp tơ lapsan).",
        upvotes: 62,
        createdAt: "3 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-34",
    authorName: "Vũ Phương Uyên (Lớp 11A7)",
    authorAvatar: "🧯",
    school: "THPT Chuyên Bến Tre",
    grade: 11,
    title: "Tại sao không được dùng bình chữa cháy CO2 để dập tắt đám cháy kim loại kiềm hoặc Magie (Mg)?",
    content:
      "Bình khí CO2 dập tắt được hầu hết các đám cháy xăng dầu thông thường, nhưng tại sao xịt vào đám cháy Mg lại làm cháy nổ to hơn?",
    tags: ["Chữa cháy", "CO2", "Magie", "An toàn hóa chất"],
    upvotes: 51,
    createdAt: "3 ngày trước",
    answers: [
      {
        id: "ans-34-1",
        authorName: "Thầy Nguyễn Hữu Trí",
        content:
          "Vì Magie (và các kim loại kiềm Na, K) ở nhiệt độ cao có TÍNH KHỬ CỰC MẠNH, chúng có thể cướp lấy oxi ngay trong phân tử CO2 trơ:\n2Mg + CO2 --(t°)--> 2MgO + C + nhiệt lượng cực lớn!\n- Phản ứng này tỏa nhiệt dữ dội làm nhiệt độ đám cháy tăng vọt lên hàng nghìn độ C.\n- Muội than (C) sinh ra ở nhiệt độ cao tiếp tục phản ứng với CO2 hoặc O2 không khí, làm ngọn lửa bùng phát mãnh liệt hơn và gây nguy cơ nổ bình chứa.\n*Giải pháp: Để dập cháy kim loại mạnh như Mg, Al, Na, người ta phải dùng CÁT KHÔ hoặc bột muối ăn khô NaCl, bột chữa cháy chuyên dụng Class D.",
        upvotes: 75,
        createdAt: "3 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-35",
    authorName: "Bùi Hoàng Khang (Lớp 10A3)",
    authorAvatar: "🧊",
    school: "THPT Chuyên Vị Thanh, Hậu Giang",
    grade: 10,
    title: "Hiện tượng thăng hoa của Iot (I2) và Băng khô (CO2 rắn): Khác gì với sự nóng chảy?",
    content:
      "Em thấy người ta dùng băng khô tạo khói sân khấu đám cưới và bảo quản kem. Quá trình thăng hoa diễn ra như thế nào?",
    tags: ["Thăng hoa", "Iot", "Băng khô", "Trạng thái vật chất"],
    upvotes: 35,
    createdAt: "3 ngày trước",
    answers: [
      {
        id: "ans-35-1",
        authorName: "ThS. Đỗ Phương Loan",
        content:
          "SỰ THĂNG HOA (Sublimation):\nLà hiện tượng một chất chuyển TRỰC TIẾP từ thể RẮN sang thể HƠI (KHÍ) mà KHÔNG HỀ qua trạng thái thể lỏng trung gian!\n1. Băng khô (CO2 rắn ở -78.5°C): Khi gặp nhiệt độ phòng, nó thăng hoa trực tiếp thành khí CO2 lạnh buốt. Hơi lạnh làm ngưng tụ hơi nước trong không khí xung quanh thành đám sương mù dày đặc màu trắng bồng bềnh làm hiệu ứng khói sân khấu cực đẹp mà không làm ướt sàn!\n2. Iot (I2): Khi đun nhẹ tinh thể iot tím đen trong cốc có đáy bình cầu chứa nước lạnh úp lên trên, iot thăng hoa thành làn hơi màu tím tuyệt đẹp rồi ngưng tụ (lắng đọng) lại thành tinh thể hình kim lấp lánh trên đáy bình cầu.",
        upvotes: 44,
        createdAt: "3 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-36",
    authorName: "Dương Minh Thư (Lớp 12A4)",
    authorAvatar: "🩸",
    school: "THPT Chuyên Lê Quý Đôn, Bình Định",
    grade: 12,
    title: "Cơ chế lưỡng tính của Amino Axit: Vì sao dung dịch amino axit có thể đóng vai trò hệ đệm duy trì pH máu?",
    content:
      "Công thức cấu tạo ion lưỡng cực H3N+-CH2-COO- giải thích tính chất tác dụng được với cả axit mạnh lẫn bazơ mạnh như thế nào?",
    tags: ["Amino axit", "Tính lưỡng tính", "Ion lưỡng cực", "Hệ đệm"],
    upvotes: 44,
    createdAt: "4 ngày trước",
    answers: [
      {
        id: "ans-36-1",
        authorName: "Thầy Trần Đức",
        content:
          "Amino axit tồn tại chủ yếu ở dạng ION LƯỠNG CỰC H3N+-R-COO-:\n1. Tác dụng với axit mạnh (HCl): Nhóm anion cacboxylat (-COO-) sẽ nhận proton H+ từ axit: \n   H3N+-R-COO- + H+ -> H3N+-R-COOH (dạng cation).\n2. Tác dụng với bazơ mạnh (NaOH): Nhóm cation amoni (-NH3+) sẽ nhường proton H+ cho ion OH-: \n   H3N+-R-COO- + OH- -> H2N-R-COO- + H2O (dạng anion).\n*Ý nghĩa sinh học: Nhờ khả năng vừa trung hòa được axit vừa trung hòa được kiềm, các axit amin và protein trong máu (như hemoglobin, albumin) tạo thành hệ thống đệm pH sinh học hoàn hảo, giữ pH máu người luôn ổn định ở mức 7.35 - 7.45.",
        upvotes: 59,
        createdAt: "4 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-37",
    authorName: "Hà Quốc Huy (Lớp 11A2)",
    authorAvatar: "💨",
    school: "THPT Chuyên Hoàng Lê Kha, Tây Ninh",
    grade: 11,
    title: "Phân biệt Ank-1-in (có nối ba đầu mạch) với các ankin khác bằng dung dịch AgNO3 trong NH3",
    content:
      "Tại sao but-1-in tác dụng được với AgNO3/NH3 cho kết tủa vàng nhạt, còn but-2-in thì hoàn toàn không phản ứng?",
    tags: ["Ankin", "AgNO3 trong NH3", "Kết tủa vàng", "Nguyên tử H linh động"],
    upvotes: 39,
    createdAt: "4 ngày trước",
    answers: [
      {
        id: "ans-37-1",
        authorName: "Vũ Tuấn Anh",
        content:
          "Bí mật nằm ở NGUYÊN TỬ H LINH ĐỘNG ĐẦU MẠCH:\n- Ở but-1-in (CH≡C-CH2-CH3): Nguyên tử Carbon mang nối ba ở đầu mạch có trạng thái lai hóa sp (độ âm điện lớn), hút electron mạnh làm liên kết C-H đầu mạch phân cực, nguyên tử H này có tính axit nhẹ (linh động) nên có thể bị ion kim loại Ag+ thế chỗ tạo kết tủa màu vàng nhạt bạc axetilua:\n  CH≡C-CH2-CH3 + AgNO3 + NH3 -> AgC≡C-CH2-CH3↓ (vàng) + NH4NO3.\n- Ở but-2-in (CH3-C≡C-CH3): Nối ba nằm ở giữa mạch, hai nguyên tử C mang nối ba không còn nguyên tử H nào gắn trực tiếp, nên không có phản ứng thế ion Ag+!",
        upvotes: 52,
        createdAt: "4 ngày trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-38",
    authorName: "Đinh Thu Hương (Lớp 10A1)",
    authorAvatar: "🚰",
    school: "THPT Chuyên Chu Văn An, Bình Định",
    grade: 10,
    title: "Tại sao phèn chua (KAl(SO4)2.12H2O) lại có công dụng làm trong nước sinh hoạt bị đục?",
    content:
      "Dân gian hay dùng một cục phèn chua khuấy vào lu nước phù sa sông suối để lắng bùn. Phương trình thủy phân của ion Al3+ diễn ra thế nào?",
    tags: ["Phèn chua", "Thủy phân muối", "Keo tụ", "Làm trong nước"],
    upvotes: 48,
    createdAt: "4 ngày trước",
    answers: [
      {
        id: "ans-38-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Cơ chế keo tụ huyền diệu:\n- Khi tan vào nước, phèn chua phân ly tạo ion Al3+: KAl(SO4)2 -> K+ + Al3+ + 2SO4(2-).\n- Ion Al3+ bị thủy phân mạnh mẽ theo phản ứng thuận nghịch: \n  Al3+ + 3H2O ⇌ Al(OH)3↓ (dạng keo trắng xốp) + 3H+.\n- Kết tủa keo Al(OH)3 có bề mặt tiếp xúc xốp cực lớn, đóng vai trò như một 'chiếc lưới nam châm' hấp phụ, cuốn dính tất cả các hạt đất sét, hạt phù sa sét lơ lửng mang điện tích âm trong nước lại với nhau tạo thành các bông cặn to và nặng, nhanh chóng chìm lắng xuống đáy bể, để lại lớp nước trong vắt ở trên!",
        upvotes: 66,
        createdAt: "4 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-39",
    authorName: "Trần Trọng Nghĩa (Lớp 12A1)",
    authorAvatar: "🔋",
    school: "THPT Chuyên Phan Bội Châu, Nghệ An",
    grade: 12,
    title: "Điện phân nóng chảy Al2O3 sản xuất nhôm: Cryolite (Na3AlF6) đóng vai trò gì?",
    content:
      "Em thấy câu hỏi về vai trò của cryolit xuất hiện với tần suất rất cao trong các đề thi tuyển sinh. Có 3 vai trò chính nào cần nhớ?",
    tags: ["Sản xuất nhôm", "Cryolite", "Điện phân nóng chảy", "Al2O3"],
    upvotes: 57,
    createdAt: "5 ngày trước",
    answers: [
      {
        id: "ans-39-1",
        authorName: "Thầy Lê Văn Thành",
        content:
          "3 VAI TRÒ VÀNG CỦA CRYOLITE (Na3AlF6) - Ghi nhớ nằm lòng:\n1. Hạ nhiệt độ nóng chảy của Al2O3 từ 2050°C xuống khoảng 900°C: Tiết kiệm hàng triệu kilowatt giờ điện năng và giảm chi phí xây dựng lò nung chịu nhiệt.\n2. Tăng độ dẫn điện: Hỗn hợp nóng chảy Al2O3 trong cryolite dẫn điện tốt hơn nhôm oxit nguyên chất rất nhiều lần.\n3. Tạo lớp màng bảo vệ: Hỗn hợp Na3AlF6 - Al2O3 lỏng có khối lượng riêng nhẹ hơn nhôm lỏng, nên nổi lên trên bề mặt lớp nhôm nóng chảy ở đáy bể, ngăn cản nhôm kim loại mới sinh không bị oxi không khí oxi hóa ngược trở lại!",
        upvotes: 79,
        createdAt: "5 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-40",
    authorName: "Lý Bảo Trâm (Lớp 11B2)",
    authorAvatar: "🍋",
    school: "THPT Chuyên Thoại Ngọc Hầu, An Giang",
    grade: 11,
    title: "Mẹo phân biệt nhanh Ancol bậc 1, 2, 3 bằng thuốc thử Lucas (dung dịch ZnCl2 trong HCl đặc)",
    content:
      "Em xem tài liệu bồi dưỡng học sinh giỏi có nói về phản ứng tạo dẫn xuất ankyl clorua làm đục dung dịch. Thời gian xuất hiện vẩn đục khác nhau thế nào?",
    tags: ["Thuốc thử Lucas", "Ancol bậc 1 2 3", "Cơ chế thế SN1"],
    upvotes: 38,
    createdAt: "5 ngày trước",
    answers: [
      {
        id: "ans-40-1",
        authorName: "Bùi Tiến Đạt",
        content:
          "Quy tắc thời gian của Thuốc thử Lucas (HCl đđ + ZnCl2 khan):\n- Ancol phản ứng tạo ankyl clorua (R-Cl) không tan trong nước tạo lớp váng đục hoặc tách lớp chất lỏng lơ lửng:\n1. Ancol bậc 3 (VD: tert-butanol (CH3)3C-OH): Phản ứng CỰC NHANH (ngay tức thì dưới 1 phút), dung dịch vẩn đục và tách lớp ngay ở nhiệt độ phòng do carbocation bậc 3 cực bền.\n2. Ancol bậc 2 (VD: isopropanol CH3-CH(OH)-CH3): Phản ứng chậm vừa phải, dung dịch vẩn đục sau khoảng 3 - 5 phút.\n3. Ancol bậc 1 (VD: ethanol C2H5OH): Hầu như KHÔNG phản ứng ở nhiệt độ phòng, dung dịch trong suốt, chỉ phản ứng khi đun nóng kéo dài!",
        upvotes: 51,
        createdAt: "5 ngày trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-41",
    authorName: "Nguyễn Công Thành (Lớp 10A2)",
    authorAvatar: "⚡",
    school: "THPT Chuyên Sơn La",
    grade: 10,
    title: "Liên kết cho - nhận (liên kết phối trí): Khác gì với liên kết cộng hóa trị thông thường?",
    content:
      "Trong phân tử NH4+, SO2 hay HNO3, nguyên tử nào đóng góp cặp electron dùng chung và biểu diễn mũi tên thế nào?",
    tags: ["Liên kết cho nhận", "Liên kết phối trí", "NH4+", "Cặp e tự do"],
    upvotes: 33,
    createdAt: "5 ngày trước",
    answers: [
      {
        id: "ans-41-1",
        authorName: "ThS. Đỗ Phương Loan",
        content:
          "Điểm khác biệt duy nhất nằm ở NGUỒN GỐC CẶP ELECTRON DÙNG CHUNG:\n- Liên kết CHT thông thường: Mỗi nguyên tử góp 1 electron (cùng góp vốn).\n- Liên kết Cho - Nhận (phối trí): Toàn bộ cặp electron dùng chung CHỈ DO MỘT NGUYÊN TỬ đóng góp (nguyên tử cho), nguyên tử kia chỉ cung cấp orbital trống (nguyên tử nhận). Ký hiệu mũi tên A → B chỉ từ chất cho sang chất nhận.\nVí dụ phân tử ion amoni NH4+: \nNguyên tử N trong phân tử NH3 còn 1 cặp e tự do chưa liên kết. Khi gặp ion H+ (có orbital 1s trống không có electron nào), N đem nguyên vẹn cặp e này chia sẻ với H+, tạo liên kết phối trí N → H+. Sau khi hình thành, cả 4 liên kết N-H trong NH4+ đều tương đương nhau hoàn toàn về độ dài và năng lượng liên kết!",
        upvotes: 46,
        createdAt: "5 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-42",
    authorName: "Lê Nhật Minh (Lớp 12A1)",
    authorAvatar: "🦷",
    school: "THPT Thăng Long, Hà Nội",
    grade: 12,
    title: "Vàng 24K, 18K và Vàng trắng khác nhau thế nào? Tại sao không dùng vàng 24K nguyên chất làm trang sức đính kim cương?",
    content:
      "Em thấy người ta hay nói vàng 9999 là 24K, còn nhẫn đính đá thường là 18K hoặc 14K. Độ cứng và thành phần hợp kim quy định ra sao?",
    tags: ["Vàng 24K", "Hợp kim", "Kim loại quý", "Độ tinh khiết"],
    upvotes: 47,
    createdAt: "6 ngày trước",
    answers: [
      {
        id: "ans-42-1",
        authorName: "Thầy Nguyễn Hữu Trí",
        content:
          "Cách tính tuổi vàng Karat chuẩn quốc tế:\n- Karat (K) là thang đo độ tinh khiết của vàng chia làm 24 phần: Vàng n K chứa (n/24) * 100% vàng nguyên chất.\n1. Vàng 24K (vàng 99.99%): Vàng gần như nguyên chất. Kim loại vàng Au có mạng tinh thể lập phương tâm diện với liên kết kim loại mềm dẻo đặc trưng, rất mềm, dễ bị trầy xước, méo mó khi va chạm. Nếu đính kim cương hay đá quý lên vàng 24K thì ngàm chấu rất dễ bị cong tuột làm rơi đá quý!\n2. Vàng 18K: Chứa 75% Au và 25% các kim loại khác như Cu, Ag, Ni, Zn. Sự pha trộn các nguyên tử kim loại khác kích thước làm khóa các mặt trượt tinh thể, làm tăng độ cứng gấp nhiều lần, giữ chấu đá quý chắc chắn và giá thành hợp lý hơn.\n3. Vàng trắng: Là hợp kim của Au với các kim loại màu trắng như Paladi (Pd), Niken (Ni) hoặc Platin (Pt), bên ngoài phủ lớp Rhodium sáng lấp lánh.",
        upvotes: 65,
        createdAt: "6 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-43",
    authorName: "Phạm Hồng Phúc (Lớp 11A4)",
    authorAvatar: "🌽",
    school: "THPT Chuyên Lê Hồng Phong, Nam Định",
    grade: 11,
    title: "Đồng phân cis - trans (đồng phân hình học): Điều kiện cần và đủ để một chất có đồng phân hình học",
    content:
      "Em hay bị đếm thiếu hoặc đếm thừa số lượng đồng phân hình học của anken. Xin bí kíp nhận diện trong 5 giây!",
    tags: ["Đồng phân hình học", "Cis Trans", "Anken", "Cấu hình"],
    upvotes: 41,
    createdAt: "6 ngày trước",
    answers: [
      {
        id: "ans-43-1",
        authorName: "Vũ Tuấn Anh",
        content:
          "Công thức chuẩn xác 2 điều kiện bắt buộc:\nCho cấu trúc tổng quát ở nối đôi: R1R2C = CR3R4\n1. Điều kiện 1: Phân tử PHẢI CÓ LIÊN KẾT ĐÔI (hoặc vòng no) để cản trở sự quay tự do quanh trục liên kết.\n2. Điều kiện 2: HAI NHÓM THẾ TRÊN CÙNG MỘT NGUYÊN TỬ C NỐI ĐÔI PHẢI KHÁC NHAU! Tức là:\n   R1 ≠ R2  VÀ  R3 ≠ R4.\n*Hệ quả phản xạ nhanh: Bất kỳ anken nào có dạng CH2=CH-R (nối đôi ở C số 1 với 2 nguyên tử H giống nhau) thì 100% KHÔNG CÓ ĐỒNG PHÂN HÌNH HỌC (như propylen, but-1-en). But-2-en CH3-CH=CH-CH3 thì có dạng cis và trans!",
        upvotes: 57,
        createdAt: "6 ngày trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-44",
    authorName: "Võ Hoàng Yến (Lớp 10A4)",
    authorAvatar: "🧂",
    school: "THPT Chuyên Hùng Vương, Bình Dương",
    grade: 10,
    title: "Tại sao muối ăn NaCl rắn không dẫn điện nhưng khi hòa tan vào nước hoặc nóng chảy lại dẫn điện tốt?",
    content:
      "Khái niệm chất điện ly và chuyển động có hướng của các ion mang điện giải thích thế nào theo chương trình Hóa học mới?",
    tags: ["Chất điện ly", "Dẫn điện", "Mạng tinh thể ion", "NaCl"],
    upvotes: 36,
    createdAt: "6 ngày trước",
    answers: [
      {
        id: "ans-44-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Bản chất dòng điện là dòng chuyển dời có hướng của các hạt mang điện tích:\n1. Ở trạng thái TINH THỂ RẮN: Các ion Na+ và Cl- bị giam giữ chặt chẽ tại các nút mạng tinh thể lập phương bởi lực hút tĩnh điện liên kết ion cực mạnh. Chúng không thể di chuyển tự do được, nên NaCl rắn là chất CÁCH ĐIỆN.\n2. KHI HÒA TAN VÀO NƯỚC: Các phân tử nước phân cực (lưỡng cực) vây quanh và kéo các ion ra khỏi mạng tinh thể (quá trình hidrat hóa). Các ion Na+ và Cl- trở thành các ION TỰ DO di chuyển linh động trong toàn bộ dung dịch. Khi đặt điện trường vào, các ion tự do di chuyển có hướng tạo thành dòng điện dẫn điện rất tốt!",
        upvotes: 49,
        createdAt: "6 ngày trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-45",
    authorName: "Trương Minh Tuấn (Lớp 12A5)",
    authorAvatar: "🧪",
    school: "THPT Chuyên Lý Tự Trọng, Cần Thơ",
    grade: 12,
    title: "Dạng bài tập Đúng/Sai mới trong Đề thi Tốt nghiệp THPT 2026: Chiến lược tránh bẫy lý thuyết",
    content:
      "Dạng bài Đúng/Sai (Part II) 4 ý tính điểm lũy tiến (0.1 - 0.25 - 0.5 - 1.0 điểm) rất dễ mất trọn 1 điểm nếu sai dù chỉ 1 ý nhỏ. Thầy cô có lời khuyên nào để đạt điểm tối đa?",
    tags: ["Kỳ thi THPT 2026", "Đề thi mới", "Chiến lược làm bài", "Câu hỏi Đúng Sai"],
    upvotes: 72,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-45-1",
        authorName: "Thầy Lê Văn Thành",
        content:
          "Chiến lược săn trọn điểm Part II Đề thi 2026:\n1. ĐỌC KỸ TỪ KHÓA TUYỆT ĐỐI: Cảnh giác cao độ với các từ 'luôn luôn', 'tất cả', 'chỉ', 'hoàn toàn', 'không bao giờ'. Đa số các mệnh đề chứa từ tuyệt đối này hay là bẫy sai (ví dụ: 'Tất cả este đều thủy phân tạo ancol' -> SAI vì có este của phenol, vinyl axetat).\n2. VIẾT PHƯƠNG TRÌNH VÀ TÍNH TỪNG Ý ĐỘC LẬP: Đừng đoán mò dựa trên cảm tính. Hãy đặt bút tính nhẩm nhanh số mol và bảo toàn khối lượng/e.\n3. CƠ CHẾ ĐIỂM: Làm đúng 1 ý = 0.1đ; 2 ý = 0.25đ; 3 ý = 0.5đ; cả 4 ý = 1.0đ. Do đó việc kiểm tra lại câu chắc chắn đúng quý giá gấp đôi so với vội vàng đoán câu phân vân!",
        upvotes: 95,
        createdAt: "1 tuần trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-46",
    authorName: "Nguyễn Nhật Ánh (Lớp 11A1)",
    authorAvatar: "🌳",
    school: "THPT Chuyên Hà Tĩnh",
    grade: 11,
    title: "Hiệu ứng nhà kính và vai trò của CO2, CH4, N2O: Khí nào có khả năng giữ nhiệt mạnh hơn?",
    content:
      "Em nghe nói khí mêtan CH4 từ ruộng lúa và chăn nuôi gia súc giữ nhiệt gấp gần 30 lần khí CO2. Tại sao người ta vẫn coi CO2 là thủ phạm chính?",
    tags: ["Khí nhà kính", "Biến đổi khí hậu", "CO2", "Mêtan CH4"],
    upvotes: 43,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-46-1",
        authorName: "ThS. Đỗ Phương Loan",
        content:
          "So sánh thú vị về hóa học khí quyển:\n- Tiềm năng gây ấm lên toàn cầu (GWP - Global Warming Potential) của 1 phân tử CH4 cao gấp 28 - 30 lần so với 1 phân tử CO2, còn N2O cao gấp 270 lần, vì các liên kết C-H trong CH4 hấp thụ bức xạ hồng ngoại bước sóng nhiệt mạnh hơn nhiều so với C=O.\n- TUY NHIÊN, CO2 vẫn là thủ phạm chính gây ra hơn 70% biến đổi khí hậu toàn cầu vì 2 lý do:\n1. Khối lượng phát thải khổng lồ: Hoạt động đốt nhiên liệu hóa thạch (than, dầu, khí tự nhiên) thải ra hàng chục tỷ tấn CO2 mỗi năm, gấp hàng trăm lần lượng phát thải metan.\n2. Thời gian lưu giữ trong khí quyển: Phân tử CH4 bị phân hủy quang hóa sau khoảng 10 - 12 năm, trong khi CO2 có thể tồn tại tích tụ trong khí quyển và đại dương suốt hàng trăm đến hàng nghìn năm!",
        upvotes: 61,
        createdAt: "1 tuần trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-47",
    authorName: "Lê Đức Trọng (Lớp 10A3)",
    authorAvatar: "🔥",
    school: "THPT Chuyên Tuyên Quang",
    grade: 10,
    title: "Tại sao khi đốt cháy hợp chất hữu cơ, lượng nhiệt tỏa ra lại phụ thuộc vào số liên kết C-H và C-C?",
    content:
      "Mối liên hệ giữa năng lượng liên kết Eb của các chất phản ứng và sản phẩm với biến thiên enthalpy phản ứng cháy?",
    tags: ["Nhiệt phản ứng", "Năng lượng liên kết", "Enthalpy cháy"],
    upvotes: 32,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-47-1",
        authorName: "Bùi Tiến Đạt",
        content:
          "Công thức tính theo Năng lượng liên kết Eb:\nΔrH°298 = Σ Eb(chất đầu) - Σ Eb(sản phẩm)!\n- Để đốt cháy, cần cung cấp năng lượng bẻ gãy các liên kết C-C, C-H và O=O (thu năng lượng).\n- Sau đó các nguyên tử tái sắp xếp tạo thành liên kết mới C=O (trong CO2) và O-H (trong H2O). Quá trình hình thành các liên kết mới này GIẢI PHÓNG năng lượng cực kỳ lớn (vì liên kết C=O trong CO2 có Eb rất cao, ~799 kJ/mol).\n- Do năng lượng giải phóng khi tạo sản phẩm lớn hơn rất nhiều năng lượng cần để phá vỡ chất đầu => Phản ứng cháy luôn TỎA NHIỆT MẠNH (ΔrH°298 < 0). Hydrocarbon có càng nhiều liên kết C-H thì nhiệt lượng sinh ra trên 1 gam càng lớn (chính vì vậy mà xăng, dầu mỏ là nguồn nhiên liệu dồi dào).",
        upvotes: 45,
        createdAt: "1 tuần trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-48",
    authorName: "Phan Quỳnh Nga (Lớp 12A3)",
    authorAvatar: "🧶",
    school: "THPT Chuyên Hoàng Văn Thụ, Hòa Bình",
    grade: 12,
    title: "Cách phân biệt tơ tằm thiên nhiên, len lông cừu với sợi tổng hợp (nilon, PE) bằng phương pháp đốt cháy",
    content:
      "Đây là câu hỏi thực tế cuộc sống rất hay: Đi chợ làm sao biết vải lụa tơ tằm xịn hay là vải nhân tạo giả tơ tằm?",
    tags: ["Phân biệt sợi vải", "Tơ tằm", "Protein", "Thí nghiệm đốt"],
    upvotes: 56,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-48-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Mẹo thử lửa chính xác 100% của người sành vải:\n1. TƠ TẰM THIÊN NHIÊN / LEN LÔNG CỪU: Bản chất là hợp chất PROTEIN (polipeptit).\n- Khi châm lửa đốt: Cháy chậm, có MÙI KHÉT ĐẶC TRƯNG GIỐNG MÙI TÓC CHÁY (hoặc móng tay khét) do có chứa lưu huỳnh và nitơ.\n- Tro tàn: Để lại cục tro màu đen xốp, khi dùng ngón tay bóp nhẹ thì VỠ VỤN NGAY THÀNH BỘT MỊN không hề dính ráp.\n2. SỢI TỔNG HỢP (Nilon, Polyester): Bản chất là polime hóa dầu.\n- Khi đốt: Nóng chảy co rúm lại thành giọt nhựa dẻo quánh, khói đen mùi nhựa cháy hắc khó chịu.\n- Tro tàn: Nguội lại tạo thành CỤC VÓN CỨNG NGẮC như hạt nhựa, dùng tay bóp không vỡ!",
        upvotes: 78,
        createdAt: "1 tuần trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-49",
    authorName: "Đỗ Gia Huy (Lớp 11A5)",
    authorAvatar: "🧪",
    school: "THPT Chuyên Chu Văn An, Bình Định",
    grade: 11,
    title: "Phương pháp chuẩn độ Axit - Bazơ: Làm sao chọn đúng chỉ thị Phenolphthalein hay Quỳ tím / Metyl da cam?",
    content:
      "Khi chuẩn độ dung dịch CH3COOH bằng dung dịch NaOH, tại sao điểm tương đương pH > 7 và không nên dùng metyl da cam?",
    tags: ["Chuẩn độ axit bazơ", "Chỉ thị màu", "Khoảng chuyển màu", "Điểm tương đương"],
    upvotes: 45,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-49-1",
        authorName: "Thầy Trần Đức",
        content:
          "Nguyên tắc chọn chỉ thị màu chuẩn xác:\n- Khoảng chuyển màu của chỉ thị phải bao trùm hoặc trùng khớp với pH tại ĐIỂM TƯƠNG ĐƯƠNG của phản ứng chuẩn độ!\n1. Khi chuẩn độ CH3COOH (axit yếu) bằng NaOH (bazơ mạnh): Tại điểm tương đương sinh ra muối natri axetat CH3COONa. Ion axetat bị thủy phân: \n   CH3COO- + H2O ⇌ CH3COOH + OH- => Dung dịch có tính kiềm nhẹ, pH tại điểm tương đương ≈ 8.7.\n2. CHỈ THỊ PHÙ HỢP: Phenolphthalein có khoảng đổi màu pH từ 8.2 đến 10.0 (từ không màu sang hồng nhạt), trùng khít hoàn hảo với bước nhảy pH quanh điểm tương đương 8.7!\n- Nếu dùng metyl da cam (chuyển màu ở pH 3.1 - 4.4): Chỉ thị sẽ đổi màu quá sớm khi phản ứng trung hòa chưa đi được nửa chặng đường, gây sai số cực lớn!",
        upvotes: 64,
        createdAt: "1 tuần trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-50",
    authorName: "Bùi Thị Minh Châu (Lớp 10A2)",
    authorAvatar: "💡",
    school: "THPT Chuyên Hưng Yên",
    grade: 10,
    title: "Vì sao các muối của kim loại kiềm và kiềm thổ cháy lại nhuộm ngọn lửa thành nhiều màu sắc rực rỡ?",
    content:
      "Pháo hoa đêm giao thừa phát ra ánh sáng vàng, đỏ, xanh lá cây, tím là nhờ các muối kim loại nào?",
    tags: ["Pháo hoa", "Ngọn lửa kim loại", "Quang phổ phát xạ", "Kim loại kiềm"],
    upvotes: 50,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-50-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Bản chất vật lý quang phổ phát xạ của pháo hoa:\n- Khi đốt nóng, nhiệt độ cao kích thích các electron của cation kim loại nhảy lên các mức năng lượng cao hơn (trạng thái kích thích).\n- Khi các electron này rơi trở về mức năng lượng cơ bản ban đầu, chúng giải phóng photon năng lượng dưới dạng bức xạ ánh sáng khả kiến có bước sóng đặc trưng cho từng nguyên tố:\n1. Natri (Na): Ngọn lửa màu VÀNG rực rỡ (đèn đường cao áp Na).\n2. Kali (K): Ngọn lửa màu TÍM HOA CÀ (nhìn qua kính lọc coban).\n3. Liti (Li), Stronti (Sr): Ngọn lửa màu ĐỎ TƯƠI rực rỡ.\n4. Bari (Ba): Ngọn lửa màu XANH LÁ CÂY lục nhạt.\n5. Canxi (Ca): Ngọn lửa màu ĐỎ CAM (gạch).\n6. Đồng (Cu): Ngọn lửa màu XANH DƯƠNG / XANH NGỌC!",
        upvotes: 71,
        createdAt: "1 tuần trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-51",
    authorName: "Nguyễn Tuấn Kiệt (Lớp 12A2)",
    authorAvatar: "🔋",
    school: "THPT Chuyên Lê Khiết, Quảng Ngãi",
    grade: 12,
    title: "Pin nhiên liệu Hydro (Hydrogen Fuel Cell): Vì sao được coi là giải pháp năng lượng xanh sạch nhất tương lai?",
    content:
      "Phương trình phản ứng xảy ra ở hai điện cực của pin H2 - O2 là gì và sản phẩm phụ thải ra môi trường có độc hại không?",
    tags: ["Pin nhiên liệu", "Năng lượng xanh", "Hydrogen", "Hóa 12 GDPT"],
    upvotes: 58,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-51-1",
        authorName: "Thầy Lê Văn Thành",
        content:
          "Ưu điểm xanh tuyệt đối của Pin nhiên liệu Hydro:\n- Ở ANODE (cực âm): Khí H2 được dẫn vào, bị oxi hóa trên xúc tác Platin:\n  2H2 -> 4H+ + 4e.\n- Ở CATHODE (cực dương): Khí O2 (lấy từ không khí) nhận electron và ion H+ đi qua màng trao đổi proton (PEM):\n  O2 + 4H+ + 4e -> 2H2O.\n- PHẢN ỨNG TỔNG CỘNG: 2H2 + O2 -> 2H2O + Điện năng + Nhiệt năng.\n*Kết luận: Sản phẩm thải DUY NHẤT của xe ô tô chạy pin nhiên liệu hydro là NƯỚC TINH KHIẾT (H2O), hoàn toàn không phát thải khí CO2, khói bụi mịn hay NOx, hiệu suất chuyển hóa năng lượng hóa học thành điện năng đạt trên 60% (vượt trội so với động cơ đốt trong 25-30%)!",
        upvotes: 82,
        createdAt: "1 tuần trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-52",
    authorName: "Hoàng Gia Huy (Lớp 11A3)",
    authorAvatar: "✨",
    school: "THPT Chuyên Đại học Sư Phạm, Hà Nội",
    grade: 11,
    title: "Quy tắc đường chéo trong pha chế dung dịch: Ứng dụng giải nhanh bài toán trộn nồng độ phần trăm và nồng độ mol",
    content:
      "Cần lấy bao nhiêu gam dung dịch NaCl 10% và bao nhiêu gam dung dịch NaCl 30% để thu được 200 gam dung dịch NaCl 25%? Mẹo vẽ đường chéo 5 giây thế nào?",
    tags: ["Quy tắc đường chéo", "Pha chế dung dịch", "Giải nhanh hóa học", "Nồng độ"],
    upvotes: 62,
    createdAt: "1 tuần trước",
    answers: [
      {
        id: "ans-52-1",
        authorName: "Vũ Tuấn Anh",
        content:
          "Sơ đồ đường chéo thần tốc:\n   m1 gam dd 1 (10%)       |30 - 25| = 5\n                     \\   /\n                      25%\n                     /   \\\n   m2 gam dd 2 (30%)       |10 - 25| = 15\n=> Tỉ lệ khối lượng: m1 / m2 = 5 / 15 = 1 / 3.\n- Tổng khối lượng m1 + m2 = 200 gam.\n- Khối lượng dung dịch 10% cần lấy: m1 = 200 * (1 / 4) = 50 gam.\n- Khối lượng dung dịch 30% cần lấy: m2 = 200 * (3 / 4) = 150 gam.\nChỉ mất đúng 10 giây nhẩm ra đáp số mà không cần lập hệ phương trình phức tạp!",
        upvotes: 87,
        createdAt: "1 tuần trước",
        isAccepted: true,
      },
    ],
  },
];
