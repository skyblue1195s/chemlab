import { Question } from "../types";

export const GRADE_12_EXTRA_QUESTIONS: Record<string, Question[]> = {
  // ==================== CHƯƠNG 1: ESTER - LIPID & CHẤT GIẶT RỬA ====================
  "g12-c1": [
    {
      id: "q-12-1-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Nhiệt độ sôi của este thường thấp hơn nhiều so với alcohol và carboxylic acid có cùng số nguyên tử carbon hoặc cùng phân tử khối là do:",
      options: [
        "Giữa các phân tử este không tạo được liên kết hydrogen liên phân tử",
        "Khối lượng phân tử của este quá nhỏ",
        "Este có cấu trúc mạch phân nhánh",
        "Liên kết C-O trong nhóm este kém bền hơn"
      ],
      correctIndex: 0,
      explanation: "Este không có nguyên tử hydro linh động liên kết với nguyên tử oxy (không có nhóm -OH), nên giữa các phân tử este không tồn tại liên kết hydrogen liên phân tử như alcohol hay carboxylic acid, dẫn đến nhiệt độ sôi thấp hơn hẳn.",
    },
    {
      id: "q-12-1-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Khi xà phòng hóa hoàn toàn tristearin ((C₁₇H₃₅COO)₃C₃H₅) bằng dung dịch NaOH đun nóng, sản phẩm thu được gồm có:",
      options: [
        "Sodium stearate (xà phòng) và glycerol",
        "Sodium oleate và ethylene glycol",
        "Stearic acid và glycerol",
        "Sodium palmitate và propanol"
      ],
      correctIndex: 0,
      explanation: "Phản ứng xà phòng hóa tristearin: (C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₅COONa (sodium stearate - thành phần chính của xà phòng) + C₃H₅(OH)₃ (glycerol).",
    },
    {
      id: "q-12-1-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Chất giặt rửa tổng hợp (như sodium alkylbenzenesulfonate) có ưu điểm vượt trội nào sau đây so với xà phòng truyền thống khi sử dụng trong sinh hoạt?",
      options: [
        "Không bị kết tủa khi giặt trong nước cứng (nước chứa ion Ca²⁺ và Mg²⁺)",
        "Hoàn toàn không gây ô nhiễm nguồn nước",
        "Có thể ăn được và dùng làm gia vị thực phẩm",
        "Không làm phai màu mọi loại vải dệt thoi"
      ],
      correctIndex: 0,
      explanation: "Xà phòng truyền thống phản ứng với Ca²⁺, Mg²⁺ trong nước cứng tạo kết tủa muối canxi/magie stearat làm giảm bọt và bám bẩn quần áo. Muối sunfonat trong chất giặt rửa tổng hợp tan tốt trong nước cứng nên vẫn giữ nguyên khả năng tẩy rửa.",
    },
    {
      id: "q-12-1-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Phản ứng hydrogen hóa chất béo không no (như triolein) thành chất béo no (tristearin) bằng khí H₂ (xúc tác Ni, t°) được ứng dụng rộng rãi trong công nghiệp để:",
      options: [
        "Sản xuất bơ thực vật (margarine) và làm nến, xà phòng",
        "Sản xuất cồn y tế sát khuẩn",
        "Tách glycerol nguyên chất",
        "Chống hiện tượng axit hóa dầu ăn"
      ],
      correctIndex: 0,
      explanation: "Hydrogen hóa dầu thực vật (chất béo lỏng chứa nối đôi C=C) chuyển thành mỡ rắn (bơ thực vật / margarine), giúp dễ vận chuyển, bảo quản được lâu hơn và hạn chế bị ôi thiu do oxi hóa.",
    },
    {
      id: "q-12-1-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Thủy phân hoàn toàn 8,8 gam một este đơn chức, no, mạch hở X bằng dung dịch NaOH vừa đủ, thu được 8,2 gam muối hữu cơ Y. Tên gọi của este X là:",
      options: [
        "Ethyl acetate (CH₃COOC₂H₅)",
        "Methyl propionate (C₂H₅COOCH₃)",
        "Propyl formate (HCOOC₃H₇)",
        "Methyl acetate (CH₃COOCH₃)"
      ],
      correctIndex: 0,
      explanation: "Este đơn chức RCOOR' + NaOH → RCOONa + R'OH. Số mol este = n(muối) = 8,8 / (R + R' + 44) = 8,2 / (R + 67). Giải phương trình ta được: 8,8(R + 67) = 8,2(R + R' + 44). Vì este no đơn chức có M = 88 (C₄H₈O₂), suy ra số mol este = 8,8 / 88 = 0,1 mol. Khối lượng mol của muối = 8,2 / 0,1 = 82 g/mol (R + 67 = 82 => R = 15 là gốc CH₃-). Gốc R' có M = 88 - 59 = 29 (C₂H₅-). Vậy X là Ethyl acetate (CH₃COOC₂H₅).",
    }
  ],

  // ==================== CHƯƠNG 2: CARBOHYDRATE ====================
  "g12-c2": [
    {
      id: "q-12-2-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Carbohydrate nào sau đây thuộc nhóm disaccharide có nhiều trong cây mía, củ cải đường và hoa thốt nốt?",
      options: ["Saccharose (Sucrose)", "Glucose", "Fructose", "Cellulose"],
      correctIndex: 0,
      explanation: "Saccharose (C₁₂H₂₂O₁₁) là disaccharide cấu tạo từ 1 gốc α-glucose và 1 gốc β-fructose liên kết qua nguyên tử oxy (liên kết α-1,2-glycosidic), là thành phần chính của đường mía, đường cát thương phẩm.",
    },
    {
      id: "q-12-2-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Khi nhỏ dung dịch Iodine (I₂) vào mặt cắt củ khoai tây hoặc hồ tinh bột nguội, hiện tượng xuất hiện màu xanh tím đặc trưng là do:",
      options: [
        "Cấu trúc xoắn hình lò xo của phân tử amylose trong tinh bột giữ các phân tử I₂ tạo phức hấp phụ màu xanh tím",
        "Phản ứng oxi hóa khử tạo kết tủa iodat",
        "Tinh bột bị thủy phân thành đường glucose",
        "Iodine phản ứng tạo liên kết este với tinh bột"
      ],
      correctIndex: 0,
      explanation: "Các phân tử amylose trong tinh bột cuộn xoắn lại thành hình trụ lò xo. Khi cho dung dịch iot vào, các phân tử iot lọt vào trong lòng ống xoắn tạo phức chất hấp phụ có màu xanh tím. Khi đun nóng, cấu trúc xoắn duỗi ra làm mất màu; để nguội lại xuất hiện màu xanh tím.",
    },
    {
      id: "q-12-2-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Để chứng minh trong phân tử glucose có nhiều nhóm hydroxyl (-OH) ở các nguyên tử carbon kề nhau, người ta dùng phản ứng nào sau đây?",
      options: [
        "Tác dụng với Cu(OH)₂ ở nhiệt độ phòng tạo dung dịch màu xanh lam thẫm",
        "Phản ứng tráng bạc với thuốc thử Tollens",
        "Phản ứng lên men rượu tạo khí CO₂",
        "Phản ứng khử với H₂ xúc tác Ni, t°"
      ],
      correctIndex: 0,
      explanation: "Glucose hòa tan kết tủa Cu(OH)₂ ở nhiệt độ thường tạo phức chất xanh lam thẫm, chứng minh trong phân tử glucose có nhiều nhóm -OH ở vị trí liền kề nhau. Còn phản ứng tráng bạc chứng minh glucose có nhóm aldehyde (-CHO).",
    },
    {
      id: "q-12-2-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Cellulose trinitrate ([C₆H₇O₂(ONO₂)₃]n) là hợp chất rất dễ cháy nổ mạnh không tạo khói, được điều chế từ cellulose tác dụng với:",
      options: [
        "HNO₃ đặc có xúc tác H₂SO₄ đặc, đun nóng",
        "Dung dịch HNO₃ loãng ở nhiệt độ phòng",
        "Khí NO₂ ở áp suất cao",
        "Muối KNO₃ trong môi trường acid"
      ],
      correctIndex: 0,
      explanation: "Cellulose trinitrate (thuốc súng không khói) được điều chế bằng phản ứng ester hóa giữa 3 nhóm -OH tự do của mỗi mắt xích cellulose với HNO₃ đặc trong môi trường H₂SO₄ đặc làm xúc tác hút nước.",
    },
    {
      id: "q-12-2-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Lên men m gam glucose thành ethanol với hiệu suất toàn bộ quá trình đạt 75%. Toàn bộ lượng khí CO₂ sinh ra được hấp thụ hoàn toàn vào dung dịch Ca(OH)₂ dư, thu được 40 gam kết tủa trắng CaCO₃. Giá trị của m là:",
      options: ["48,0 gam", "36,0 gam", "27,0 gam", "54,0 gam"],
      correctIndex: 0,
      explanation: "n(CaCO₃) = 40 / 100 = 0,4 mol = n(CO₂). Phản ứng lên men: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Theo phương trình: n(glucose phản ứng) = n(CO₂) / 2 = 0,4 / 2 = 0,2 mol. Với hiệu suất 75%, số mol glucose ban đầu cần dùng = 0,2 / 0,75 = 4/15 mol. Khối lượng m = (4/15) × 180 = 48,0 gam.",
    }
  ],

  // ==================== CHƯƠNG 3: HỢP CHẤT CHỨA NITROGEN ====================
  "g12-c3": [
    {
      id: "q-12-3-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Chất nào sau đây là amine bậc II?",
      options: [
        "Dimethylamine (CH₃-NH-CH₃)",
        "Methylamine (CH₃-NH₂)",
        "Trimethylamine ((CH₃)₃N)",
        "Aniline (C₆H₅-NH₂)"
      ],
      correctIndex: 0,
      explanation: "Bậc của amine bằng số nguyên tử H trong phân tử NH₃ bị thay thế bởi gốc hydrocarbon. Trong dimethylamine, 2 nguyên tử H bị thay thế bởi 2 gốc methyl (-CH₃) nên là amine bậc II.",
    },
    {
      id: "q-12-3-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Dãy nào sau đây sắp xếp các chất theo thứ tự lực base GIẢM DẦN?",
      options: [
        "CH₃NH₂ > NH₃ > C₆H₅NH₂ (aniline)",
        "C₆H₅NH₂ > NH₃ > CH₃NH₂",
        "NH₃ > CH₃NH₂ > C₆H₅NH₂",
        "CH₃NH₂ > C₆H₅NH₂ > NH₃"
      ],
      correctIndex: 0,
      explanation: "Gốc alkyl đẩy electron (-CH₃) làm tăng mật độ điện tích âm trên nguyên tử N, làm tăng lực base: CH₃NH₂ > NH₃. Gốc phenyl hút electron (-C₆H₅) làm giảm mạnh mật độ electron trên N, làm cho aniline có tính base rất yếu: NH₃ > C₆H₅NH₂.",
    },
    {
      id: "q-12-3-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Amino acid là hợp chất hữu cơ tạp chức có tính chất lưỡng tính (vừa tác dụng với acid mạnh, vừa tác dụng với base mạnh) vì trong phân tử chứa đồng thời:",
      options: [
        "Nhóm carboxyl (-COOH có tính acid) và nhóm amino (-NH₂ có tính base)",
        "Nhóm carbonyl và nhóm hydroxyl",
        "Nhóm aldehyde và liên kết este",
        "Hai nhóm amino nằm kề nhau"
      ],
      correctIndex: 0,
      explanation: "Nhóm -COOH có tính acid nhận phản ứng với dung dịch kiềm (NaOH, KOH), còn nhóm -NH₂ có tính base nhận proton H⁺ từ dung dịch acid (HCl, H₂SO₄), do đó amino acid là hợp chất lưỡng tính.",
    },
    {
      id: "q-12-3-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Phản ứng màu biuret với Cu(OH)₂ trong môi trường kiềm tạo phức chất màu tím đặc trưng xảy ra với chất nào sau đây?",
      options: [
        "Tripeptide Gly-Ala-Val (hoặc lòng trắng trứng albumin)",
        "Dipeptide Gly-Ala",
        "Amino acid tự do Glycine",
        "Carbohydrate Maltose"
      ],
      correctIndex: 0,
      explanation: "Phản ứng màu biuret yêu cầu phân tử phải chứa từ 2 liên kết peptide trở lên (tức là từ tripeptide trở lên hoặc protein). Dipeptide Gly-Ala chỉ có 1 liên kết peptide nên không có phản ứng màu biuret.",
    },
    {
      id: "q-12-3-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Cho 7,5 gam amino acid X có công thức H₂N-CH₂-COOH (Glycine, M = 75) tác dụng vừa đủ với dung dịch NaOH. Khối lượng muối sodium glycinate thu được sau khi cô cạn dung dịch là:",
      options: ["9,7 gam", "8,2 gam", "10,5 gam", "11,2 gam"],
      correctIndex: 0,
      explanation: "n(Gly) = 7,5 / 75 = 0,1 mol. Phản ứng: H₂N-CH₂-COOH + NaOH → H₂N-CH₂-COONa + H₂O. Muối sodium glycinate có M = 75 - 1 + 23 = 97 g/mol. Khối lượng muối thu được = 0,1 × 97 = 9,7 gam.",
    }
  ],

  // ==================== CHƯƠNG 4: POLYMER & VẬT LIỆU POLYMER ====================
  "g12-c4": [
    {
      id: "q-12-4-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Tơ nilon-6,6 thuộc loại tơ polyamide tổng hợp, được điều chế bằng phản ứng trùng ngưng giữa:",
      options: [
        "Hexamethylenediamine (H₂N-[CH₂]₆-NH₂) và Adipic acid (HOOC-[CH₂]₄-COOH)",
        "Caprolactam và ethylene glycol",
        "Terephthalic acid và ethylene glycol",
        "Acrylonitrile và vinyl chloride"
      ],
      correctIndex: 0,
      explanation: "Tơ nilon-6,6 được tổng hợp bằng phản ứng trùng ngưng giữa hexametylendiamin (chứa 6 nguyên tử C) và axit ađipic (chứa 6 nguyên tử C) giải phóng nước: n H₂N-[CH₂]₆-NH₂ + n HOOC-[CH₂]₄-COOH → (-NH-[CH₂]₆-NH-CO-[CH₂]₄-CO-)n + 2n H₂O.",
    },
    {
      id: "q-12-4-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Cao su lưu hóa có độ bền cơ học, tính đàn hồi và khả năng chịu nhiệt vượt trội hơn hẳn cao su thiên nhiên thô là do:",
      options: [
        "Các chuỗi polymer mạch thẳng được kết nối với nhau bằng các cầu nối disunfua (-S-S-) tạo thành cấu trúc mạng không gian",
        "Khối lượng phân tử của cao su giảm đi nhiều lần",
        "Toàn bộ liên kết đôi C=C đã bị phá vỡ hoàn toàn",
        "Lưu huỳnh tạo liên kết ion bền vững với cao su"
      ],
      correctIndex: 0,
      explanation: "Khi lưu hóa cao su ở nhiệt độ 130 - 150°C với lưu huỳnh, các nguyên tử S tạo các cầu nối đisunfua (-S-S-) nối các mạch cao su riêng rẽ thành mạng không gian 3 chiều vững chắc, giúp cao su co giãn tốt hơn, khó bị biến dạng và mài mòn.",
    },
    {
      id: "q-12-4-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Ký hiệu tam giác tái chế số 1 (PETE hoặc PET) thường thấy in dưới đáy các chai nước suối, chai nước ngọt có ga được làm từ polymer nào?",
      options: [
        "Poly(ethylene terephthalate)",
        "Poly(vinyl chloride)",
        "High-density polyethylene",
        "Polypropylene"
      ],
      correctIndex: 0,
      explanation: "PET (hoặc PETE - mã số 1) là poly(ethylene terephthalate), polymer thuộc loại polyester tổng hợp từ axit terephtalic và etylen glycol, có độ trong suốt cao, chịu áp lực tốt, chuyên dùng đóng chai đồ uống và sợi may mặc (tơ dacron).",
    },
    {
      id: "q-12-4-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Chất dẻo nào sau đây có tính dẫn điện đặc biệt do chứa hệ liên kết đôi liên hợp dài, từng đạt Giải Nobel Hóa học năm 2000?",
      options: ["Polyacetylene", "Polyethylene (PE)", "Poly(vinyl chloride) (PVC)", "Polystyrene (PS)"],
      correctIndex: 0,
      explanation: "Polyacetylene (-[CH=CH]n-) khi được pha tạp (doping) với halogen hoặc chất oxi hóa có khả năng dẫn điện gần bằng kim loại đồng nhờ sự chuyển động tự do của các electron π dọc theo mạch liên kết liên hợp dài.",
    },
    {
      id: "q-12-4-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Một đoạn mạch polymer poly(vinyl chloride) (PVC) có phân tử khối trung bình là 125.000 g/mol. Hệ số trùng hợp trung bình (số mắt xích n) của đoạn mạch PVC đó là:",
      options: ["2000", "2500", "1500", "1250"],
      correctIndex: 0,
      explanation: "Mắt xích PVC là (-CH₂-CHCl-) có khối lượng mol = 12 × 2 + 1 × 3 + 35,5 = 62,5 g/mol. Hệ số trùng hợp n = Khối lượng mol phân tử / Khối lượng 1 mắt xích = 125.000 / 62,5 = 2000.",
    }
  ],

  // ==================== CHƯƠNG 5: PIN ĐIỆN & ĐIỆN PHÂN ====================
  "g12-c5": [
    {
      id: "q-12-5-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Trong pin Galvani Daniell (Zn - Cu), quá trình xảy ra tại điện cực âm (anode Zn) là:",
      options: [
        "Quá trình oxi hóa kẽm: Zn → Zn²⁺ + 2e",
        "Quá trình khử ion đồng: Cu²⁺ + 2e → Cu",
        "Quá trình khử kẽm: Zn²⁺ + 2e → Zn",
        "Quá trình oxi hóa ion đồng: Cu → Cu²⁺ + 2e"
      ],
      correctIndex: 0,
      explanation: "Trong pin điện hóa Galvani: Cực âm (anode) xảy ra quá trình oxi hóa chất khử mạnh hơn (Zn → Zn²⁺ + 2e); cực dương (cathode) xảy ra quá trình khử ion kim loại có thế điện cực cao hơn (Cu²⁺ + 2e → Cu).",
    },
    {
      id: "q-12-5-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Cho thế điện cực chuẩn: E°(Zn²⁺/Zn) = -0,76 V; E°(Cu²⁺/Cu) = +0,34 V. Sức điện động chuẩn (E°_pin) của pin điện hóa Zn - Cu là:",
      options: ["+1,10 V", "+0,42 V", "-1,10 V", "+0,76 V"],
      correctIndex: 0,
      explanation: "Sức điện động chuẩn của pin: E°_pin = E°(cathode) - E°(anode) = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 - (-0,76) = +1,10 V.",
    },
    {
      id: "q-12-5-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Khi điện phân dung dịch CuSO₄ với hai điện cực trơ (graphite), tại cực dương (anode) xảy ra phản ứng nào sau đây?",
      options: [
        "2H₂O → O₂↑ + 4H⁺ + 4e",
        "Cu²⁺ + 2e → Cu",
        "2SO₄²⁻ → S₂O₈²⁻ + 2e",
        "2H⁺ + 2e → H₂↑"
      ],
      correctIndex: 0,
      explanation: "Ion SO₄²⁻ chứa S ở mức oxi hóa cao nhất (+6) nên không bị oxi hóa ở anot trong dung dịch nước. Nước bị oxi hóa tại anot sinh ra khí oxi và ion H⁺: 2H₂O → O₂ + 4H⁺ + 4e, làm cho dung dịch sau điện phân có môi trường acid.",
    },
    {
      id: "q-12-5-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Trong công nghiệp sản xuất nhôm bằng phương pháp điện phân nóng chảy Al₂O₃, cryolite (Na₃AlF₆) được thêm vào với vai trò quan trọng nhất là:",
      options: [
        "Hạ nhiệt độ nóng chảy của Al₂O₃ từ 2050°C xuống khoảng 950°C và tăng độ dẫn điện của hỗn hợp",
        "Làm tăng khối lượng riêng của nhôm lỏng",
        "Ngăn cản khí CO₂ ăn mòn cực than chì",
        "Đóng vai trò là chất oxi hóa nhôm"
      ],
      correctIndex: 0,
      explanation: "Al₂O₃ có nhiệt độ nóng chảy rất cao (2050°C), tiêu tốn năng lượng khổng lồ. Hòa tan Al₂O₃ vào criolit nóng chảy giúp hạ nhiệt độ nóng chảy xuống ~950°C, tiết kiệm điện năng, tăng độ dẫn điện và tạo lớp màng bảo vệ nhôm lỏng không bị oxi hóa.",
    },
    {
      id: "q-12-5-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Điện phân hoàn toàn dung dịch chứa 0,2 mol CuCl₂ với điện cực trơ, cường độ dòng điện I = 5A trong thời gian t = 3860 giây. Khối lượng kim loại đồng (Cu = 64) bám vào catot là:",
      options: ["6,4 gam", "12,8 gam", "3,2 gam", "9,6 gam"],
      correctIndex: 0,
      explanation: "Số mol electron trao đổi qua dây dẫn: n_e = (I × t) / F = (5 × 3860) / 96500 = 0,2 mol. Tại catot: Cu²⁺ + 2e → Cu. Số mol Cu tạo thành = n_e / 2 = 0,2 / 2 = 0,1 mol (nhỏ hơn lượng Cu²⁺ ban đầu 0,2 mol nên Cu²⁺ vẫn còn dư). Khối lượng Cu bám vào catot = 0,1 × 64 = 6,4 gam.",
    }
  ],

  // ==================== CHƯƠNG 6: ĐẠI CƯƠNG VỀ KIM LOẠI & LUYỆN KIM ====================
  "g12-c6": [
    {
      id: "q-12-6-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Tính chất vật lý chung của kim loại (tính dẻo, tính dẫn điện, tính dẫn nhiệt và ánh kim) được quyết định chủ yếu bởi:",
      options: [
        "Sự chuyển động tự do của các electron trong mạng tinh thể kim loại",
        "Bán kính nguyên tử lớn của kim loại",
        "Liên kết ion giữa các cation kim loại",
        "Độ âm điện cực thấp của kim loại"
      ],
      correctIndex: 0,
      explanation: "Các electron tự do trong mạng tinh thể kim loại có thể di chuyển định hướng dưới điện trường (dẫn điện), truyền động năng nhanh chóng (dẫn nhiệt), phản xạ ánh sáng (ánh kim) và cho phép các lớp mạng tinh thể trượt lên nhau mà không vỡ (tính dẻo).",
    },
    {
      id: "q-12-6-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Để bảo vệ vỏ tàu biển bằng thép (hợp kim của sắt) khỏi bị ăn mòn điện hóa trong nước biển, người ta thường áp dụng phương pháp bảo vệ điện hóa bằng cách:",
      options: [
        "Gắn các tấm kim loại Kẽm (Zinc - Zn) vào phần vỏ tàu ngâm dưới nước biển",
        "Gắn các tấm kim loại Đồng (Cu) vào vỏ tàu",
        "Gắn các tấm kim loại Chì (Pb) vào vỏ tàu",
        "Sơn một lớp thủy ngân lên vỏ tàu"
      ],
      correctIndex: 0,
      explanation: "Kẽm có tính khử mạnh hơn sắt (thế điện cực âm hơn Fe). Khi ngâm trong chất điện li là nước biển, Zn đóng vai trò là cực âm (anode) bị ăn mòn hy sinh (Zn → Zn²⁺ + 2e), còn vỏ thép đóng vai trò cathode được bảo vệ an toàn.",
    },
    {
      id: "q-12-6-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Kim loại nào sau đây có thể được điều chế bằng phương pháp nhiệt luyện (dùng khí CO hoặc H₂ để khử oxit kim loại ở nhiệt độ cao)?",
      options: ["Iron (Sắt - Fe)", "Aluminium (Nhôm - Al)", "Magnesium (Mg)", "Sodium (Natri - Na)"],
      correctIndex: 0,
      explanation: "Phương pháp nhiệt luyện dùng CO, H₂ chỉ khử được các oxit của kim loại đứng sau nhôm trong dãy hoạt động hóa học (như ZnO, Fe₂O₃, CuO...). Các oxit kim loại từ Al trở về trước (Al₂O₃, MgO, Na₂O...) rất bền, phải dùng điện phân nóng chảy.",
    },
    {
      id: "q-12-6-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Nhúng một lá kẽm (Zn) vào dung dịch CuSO₄ có pha vài giọt dung dịch H₂SO₄ loãng. Hiện tượng ăn mòn xảy ra đối với lá kẽm là:",
      options: [
        "Ăn mòn điện hóa học xảy ra với tốc độ rất nhanh",
        "Chỉ xảy ra ăn mòn hóa học thuần túy",
        "Không có phản ứng nào xảy ra",
        "Lá kẽm bị tan rã do hiện tượng gỉ sét tự nhiên"
      ],
      correctIndex: 0,
      explanation: "Zn đẩy Cu ra khỏi CuSO₄: Zn + Cu²⁺ → Zn²⁺ + Cu. Kim loại Cu sinh ra bám trực tiếp lên lá Zn, tạo thành cặp pin điện hóa Zn - Cu cùng tiếp xúc trong dung dịch điện li, dẫn đến ăn mòn điện hóa học khiến bọt khí H₂ thoát ra dữ dội và kẽm tan nhanh chóng.",
    },
    {
      id: "q-12-6-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Nhúng một thanh Fe nặng 50 gam vào 200 mL dung dịch CuSO₄ 1M. Sau một thời gian lấy thanh Fe ra, rửa sạch, sấy khô cân lại thấy thanh Fe nặng 51,6 gam (giả sử toàn bộ Cu giải phóng đều bám chặt vào thanh Fe). Nồng độ mol của ion Fe²⁺ trong dung dịch sau phản ứng là:",
      options: ["1,0 M", "0,5 M", "0,8 M", "1,2 M"],
      correctIndex: 0,
      explanation: "Phản ứng: Fe + Cu²⁺ → Fe²⁺ + Cu. Cứ 1 mol Fe (56 g) tan ra thì có 1 mol Cu (64 g) bám vào => khối lượng thanh kim loại tăng: 64 - 56 = 8 gam. Khối lượng tăng thực tế = 51,6 - 50 = 1,6 gam. Số mol Fe phản ứng = 1,6 / 8 = 0,2 mol = n(Fe²⁺ sinh ra). Nồng độ [Fe²⁺] = 0,2 / 0,2 = 1,0 M.",
    }
  ],

  // ==================== CHƯƠNG 7: KIM LOẠI NHÓM IA, IIA & NHÔM (Al) ====================
  "g12-c7": [
    {
      id: "q-12-7-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Kim loại kiềm (Li, Na, K, Rb, Cs) đều có cấu trúc mạng tinh thể thuộc loại nào sau đây?",
      options: [
        "Mạng lập phương tâm khối",
        "Mạng lập phương tâm diện",
        "Mạng lục phương",
        "Mạng tứ diện đều"
      ],
      correctIndex: 0,
      explanation: "Tất cả các kim loại kiềm nhóm IA đều có mạng tinh thể lập phương tâm khối (độ đặc khít chỉ 68%), mật độ electron tự do thấp, dẫn đến khối lượng riêng nhỏ, nhiệt độ nóng chảy thấp và rất mềm (có thể cắt bằng dao).",
    },
    {
      id: "q-12-7-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Nước cứng tạm thời là loại nước chứa nhiều ion Ca²⁺, Mg²⁺ cùng với anion nào sau đây?",
      options: ["Hydrogencarbonate (HCO₃⁻)", "Chloride (Cl⁻)", "Sulfate (SO₄²⁻)", "Nitrate (NO₃⁻)"],
      correctIndex: 0,
      explanation: "Nước cứng tạm thời chứa các muối Ca(HCO₃)₂ và Mg(HCO₃)₂. Gọi là 'tạm thời' vì khi đun sôi, muối hydrogencarbonate dễ dàng bị nhiệt phân tạo kết tủa CaCO₃ và MgCO₃, làm mất tính cứng của nước.",
    },
    {
      id: "q-12-7-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Hợp chất nào sau đây của nhôm có tính chất lưỡng tính (vừa tan trong dung dịch acid mạnh, vừa tan trong dung dịch kiềm mạnh)?",
      options: ["Al₂O₃ và Al(OH)₃", "AlCl₃ và Al₂(SO₄)₃", "NaAlO₂ và Al", "Al(NO₃)₃ và Al₂O₃"],
      correctIndex: 0,
      explanation: "Al₂O₃ và Al(OH)₃ là oxide và hydroxide lưỡng tính tiêu biểu: Chúng tan trong HCl tạo muối Al³⁺ và tan trong dung dịch NaOH tạo phức aluminat [Al(OH)₄]⁻ (hoặc NaAlO₂).",
    },
    {
      id: "q-12-7-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Hỗn hợp tecmit gồm bột kim loại Nhôm (Al) và Fe₂O₃ được sử dụng phổ biến trong thực tế để hàn đường ray xe lửa bị nứt tại chỗ dựa vào:",
      options: [
        "Phản ứng nhiệt nhôm tỏa ra lượng nhiệt khổng lồ (> 2500°C) làm nóng chảy sắt lỏng lấp đầy khe nứt",
        "Khả năng chống gỉ sét tuyệt đối của nhôm",
        "Khả năng hấp thụ tia tử ngoại của Fe₂O₃",
        "Tính chất dẫn điện siêu dẫn của hỗn hợp"
      ],
      correctIndex: 0,
      explanation: "Phản ứng nhiệt nhôm: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe. Phản ứng này tỏa nhiệt cực kỳ mãnh liệt, đưa nhiệt độ lên tới hơn 2500°C khiến sắt sinh ra ở thể lỏng nóng chảy, chảy vào khe rãnh nứt của ray xe lửa và đông đặc lại hàn gắn mối nối hoàn hảo.",
    },
    {
      id: "q-12-7-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Thạch cao nung có công thức hóa học là CaSO₄·H₂O (hoặc CaSO₄·0,5H₂O), được ứng dụng rất nhiều để đúc khuôn tượng mỹ thuật và bó bột khi gãy xương là nhờ đặc tính nào?",
      options: [
        "Khi nhào với nước tạo thành hỗn hợp nhão, sau đó nở thể tích và đóng rắn lại rất nhanh",
        "Có tính kháng khuẩn cực mạnh tiêu diệt vi khuẩn ngoài da",
        "Có khối lượng riêng nhẹ hơn nước",
        "Tan hoàn toàn trong nước tạo dung dịch kiềm"
      ],
      correctIndex: 0,
      explanation: "Thạch cao nung hút nước biến lại thành thạch cao sống: CaSO₄·0,5H₂O + 1,5H₂O → CaSO₄·2H₂O. Quá trình này làm hỗn hợp nở thể tích nhẹ và đông cứng rất nhanh, giúp cố định xương gãy chuẩn xác và làm khuôn đúc tượng sắc nét từng chi tiết.",
    }
  ],

  // ==================== CHƯƠNG 8: KIM LOẠI CHUYỂN TIẾP DÃY 3D & PHỨC CHẤT ====================
  "g12-c8": [
    {
      id: "q-12-8-ex1",
      grade: 12,
      level: "Nhận biết",
      questionText: "Trong ion phức chất [Cu(NH₃)₄]²⁺, nguyên tử trung tâm và phối tử lần lượt là:",
      options: [
        "Cation Cu²⁺ là nguyên tử trung tâm; phân tử NH₃ là phối tử",
        "Cation Cu²⁺ là phối tử; phân tử NH₃ là nguyên tử trung tâm",
        "Nguyên tử Cu là nguyên tử trung tâm; ion H⁺ là phối tử",
        "Khí N₂ là nguyên tử trung tâm; Cu²⁺ là phối tử"
      ],
      correctIndex: 0,
      explanation: "Trong phức chất, cation kim loại chuyển tiếp (Cu²⁺) có các orbital d trống đóng vai trò là nguyên tử trung tâm (acid Lewis); các phân tử hoặc anion có cặp electron tự do (như :NH₃) đóng vai trò phối tử (base Lewis) cho cặp electron tạo liên kết cho - nhận.",
    },
    {
      id: "q-12-8-ex2",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Khi cho từ từ dung dịch NH₃ đến dư vào ống nghiệm chứa kết tủa Cu(OH)₂, kết tủa tan dần tạo thành dung dịch màu gì?",
      options: [
        "Dung dịch màu xanh lam thẫm (xanh thẫm đặc trưng của phức [Cu(NH₃)₄(H₂O)₂]²⁺)",
        "Dung dịch màu hồng cánh sen",
        "Dung dịch màu vàng rơm",
        "Dung dịch trong suốt không màu"
      ],
      correctIndex: 0,
      explanation: "Cu(OH)₂ hòa tan trong NH₃ dư tạo thành phức chất tetraammincopper(II) hydroxide: Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄](OH)₂ có màu xanh lam thẫm đặc trưng, khác biệt hoàn toàn với màu xanh nhạt của dung dịch muối đồng ban đầu.",
    },
    {
      id: "q-12-8-ex3",
      grade: 12,
      level: "Vận dụng",
      questionText: "Thuốc chống ung thư nổi tiếng Cisplatin có công thức là cis-[Pt(NH₃)₂Cl₂]. Phức chất này có dạng hình học phân tử nào?",
      options: [
        "Vuông phẳng (Square planar)",
        "Tứ diện đều (Tetrahedral)",
        "Bát diện đều (Octahedral)",
        "Hình chóp tam giác (Trigonal pyramidal)"
      ],
      correctIndex: 0,
      explanation: "Cisplatin là phức chất của Pt(II) có số phối trí bằng 4 với cấu hình electron d⁸, tạo dạng hình học vuông phẳng với 2 phối tử NH₃ nằm ở cùng một phía (vị trí cis) và 2 phối tử Cl⁻ nằm ở cùng một phía.",
    },
    {
      id: "q-12-8-ex4",
      grade: 12,
      level: "Thông hiểu",
      questionText: "Sắc tố Hemoglobin trong hồng cầu của máu người có chức năng gắn và vận chuyển khí O₂ đến nuôi tế bào cơ thể. Trung tâm hoạt động của nhân Heme là ion kim loại chuyển tiếp nào?",
      options: ["Iron (Sắt II - Fe²⁺)", "Copper (Đồng II - Cu²⁺)", "Cobalt (Co³⁺)", "Zinc (Kẽm - Zn²⁺)"],
      correctIndex: 0,
      explanation: "Mỗi phân tử hemoglobin chứa 4 nhân Heme, ở tâm mỗi nhân Heme có một ion Fe²⁺ phối trí với 4 nguyên tử nitơ của vòng porphyrin. Vị trí phối trí thứ 5 liên kết với chuỗi protein globin, vị trí thứ 6 liên kết thuận nghịch với phân tử O₂ để vận chuyển oxy trong máu.",
    },
    {
      id: "q-12-8-ex5",
      grade: 12,
      level: "Vận dụng cao",
      questionText: "Cho ion phức bát diện [Fe(CN)₆]⁴⁻. Số phối trí của nguyên tử trung tâm Fe(II) trong phức chất này là:",
      options: ["6", "4", "2", "8"],
      correctIndex: 0,
      explanation: "Số phối trí là tổng số liên kết cho - nhận mà nguyên tử trung tâm tạo với các phối tử. Trong [Fe(CN)₆]⁴⁻, nguyên tử trung tâm Fe²⁺ liên kết với 6 phối tử đơn càng CN⁻, do đó số phối trí của Fe bằng 6 (hình học bát diện đều).",
    }
  ]
};
