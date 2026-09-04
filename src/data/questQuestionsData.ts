import { Question } from "../types";

export const QUEST_QUESTIONS_MAP: Record<string, Question[]> = {
  // Q1: Pha chế kết tủa màu nâu đỏ của Sắt(III) (fecl3+naoh)
  q1: [
    {
      id: "qq-1-1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Khi nhỏ dung dịch NaOH vào ống nghiệm chứa dung dịch FeCl₃, hiện tượng quan sát được là gì?",
      options: [
        "Xuất hiện kết tủa màu nâu đỏ không tan trong kiềm dư",
        "Xuất hiện kết tủa trắng xanh hóa nâu đỏ trong không khí",
        "Có bọt khí không màu thoát ra và sủi bọt mạnh",
        "Dung dịch chuyển từ màu vàng sang màu xanh lam"
      ],
      correctIndex: 0,
      explanation: "Phản ứng tạo thành sắt(III) hiđroxit Fe(OH)₃ là chất kết tủa có màu nâu đỏ đặc trưng: FeCl₃ + 3NaOH → Fe(OH)₃↓ (nâu đỏ) + 3NaCl.",
    },
    {
      id: "qq-1-2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Phương trình ion rút gọn của phản ứng giữa dung dịch FeCl₃ và dung dịch NaOH là:",
      options: [
        "Fe³⁺ + 3OH⁻ → Fe(OH)₃↓",
        "Fe²⁺ + 2OH⁻ → Fe(OH)₂↓",
        "FeCl₃ + 3OH⁻ → Fe(OH)₃↓ + 3Cl⁻",
        "Fe³⁺ + 3Cl⁻ + 3Na⁺ + 3OH⁻ → Fe(OH)₃↓ + 3NaCl"
      ],
      correctIndex: 0,
      explanation: "Các chất điện li mạnh phân li hoàn toàn thành ion: Fe³⁺ + 3Cl⁻ + 3Na⁺ + 3OH⁻ → Fe(OH)₃↓ + 3Na⁺ + 3Cl⁻. Rút gọn các ion không tham gia phản ứng (Na⁺, Cl⁻) thu được: Fe³⁺ + 3OH⁻ → Fe(OH)₃↓.",
    },
    {
      id: "qq-1-3",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Nung nóng kết tủa Fe(OH)₃ trong không khí đến khối lượng không đổi thu được chất rắn màu nâu đỏ là:",
      options: ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe kim loại"],
      correctIndex: 0,
      explanation: "Nhiệt phân sắt(III) hiđroxit: 2Fe(OH)₃ —(t°)→ Fe₂O₃ + 3H₂O. Sắt(III) oxit Fe₂O₃ là chất rắn màu đỏ nâu.",
    },
    {
      id: "qq-1-4",
      grade: 12,
      level: "Vận dụng",
      questionText: "Để hòa tan hoàn toàn 10,7 gam kết tủa Fe(OH)₃ cần dùng tối thiểu bao nhiêu ml dung dịch HCl 1M?",
      options: ["300 ml", "100 ml", "200 ml", "150 ml"],
      correctIndex: 0,
      explanation: "n(Fe(OH)₃) = 10,7 / 107 = 0,1 mol. Phương trình: Fe(OH)₃ + 3HCl → FeCl₃ + 3H₂O. Suy ra n(HCl) = 3 × 0,1 = 0,3 mol. Thể tích dung dịch HCl 1M: V = 0,3 / 1 = 0,3 lít = 300 ml.",
    },
    {
      id: "qq-1-5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Tại sao dung dịch muối sắt(III) như FeCl₃ để lâu trong nước thường bị vẩn đục và có môi trường axit (pH < 7)?",
      options: [
        "Do ion Fe³⁺ bị thủy phân thuận nghịch tạo ion H⁺ làm pH giảm",
        "Do muối FeCl₃ bị bay hơi mất khí clo làm axit hóa dung dịch",
        "Do ion Cl⁻ tác dụng với nước sinh ra axit clohiđric tự do",
        "Do sắt(III) tác dụng với oxi hòa tan trong nước sinh ra axit"
      ],
      correctIndex: 0,
      explanation: "Ion Fe³⁺ có mật độ điện tích lớn, làm phân cực và cắt đứt liên kết O-H của các phân tử nước phối trí (thủy phân): [Fe(H₂O)₆]³⁺ + H₂O ⇌ [Fe(H₂O)₅(OH)]²⁺ + H₃O⁺. Tạo môi trường axit và kết tủa base không tan Fe(OH)₃ gây đục.",
    },
  ],

  // Q2: Tạo kết tủa trắng tinh không tan trong axit (bacl2+h2so4)
  q2: [
    {
      id: "qq-2-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Thuốc thử đặc trưng nhất dùng để nhận biết ion sunfat (SO₄²⁻) trong dung dịch là:",
      options: [
        "Dung dịch muối Ba²⁺ (như BaCl₂, Ba(OH)₂) tạo kết tủa trắng không tan trong axit mạnh",
        "Dung dịch AgNO₃ tạo kết tủa vàng",
        "Dung dịch kiềm NaOH tạo kết tủa keo trắng",
        "Dung dịch quỳ tím đổi sang màu đỏ"
      ],
      correctIndex: 0,
      explanation: "Ion Ba²⁺ phản ứng với SO₄²⁻ tạo kết tủa bari sunfat BaSO₄ màu trắng tinh, rất bền vững và không tan trong các axit mạnh như HCl, HNO₃.",
    },
    {
      id: "qq-2-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Hiện tượng nào sau đây giúp phân biệt kết tủa BaSO₄ với kết tủa BaCO₃ và BaSO₃?",
      options: [
        "BaSO₄ không tan trong dung dịch axit HCl loãng, trong khi BaCO₃ và BaSO₃ tan và sủi bọt khí",
        "BaSO₄ tan trong nước nóng còn BaCO₃ không tan",
        "BaSO₄ có màu vàng nhạt còn BaCO₃ có màu trắng",
        "BaSO₄ bị nhiệt phân giải phóng khí SO₂ còn BaCO₃ thì không"
      ],
      correctIndex: 0,
      explanation: "BaCO₃ + 2HCl → BaCl₂ + CO₂↑ + H₂O; BaSO₃ + 2HCl → BaCl₂ + SO₂↑ + H₂O (đều tan sủi bọt). Trong khi đó BaSO₄ hoàn toàn trơ và không tan trong HCl loãng.",
    },
    {
      id: "qq-2-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Bari sunfat (BaSO₄) được ứng dụng trong y học làm chất cản quang khi chụp X-quang đường tiêu hóa vì lý do chính nào?",
      options: [
        "Độ tan cực nhỏ, hầu như không giải phóng ion Ba²⁺ độc hại vào cơ thể và cản tia X tốt",
        "Có khả năng tiêu diệt vi khuẩn đường ruột rất mạnh",
        "Tạo màu huỳnh quang giúp hiển thị rõ trên màn hình soi",
        "Cung cấp khoáng chất vi lượng bari cho dạ dày"
      ],
      correctIndex: 0,
      explanation: "BaSO₄ có tích số tan cực kì nhỏ (K_sp ≈ 10⁻¹⁰), trơ về mặt sinh hóa nên không giải phóng ion Ba²⁺ tự do gây độc, đồng thời hạt nhân Ba nặng hấp thụ tia X mạnh.",
    },
    {
      id: "qq-2-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Cho 200 ml dung dịch BaCl₂ 0,1M tác dụng hoàn toàn với 300 ml dung dịch H₂SO₄ 0,1M. Khối lượng kết tủa BaSO₄ thu được là:",
      options: ["4,66 gam", "6,99 gam", "2,33 gam", "9,32 gam"],
      correctIndex: 0,
      explanation: "n(Ba²⁺) = 0,2 × 0,1 = 0,02 mol; n(SO₄²⁻) = 0,3 × 0,1 = 0,03 mol. Do Ba²⁺ hết trước nên n(BaSO₄) = 0,02 mol. Khối lượng m = 0,02 × 233 = 4,66 gam.",
    },
    {
      id: "qq-2-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Tích số tan của BaSO₄ ở 25°C là K_sp = 1,1 × 10⁻¹⁰. Độ tan của BaSO₄ trong dung dịch Na₂SO₄ 0,01M là khoảng:",
      options: ["1,1 × 10⁻⁸ M", "1,05 × 10⁻⁵ M", "1,1 × 10⁻¹² M", "2,2 × 10⁻⁶ M"],
      correctIndex: 0,
      explanation: "Trong Na₂SO₄ 0,01M: [SO₄²⁻] ≈ 0,01M (do nồng độ từ BaSO₄ tan ra s << 0,01). Ta có K_sp = [Ba²⁺][SO₄²⁻] = s × 0,01 = 1,1 × 10⁻¹⁰ => s = 1,1 × 10⁻⁸ M. Hiện tượng ion chung làm giảm độ tan.",
    },
  ],

  // Q3: Thả kim loại kiềm Natri nổ trên mặt nước (h2o+na)
  q3: [
    {
      id: "qq-3-1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Khi thả một mẩu kim loại Natri (Na) nhỏ vào chậu nước có pha vài giọt phenolphthalein, hiện tượng quan sát được là:",
      options: [
        "Mẩu Na nóng chảy thành giọt tròn, chạy nhanh trên mặt nước, sủi bọt khí và dung dịch chuyển sang màu hồng",
        "Mẩu Na chìm ngay xuống đáy bình và dung dịch chuyển sang màu xanh",
        "Không có khí thoát ra, dung dịch vẫn trong suốt không màu",
        "Mẩu Na bốc cháy tạo khói đen và kết tủa trắng lắng xuống"
      ],
      correctIndex: 0,
      explanation: "Phản ứng: 2Na + 2H₂O → 2NaOH + H₂↑. Tỏa nhiệt mạnh làm Na nóng chảy thành viên tròn chạy trên mặt nước (khối lượng riêng bé hơn nước). NaOH sinh ra làm phenolphthalein hóa hồng.",
    },
    {
      id: "qq-3-2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Trong phản ứng giữa Natri và Nước, chất nào đóng vai trò là chất oxi hóa?",
      options: ["H₂O (nguyên tử H⁺ trong nước)", "Kim loại Na", "Ion Na⁺", "Không phải phản ứng oxi hóa - khử"],
      correctIndex: 0,
      explanation: "Số oxi hóa của Na tăng từ 0 lên +1 (chất khử). Số oxi hóa của H trong H₂O giảm từ +1 về 0 trong H₂ (chất oxi hóa).",
    },
    {
      id: "qq-3-3",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Để bảo quản các kim loại kiềm như Natri, Kali trong phòng thí nghiệm, người ta thường ngâm chúng trong:",
      options: ["Dầu hỏa hoặc parafin lỏng", "Nước cất tinh khiết", "Dung dịch cồn y tế 70°", "Dung dịch giấm ăn"],
      correctIndex: 0,
      explanation: "Natri phản ứng mãnh liệt với nước và oxi trong không khí, nhưng trơ với các hiđrocacbon no. Do đó người ta ngâm Na trong dầu hỏa để cách ly.",
    },
    {
      id: "qq-3-4",
      grade: 10,
      level: "Vận dụng",
      questionText: "Hòa tan hoàn toàn 4,6 gam kim loại Natri vào lượng nước dư. Thể tích khí H₂ thoát ra ở điều kiện chuẩn (25°C, 1 bar với V_mol = 24,79 L) là:",
      options: ["2,479 lít", "4,958 lít", "1,2395 lít", "2,24 lít"],
      correctIndex: 0,
      explanation: "n(Na) = 4,6 / 23 = 0,2 mol. Theo phương trình: n(H₂) = 0,5 × n(Na) = 0,1 mol. Thể tích khí ở đkc (chuẩn 2026): V = 0,1 × 24,79 = 2,479 lít.",
    },
    {
      id: "qq-3-5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Nếu một đám cháy kim loại kiềm Natri bùng phát trong phòng thí nghiệm, phương pháp chữa cháy nào tuyệt đối KHÔNG được sử dụng?",
      options: [
        "Dùng nước hoặc bình chữa cháy bọt/CO₂",
        "Dùng cát khô phủ kín lên bề mặt",
        "Dùng bột muối ăn NaCl khô",
        "Dùng bình bột chữa cháy chuyên dụng lớp D"
      ],
      correctIndex: 0,
      explanation: "Natri nóng đỏ phản ứng mãnh liệt với nước tạo H₂ gây nổ: 2Na + 2H₂O → 2NaOH + H₂↑. Natri cũng khử được CO₂ ở nhiệt độ cao: 4Na + CO₂ → 2Na₂O + C. Chỉ được dùng cát khô hoặc bột chữa cháy Class D.",
    },
  ],

  // Q4: Giải phóng khí màu nâu đỏ độc hại NO₂ (cu+hno3_dac)
  q4: [
    {
      id: "qq-4-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Khi cho mảnh kim loại đồng (Cu) vào dung dịch axit nitric đặc (HNO₃ đặc), hiện tượng quan sát được là:",
      options: [
        "Dung dịch chuyển sang màu xanh lam và có khí màu nâu đỏ (NO₂) mùi hắc thoát ra",
        "Khí không màu hóa nâu trong không khí thoát ra",
        "Xuất hiện kết tủa màu đen lắng xuống đáy",
        "Có bọt khí không mùi không màu H₂ thoát ra"
      ],
      correctIndex: 0,
      explanation: "Phương trình: Cu + 4HNO₃(đặc) → Cu(NO₃)₂ (xanh) + 2NO₂↑ (nâu đỏ) + 2H₂O.",
    },
    {
      id: "qq-4-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Trong phản ứng Cu + 4HNO₃(đặc) → Cu(NO₃)₂ + 2NO₂ + 2H₂O, tỉ lệ giữa số phân tử HNO₃ đóng vai trò chất oxi hóa và số phân tử HNO₃ làm môi trường là:",
      options: ["1 : 1", "1 : 2", "2 : 1", "1 : 3"],
      correctIndex: 0,
      explanation: "Trong 4 phân tử HNO₃ tham gia: có 2 phân tử bị khử thành NO₂ (đóng vai trò chất oxi hóa) và 2 phân tử tạo muối Cu(NO₃)₂ (đóng vai trò môi trường). Tỉ lệ là 2 : 2 = 1 : 1.",
    },
    {
      id: "qq-4-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khí NO₂ là một khí rất độc cho đường hô hấp. Trong thí nghiệm trên, để nút miệng ống nghiệm ngăn khí NO₂ thoát ra phòng học, ta nên tẩm dung dịch nào vào bông?",
      options: [
        "Dung dịch kiềm NaOH loãng",
        "Dung dịch axit HCl đặc",
        "Nước cất tinh khiết",
        "Dầu ăn hoặc cồn y tế"
      ],
      correctIndex: 0,
      explanation: "NO₂ là oxit axit, tác dụng nhanh với dung dịch kiềm: 2NO₂ + 2NaOH → NaNO₃ + NaNO₂ + H₂O. Do đó tẩm bông bằng NaOH giúp hấp thụ triệt để khí độc.",
    },
    {
      id: "qq-4-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Hòa tan hoàn toàn 6,4 gam Cu trong dung dịch HNO₃ đặc dư. Thể tích khí NO₂ (sản phẩm khử duy nhất ở đkc: 25°C, 1 bar, 24,79 L/mol) là:",
      options: ["4,958 lít", "2,479 lít", "2,24 lít", "4,48 lít"],
      correctIndex: 0,
      explanation: "n(Cu) = 6,4 / 64 = 0,1 mol. Bảo toàn electron: 2 × n(Cu) = 1 × n(NO₂) => n(NO₂) = 0,2 mol. V = 0,2 × 24,79 = 4,958 lít.",
    },
    {
      id: "qq-4-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Ở nhiệt độ phòng, khí NO₂ (màu nâu đỏ) luôn tồn tại ở trạng thái cân bằng với khí N₂O₄ (không màu): 2NO₂(k, nâu đỏ) ⇌ N₂O₄(k, không màu) có ΔrHo < 0. Khi ngâm bình phản ứng vào nước đá, màu sắc của hỗn hợp khí biến đổi thế nào?",
      options: [
        "Nhạt màu dần do cân bằng chuyển dịch theo chiều thuận tỏa nhiệt",
        "Đậm màu hơn do NO₂ tạo ra nhiều hơn",
        "Chuyển hẳn sang màu tím thẫm",
        "Không thay đổi vì áp suất khí không đổi"
      ],
      correctIndex: 0,
      explanation: "Phản ứng thuận có ΔH < 0 (tỏa nhiệt). Khi hạ nhiệt độ (ngâm nước đá), theo nguyên lý Le Chatelier, cân bằng chuyển dịch theo chiều tỏa nhiệt để chống lại sự giảm nhiệt độ => chuyển dịch theo chiều thuận tạo N₂O₄ không màu, làm bình khí nhạt màu dần.",
    },
  ],

  // Q5: Tạo lớp mạ kim loại đồng đỏ cam trên đinh sắt (cuso4+fe)
  q5: [
    {
      id: "qq-5-1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Khi ngâm một chiếc đinh sắt sạch vào dung dịch đồng(II) sunfat CuSO₄, hiện tượng thấy rõ trên bề mặt đinh sắt là:",
      options: [
        "Bề mặt đinh sắt phủ một lớp kim loại màu đỏ cam và màu xanh của dung dịch nhạt dần",
        "Bề mặt đinh sắt phủ lớp bột màu trắng và có khí thoát ra",
        "Đinh sắt tan hết ngay lập tức không để lại dấu vết",
        "Dung dịch chuyển sang màu tím thẫm"
      ],
      correctIndex: 0,
      explanation: "Phản ứng thủy luyện: Fe + CuSO₄ → FeSO₄ + Cu↓. Đồng kim loại màu đỏ cam sinh ra bám ngoài đinh sắt, ion Cu²⁺ màu xanh lam bị tiêu thụ nên dung dịch nhạt màu.",
    },
    {
      id: "qq-5-2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Cặp oxi hóa - khử nào sau đây có thế điện cực chuẩn E° lớn hơn, giải thích tại sao Fe đẩy được Cu²⁺ ra khỏi dung dịch?",
      options: [
        "E°(Cu²⁺/Cu) = +0,34 V lớn hơn E°(Fe²⁺/Fe) = -0,44 V",
        "E°(Fe²⁺/Fe) lớn hơn E°(Cu²⁺/Cu)",
        "Fe có bán kính nguyên tử nhỏ hơn Cu",
        "Dung dịch CuSO₄ có tính axit mạnh hơn FeSO₄"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc anpha: chất oxi hóa mạnh hơn (Cu²⁺, E° = +0,34V) phản ứng với chất khử mạnh hơn (Fe, E° = -0,44V) sinh ra chất oxi hóa yếu hơn (Fe²⁺) và chất khử yếu hơn (Cu).",
    },
    {
      id: "qq-5-3",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Sau một thời gian ngâm đinh sắt vào dung dịch CuSO₄, lấy đinh sắt ra sấy khô rồi cân lại thì khối lượng đinh sắt thay đổi thế nào?",
      options: [
        "Tăng lên so với ban đầu",
        "Giảm đi so với ban đầu",
        "Hoàn toàn không thay đổi",
        "Giảm đi một nửa"
      ],
      correctIndex: 0,
      explanation: "Cứ 1 mol Fe (56g) tan ra thì có 1 mol Cu (64g) bám vào. Độ tăng khối lượng: Δm = 64 - 56 = +8g trên mỗi mol phản ứng. Vì vậy khối lượng đinh sắt tăng lên.",
    },
    {
      id: "qq-5-4",
      grade: 12,
      level: "Vận dụng",
      questionText: "Ngâm một lá sắt có khối lượng 50 gam vào dung dịch CuSO₄ dư. Sau phản ứng lấy lá sắt ra cân lại thấy nặng 50,8 gam. Khối lượng Cu đã bám lên lá sắt là:",
      options: ["6,4 gam", "0,8 gam", "5,6 gam", "3,2 gam"],
      correctIndex: 0,
      explanation: "Độ tăng khối lượng m_tăng = 50,8 - 50 = 0,8 gam. Ta có: n_phản ứng = Δm / (64 - 56) = 0,8 / 8 = 0,1 mol. Khối lượng Cu bám vào: m(Cu) = 0,1 × 64 = 6,4 gam.",
    },
    {
      id: "qq-5-5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Khi lớp đồng đỏ phủ kín bề mặt thanh sắt và tiếp xúc trực tiếp trong dung dịch chất điện li CuSO₄, hiện tượng ăn mòn nào bắt đầu xảy ra?",
      options: [
        "Ăn mòn điện hóa học, trong đó Fe là cực âm (anot) bị ăn mòn nhanh hơn",
        "Ăn mòn hóa học thuần túy không sinh dòng điện",
        "Ăn mòn điện hóa học, trong đó Cu bị ăn mòn trước để bảo vệ Fe",
        "Phản ứng dừng lại hoàn toàn và không có bất kỳ sự ăn mòn nào tiếp diễn"
      ],
      correctIndex: 0,
      explanation: "Hai kim loại Fe và Cu tiếp xúc nhau trong dung dịch chất điện li tạo thành pin điện hóa ngắn mạch. Fe có tính khử mạnh hơn làm cực âm (anode) bị ăn mòn điện hóa nhanh chóng.",
    },
  ],

  // Q6: Thu bọt khí Hiđro cháy nổ tí tách từ Kẽm và Axit (hcl+zn)
  q6: [
    {
      id: "qq-6-1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Khí Hiđro (H₂) sinh ra từ phản ứng Zn + 2HCl → ZnCl₂ + H₂↑ có đặc điểm vật lí nào sau đây?",
      options: [
        "Khí không màu, không mùi, nhẹ nhất trong tất cả các khí và ít tan trong nước",
        "Khí màu vàng lục có mùi xốc hắc",
        "Khí màu nâu đỏ nặng hơn không khí",
        "Khí không màu nhưng có mùi trứng thối đặc trưng"
      ],
      correctIndex: 0,
      explanation: "H₂ là chất khí nhẹ nhất (M = 2 g/mol), không màu, không mùi, rất ít tan trong nước nên có thể thu bằng phương pháp đẩy nước.",
    },
    {
      id: "qq-6-2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi thử độ tinh khiết của khí H₂ bằng ngọn lửa, nếu khí H₂ bị lẫn nhiều oxi không khí thì sẽ có hiện tượng gì?",
      options: [
        "Phát ra tiếng nổ mạnh đanh tai do hỗn hợp nổ thể tích 2 : 1",
        "Ngọn lửa tắt ngúm ngay lập tức",
        "Xuất hiện khói đen kịt",
        "Ngọn lửa cháy êm dịu có tiếng 'phụt' nhẹ"
      ],
      correctIndex: 0,
      explanation: "Hỗn hợp khí H₂ và O₂ theo tỉ lệ thể tích 2 : 1 là hỗn hợp nổ mạnh nhất. Khi đốt sẽ gây tiếng nổ nguy hiểm; nếu H₂ tinh khiết chỉ cháy êm đềm với ngọn lửa xanh mờ.",
    },
    {
      id: "qq-6-3",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Nếu thêm vài giọt dung dịch CuSO₄ vào ống nghiệm đang có phản ứng Zn + HCl, tốc độ thoát khí H₂ sẽ biến đổi thế nào?",
      options: [
        "Bọt khí H₂ thoát ra nhanh và mạnh hơn rất nhiều do tạo pin điện hóa ăn mòn Zn-Cu",
        "Phản ứng ngừng ngay lập tức do Zn bị thụ động",
        "Tốc độ thoát khí chậm lại do Cu tạo màng ngăn cản",
        "Khí H₂ chuyển sang màu nâu"
      ],
      correctIndex: 0,
      explanation: "Zn + Cu²⁺ → Zn²⁺ + Cu. Kim loại Cu sinh ra bám lên Zn, tạo cặp cực điện hóa Zn-Cu nhúng trong dung dịch axit HCl, gây ăn mòn điện hóa làm H₂ thoát ra trên cực Cu với tốc độ cực nhanh.",
    },
    {
      id: "qq-6-4",
      grade: 10,
      level: "Vận dụng",
      questionText: "Cho 6,5 gam kim loại Kẽm (Zn) phản ứng hoàn toàn với dung dịch HCl dư. Thể tích khí H₂ thu được ở 25°C, 1 bar (V_mol = 24,79 L) là:",
      options: ["2,479 lít", "4,958 lít", "2,24 lít", "1,2395 lít"],
      correctIndex: 0,
      explanation: "n(Zn) = 6,5 / 65 = 0,1 mol. Zn + 2HCl → ZnCl₂ + H₂↑. n(H₂) = n(Zn) = 0,1 mol. V = 0,1 × 24,79 = 2,479 lít.",
    },
    {
      id: "qq-6-5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Biện pháp nào sau đây KHÔNG làm tăng tốc độ phản ứng điều chế khí H₂ từ kẽm và dung dịch HCl?",
      options: [
        "Dùng dung dịch HCl loãng hơn và làm lạnh bình phản ứng",
        "Dùng hạt kẽm nghiền nhỏ dạng bột mịn",
        "Đun nóng nhẹ dung dịch phản ứng",
        "Dùng dung dịch axit HCl có nồng độ cao hơn"
      ],
      correctIndex: 0,
      explanation: "Giảm nồng độ HCl và hạ nhiệt độ sẽ làm giảm tần số va chạm hiệu quả giữa các phân tử, làm tốc độ phản ứng giảm xuống.",
    },
  ],

  // Q7: Hóa hồng cánh sen diệu kỳ với Phenolphthalein (naoh+phenolphthalein)
  q7: [
    {
      id: "qq-7-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Dung dịch phenolphthalein không màu chuyển sang màu hồng đậm cánh sen trong môi trường nào?",
      options: [
        "Môi trường bazơ (kiềm, pH > 8,3)",
        "Môi trường axit mạnh (pH < 3)",
        "Môi trường trung tính (pH = 7)",
        "Môi trường nước muối ăn bão hòa"
      ],
      correctIndex: 0,
      explanation: "Khoảng chuyển màu của phenolphthalein là từ pH 8,3 (bắt đầu hồng nhạt) đến pH 10,0 (hồng đậm cánh sen). Trong môi trường kiềm như NaOH, phenolphthalein đổi sang màu hồng.",
    },
    {
      id: "qq-7-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Hiện tượng nào xảy ra khi nhỏ vài giọt phenolphthalein vào dung dịch NaOH, sau đó sục khí CO₂ dư vào ống nghiệm?",
      options: [
        "Dung dịch màu hồng ban đầu bị mất màu dần trở lại trong suốt",
        "Dung dịch chuyển từ màu hồng sang màu xanh thẫm",
        "Xuất hiện kết tủa màu đỏ gạch",
        "Màu hồng đậm lên gấp đôi"
      ],
      correctIndex: 0,
      explanation: "CO₂ dư phản ứng với kiềm tạo muối axit: CO₂ + NaOH → NaHCO₃. Dung dịch NaHCO₃ có pH ≈ 8,3, nằm dưới ngưỡng chuyển màu đậm của phenolphthalein nên màu hồng biến mất.",
    },
    {
      id: "qq-7-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Trong phương pháp chuẩn độ axit - bazơ, người ta chọn phenolphthalein làm chỉ thị thích hợp nhất cho phép chuẩn độ nào?",
      options: [
        "Chuẩn độ dung dịch axit yếu (như CH₃COOH) bằng dung dịch bazơ mạnh (như NaOH)",
        "Chuẩn độ bazơ yếu bằng axit mạnh",
        "Chuẩn độ muối kết tủa",
        "Chuẩn độ oxi hóa khử pemanganat"
      ],
      correctIndex: 0,
      explanation: "Tại điểm tương đương của phép chuẩn độ axit yếu bằng bazơ mạnh, muối tạo thành bị thủy phân cho môi trường kiềm yếu (pH > 7, thường khoảng 8,5 - 9,0), trùng khớp với khoảng đổi màu của phenolphthalein.",
    },
    {
      id: "qq-7-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Hòa tan 0,4 gam NaOH rắn vào nước thu được 100 ml dung dịch X. Giá trị pH của dung dịch X ở 25°C là:",
      options: ["13", "1", "12", "14"],
      correctIndex: 0,
      explanation: "n(NaOH) = 0,4 / 40 = 0,01 mol. Nồng độ [OH⁻] = 0,01 / 0,1 = 0,1 M = 10⁻¹ M. pOH = -log(0,1) = 1. pH = 14 - pOH = 13.",
    },
    {
      id: "qq-7-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Khi nhỏ phenolphthalein vào dung dịch NaOH siêu đặc (nồng độ trên 4M - 6M), màu hồng cánh sen xuất hiện tức thì nhưng sau đó nhanh chóng nhạt màu và mất hẳn. Nguyên nhân sâu xa là gì?",
      options: [
        "Nồng độ OH⁻ cực cao làm phân tử phenolphthalein chuyển sang dạng ion 4 nấc (InOH³⁻) mất hệ liên hợp thơm quinoid",
        "Phenolphthalein bị ion Na⁺ kết tủa hết",
        "Axit clohiđric trong không khí trung hòa kiềm quá nhanh",
        "Nước bay hơi hết làm chỉ thị không tan"
      ],
      correctIndex: 0,
      explanation: "Ở pH > 12-13, ion phenolphthalein mang màu quinoid tiếp tục nhận nhóm OH⁻ tại cacbon trung tâm tạo thành dạng carbinol không màu (InOH³⁻) do bị đứt gãy hệ thống nối đôi liên hợp.",
    },
  ],

  // Q8: Chỉ thị quỳ tím hóa đỏ báo hiệu môi trường Axit (hcl+quy_tim)
  q8: [
    {
      id: "qq-8-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Khi nhỏ một giọt dung dịch axit clohiđric HCl vào mẩu giấy quỳ tím, giấy quỳ sẽ chuyển sang màu:",
      options: ["Màu đỏ", "Màu xanh", "Màu hồng sen", "Mất màu thành trắng tinh"],
      correctIndex: 0,
      explanation: "Dung dịch axit có nồng độ ion H⁺ cao (pH < 7), làm chất màu quỳ tím chuyển sang dạng axit có màu đỏ.",
    },
    {
      id: "qq-8-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Theo thuyết Brønsted - Lowry về axit - bazơ, một chất được định nghĩa là axit khi chất đó có khả năng:",
      options: [
        "Cho proton (H⁺)",
        "Nhận proton (H⁺)",
        "Phân li ra anion OH⁻",
        "Tạo kết tủa với kim loại"
      ],
      correctIndex: 0,
      explanation: "Theo thuyết Brønsted - Lowry: Axit là chất cho proton H⁺, bazơ là chất nhận proton H⁺.",
    },
    {
      id: "qq-8-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Dung dịch muối nào sau đây trong nước cũng làm quỳ tím hóa đỏ tương tự axit HCl?",
      options: ["AlCl₃ hoặc FeCl₃", "NaCl", "Na₂CO₃", "K₂SO₄"],
      correctIndex: 0,
      explanation: "AlCl₃ và FeCl₃ là muối tạo bởi cation kim loại có mật độ điện tích lớn và gốc axit mạnh. Cation Al³⁺, Fe³⁺ bị thủy phân tạo ion H⁺ làm dung dịch có tính axit (pH < 7) làm quỳ tím hóa đỏ.",
    },
    {
      id: "qq-8-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Một mẫu dịch vị dạ dày có nồng độ ion H⁺ đo được là 0,001 M. Độ pH của mẫu dịch vị này là:",
      options: ["3,0", "1,0", "2,0", "4,0"],
      correctIndex: 0,
      explanation: "pH = -log[H⁺] = -log(10⁻³) = 3,0.",
    },
    {
      id: "qq-8-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Cho khí Cl₂ ẩm tiếp xúc với mẩu giấy quỳ tím. Hiện tượng xảy ra trên giấy quỳ tím là gì?",
      options: [
        "Quỳ tím hóa đỏ ngay lập tức, sau đó nhanh chóng bị mất màu hoàn toàn",
        "Quỳ tím hóa xanh đậm và giữ nguyên màu",
        "Quỳ tím giữ nguyên màu tím không đổi",
        "Quỳ tím hóa vàng"
      ],
      correctIndex: 0,
      explanation: "Cl₂ tác dụng với nước: Cl₂ + H₂O ⇌ HCl + HClO. Axit HCl sinh ra làm quỳ tím hóa đỏ; sau đó axit hipoclorơ HClO có tính oxi hóa cực mạnh phá hủy chất màu làm quỳ tím mất màu.",
    },
  ],

  // Q9: Chỉ thị quỳ tím hóa xanh báo hiệu môi trường Bazơ (naoh+quy_tim)
  q9: [
    {
      id: "qq-9-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Dung dịch nào sau đây làm giấy quỳ tím chuyển sang màu xanh?",
      options: [
        "Dung dịch NaOH (xút ăn da)",
        "Dung dịch HCl",
        "Dung dịch H₂SO₄",
        "Dung dịch NaCl trung tính"
      ],
      correctIndex: 0,
      explanation: "Dung dịch NaOH phân li ra anion OH⁻: NaOH → Na⁺ + OH⁻. Môi trường kiềm có pH > 7 làm quỳ tím hóa xanh.",
    },
    {
      id: "qq-9-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Dung dịch muối nào sau đây cũng làm quỳ tím hóa xanh do cation không bị thủy phân còn anion gốc axit yếu bị thủy phân tạo OH⁻?",
      options: ["Na₂CO₃", "NH₄Cl", "FeSO₄", "Ba(NO₃)₂"],
      correctIndex: 0,
      explanation: "Na₂CO₃ tạo bởi bazơ mạnh (NaOH) và axit yếu (H₂CO₃). Anion CO₃²⁻ nhận proton từ nước: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻, tạo môi trường kiềm làm quỳ tím hóa xanh.",
    },
    {
      id: "qq-9-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Trong đời sống, chất kiềm NaOH được sử dụng rộng rãi cho mục đích nào sau đây?",
      options: [
        "Sản xuất xà phòng, tẩy rửa cống rãnh tắc nghẽn và chế biến bột giấy",
        "Làm nước giải khát có ga",
        "Chữa cháy bằng cách xịt vào đám cháy xăng dầu",
        "Bổ sung canxi cho xương"
      ],
      correctIndex: 0,
      explanation: "NaOH (xút ăn da) thủy phân chất béo sản xuất xà phòng, hòa tan mỡ tóc dầu thừa trong ống cống và nấu bột gỗ trong công nghiệp giấy.",
    },
    {
      id: "qq-9-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Hòa tan 0,056 gam KOH vào nước vừa đủ 1 lít dung dịch. Giá trị pH của dung dịch thu được ở 25°C là:",
      options: ["11,0", "3,0", "12,0", "10,0"],
      correctIndex: 0,
      explanation: "n(KOH) = 0,056 / 56 = 0,001 mol. Nồng độ [OH⁻] = 0,001 / 1 = 10⁻³ M. pOH = 3. Suy ra pH = 14 - pOH = 11,0.",
    },
    {
      id: "qq-9-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Để trung hòa hoàn toàn 50 ml dung dịch hỗn hợp gồm NaOH 0,1M và Ba(OH)₂ 0,05M cần dùng V ml dung dịch HCl 0,2M. Giá trị của V là:",
      options: ["50 ml", "100 ml", "25 ml", "75 ml"],
      correctIndex: 0,
      explanation: "Tổng số mol OH⁻ = 0,05 × (0,1 + 2 × 0,05) = 0,01 mol. Phản ứng trung hòa: H⁺ + OH⁻ → H₂O. n(H⁺) = n(OH⁻) = 0,01 mol. Thể tích dung dịch HCl 0,2M: V = 0,01 / 0,2 = 0,05 lít = 50 ml.",
    },
  ],

  // Q10: Tạo kết tủa trắng vón AgCl nhận biết ion Halogenua Cl⁻ (agno3+bacl2)
  q10: [
    {
      id: "qq-10-1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Để nhận biết ion clorua (Cl⁻) trong dung dịch muối hoặc axit, hóa chất thử đặc trưng được sử dụng là:",
      options: [
        "Dung dịch bạc nitrat AgNO₃",
        "Dung dịch phenolphtalein",
        "Dung dịch đồng(II) sunfat CuSO₄",
        "Khí CO₂"
      ],
      correctIndex: 0,
      explanation: "Ag⁺ + Cl⁻ → AgCl↓ (kết tủa màu trắng vón, không tan trong axit HNO₃ loãng).",
    },
    {
      id: "qq-10-2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi để kết tủa bạc clorua AgCl ngoài ánh sáng mặt trời một thời gian, kết tủa trắng chuyển dần sang màu xám đen vì nguyên nhân nào?",
      options: [
        "AgCl bị quang phân giải phóng bạc kim loại dạng hạt nano mịn màu đen",
        "AgCl bị bám bụi bẩn trong không khí",
        "AgCl hấp thụ khí oxi tạo thành oxit Ag₂O",
        "AgCl chuyển thành bạc sunfua Ag₂S"
      ],
      correctIndex: 0,
      explanation: "Dưới tác dụng của ánh sáng: 2AgCl —(ánh sáng)→ 2Ag↓ (màu xám đen) + Cl₂↑. Đây chính là nguyên lý của phim nhiếp ảnh đen trắng cổ điển.",
    },
    {
      id: "qq-10-3",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Kết tủa AgCl tan được trong dung dịch amoniac NH₃ dư là do tạo phức chất nào sau đây?",
      options: [
        "Phức chất tan điaminbạc(I) clorua [Ag(NH₃)₂]Cl",
        "Muối amoni clorua NH₄Cl",
        "Kết tủa bạc hiđroxit AgOH",
        "Khí nitơ N₂"
      ],
      correctIndex: 0,
      explanation: "AgCl kết tủa tan dễ dàng trong NH₃ dư do hình thành ion phức bền: AgCl + 2NH₃ → [Ag(NH₃)₂]⁺ + Cl⁻.",
    },
    {
      id: "qq-10-4",
      grade: 10,
      level: "Vận dụng",
      questionText: "Trộn 100 ml dung dịch AgNO₃ 0,2M với 100 ml dung dịch BaCl₂ 0,15M. Khối lượng kết tủa AgCl thu được là:",
      options: ["2,87 gam", "4,305 gam", "1,435 gam", "5,74 gam"],
      correctIndex: 0,
      explanation: "n(Ag⁺) = 0,1 × 0,2 = 0,02 mol; n(Cl⁻) = 2 × n(BaCl₂) = 2 × (0,1 × 0,15) = 0,03 mol. Do Ag⁺ hết trước nên n(AgCl) = 0,02 mol. Khối lượng m = 0,02 × 143,5 = 2,87 gam.",
    },
    {
      id: "qq-10-5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Cho 3 ống nghiệm chứa các muối halogenua riêng biệt: NaF, NaCl, NaBr. Thuốc thử nào sau đây nhận biết được cả 3 dung dịch chỉ bằng một lượt thử?",
      options: [
        "Dung dịch AgNO₃ (NaF không kết tủa, NaCl kết tủa trắng, NaBr kết tủa vàng nhạt)",
        "Dung dịch Ba(OH)₂",
        "Dung dịch quỳ tím",
        "Dung dịch HCl"
      ],
      correctIndex: 0,
      explanation: "AgF tan tốt trong nước (không hiện tượng); AgCl kết tủa màu trắng; AgBr kết tủa màu vàng nhạt; do đó AgNO₃ phân biệt hoàn hảo 3 muối halogenua.",
    },
  ],

  // Q11: Tạo kết tủa xanh lam Cu(OH)₂ của muối Đồng (cuso4+naoh)
  q11: [
    {
      id: "qq-11-1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Màu sắc đặc trưng của kết tủa đồng(II) hiđroxit Cu(OH)₂ là:",
      options: ["Màu xanh lam", "Màu đỏ gạch", "Màu nâu đỏ", "Màu trắng keo"],
      correctIndex: 0,
      explanation: "Cu(OH)₂ là chất kết tủa dạng nhầy có màu xanh da trời (xanh lam) đặc trưng: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓.",
    },
    {
      id: "qq-11-2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Khi nhỏ dung dịch glucozơ hoặc glixerol vào ống nghiệm chứa kết tủa Cu(OH)₂ ở nhiệt độ thường, hiện tượng là:",
      options: [
        "Kết tủa tan ra tạo dung dịch phức màu xanh lam thẫm",
        "Kết tủa chuyển sang màu đỏ gạch",
        "Có khí thoát ra mãnh liệt",
        "Không có hiện tượng gì"
      ],
      correctIndex: 0,
      explanation: "Các hợp chất có từ 2 nhóm -OH kề nhau (polyol) hòa tan kết tủa Cu(OH)₂ tạo thành phức chất màu xanh lam thẫm đặc trưng.",
    },
    {
      id: "qq-11-3",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Khi đun nóng nhẹ kết tủa Cu(OH)₂ trong ống nghiệm trên ngọn lửa đèn cồn, kết tủa chuyển dần từ màu xanh sang màu gì?",
      options: [
        "Màu đen của CuO",
        "Màu đỏ gạch của Cu₂O",
        "Màu trắng của CuSO₄ khan",
        "Màu vàng của Cu(OH)₂ khô"
      ],
      correctIndex: 0,
      explanation: "Cu(OH)₂ kém bền nhiệt, bị nhiệt phân phân hủy: Cu(OH)₂ —(t°)→ CuO (màu đen) + H₂O.",
    },
    {
      id: "qq-11-4",
      grade: 12,
      level: "Vận dụng",
      questionText: "Để tác dụng vừa đủ với 100 ml dung dịch CuSO₄ 0,5M cần V ml dung dịch NaOH 1M. Giá trị của V là:",
      options: ["100 ml", "50 ml", "200 ml", "150 ml"],
      correctIndex: 0,
      explanation: "n(CuSO₄) = 0,1 × 0,5 = 0,05 mol. Phản ứng: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄. n(NaOH) = 2 × 0,05 = 0,1 mol. V = 0,1 / 1 = 0,1 lít = 100 ml.",
    },
    {
      id: "qq-11-5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Khi thêm từ từ dung dịch amoniac NH₃ đến dư vào kết tủa Cu(OH)₂, kết tủa tan dần tạo thành dung dịch có màu gì và do phức nào?",
      options: [
        "Dung dịch màu xanh thẫm (nước Schweizer) do phức [Cu(NH₃)₄](OH)₂",
        "Dung dịch không màu do Cu²⁺ bị khử về Cu⁰",
        "Dung dịch màu đỏ do tạo phức Cu-amin",
        "Kết tủa không tan trong amoniac dư"
      ],
      correctIndex: 0,
      explanation: "Cu(OH)₂ tan trong dung dịch NH₃ dư tạo thành phức chất tan tetraamin đồng(II) hiđroxit [Cu(NH₃)₄](OH)₂ có màu xanh lam thẫm, có khả năng hòa tan xenlulozơ.",
    },
  ],

  // Q12: Hòa tan đá vôi CaCO₃ sủi bọt khí CO₂ cuồn cuộn (caco3+hcl)
  q12: [
    {
      id: "qq-12-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Khi nhỏ dung dịch axit clohiđric HCl vào mẩu đá vôi canxi cacbonat (CaCO₃), hiện tượng quan sát được là:",
      options: [
        "Đá vôi tan dần và sủi bọt khí không màu không mùi cuồn cuộn",
        "Xuất hiện kết tủa màu trắng đục",
        "Dung dịch chuyển sang màu nâu đỏ",
        "Có khói đen bốc lên"
      ],
      correctIndex: 0,
      explanation: "CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O. Khí cacbonic CO₂ thoát ra làm sủi bọt mạnh.",
    },
    {
      id: "qq-12-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Để chứng minh khí thoát ra từ phản ứng trên là cacbon đioxit (CO₂), người ta dẫn khí này qua dung dịch nào?",
      options: [
        "Nước vôi trong Ca(OH)₂ dư, thấy xuất hiện kết tủa trắng làm đục nước vôi",
        "Dung dịch AgNO₃ thấy có kết tủa vàng",
        "Dung dịch quỳ tím thấy hóa xanh",
        "Dung dịch CuSO₄ thấy đổi màu xanh lam"
      ],
      correctIndex: 0,
      explanation: "CO₂ + Ca(OH)₂ → CaCO₃↓ (vẩn đục trắng) + H₂O. Đây là phản ứng đặc trưng để nhận biết khí CO₂.",
    },
    {
      id: "qq-12-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Hiện tượng xâm thực tạo nên các hang động thạch nhũ đá vôi kỳ vĩ ở Vịnh Hạ Long hay Phong Nha - Kẻ Bàng dựa trên phản ứng thuận nghịch nào?",
      options: [
        "CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂",
        "CaCO₃ —(t°)→ CaO + CO₂",
        "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O",
        "CaCl₂ + Na₂CO₃ → CaCO₃ + 2NaCl"
      ],
      correctIndex: 0,
      explanation: "Nước mưa chứa CO₂ hòa tan đá vôi tạo Ca(HCO₃)₂ tan (xâm thực). Khi nước chảy nhỏ giọt, Ca(HCO₃)₂ phân hủy giải phóng lại CaCO₃ rắn tạo nên thạch nhũ rủ xuống.",
    },
    {
      id: "qq-12-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Hòa tan hoàn toàn 10 gam CaCO₃ vào dung dịch HCl dư. Thể tích khí CO₂ thu được ở điều kiện chuẩn 25°C, 1 bar (V_mol = 24,79 L) là:",
      options: ["2,479 lít", "4,958 lít", "2,24 lít", "1,2395 lít"],
      correctIndex: 0,
      explanation: "n(CaCO₃) = 10 / 100 = 0,1 mol. Theo phương trình: n(CO₂) = n(CaCO₃) = 0,1 mol. Thể tích khí ở đkc: V = 0,1 × 24,79 = 2,479 lít.",
    },
    {
      id: "qq-12-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Thuốc kháng toan (antacid) trị đau dạ dày có chứa muối canxi cacbonat CaCO₃ nhằm trung hòa lượng axit HCl dư thừa trong dạ dày. Nếu uống quá liều thuốc antacid chứa cacbonat có thể gây triệu chứng khó chịu nào?",
      options: [
        "Đầy hơi, ợ chua và trướng bụng do sinh ra nhiều khí CO₂",
        "Hạ đường huyết nghiêm trọng",
        "Máu bị axit hóa nhanh chóng",
        "Gây đông vón mỡ trong ruột"
      ],
      correctIndex: 0,
      explanation: "Phản ứng CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ sinh ra lượng lớn khí CO₂ tích tụ trong dạ dày, gây phản xạ ợ hơi, chướng bụng và căng tức dạ dày.",
    },
  ],

  // Q13: Tạo kết tủa trắng xanh Fe(OH)₂ của muối Sắt(II) (feso4+naoh)
  q13: [
    {
      id: "qq-13-1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Khi nhỏ dung dịch NaOH vào dung dịch FeSO₄ mới pha, hiện tượng quan sát được ngay lúc đầu là:",
      options: [
        "Xuất hiện kết tủa màu trắng xanh, để ngoài không khí chuyển dần sang màu nâu đỏ",
        "Xuất hiện kết tủa màu nâu đỏ ngay lập tức",
        "Dung dịch chuyển sang màu tím thẫm và sủi bọt",
        "Có kết tủa màu đen lắng xuống đáy"
      ],
      correctIndex: 0,
      explanation: "Phản ứng trao đổi tạo sắt(II) hiđroxit Fe(OH)₂ màu trắng xanh: FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄. Sau đó Fe(OH)₂ bị oxi hòa tan oxi hóa dần thành Fe(OH)₃ màu nâu đỏ.",
    },
    {
      id: "qq-13-2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Phương trình hóa học nào giải thích hiện tượng kết tủa Fe(OH)₂ màu trắng xanh chuyển dần sang màu nâu đỏ khi để lâu ngoài không khí?",
      options: [
        "4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃",
        "2Fe(OH)₂ + O₂ → 2Fe₂O₃ + 2H₂",
        "Fe(OH)₂ + CO₂ → FeCO₃ + H₂O",
        "Fe(OH)₂ —(t°)→ FeO + H₂O"
      ],
      correctIndex: 0,
      explanation: "Sắt(II) hiđroxit có tính khử mạnh, dễ dàng bị oxi trong không khí cùng với hơi nước oxi hóa lên hợp chất sắt(III) hiđroxit Fe(OH)₃ màu nâu đỏ: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃↓.",
    },
    {
      id: "qq-13-3",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Để quan sát được kết tủa Fe(OH)₂ màu trắng xanh tinh khiết tồn tại lâu hơn trong thí nghiệm, kỹ thuật nào sau đây thường được áp dụng?",
      options: [
        "Đun sôi nước cất trước để đuổi hết khí O₂ hòa tan và nhỏ kiềm xuống dưới một lớp dầu hỏa phủ trên mặt",
        "Thực hiện thí nghiệm dưới ánh sáng mặt trời gay gắt",
        "Thêm dung dịch thuốc tím KMnO₄ vào",
        "Sục khí oxi nguyên chất liên tục vào ống nghiệm"
      ],
      correctIndex: 0,
      explanation: "Đun sôi nước cất để đuổi oxi hòa tan, đồng thời phủ một lớp dầu hỏa (chất lỏng nhẹ hơn nước, không tan) lên bề mặt để ngăn cản sự tiếp xúc với không khí.",
    },
    {
      id: "qq-13-4",
      grade: 12,
      level: "Vận dụng",
      questionText: "Cho 100 ml dung dịch FeSO₄ 0,1M phản ứng hoàn toàn với dung dịch NaOH dư trong điều kiện không có không khí. Khối lượng kết tủa Fe(OH)₂ thu được là:",
      options: ["0,90 gam", "1,07 gam", "0,72 gam", "1,80 gam"],
      correctIndex: 0,
      explanation: "n(FeSO₄) = 0,1 × 0,1 = 0,01 mol. n(Fe(OH)₂) = 0,01 mol. M(Fe(OH)₂) = 56 + 17 × 2 = 90 g/mol. Khối lượng m = 0,01 × 90 = 0,90 gam.",
    },
    {
      id: "qq-13-5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Khi cho kết tủa Fe(OH)₂ tác dụng với dung dịch axit nitric HNO₃ loãng, hiện tượng quan sát được là:",
      options: [
        "Kết tủa tan, dung dịch chuyển sang màu vàng nâu và có khí không màu hóa nâu ngoài không khí (NO) thoát ra",
        "Kết tủa tan tạo dung dịch không màu và khí H₂",
        "Kết tủa không tan trong axit HNO₃",
        "Xuất hiện kết tủa trắng mới"
      ],
      correctIndex: 0,
      explanation: "Fe(OH)₂ có tính khử (Fe⁺²), HNO₃ có tính oxi hóa mạnh: 3Fe(OH)₂ + 10HNO₃ → 3Fe(NO₃)₃ + NO↑ + 8H₂O. Khí NO không màu hóa nâu NO₂ ngoài không khí.",
    },
  ],

  // Q14: Thí nghiệm sủi bọt khí giữa giấm ăn và muối soda (ch3cooh+na2co3)
  q14: [
    {
      id: "qq-14-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Thành phần axit chính có trong giấm ăn thông thường (chiếm khoảng 2% - 5%) là:",
      options: [
        "Axit axetic (axit etanoic, CH₃COOH)",
        "Axit fomic (HCOOH)",
        "Axit clohiđric (HCl)",
        "Axit sunfuric (H₂SO₄)"
      ],
      correctIndex: 0,
      explanation: "Giấm ăn là dung dịch axit axetic CH₃COOH loãng được lên men tự nhiên từ rượu etylic.",
    },
    {
      id: "qq-14-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khi đổ giấm ăn vào thìa bột soda (natri cacbonat Na₂CO₃ hoặc natri hiđrocacbonat NaHCO₃), hiện tượng sủi bọt khí mạnh là do chất khí nào thoát ra?",
      options: [
        "Khí cacbonic (CO₂)",
        "Khí hiđro (H₂)",
        "Khí metan (CH₄)",
        "Khí clo (Cl₂)"
      ],
      correctIndex: 0,
      explanation: "Phản ứng: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂↑ + H₂O. Khí CO₂ sinh ra sủi bọt mạnh.",
    },
    {
      id: "qq-14-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Thí nghiệm giấm ăn tác dụng với muối cacbonat chứng minh quy luật nào trong hóa học?",
      options: [
        "Axit axetic CH₃COOH có tính axit mạnh hơn axit cacbonic H₂CO₃",
        "Axit axetic là một axit vô cơ mạnh",
        "Muối cacbonat có tính oxi hóa mạnh",
        "Phản ứng là phản ứng thuận nghịch không giải phóng khí"
      ],
      correctIndex: 0,
      explanation: "Axit mạnh hơn đẩy axit yếu hơn ra khỏi muối: Axit axetic (pK_a = 4,76) mạnh hơn axit cacbonic (pK_a1 = 6,35) nên đẩy được H₂CO₃ ra khỏi muối cacbonat (H₂CO₃ phân hủy thành CO₂ và H₂O).",
    },
    {
      id: "qq-14-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Cho 10,6 gam Na₂CO₃ tác dụng vừa đủ với dung dịch CH₃COOH dư. Thể tích khí CO₂ thu được ở 25°C, 1 bar (24,79 L/mol) là:",
      options: ["2,479 lít", "4,958 lít", "2,24 lít", "1,2395 lít"],
      correctIndex: 0,
      explanation: "n(Na₂CO₃) = 10,6 / 106 = 0,1 mol. Theo phương trình: n(CO₂) = n(Na₂CO₃) = 0,1 mol. V = 0,1 × 24,79 = 2,479 lít.",
    },
    {
      id: "qq-14-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Sau khi phản ứng giữa giấm ăn và Na₂CO₃ xảy ra vừa đủ, dung dịch muối natri axetat CH₃COONa thu được có độ pH:",
      options: [
        "pH > 7 (môi trường kiềm nhẹ do ion CH₃COO⁻ bị thủy phân nhận proton)",
        "pH = 7 (hoàn toàn trung tính)",
        "pH < 7 (môi trường axit do giấm)",
        "pH = 1 (axit cực mạnh)"
      ],
      correctIndex: 0,
      explanation: "CH₃COONa là muối của bazơ mạnh và axit yếu. Gốc CH₃COO⁻ bị thủy phân: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ làm dư ion OH⁻ nên pH > 7.",
    },
  ],

  // Q15: Nhận biết hồ tinh bột chuyển màu xanh tím đặc trưng (ho_tinh_bot+i2)
  q15: [
    {
      id: "qq-15-1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Thuốc thử hóa học đặc trưng nhất dùng để nhận biết hồ tinh bột trong phòng thí nghiệm là:",
      options: [
        "Dung dịch cồn iốt (I₂)",
        "Dung dịch AgNO₃ trong NH₃",
        "Dung dịch Cu(OH)₂",
        "Dung dịch quỳ tím"
      ],
      correctIndex: 0,
      explanation: "Dung dịch iot I₂ tác dụng với hồ tinh bột tạo ra hợp chất bọc có màu xanh tím đặc trưng.",
    },
    {
      id: "qq-15-2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Cấu trúc nào của phân tử amilozơ trong tinh bột tạo điều kiện cho các phân tử iốt chui vào tạo màu xanh tím?",
      options: [
        "Cấu trúc xoắn ốc hình trụ rỗng",
        "Cấu trúc mạng lưới không gian phẳng",
        "Cấu trúc mạch thẳng kéo dài song song",
        "Cấu trúc hình cầu đặc"
      ],
      correctIndex: 0,
      explanation: "Amilozơ có cấu trúc xoắn ốc hình lò xo rỗng lòng với đường kính khoảng 1,3 nm, các phân tử I₂ xếp thành chuỗi thẳng bên trong lòng ống xoắn tạo màu xanh tím.",
    },
    {
      id: "qq-15-3",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Khi đun nóng nhẹ ống nghiệm chứa dung dịch hồ tinh bột và iốt, rồi để nguội, hiện tượng quan sát được là:",
      options: [
        "Màu xanh tím mất đi khi đun nóng và xuất hiện trở lại khi để nguội",
        "Màu xanh tím giữ nguyên không đổi",
        "Dung dịch chuyển sang màu đỏ gạch vĩnh viễn",
        "Có kết tủa màu vàng lắng xuống"
      ],
      correctIndex: 0,
      explanation: "Nhiệt độ làm các chuỗi amilozơ duỗi thẳng giải phóng iốt ra ngoài làm mất màu. Khi hạ nhiệt độ, chuỗi xoắn lại và hấp phụ iốt trở lại, tái lập màu xanh tím.",
    },
    {
      id: "qq-15-4",
      grade: 12,
      level: "Vận dụng",
      questionText: "Trong phép chuẩn độ iot bằng dung dịch chuẩn natri thiosunfat Na₂S₂O₃: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻, người ta thêm hồ tinh bột vào thời điểm nào là tối ưu nhất?",
      options: [
        "Gần điểm tương đương khi dung dịch iot có màu vàng rơm nhạt",
        "Ngay từ đầu trước khi bắt đầu chuẩn độ",
        "Sau khi dung dịch đã mất màu hoàn toàn",
        "Bất kỳ lúc nào cũng như nhau"
      ],
      correctIndex: 0,
      explanation: "Nếu cho ngay từ đầu, nồng độ I₂ cao sẽ tạo phức quá chặt với tinh bột làm giải phóng chậm. Khi dung dịch còn màu vàng rơm nhạt mới thêm hồ tinh bột để nhận biết chính xác giọt cuối cùng làm mất màu xanh tím.",
    },
    {
      id: "qq-15-5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Polisaccarit nào sau đây cũng được cấu tạo từ các mắt xích glucozơ nhưng KHÔNG cho phản ứng màu với iốt?",
      options: [
        "Xenlulozơ",
        "Amilozơ",
        "Amilopectin",
        "Glicogen"
      ],
      correctIndex: 0,
      explanation: "Xenlulozơ cấu tạo từ các gốc β-glucozơ tạo chuỗi phân tử thẳng không xoắn, không có khoang rỗng hình ống nên không hấp phụ phân tử iốt tạo màu.",
    },
  ],

  // Q16: Kim loại Nhôm tan trong kiềm mạnh sủi bọt khí H₂ (al+naoh)
  q16: [
    {
      id: "qq-16-1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Khi thả mẩu kim loại Nhôm (Al) vào cốc đựng dung dịch natri hiđroxit NaOH, hiện tượng quan sát được là:",
      options: [
        "Mẩu nhôm tan dần và có bọt khí H₂ không màu thoát ra mãnh liệt",
        "Không có hiện tượng gì vì nhôm trơ với kiềm",
        "Xuất hiện kết tủa màu nâu đỏ",
        "Dung dịch chuyển sang màu tím"
      ],
      correctIndex: 0,
      explanation: "2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂↑. Kim loại nhôm tan dần và sủi bọt khí H₂ mạnh.",
    },
    {
      id: "qq-16-2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Trong phản ứng của nhôm với dung dịch kiềm, vai trò thực sự của NaOH là gì?",
      options: [
        "Phá hủy màng oxit Al₂O₃ và hòa tan kết tủa Al(OH)₃ tạo phức aluminat tan, giúp Al tiếp tục khử H₂O",
        "NaOH trực tiếp oxi hóa Al từ 0 lên +3",
        "NaOH cung cấp khí H₂",
        "NaOH làm tăng nhiệt độ nóng chảy của nhôm"
      ],
      correctIndex: 0,
      explanation: "Chính phân tử nước là chất oxi hóa Al thành Al(OH)₃ và H₂. NaOH hòa tan màng Al(OH)₃ thành ion phức tan [Al(OH)₄]⁻ giúp Al lộ ra tiếp xúc với nước liên tục.",
    },
    {
      id: "qq-16-3",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Khi sục khí cacbonic (CO₂) đến dư vào dung dịch natri aluminat Na[Al(OH)₄], hiện tượng quan sát được là:",
      options: [
        "Xuất hiện kết tủa keo trắng Al(OH)₃ và kết tủa không tan trong CO₂ dư",
        "Kết tủa keo trắng xuất hiện rồi tan hết tạo dung dịch trong suốt",
        "Có kết tủa màu đỏ gạch",
        "Không có hiện tượng gì"
      ],
      correctIndex: 0,
      explanation: "Na[Al(OH)₄] + CO₂ → Al(OH)₃↓ + NaHCO₃. Do axit cacbonic H₂CO₃ yếu hơn Al(OH)₃ ở nấc axit nhưng không đủ mạnh để hòa tan Al(OH)₃ nên kết tủa không tan trong CO₂ dư.",
    },
    {
      id: "qq-16-4",
      grade: 12,
      level: "Vận dụng",
      questionText: "Hòa tan hoàn toàn 5,4 gam nhôm vào dung dịch NaOH dư. Thể tích khí H₂ thu được ở 25°C, 1 bar (24,79 L/mol) là:",
      options: ["7,437 lít", "4,958 lít", "2,479 lít", "6,72 lít"],
      correctIndex: 0,
      explanation: "n(Al) = 5,4 / 27 = 0,2 mol. n(H₂) = (3/2) × 0,2 = 0,3 mol. Thể tích V = 0,3 × 24,79 = 7,437 lít.",
    },
    {
      id: "qq-16-5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Hợp chất nhôm hiđroxit Al(OH)₃ được gọi là hiđroxit lưỡng tính vì:",
      options: [
        "Vừa tác dụng được với dung dịch axit mạnh, vừa tác dụng được với dung dịch bazơ mạnh",
        "Vừa có tính oxi hóa, vừa có tính khử",
        "Có khả năng dẫn điện và dẫn nhiệt",
        "Vừa tan trong nước lạnh, vừa tan trong nước nóng"
      ],
      correctIndex: 0,
      explanation: "Al(OH)₃ thể hiện tính bazơ khi tan trong axit: Al(OH)₃ + 3H⁺ → Al³⁺ + 3H₂O; và thể hiện tính axit khi tan trong kiềm: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻.",
    },
  ],

  // Q17: Khử mất màu dung dịch thuốc tím KMnO₄ bằng Sắt(II) (feso4+kmno4)
  q17: [
    {
      id: "qq-17-1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Khi nhỏ dung dịch muối sắt(II) sunfat FeSO₄ vào ống nghiệm chứa dung dịch thuốc tím KMnO₄ có thêm vài giọt H₂SO₄ loãng, hiện tượng là:",
      options: [
        "Màu tím đặc trưng của dung dịch KMnO₄ bị mất màu hoặc chuyển sang màu vàng nhạt của muối Fe(III)",
        "Dung dịch chuyển sang màu xanh lam",
        "Xuất hiện kết tủa trắng vón",
        "Khí màu tím bốc lên cuồn cuộn"
      ],
      correctIndex: 0,
      explanation: "Ion Fe²⁺ khử MnO₄⁻ (tím) về Mn²⁺ (hầu như không màu): 10FeSO₄ + 2KMnO₄ + 8H₂SO₄ → 5Fe₂(SO₄)₃ + 2MnSO₄ + K₂SO₄ + 8H₂O.",
    },
    {
      id: "qq-17-2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Trong phản ứng oxi hóa - khử trên, vai trò của ion Fe²⁺ và ion MnO₄⁻ lần lượt là:",
      options: [
        "Fe²⁺ là chất khử, MnO₄⁻ là chất oxi hóa",
        "Fe²⁺ là chất oxi hóa, MnO₄⁻ là chất khử",
        "Cả hai đều là chất khử",
        "Cả hai đều là chất oxi hóa"
      ],
      correctIndex: 0,
      explanation: "Số oxi hóa của Fe tăng từ +2 lên +3 (chất khử). Số oxi hóa của Mn giảm từ +7 xuống +2 (chất oxi hóa).",
    },
    {
      id: "qq-17-3",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Tại sao trong phản ứng chuẩn độ Fe²⁺ bằng KMnO₄ người ta dùng H₂SO₄ loãng làm môi trường axit mà không dùng HCl?",
      options: [
        "Axit HCl có tính khử, ion Cl⁻ có thể bị KMnO₄ oxi hóa thành khí Cl₂ gây sai lệch kết quả phân tích",
        "Axit HCl làm kết tủa muối sắt",
        "Axit HCl là axit quá yếu",
        "Axit HCl làm dung dịch hóa đen"
      ],
      correctIndex: 0,
      explanation: "KMnO₄ có tính oxi hóa rất mạnh, có thể oxi hóa Cl⁻ thành Cl₂: 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O, tiêu tốn thuốc tím và sai lệch chuẩn độ. Gốc SO₄²⁻ trơ nên được ưu tiên.",
    },
    {
      id: "qq-17-4",
      grade: 10,
      level: "Vận dụng",
      questionText: "Tỉ lệ số mol FeSO₄ và KMnO₄ phản ứng vừa đủ theo phương trình oxi hóa - khử trong môi trường axit H₂SO₄ là:",
      options: ["5 : 1", "1 : 1", "2 : 5", "3 : 1"],
      correctIndex: 0,
      explanation: "Quá trình nhường: Fe²⁺ → Fe³⁺ + 1e (nhân 5). Quá trình nhận: Mn⁺⁷ + 5e → Mn²⁺ (nhân 1). Tỉ lệ mol FeSO₄ : KMnO₄ = 5 : 1 (hoặc 10 : 2).",
    },
    {
      id: "qq-17-5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Để tác dụng vừa đủ với 20 ml dung dịch FeSO₄ 0,1M (trong môi trường H₂SO₄ dư) cần bao nhiêu ml dung dịch KMnO₄ 0,02M?",
      options: ["20 ml", "10 ml", "50 ml", "5 ml"],
      correctIndex: 0,
      explanation: "n(Fe²⁺) = 0,02 × 0,1 = 0,002 mol. n(KMnO₄) = n(Fe²⁺) / 5 = 0,002 / 5 = 0,0004 mol. V(KMnO₄) = 0,0004 / 0,02 = 0,02 lít = 20 ml.",
    },
  ],

  // Q18: Nhận biết ion cacbonat CO₃²⁻ tạo kết tủa trắng BaCO₃ (bacl2+na2co3)
  q18: [
    {
      id: "qq-18-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Khi nhỏ dung dịch muối BaCl₂ vào dung dịch Na₂CO₃, hiện tượng quan sát được là:",
      options: [
        "Xuất hiện kết tủa màu trắng của bari cacbonat BaCO₃",
        "Có khí không màu sủi bọt mạnh",
        "Dung dịch chuyển sang màu hồng",
        "Xuất hiện kết tủa màu vàng nhạt"
      ],
      correctIndex: 0,
      explanation: "BaCl₂ + Na₂CO₃ → BaCO₃↓ (kết tủa trắng) + 2NaCl.",
    },
    {
      id: "qq-18-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khi nhỏ tiếp dung dịch axit clohiđric HCl vào ống nghiệm chứa kết tủa BaCO₃ ở trên, hiện tượng là:",
      options: [
        "Kết tủa tan hoàn toàn và sủi bọt khí không màu CO₂",
        "Kết tủa không tan và giữ nguyên",
        "Kết tủa đổi màu sang đen",
        "Dung dịch phát sáng"
      ],
      correctIndex: 0,
      explanation: "BaCO₃ + 2HCl → BaCl₂ + CO₂↑ + H₂O. Khác với BaSO₄ không tan trong axit, BaCO₃ tan nhanh trong axit và giải phóng khí CO₂.",
    },
    {
      id: "qq-18-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Phương trình ion rút gọn của phản ứng giữa dung dịch BaCl₂ và Na₂CO₃ là:",
      options: [
        "Ba²⁺ + CO₃²⁻ → BaCO₃↓",
        "2Na⁺ + 2Cl⁻ → 2NaCl",
        "BaCl₂ + CO₃²⁻ → BaCO₃↓ + 2Cl⁻",
        "Ba²⁺ + Na₂CO₃ → BaCO₃↓ + 2Na⁺"
      ],
      correctIndex: 0,
      explanation: "Các ion Na⁺ và Cl⁻ không tham gia phản ứng kết tủa được triệt tiêu, giữ lại ion tham gia: Ba²⁺ + CO₃²⁻ → BaCO₃↓.",
    },
    {
      id: "qq-18-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Trộn 100 ml dung dịch BaCl₂ 0,5M với 100 ml dung dịch Na₂CO₃ 0,3M. Khối lượng kết tủa BaCO₃ thu được là:",
      options: ["5,91 gam", "9,85 gam", "3,94 gam", "11,82 gam"],
      correctIndex: 0,
      explanation: "n(Ba²⁺) = 0,1 × 0,5 = 0,05 mol; n(CO₃²⁻) = 0,1 × 0,3 = 0,03 mol. CO₃²⁻ hết trước nên n(BaCO₃) = 0,03 mol. M(BaCO₃) = 137 + 12 + 48 = 197 g/mol. m = 0,03 × 197 = 5,91 gam.",
    },
    {
      id: "qq-18-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Nếu dẫn từ từ luồng khí CO₂ dư vào cốc nước chứa kết tủa BaCO₃ lơ lửng, hiện tượng xảy ra là gì?",
      options: [
        "Kết tủa BaCO₃ tan dần do tạo muối tan bari hiđrocacbonat Ba(HCO₃)₂",
        "Kết tủa BaCO₃ dày thêm và không đổi màu",
        "Xuất hiện bọt khí bay lên cuồn cuộn",
        "Dung dịch chuyển sang màu đỏ"
      ],
      correctIndex: 0,
      explanation: "BaCO₃ + CO₂ + H₂O ⇌ Ba(HCO₃)₂. Muối Ba(HCO₃)₂ tan tốt trong nước nên lượng kết tủa bị hòa tan trong CO₂ dư.",
    },
  ],

  // Q19: Axit sunfuric hòa tan Kẽm giải phóng khí Hiđro nhanh chóng (h2so4+zn)
  q19: [
    {
      id: "qq-19-1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Khi cho hạt kẽm (Zn) vào dung dịch axit sunfuric loãng H₂SO₄, sản phẩm khí sinh ra là:",
      options: [
        "Khí Hiđro (H₂)",
        "Khí Sunfurơ (SO₂)",
        "Khí Oxi (O₂)",
        "Khí Hiđro sunfua (H₂S)"
      ],
      correctIndex: 0,
      explanation: "Phương trình: Zn + H₂SO₄(loãng) → ZnSO₄ + H₂↑. Bọt khí không màu nhẹ hơn không khí H₂ thoát ra.",
    },
    {
      id: "qq-19-2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Nếu thay dung dịch H₂SO₄ loãng bằng dung dịch H₂SO₄ đặc nóng, sản phẩm khí chủ yếu sinh ra sẽ là:",
      options: [
        "Khí SO₂ có mùi hắc đặc trưng (không có khí H₂)",
        "Vẫn chỉ có khí H₂ thoát ra",
        "Khí CO₂",
        "Khí Cl₂"
      ],
      correctIndex: 0,
      explanation: "H₂SO₄ đặc nóng có tính oxi hóa mạnh do S⁺⁶, oxi hóa Zn và bị khử thành khí SO₂ mùi hắc: Zn + 2H₂SO₄(đặc) —(t°)→ ZnSO₄ + SO₂↑ + 2H₂O.",
    },
    {
      id: "qq-19-3",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi thêm vài giọt dung dịch đồng(II) sunfat CuSO₄ vào ống nghiệm đang chứa Zn và H₂SO₄ loãng, hiện tượng gì sẽ xảy ra?",
      options: [
        "Bọt khí H₂ thoát ra nhanh và mạnh hơn rất nhiều do hiện tượng ăn mòn điện hóa",
        "Phản ứng ngừng lại ngay lập tức",
        "Khí H₂ đổi sang màu nâu đỏ",
        "Kẽm được bảo vệ không bị tan nữa"
      ],
      correctIndex: 0,
      explanation: "Kẽm khử Cu²⁺ tạo hạt kim loại Cu bám lên Zn: Zn + Cu²⁺ → Zn²⁺ + Cu. Hình thành cặp vi pin điện hóa Zn - Cu nhúng trong dung dịch chất điện li H₂SO₄, làm tăng tốc độ ăn mòn Zn và khí H₂ thoát ra cực nhanh.",
    },
    {
      id: "qq-19-4",
      grade: 10,
      level: "Vận dụng",
      questionText: "Hòa tan hoàn toàn 13 gam kẽm vào dung dịch H₂SO₄ loãng dư. Thể tích khí H₂ thu được ở 25°C, 1 bar (24,79 L/mol) là:",
      options: ["4,958 lít", "2,479 lít", "4,48 lít", "9,916 lít"],
      correctIndex: 0,
      explanation: "n(Zn) = 13 / 65 = 0,2 mol. n(H₂) = n(Zn) = 0,2 mol. Thể tích V = 0,2 × 24,79 = 4,958 lít.",
    },
    {
      id: "qq-19-5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Biến thiên entanpi chuẩn của phản ứng Zn(r) + 2H⁺(aq) → Zn²⁺(aq) + H₂(k) có giá trị âm (ΔrHo < 0). Khi phản ứng diễn ra trong ống nghiệm không cách nhiệt, nhiệt độ của ống nghiệm sẽ:",
      options: [
        "Tăng lên (phản ứng tỏa nhiệt ra môi trường)",
        "Giảm xuống (phản ứng thu nhiệt làm lạnh)",
        "Không thay đổi",
        "Đóng băng dung dịch"
      ],
      correctIndex: 0,
      explanation: "Phản ứng giữa kim loại đứng trước hiđro và axit phân li H⁺ là phản ứng tỏa nhiệt (exothermic, ΔH < 0), làm nhiệt độ của dung dịch và ống nghiệm tăng lên.",
    },
  ],

  // Q20: Nhôm tác dụng với Axit clohiđric giải phóng khí H₂ sôi nổi (al+hcl)
  q20: [
    {
      id: "qq-20-1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Phương trình hóa học phản ứng giữa kim loại Nhôm (Al) và axit clohiđric (HCl) là:",
      options: [
        "2Al + 6HCl → 2AlCl₃ + 3H₂↑",
        "Al + 2HCl → AlCl₂ + H₂↑",
        "Al + 3HCl → AlCl₃ + 3H₂↑",
        "2Al + 3HCl → Al₂Cl₃ + 3H₂↑"
      ],
      correctIndex: 0,
      explanation: "Nhôm có hóa trị III trong hợp chất: 2Al + 6HCl → 2AlCl₃ + 3H₂↑.",
    },
    {
      id: "qq-20-2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi thả mẩu lá nhôm chưa cạo sạch bề mặt vào ống nghiệm đựng axit HCl, thời gian đầu phản ứng diễn ra rất chậm, sau đó mới sủi bọt khí mạnh. Nguyên nhân là gì?",
      options: [
        "Thời gian đầu axit HCl phải hòa tan màng oxit bảo vệ Al₂O₃ trước: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O",
        "Do axit HCl cần thời gian nóng lên mới phản ứng",
        "Do nhôm chưa tan trong nước",
        "Do khí H₂ chưa kịp hình thành"
      ],
      correctIndex: 0,
      explanation: "Lớp màng oxit Al₂O₃ bao bọc ngăn cản kim loại tiếp xúc với axit. Khi lớp màng bị hòa tan hết và phản ứng tỏa nhiệt thì tốc độ thoát khí H₂ tăng vọt.",
    },
    {
      id: "qq-20-3",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi thêm từ từ dung dịch kiềm NaOH đến dư vào dung dịch muối AlCl₃ sau phản ứng, hiện tượng xảy ra là:",
      options: [
        "Ban đầu xuất hiện kết tủa keo trắng Al(OH)₃, sau đó kết tủa tan hoàn toàn trong NaOH dư",
        "Xuất hiện kết tủa keo trắng không tan trong NaOH dư",
        "Có kết tủa màu nâu đỏ",
        "Dung dịch đổi sang màu xanh lam"
      ],
      correctIndex: 0,
      explanation: "Al³⁺ + 3OH⁻ → Al(OH)₃↓ (keo trắng). Sau đó Al(OH)₃ lưỡng tính tan trong kiềm dư: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ (dung dịch trong suốt).",
    },
    {
      id: "qq-20-4",
      grade: 10,
      level: "Vận dụng",
      questionText: "Cho 2,7 gam nhôm phản ứng hoàn toàn với dung dịch HCl dư. Thể tích khí H₂ thu được ở 25°C, 1 bar (24,79 L/mol) là:",
      options: ["3,7185 lít", "2,479 lít", "7,437 lít", "3,36 lít"],
      correctIndex: 0,
      explanation: "n(Al) = 2,7 / 27 = 0,1 mol. Theo phương trình: n(H₂) = (3/2) × 0,1 = 0,15 mol. Thể tích V = 0,15 × 24,79 = 3,7185 lít.",
    },
    {
      id: "qq-20-5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Trong phản ứng 2Al + 6HCl → 2AlCl₃ + 3H₂, tổng số electron mà 1 mol kim loại Al đã nhường cho các ion H⁺ là:",
      options: [
        "3 mol electron (tương đương 3 × 6,022 × 10²³ electron)",
        "1 mol electron",
        "2 mol electron",
        "6 mol electron"
      ],
      correctIndex: 0,
      explanation: "Mỗi nguyên tử Al từ số oxi hóa 0 nhường 3 electron để thành Al³⁺: Al → Al³⁺ + 3e. Do đó 1 mol Al nhường 3 mol electron.",
    },
  ],

  // Q21: Đá vôi CaCO₃ tan trong axit sunfuric giải phóng bọt khí CO₂ (caco3+h2so4)
  q21: [
    {
      id: "qq-21-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Phương trình phản ứng giữa canxi cacbonat CaCO₃ và axit sunfuric H₂SO₄ loãng là:",
      options: [
        "CaCO₃ + H₂SO₄ → CaSO₄ + CO₂↑ + H₂O",
        "CaCO₃ + H₂SO₄ → Ca(HSO₄)₂ + CO₂↑",
        "CaCO₃ + 2H₂SO₄ → CaSO₄ + 2SO₂↑ + CO₂↑ + 2H₂O",
        "CaCO₃ + H₂SO₄ → CaO + SO₃ + CO₂↑"
      ],
      correctIndex: 0,
      explanation: "CaCO₃ + H₂SO₄ → CaSO₄ + CO₂↑ + H₂O. Khí CO₂ thoát ra gây sủi bọt khí.",
    },
    {
      id: "qq-21-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khi cho viên đá vôi CaCO₃ lớn vào dung dịch H₂SO₄ đặc hoặc loãng nồng độ cao, phản ứng sủi bọt khí chỉ xảy ra một lát rồi chậm dần và dừng hẳn. Nguyên nhân chính là do:",
      options: [
        "Chất rắn CaSO₄ ít tan sinh ra bám chặt thành màng bao bọc bề mặt viên đá vôi, ngăn không cho axit tiếp xúc",
        "Axit H₂SO₄ bay hơi hết",
        "Đá vôi bị biến đổi thành kim cương",
        "Khí CO₂ hòa tan ngược lại làm dừng phản ứng"
      ],
      correctIndex: 0,
      explanation: "CaSO₄ là muối ít tan trong nước. Khi tạo thành, lớp kết tủa CaSO₄ phủ kín bề mặt khối CaCO₃ cô lập nó khỏi axit H₂SO₄, khiến phản ứng tự tắt.",
    },
    {
      id: "qq-21-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Tại sao trong công nghiệp điều chế khí CO₂ hoặc trong phòng thí nghiệm, người ta dùng axit HCl tác dụng với đá vôi thay vì dùng H₂SO₄?",
      options: [
        "Vì CaCl₂ tạo thành tan rất tốt trong nước, bề mặt đá vôi luôn lộ ra tiếp xúc với axit đến khi tan hết",
        "Vì axit HCl rẻ tiền hơn",
        "Vì axit HCl không độc",
        "Vì CaCl₂ bốc cháy tạo nhiệt"
      ],
      correctIndex: 0,
      explanation: "Phản ứng CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O tạo muối CaCl₂ tan rất tốt, không có màng kết tủa ngăn cản nên phản ứng diễn ra liên tục đến khi đá vôi tan hoàn toàn.",
    },
    {
      id: "qq-21-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Cho bột mịn CaCO₃ dư tác dụng hoàn toàn với dung dịch chứa 0,05 mol H₂SO₄ loãng. Thể tích khí CO₂ (ở 25°C, 1 bar, 24,79 L/mol) thoát ra là:",
      options: ["1,2395 lít", "2,479 lít", "0,56 lít", "4,958 lít"],
      correctIndex: 0,
      explanation: "Dạng bột mịn hạn chế sự ngăn cản của CaSO₄. n(CO₂) = n(H₂SO₄) = 0,05 mol. V = 0,05 × 24,79 = 1,2395 lít.",
    },
    {
      id: "qq-21-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Trong sản xuất phân bón supephotphat đơn, phản ứng giữa quặng photphorit (thành phần chính Ca₃(PO₄)₂) với axit H₂SO₄ đặc tạo ra hỗn hợp gồm:",
      options: [
        "Ca(H₂PO₄)₂ tan và CaSO₄ kết tủa ít tan",
        "CaHPO₄ và H₃PO₄",
        "CaSO₄ và khí H₂S",
        "H₃PO₄ nguyên chất"
      ],
      correctIndex: 0,
      explanation: "Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H₂PO₄)₂ + 2CaSO₄↓. Hỗn hợp này gọi là supephotphat đơn, trong đó Ca(H₂PO₄)₂ là thành phần tan cung cấp dinh dưỡng lân cho cây trồng.",
    },
  ],

  // Q22: Lá đồng tráng bạc lấp lánh trong dung dịch Bạc nitrat (agno3+cu)
  q22: [
    {
      id: "qq-22-1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Khi nhúng một mẩu dây đồng (Cu) sạch vào cốc đựng dung dịch bạc nitrat AgNO₃ không màu, hiện tượng quan sát được sau vài phút là:",
      options: [
        "Bề mặt dây đồng phủ một lớp tinh thể kim loại màu trắng sáng lấp lánh (Ag) và dung dịch chuyển dần sang màu xanh lam",
        "Dây đồng tan hết ngay lập tức không để lại dấu vết",
        "Xuất hiện kết tủa màu nâu đen và có khí sủi bọt",
        "Dung dịch chuyển sang màu đỏ rực"
      ],
      correctIndex: 0,
      explanation: "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag↓. Kim loại bạc Ag màu trắng sáng hình nhánh cây bám lên dây đồng, ion Cu²⁺ tạo thành làm dung dịch hóa xanh lam.",
    },
    {
      id: "qq-22-2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Cặp oxi hóa - khử nào sau đây có thế điện cực chuẩn E° lớn hơn, giải thích tại sao Cu đẩy được ion Ag⁺ ra khỏi dung dịch?",
      options: [
        "E°(Ag⁺/Ag) = +0,80 V lớn hơn E°(Cu²⁺/Cu) = +0,34 V",
        "E°(Cu²⁺/Cu) lớn hơn E°(Ag⁺/Ag)",
        "Khối lượng mol của Ag lớn hơn Cu",
        "Độ âm điện của Cu lớn hơn Ag"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc anpha: ion Ag⁺ có tính oxi hóa mạnh hơn ion Cu²⁺ (thế điện cực +0,80 V > +0,34 V) nên oxi hóa được kim loại Cu thành Cu²⁺, đồng thời Ag⁺ bị khử thành kim loại Ag.",
    },
    {
      id: "qq-22-3",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Sau khi phản ứng Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag kết thúc, lấy thanh đồng ra sấy khô rồi cân lại thì khối lượng thanh đồng thay đổi thế nào?",
      options: [
        "Tăng lên so với ban đầu",
        "Giảm đi so với ban đầu",
        "Hoàn toàn không thay đổi",
        "Giảm đi đúng 64 gam"
      ],
      correctIndex: 0,
      explanation: "Cứ 1 mol Cu (64g) tan ra vào dung dịch thì có 2 mol Ag (2 × 108 = 216g) bám vào thanh đồng. Độ tăng khối lượng: Δm = 216 - 64 = +152 gam/mol. Vì vậy khối lượng thanh tăng lên rõ rệt.",
    },
    {
      id: "qq-22-4",
      grade: 12,
      level: "Vận dụng",
      questionText: "Nhúng thanh đồng vào dung dịch AgNO₃. Sau một thời gian lấy thanh ra cân lại thấy khối lượng thanh tăng thêm 1,52 gam. Khối lượng kim loại bạc Ag đã bám trên thanh đồng là:",
      options: ["2,16 gam", "1,52 gam", "0,64 gam", "1,08 gam"],
      correctIndex: 0,
      explanation: "n(Cu phản ứng) = Δm / (2 × 108 - 64) = 1,52 / 152 = 0,01 mol. Số mol Ag bám vào = 2 × 0,01 = 0,02 mol. Khối lượng bạc bám vào: m(Ag) = 0,02 × 108 = 2,16 gam.",
    },
    {
      id: "qq-22-5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Nếu nối thanh đồng với một thanh bạc nhúng trong dung dịch AgNO₃ và đo hiệu điện thế pin điện hóa Cu-Ag ở điều kiện chuẩn, sức điện động chuẩn (E°_pin) của pin là:",
      options: ["0,46 V", "1,14 V", "0,56 V", "0,34 V"],
      correctIndex: 0,
      explanation: "E°_pin = E°(catot) - E°(anot) = E°(Ag⁺/Ag) - E°(Cu²⁺/Cu) = +0,80 V - (+0,34 V) = +0,46 V.",
    },
  ],

  // Q23: Phản ứng trung hòa kinh điển Axit vô cơ và Kiềm tỏa nhiệt (hcl+naoh)
  q23: [
    {
      id: "qq-23-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Phản ứng giữa axit clohiđric HCl và natri hiđroxit NaOH thuộc loại phản ứng nào sau đây?",
      options: [
        "Phản ứng trung hòa (axit - bazơ)",
        "Phản ứng oxi hóa - khử",
        "Phản ứng thế kim loại",
        "Phản ứng phân hủy nhiệt"
      ],
      correctIndex: 0,
      explanation: "HCl + NaOH → NaCl + H₂O là phản ứng trung hòa kinh điển giữa axit mạnh và bazơ mạnh.",
    },
    {
      id: "qq-23-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Bản chất của phản ứng trung hòa trong dung dịch nước là sự kết hợp giữa:",
      options: [
        "Ion H⁺ (hoặc H₃O⁺) và ion OH⁻ tạo thành phân tử H₂O",
        "Ion Na⁺ và ion Cl⁻ tạo thành tinh thể muối",
        "Nguyên tử H và nguyên tử O tạo phân tử khí",
        "Các phân tử axit và kiềm không phân li"
      ],
      correctIndex: 0,
      explanation: "Phương trình ion rút gọn: H⁺ + OH⁻ → H₂O. Các ion Na⁺ và Cl⁻ là ion trơ không thay đổi trạng thái trong dung dịch.",
    },
    {
      id: "qq-23-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khi trộn 50 ml dung dịch HCl 1M với 50 ml dung dịch NaOH 1M trong nhiệt lượng kế, ta thấy nhiệt độ của dung dịch tăng lên. Đó là vì:",
      options: [
        "Phản ứng trung hòa giải phóng năng lượng liên kết (tỏa nhiệt, biến thiên entanpi ΔrHo < 0)",
        "Phản ứng thu nhiệt từ không khí",
        "Ma sát giữa các phân tử khi khuấy",
        "Sự bay hơi của nước"
      ],
      correctIndex: 0,
      explanation: "Sự kết hợp giữa H⁺ và OH⁻ tạo H₂O là quá trình tỏa nhiệt mạnh, entanpi chuẩn của phản ứng trung hòa axit mạnh - bazơ mạnh luôn xấp xỉ -57,3 kJ/mol.",
    },
    {
      id: "qq-23-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Cần dùng bao nhiêu ml dung dịch NaOH 0,2M để trung hòa vừa đủ 150 ml dung dịch HCl 0,1M?",
      options: ["75 ml", "150 ml", "300 ml", "50 ml"],
      correctIndex: 0,
      explanation: "n(HCl) = 0,15 × 0,1 = 0,015 mol. Vì n(NaOH) = n(HCl) = 0,015 mol => V(NaOH) = 0,015 / 0,2 = 0,075 lít = 75 ml.",
    },
    {
      id: "qq-23-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Trong quá trình chuẩn độ dung dịch HCl bằng dung dịch chuẩn NaOH, tại điểm tương đương ở 25°C, giá trị pH của dung dịch là:",
      options: [
        "pH = 7,0 (môi trường trung tính vì NaCl không bị thủy phân)",
        "pH = 8,3",
        "pH = 1,0",
        "pH = 13,0"
      ],
      correctIndex: 0,
      explanation: "Tại điểm tương đương, toàn bộ H⁺ và OH⁻ phản ứng hết tạo muối NaCl. Cả Na⁺ và Cl⁻ đều không bị thủy phân nên dung dịch hoàn toàn trung tính có pH = 7,0.",
    },
  ],

  // Q24: Axit vô cơ phá hủy muối cacbonat giải phóng bọt khí CO₂ (hcl+na2co3)
  q24: [
    {
      id: "qq-24-1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Khi nhỏ từ từ dung dịch axit clohiđric HCl vào ống nghiệm chứa dung dịch natri cacbonat Na₂CO₃, hiện tượng quan sát được là:",
      options: [
        "Có bọt khí không màu, không mùi CO₂ sủi lên cuồn cuộn",
        "Xuất hiện kết tủa trắng",
        "Dung dịch chuyển sang màu đỏ rực",
        "Có mùi trứng thối bốc lên"
      ],
      correctIndex: 0,
      explanation: "Phản ứng: Na₂CO₃ + 2HCl → 2NaCl + CO₂↑ + H₂O. Khí cacbonic CO₂ sinh ra gây sủi bọt mạnh.",
    },
    {
      id: "qq-24-2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khí CO₂ sinh ra từ phản ứng trên có tính chất nào giúp dập tắt đám cháy thông thường?",
      options: [
        "Nặng hơn không khí và không duy trì sự cháy",
        "Có tính oxi hóa cực mạnh",
        "Rất nhẹ và bay nhanh vào khí quyển",
        "Phản ứng với cacbon ở nhiệt độ thường"
      ],
      correctIndex: 0,
      explanation: "CO₂ có tỉ khối so với không khí d = 44 / 29 ≈ 1,52 (nặng hơn không khí) và không duy trì sự cháy, giúp tạo lớp màng phủ cách ly chất cháy với oxi không khí.",
    },
    {
      id: "qq-24-3",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Nếu nhỏ rất từ từ từng giọt dung dịch HCl vào dung dịch Na₂CO₃ và khuấy đều, hiện tượng ban đầu là:",
      options: [
        "Ban đầu chưa có khí thoát ra vì xảy ra phản ứng tạo NaHCO₃: H⁺ + CO₃²⁻ → HCO₃⁻",
        "Khí thoát ra mãnh liệt ngay từ giọt đầu tiên",
        "Có kết tủa trắng xuất hiện",
        "Dung dịch chuyển sang màu xanh lá cây"
      ],
      correctIndex: 0,
      explanation: "Khi cho từ từ H⁺ vào CO₃²⁻, nấc 1 xảy ra trước: H⁺ + CO₃²⁻ → HCO₃⁻ (chưa có khí). Khi CO₃²⁻ chuyển hết thành HCO₃⁻, tiếp tục nhỏ H⁺ thì nấc 2 mới sinh khí: H⁺ + HCO₃⁻ → CO₂↑ + H₂O.",
    },
    {
      id: "qq-24-4",
      grade: 11,
      level: "Vận dụng",
      questionText: "Hòa tan hoàn toàn 10,6 gam Na₂CO₃ vào lượng dư dung dịch HCl. Thể tích khí CO₂ thu được ở điều kiện chuẩn (25°C, 1 bar, 24,79 L/mol) là:",
      options: ["2,479 lít", "4,958 lít", "2,24 lít", "1,2395 lít"],
      correctIndex: 0,
      explanation: "n(Na₂CO₃) = 10,6 / 106 = 0,1 mol. Theo phương trình: n(CO₂) = n(Na₂CO₃) = 0,1 mol. V = 0,1 × 24,79 = 2,479 lít.",
    },
    {
      id: "qq-24-5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Để phân biệt 2 dung dịch mất nhãn chứa Na₂CO₃ và NaHCO₃ mà không dùng nhiệt độ, phương pháp tối ưu nhất là:",
      options: [
        "Nhỏ dung dịch BaCl₂ hoặc CaCl₂ vào (Na₂CO₃ cho kết tủa trắng BaCO₃, NaHCO₃ không có hiện tượng)",
        "Nhỏ dung dịch HCl vào thấy cả 2 đều sủi bọt",
        "Nhỏ dung dịch phenolphtalein",
        "Thử độ dẫn điện"
      ],
      correctIndex: 0,
      explanation: "Ion Ba²⁺ chỉ kết tủa với CO₃²⁻ ở nhiệt độ thường (BaCl₂ + Na₂CO₃ → BaCO₃↓ + 2NaCl); còn muối Ba(HCO₃)₂ tan tốt nên không tạo kết tủa.",
    },
  ],
};
