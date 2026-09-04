import { Question } from "../types";

export const GRADE_11_EXTRA_QUESTIONS: Record<string, Question[]> = {
  // ==================== CHƯƠNG 1: CÂN BẰNG HÓA HỌC & SỰ ĐIỆN LI ====================
  "g11-c1": [
    {
      id: "q-11-1-ex1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Chất nào sau đây là chất điện li mạnh trong dung dịch nước?",
      options: ["Nitric acid (HNO₃)", "Acetic acid (CH₃COOH)", "Ethanol (C₂H₅OH)", "Glucose (C₆H₁₂O₆)"],
      correctIndex: 0,
      explanation: "HNO₃ là một acid vô cơ mạnh, khi tan trong nước phân li hoàn toàn thành các ion H⁺ và NO₃⁻, nên là chất điện li mạnh. CH₃COOH là acid yếu (điện li yếu), còn C₂H₅OH và glucose là chất không điện li.",
    },
    {
      id: "q-11-1-ex2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Cho hệ cân bằng trong bình kín: 2SO₂(k) + O₂(k) ⇌ 2SO₃(k) (Δ_r H°₂₉₈ = -198 kJ). Để hiệu suất chuyển hóa SO₂ thành SO₃ đạt cực đại, biện pháp công nghệ nào sau đây là phù hợp?",
      options: [
        "Hạ nhiệt độ thích hợp và tăng áp suất của hệ",
        "Tăng nhiệt độ và giảm áp suất của hệ",
        "Dùng chất xúc tác V₂O₅ và giảm nồng độ O₂",
        "Tăng nhiệt độ và tăng thể tích bình phản ứng"
      ],
      correctIndex: 0,
      explanation: "Phản ứng thuận tỏa nhiệt (ΔH < 0) và làm giảm thể tích khí (3 mol khí → 2 mol khí). Do đó, hạ nhiệt độ và tăng áp suất sẽ làm cân bằng chuyển dịch theo chiều thuận, làm tăng hiệu suất tạo SO₃.",
    },
    {
      id: "q-11-1-ex3",
      grade: 11,
      level: "Vận dụng",
      questionText: "Tính giá trị pH của dung dịch Ba(OH)₂ có nồng độ 0,005 M ở 25°C (biết tích số ion của nước Kw = 1,0 × 10⁻¹⁴):",
      options: ["12,0", "11,7", "2,0", "12,3"],
      correctIndex: 0,
      explanation: "Ba(OH)₂ phân li: Ba(OH)₂ → Ba²⁺ + 2OH⁻. Nồng độ [OH⁻] = 2 × 0,005 = 0,01 M = 10⁻² M. Suy ra pOH = -log(0,01) = 2. Giá trị pH = 14 - pOH = 14 - 2 = 12,0.",
    },
    {
      id: "q-11-1-ex4",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Trong phương pháp chuẩn độ dung dịch HCl bằng dung dịch NaOH tiêu chuẩn sử dụng chất chỉ thị phenolphtalein, điểm tương đương được xác định khi:",
      options: [
        "Dung dịch trong bình nón chuyển từ không màu sang màu hồng nhạt bền vững trong 30 giây",
        "Dung dịch trong bình nón chuyển từ màu đỏ sang màu vàng",
        "Xuất hiện kết tủa trắng đục dưới đáy bình nón",
        "Dung dịch sôi sủi bọt khí CO₂"
      ],
      correctIndex: 0,
      explanation: "Trong môi trường acid, dung dịch phenolphtalein không màu. Khi nhỏ từng giọt NaOH đến điểm tương đương (vừa hết H⁺ và bắt đầu dư một lượng cực nhỏ OH⁻, pH ≈ 8,3), dung dịch chuyển sang màu hồng nhạt bền vững.",
    },
    {
      id: "q-11-1-ex5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Ở nhiệt độ T, phản ứng tổng hợp este: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O có hằng số cân bằng Kc = 4. Nếu ban đầu cho 1 mol CH₃COOH tác dụng với 1 mol C₂H₅OH thì ở trạng thái cân bằng số mol este thu được là:",
      options: ["0,67 mol", "0,50 mol", "0,80 mol", "0,75 mol"],
      correctIndex: 0,
      explanation: "Gọi số mol este tạo thành ở trạng thái cân bằng là x (x > 0). Tại cân bằng: n(este) = x, n(H₂O) = x, n(acid) = 1 - x, n(ancol) = 1 - x. Biểu thức Kc = (x · x) / ((1 - x)(1 - x)) = (x / (1 - x))² = 4 => x / (1 - x) = 2 => x = 2 - 2x => 3x = 2 => x = 2/3 ≈ 0,67 mol.",
    }
  ],

  // ==================== CHƯƠNG 2: NITROGEN & SULFUR ====================
  "g11-c2": [
    {
      id: "q-11-2-ex1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Phân tử khí N₂ rất trơ về mặt hóa học ở nhiệt độ thường là do:",
      options: [
        "Giữa 2 nguyên tử N có liên kết ba với năng lượng liên kết rất lớn (945 kJ/mol)",
        "Nitơ có bán kính nguyên tử quá lớn",
        "Nitơ có độ âm điện nhỏ nhất trong chu kỳ 2",
        "Phân tử N₂ có cấu trúc phân cực mạnh"
      ],
      correctIndex: 0,
      explanation: "Phân tử N₂ chứa liên kết ba (N≡N) cực kỳ bền vững với năng lượng liên kết Eb = 945 kJ/mol. Do đó ở nhiệt độ thường, liên kết này rất khó bị phá vỡ, làm cho N₂ rất trơ về mặt hóa học.",
    },
    {
      id: "q-11-2-ex2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khí Amoniac (NH₃) có tính khử mạnh khi tác dụng với chất nào sau đây?",
      options: [
        "Khí O₂ ở nhiệt độ cao (hoặc CuO nung nóng)",
        "Dung dịch HCl loãng",
        "Dung dịch AlCl₃",
        "Dung dịch H₂SO₄ loãng"
      ],
      correctIndex: 0,
      explanation: "Trong NH₃, nguyên tử N có số oxi hóa -3 (thấp nhất). Khi gặp các chất oxi hóa mạnh như O₂ (đốt cháy tạo N₂ hoặc xúc tác Pt tạo NO) hoặc CuO (nung nóng tạo N₂ và Cu), NH₃ thể hiện tính khử mạnh.",
    },
    {
      id: "q-11-2-ex3",
      grade: 11,
      level: "Vận dụng",
      questionText: "Mưa acid là hiện tượng nước mưa có pH < 5,6, gây hại nghiêm trọng cho cây cối, công trình và hệ sinh thái thủy sinh. Tác nhân chính trong khí quyển gây ra hiện tượng này là:",
      options: [
        "Khí SO₂ (từ đốt nhiên liệu hóa thạch) và các oxit nitơ NO_x (từ khí thải động cơ)",
        "Khí CFC và khí mêtan CH₄",
        "Khí CO₂ và hơi nước",
        "Khí trơ Ar và bụi mịn PM2.5"
      ],
      correctIndex: 0,
      explanation: "SO₂ và NO_x trong khí quyển bị oxi hóa bởi O₂ hòa tan và gốc tự do trong nước mưa, chuyển hóa thành H₂SO₄ và HNO₃, làm giảm độ pH của nước mưa xuống dưới 5,6 gây nên mưa acid.",
    },
    {
      id: "q-11-2-ex4",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khi nhỏ dung dịch H₂SO₄ đặc vào cốc chứa một ít đường saccarozơ (C₁₂H₂₂O₁₁), hiện tượng xảy ra là:",
      options: [
        "Đường chuyển từ trắng sang đen, cột than phồng dâng cao miệng cốc và có khói mùi xốc thoát ra",
        "Đường tan thành dung dịch trong suốt không màu",
        "Dung dịch chuyển sang màu xanh lam",
        "Không có hiện tượng gì xảy ra ở nhiệt độ phòng"
      ],
      correctIndex: 0,
      explanation: "H₂SO₄ đặc có tính háo nước cực mạnh: C₁₂H₂₂O₁₁ → 12C + 11H₂O. Tiếp đó, một phần C sinh ra bị H₂SO₄ đặc oxi hóa: C + 2H₂SO₄(đ) → CO₂ + 2SO₂ + 2H₂O. Khí CO₂ và SO₂ đẩy cột than xốp màu đen phồng cao trào khỏi cốc.",
    },
    {
      id: "q-11-2-ex5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Để sản xuất 100 tấn dung dịch H₂SO₄ 98% từ quặng pirit sắt (chứa 80% FeS₂, còn lại là tạp chất trơ), hiệu suất toàn bộ quá trình là 80%. Khối lượng quặng pirit cần dùng là:",
      options: ["93,75 tấn", "75,00 tấn", "120,00 tấn", "60,00 tấn"],
      correctIndex: 0,
      explanation: "Khối lượng H₂SO₄ nguyên chất = 100 × 0,98 = 98 tấn. Sơ đồ: FeS₂ → 2SO₂ → 2SO₃ → 2H₂SO₄. Cứ 120 tấn FeS₂ theo lý thuyết tạo ra 2 × 98 = 196 tấn H₂SO₄. Lượng FeS₂ lý thuyết = 98 × 120 / 196 = 60 tấn. Với H = 80%, lượng FeS₂ thực tế = 60 / 0,8 = 75 tấn. Khối lượng quặng (chứa 80% FeS₂) = 75 / 0,8 = 93,75 tấn.",
    }
  ],

  // ==================== CHƯƠNG 3: ĐẠI CƯƠNG VỀ HÓA HỌC HỮU CƠ ====================
  "g11-c3": [
    {
      id: "q-11-3-ex1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Hiện tượng các chất có cùng công thức phân tử nhưng khác nhau về công thức cấu tạo dẫn đến tính chất hóa học khác nhau gọi là:",
      options: ["Hiện tượng đồng phân", "Hiện tượng đồng đẳng", "Hiện tượng trùng hợp", "Hiện tượng dị lập thể"],
      correctIndex: 0,
      explanation: "Đồng phân là các chất có cùng công thức phân tử nhưng có trật tự liên kết các nguyên tử khác nhau (đồng phân cấu tạo) hoặc cách sắp xếp trong không gian khác nhau (đồng phân hình học, lập thể).",
    },
    {
      id: "q-11-3-ex2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Phương pháp nào sau đây thường được sử dụng để tách tinh dầu sả, tinh dầu bưởi hoặc hoa hồng ra khỏi hỗn hợp thực vật trong thực tế?",
      options: [
        "Chưng cất lôi cuốn hơi nước",
        "Phương pháp kết tinh phân đoạn",
        "Phương pháp nung chảy",
        "Phương pháp điện phân"
      ],
      correctIndex: 0,
      explanation: "Tinh dầu thực vật nhẹ hơn nước, ít tan trong nước và dễ bay hơi cùng hơi nước ở nhiệt độ thấp hơn nhiệt độ sôi của nó, do đó phương pháp chưng cất lôi cuốn hơi nước là phương pháp tối ưu.",
    },
    {
      id: "q-11-3-ex3",
      grade: 11,
      level: "Vận dụng",
      questionText: "Trên phổ hồng ngoại (IR) của một hợp chất hữu cơ X, người ta quan sát thấy một dải hấp thụ rộng và mạnh ở vùng 3350 cm⁻¹ (đặc trưng cho liên kết O-H) và không có tín hiệu hấp thụ ở vùng 1700 cm⁻¹. Hợp chất X có thể là:",
      options: ["Ethanol (C₂H₅OH)", "Acetic acid (CH₃COOH)", "Acetaldehyde (CH₃CHO)", "Acetone (CH₃COCH₃)"],
      correctIndex: 0,
      explanation: "Dải hấp thụ mạnh và rộng ở 3200 - 3600 cm⁻¹ là tín hiệu đặc trưng của liên kết O-H (alcohol hoặc carboxylic acid). Vì phổ không có pic ở 1700 cm⁻¹ (nhóm C=O) nên hợp chất này không phải acid hay aldehyde/ketone, mà là alcohol (Ethanol).",
    },
    {
      id: "q-11-3-ex4",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Trong phổ khối lượng (MS), pic có giá trị m/z lớn nhất thường ứng với:",
      options: [
        "Ion phân tử [M⁺], cho biết phân tử khối của hợp chất hữu cơ",
        "Mảnh ion bền vững nhất",
        "Cation gốc tự do có điện tích +2",
        "Mảnh hydrocarbon nhẹ nhất"
      ],
      correctIndex: 0,
      explanation: "Ion phân tử kí hiệu là [M⁺] được tạo ra khi phân tử hữu cơ bị bắn phá mất 1 electron. Pic này thường có giá trị m/z lớn nhất trên phổ MS và cho biết chính xác khối lượng mol phân tử (M) của chất đó.",
    },
    {
      id: "q-11-3-ex5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Đốt cháy hoàn toàn 4,4 gam hợp chất hữu cơ X (chứa C, H, O) thu được 8,8 gam CO₂ và 3,6 gam H₂O. Phổ khối lượng (MS) của X cho pic ion phân tử có m/z = 88. Công thức phân tử của X là:",
      options: ["C₄H₈O₂", "C₃H₄O₃", "C₅H₁₂O", "C₂H₄O₂"],
      correctIndex: 0,
      explanation: "n(CO₂) = 8,8 / 44 = 0,2 mol => n(C) = 0,2 mol (2,4 g). n(H₂O) = 3,6 / 18 = 0,2 mol => n(H) = 0,4 mol (0,4 g). Khối lượng O = 4,4 - (2,4 + 0,4) = 1,6 g => n(O) = 1,6 / 16 = 0,1 mol. Tỉ lệ C : H : O = 0,2 : 0,4 : 0,1 = 2 : 4 : 1 => Công thức đơn giản nhất là (C₂H₄O)n. Khối lượng mol M = 88 => 44n = 88 => n = 2. Vậy CTPT là C₄H₈O₂.",
    }
  ],

  // ==================== CHƯƠNG 4: HYDROCARBON ====================
  "g11-c4": [
    {
      id: "q-11-4-ex1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Phản ứng đặc trưng của hydrocarbon no (alkane) khi chiếu sáng hoặc đun nóng với halogen (Cl₂, Br₂) là:",
      options: ["Phản ứng thế gốc tự do (SR)", "Phản ứng cộng electrophin", "Phản ứng trùng ngưng", "Phản ứng thủy phân"],
      correctIndex: 0,
      explanation: "Alkane chỉ chứa liên kết đơn C-C và C-H bền vững, vì vậy phản ứng đặc trưng của alkane là phản ứng thế nguyên tử hydrogen bằng halogen theo cơ chế gốc tự do (SR).",
    },
    {
      id: "q-11-4-ex2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Để phân biệt hai bình khí mất nhãn chứa metan (CH₄) và etilen (C₂H₄), thuốc thử đơn giản nhất cần dùng là:",
      options: [
        "Dung dịch nước Bromine (Br₂)",
        "Dung dịch NaOH",
        "Khí Hydrogen (H₂)",
        "Quỳ tím ẩm"
      ],
      correctIndex: 0,
      explanation: "Etilen (C₂H₄) có liên kết đôi C=C phản ứng cộng nhanh với nước brom ở điều kiện thường làm mất màu nâu đỏ của dung dịch brom. Metan (CH₄) là alkane không phản ứng với nước brom ở điều kiện thường.",
    },
    {
      id: "q-11-4-ex3",
      grade: 11,
      level: "Vận dụng",
      questionText: "Chất nào sau đây khi tác dụng với dung dịch AgNO₃ trong NH₃ sinh ra kết tủa màu vàng nhạt?",
      options: ["Propyne (CH₃-C≡CH)", "Propene (CH₃-CH=CH₂)", "But-2-yne (CH₃-C≡C-CH₃)", "Benzene (C₆H₆)"],
      correctIndex: 0,
      explanation: "Chỉ những alkyne có liên kết ba ở đầu mạch (alk-1-yne) như propin mới có nguyên tử hydrogen linh động ở C≡C, có khả năng bị thay thế bởi cation Ag⁺ tạo kết tủa vàng nhạt: CH₃-C≡CAg.",
    },
    {
      id: "q-11-4-ex4",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Khi cho toluene (methylbenzene, C₆H₅CH₃) phản ứng với Br₂ khan có xúc tác bột Fe đun nóng, sản phẩm thế chính thu được ở các vị trí:",
      options: [
        "Ortho và Para",
        "Meta",
        "Chỉ ở vị trí Meta",
        "Thế hoàn toàn vào nhánh -CH₃"
      ],
      correctIndex: 0,
      explanation: "Nhóm methyl (-CH₃) là nhóm thế đẩy electron (loại I), hoạt hóa vòng benzen và định hướng phản ứng thế electrophile vào các vị trí ortho (o-) và para (p-).",
    },
    {
      id: "q-11-4-ex5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Trùng hợp hoàn toàn 2,8 tấn ethylene (C₂H₄) với hiệu suất 85% thu được m tấn nhựa polyethylene (PE). Giá trị của m là:",
      options: ["2,38 tấn", "2,80 tấn", "3,29 tấn", "2,45 tấn"],
      correctIndex: 0,
      explanation: "Phương trình: nCH₂=CH₂ → (-CH₂-CH₂-)n. Theo định luật bảo toàn khối lượng, 2,8 tấn C₂H₄ phản ứng 100% tạo ra 2,8 tấn PE. Với hiệu suất 85%, lượng nhựa PE thu được thực tế = 2,8 × 0,85 = 2,38 tấn.",
    }
  ],

  // ==================== CHƯƠNG 5: DẪN XUẤT HALOGEN - ALCOHOL - PHENOL ====================
  "g11-c5": [
    {
      id: "q-11-5-ex1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Alcohol nào sau đây thuộc loại alcohol bậc III?",
      options: [
        "2-methylpropan-2-ol ((CH₃)₃C-OH)",
        "Propan-2-ol (CH₃-CH(OH)-CH₃)",
        "Ethanol (C₂H₅OH)",
        "Butan-1-ol (CH₃CH₂CH₂CH₂OH)"
      ],
      correctIndex: 0,
      explanation: "Bậc của alcohol là bậc của nguyên tử cacbon liên kết trực tiếp với nhóm -OH. Trong (CH₃)₃C-OH, nguyên tử C mang nhóm -OH liên kết với 3 nguyên tử C khác nên là C bậc III, do đó hợp chất là alcohol bậc III.",
    },
    {
      id: "q-11-5-ex2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Oxi hóa không hoàn toàn propan-2-ol (alcohol bậc II) bằng CuO nung nóng thu được sản phẩm hữu cơ thuộc loại hợp chất nào?",
      options: ["Ketone (Acetone)", "Aldehyde (Propanal)", "Carboxylic acid", "Alkene"],
      correctIndex: 0,
      explanation: "Oxi hóa alcohol bậc I tạo aldehyde; oxi hóa alcohol bậc II tạo ketone: CH₃-CH(OH)-CH₃ + CuO → CH₃-CO-CH₃ (acetone) + Cu + H₂O.",
    },
    {
      id: "q-11-5-ex3",
      grade: 11,
      level: "Vận dụng",
      questionText: "Thuốc thử nào sau đây dùng để phân biệt ethanol (alcohol đơn chức) và glycerol (alcohol đa chức có 3 nhóm -OH kề nhau)?",
      options: [
        "Cu(OH)₂ ở nhiệt độ phòng",
        "Dung dịch AgNO₃/NH₃",
        "Kim loại Natri (Na)",
        "Dung dịch NaOH"
      ],
      correctIndex: 0,
      explanation: "Glycerol hòa tan kết tủa Cu(OH)₂ ở nhiệt độ thường tạo phức chất màu xanh lam thẫm đặc trưng (phản ứng của polyalcohol có từ 2 nhóm -OH kề nhau). Ethanol là alcohol đơn chức không có phản ứng này.",
    },
    {
      id: "q-11-5-ex4",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Phenol (C₆H₅OH) có tính acid yếu hơn H₂CO₃ nhưng mạnh hơn alcohol thông thường. Điều đó được chứng minh bằng phản ứng:",
      options: [
        "Phenol tác dụng với dung dịch NaOH nhưng sục CO₂ vào dung dịch muối phenolate lại tái tạo phenol",
        "Phenol tác dụng với kim loại Na giải phóng khí H₂",
        "Phenol làm quỳ tím hóa đỏ tươi",
        "Phenol phản ứng với NaHCO₃ sủi bọt khí CO₂"
      ],
      correctIndex: 0,
      explanation: "C₆H₅OH + NaOH → C₆H₅ONa + H₂O chứng minh phenol có tính acid mạnh hơn alcohol (alcohol không phản ứng với NaOH). C₆H₅ONa + CO₂ + H₂O → C₆H₅OH + NaHCO₃ chứng minh phenol có tính acid yếu hơn axit carbonic (bị H₂CO₃ đẩy ra khỏi muối).",
    },
    {
      id: "q-11-5-ex5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Nhỏ từ từ dung dịch nước Bromine dư vào dung dịch chứa 9,4 gam phenol (C₆H₅OH). Khối lượng kết tủa trắng 2,4,6-tribromophenol (M = 331 g/mol) thu được là:",
      options: ["33,1 gam", "24,8 gam", "16,55 gam", "49,65 gam"],
      correctIndex: 0,
      explanation: "n(phenol) = 9,4 / 94 = 0,1 mol. Phản ứng: C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ (trắng) + 3HBr. Theo phương trình: n(kết tủa) = n(phenol) = 0,1 mol. Khối lượng kết tủa = 0,1 × 331 = 33,1 gam.",
    }
  ],

  // ==================== CHƯƠNG 6: HỢP CHẤT CARBONYL & CARBOXYLIC ACID ====================
  "g11-c6": [
    {
      id: "q-11-6-ex1",
      grade: 11,
      level: "Nhận biết",
      questionText: "Khi cho formaldehyde (HCHO) tác dụng với thuốc thử Tollens ([Ag(NH₃)₂]OH) đun nóng nhẹ, 1 mol HCHO có thể tạo ra tối đa bao nhiêu mol Ag kim loại?",
      options: ["4 mol Ag", "2 mol Ag", "1 mol Ag", "3 mol Ag"],
      correctIndex: 0,
      explanation: "Phân tử HCHO có cấu tạo H-CO-H (mang 2 phía nhóm -CHO). Khi phản ứng với thuốc thử Tollens, 1 mol HCHO tạo ra tối đa 4 mol kết tủa Ag, trong khi các aldehyde đơn chức khác chỉ tạo ra 2 mol Ag.",
    },
    {
      id: "q-11-6-ex2",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Phản ứng tạo kết tủa màu vàng iodoform (CHI₃) khi tác dụng với I₂ trong môi trường kiềm dùng để nhận biết các hợp chất có cấu trúc nào sau đây?",
      options: [
        "Nhóm methyl ketone (CH₃-CO-) hoặc alcohol có nhóm CH₃-CH(OH)-",
        "Mọi hợp chất chứa liên kết đôi C=C",
        "Các acid cacboxylic có mạch carbon dài",
        "Hợp chất thơm chứa nhóm thế nitro"
      ],
      correctIndex: 0,
      explanation: "Thuốc thử I₂/NaOH phản ứng đặc trưng với các hợp chất có nhóm methyl kế bên carbonyl: CH₃-C(=O)-R hoặc các alcohol bậc hai dạng CH₃-CH(OH)-R (bị oxi hóa thành methyl ketone) tạo kết tủa vàng CHI₃ có mùi sát trùng đặc trưng.",
    },
    {
      id: "q-11-6-ex3",
      grade: 11,
      level: "Vận dụng",
      questionText: "Dãy chất nào sau đây sắp xếp theo thứ tự nhiệt độ sôi TĂNG DẦN?",
      options: [
        "CH₄ < CH₃CHO < C₂H₅OH < CH₃COOH",
        "CH₃COOH < C₂H₅OH < CH₃CHO < CH₄",
        "CH₄ < C₂H₅OH < CH₃CHO < CH₃COOH",
        "CH₃CHO < CH₄ < C₂H₅OH < CH₃COOH"
      ],
      correctIndex: 0,
      explanation: "CH₄ là hydrocarbon không phân cực (sôi thấp nhất); CH₃CHO có liên kết phân cực nhưng không tạo liên kết hydrogen liên phân tử; C₂H₅OH tạo liên kết hydrogen; CH₃COOH tạo liên kết hydrogen dạng dimer (nhị hợp) bền chặt nhất nên có nhiệt độ sôi cao nhất.",
    },
    {
      id: "q-11-6-ex4",
      grade: 11,
      level: "Thông hiểu",
      questionText: "Để đun sôi ấm nước có nhiều cặn trắng (chủ yếu là CaCO₃ và MgCO₃ hình thành do nước cứng), bà nội trợ thường dùng giấm ăn (dung dịch acetic acid 5%). Cặn trắng bị hòa tan theo phản ứng nào?",
      options: [
        "2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + CO₂↑ + H₂O",
        "CH₃COOH + CaCO₃ → Ca(OH)₂ + CH₃COCH₃",
        "CH₃COOH + CaCO₃ → CaO + CO₂↑ + H₂O",
        "Phản ứng trung hòa kiềm tạo muối không tan"
      ],
      correctIndex: 0,
      explanation: "Acetic acid là một acid hữu cơ có tính acid mạnh hơn axit carbonic (H₂CO₃), do đó hòa tan dễ dàng cặn đá vôi CaCO₃ sinh ra muối canxi axetat tan tốt và giải phóng khí CO₂.",
    },
    {
      id: "q-11-6-ex5",
      grade: 11,
      level: "Vận dụng cao",
      questionText: "Đun nóng 6,0 gam CH₃COOH với 6,0 gam C₂H₅OH (xúc tác H₂SO₄ đặc) đến khi cân bằng, thu được 5,28 gam este etyl axetat. Hiệu suất của phản ứng este hóa trên là:",
      options: ["60%", "68%", "75%", "80%"],
      correctIndex: 0,
      explanation: "n(CH₃COOH) = 6,0 / 60 = 0,1 mol; n(C₂H₅OH) = 6,0 / 46 ≈ 0,13 mol. Vì tỉ lệ phản ứng là 1:1 nên tính hiệu suất theo lượng thiếu là CH₃COOH (0,1 mol). n(este lý thuyết) = 0,1 mol => m(este lý thuyết) = 0,1 × 88 = 8,8 g. Hiệu suất phản ứng: H = (5,28 / 8,8) × 100% = 60%.",
    }
  ]
};
