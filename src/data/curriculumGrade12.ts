import { Chapter } from "../types";

export const GRADE_12_CURRICULUM: Chapter[] = [
  // ====================== CHƯƠNG 1 ======================
  {
    id: "g12-c1",
    grade: 12,
    chapterNumber: 1,
    title: "Chương 1: Ester - Lipid & Chất giặt rửa",
    description: "Cấu trúc nhóm chức este, cơ chế phản ứng xà phòng hóa, chất béo triglyceride và cơ chế tẩy rửa của xà phòng.",
    icon: "Sparkle",
    concepts: [
      {
        id: "g12-c1-1",
        title: "Este - Cấu tạo, Danh pháp & Phản ứng Thủy phân",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao viên kẹo chuối hay chai nước ngọt có mùi thơm quyến rũ dù không hề có một miếng trái cây thật nào bên trong?",
          story: "Tất cả là nhờ các este tổng hợp! Etyl fomat có mùi đào, isoamyl axetat có mùi chuối chín, etyl butirat có mùi dứa. Chỉ với các phản ứng este hóa đơn giản từ cồn và giấm, các nhà hóa học đã tạo nên cả một thế giới mùi hương!",
          icon: "Sparkles",
        },
        keyPoints: [
          "Công thức este no, đơn chức, mạch hở: CnH2nO2 (n ≥ 2).",
          "Tên este = Tên gốc hydrocarbon R' + Tên gốc axit đuôi 'at' (ví dụ: CH₃COOC₂H₅ là etyl axetat).",
          "Thủy phân trong môi trường axit: Phản ứng thuận nghịch tạo axit và ancol: RCOOR' + H₂O ⇌ RCOOH + R'OH (H₂SO₄ đặc, t°).",
          "Thủy phân trong môi trường kiềm (Xà phòng hóa): Phản ứng một chiều tạo muối và ancol: RCOOR' + NaOH → RCOONa + R'OH.",
        ],
        realLifeApplication: "Dung môi pha sơn móng tay axeton/etyl axetat, sản xuất hương liệu bánh kẹo nước hoa và keo dán công nghiệp.",
        practiceQuestions: [
          {
            id: "q-12-1-1",
            grade: 12,
            level: "Nhận biết",
            questionText: "Este có mùi chuối chín đặc trưng dùng làm hương liệu thực phẩm là:",
            options: ["Isoamyl axetat", "Etyl fomat", "Benzyl axetat", "Metyl fomat"],
            correctIndex: 0,
            explanation: "Isoamyl axetat (CH₃COOCH₂CH₂CH(CH₃)₂) có mùi thơm ngọt ngào đặc trưng của chuối chín.",
          },
        ],
      },
      {
        id: "g12-c1-2",
        title: "Lipid, Chất béo Triglyceride & Cơ chế Xà phòng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao nước lã không thể rửa sạch vết dầu mỡ dính trên bát đĩa, nhưng chỉ cần vài giọt xà phòng là sạch bong?",
          story: "Phân tử xà phòng có cấu trúc như con nòng nọc kỳ diệu: Cái đầu ưa nước cắm vào dòng nước, còn cái đuôi kị nước dài ngoằng đâm xuyên tóm chặt lấy giọt mỡ, kéo bung nó khỏi bát đĩa trôi theo dòng nước xả!",
          icon: "Droplets",
        },
        keyPoints: [
          "Chất béo là trieste của glycerol với các axit béo (như axit panmitic C₁₅H₃₁COOH, axit stearic C₁₇H₃₅COOH, axit oleic C₁₇H₃₃COOH).",
          "Chất béo no (như mỡ động vật) ở thể rắn; chất béo không no chứa nối đôi C=C (như dầu thực vật) ở thể lỏng.",
          "Phản ứng xà phòng hóa: (RCOO)₃C₃H₅ + 3NaOH → 3RCOONa (xà phòng) + C₃H₅(OH)₃ (glycerol).",
          "Cơ chế tẩy rửa: Đuôi hydrocarbon kị nước hòa tan vào vết dầu mỡ, đầu ion ưa nước hướng ra ngoài nước tạo thành các hạt micelle lơ lửng bị rửa trôi.",
        ],
        realLifeApplication: "Nấu xà phòng handmade từ dầu ăn thực vật, sản xuất bơ nhân tạo margarine bằng phản ứng hidro hóa dầu ăn.",
        practiceQuestions: [
          {
            id: "q-12-1-2",
            grade: 12,
            level: "Vận dụng",
            questionText: "Xà phòng hóa hoàn toàn 8.9 gam chất béo tristearin (C₁₇H₃₅COO)₃C₃H₅ bằng dung dịch NaOH dư. Khối lượng glycerol thu được là:",
            options: ["0.92 gam", "1.84 gam", "0.46 gam", "2.76 gam"],
            correctIndex: 0,
            explanation: "M(tristearin) = 890 g/mol → n = 8.9 / 890 = 0.01 mol. n(glycerol) = 0.01 mol → m = 0.01 × 92 = 0.92 gam.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 2 ======================
  {
    id: "g12-c2",
    grade: 12,
    chapterNumber: 2,
    title: "Chương 2: Carbohydrate",
    description: "Cấu trúc hóa học và tính chất của Glucose, Fructose, Saccharose, Tinh bột và Cellulose trong đời sống.",
    icon: "Apple",
    concepts: [
      {
        id: "g12-c2-1",
        title: "Glucose & Fructose (Monosaccharide) - Cấu trúc & Phản ứng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao người leo núi mệt lả hay bệnh nhân vừa phẫu thuật lại được truyền ngay một chai dịch truyền đường Glucose 5%?",
          story: "Glucose là đường đơn không cần qua quá trình tiêu hóa phức tạp, hấp thụ trực tiếp vào máu và tế bào để tế bào đốt cháy tạo năng lượng ATP tức thì, giúp người bệnh hồi phục thần tốc!",
          icon: "Activity",
        },
        keyPoints: [
          "Glucose (C₆H₁₂O₆): Phân tử mạch hở chứa 5 nhóm -OH kề nhau và 1 nhóm andehit -CH=O. Trong dung dịch tồn tại chủ yếu ở dạng vòng α và β.",
          "Tính chất ancol đa chức: Hòa tan Cu(OH)₂ ở nhiệt độ phòng tạo dung dịch màu xanh lam thẫm.",
          "Tính chất andehit: Tham gia phản ứng tráng bạc với thuốc thử Tollens (1 mol glucose tạo 2 mol Ag) và phản ứng khử Cu(OH)₂ đun nóng tạo Cu₂O đỏ gạch.",
          "Fructose là đồng phân của glucose, chứa nhóm xeton >C=O, trong môi trường kiềm chuyển hóa qua lại với glucose nên cũng có phản ứng tráng bạc.",
        ],
        realLifeApplication: "Dung dịch dịch truyền y tế cứu sinh, tráng ruột phích nước nóng và kiểm tra chỉ số đường huyết tiểu đường.",
        practiceQuestions: [
          {
            id: "q-12-2-1",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Cho 18 gam glucose (C₆H₁₂O₆) phản ứng hoàn toàn với lượng dư thuốc thử Tollens. Khối lượng bạc kim loại thu được là:",
            options: ["21.6 gam", "10.8 gam", "43.2 gam", "5.4 gam"],
            correctIndex: 0,
            explanation: "n(glucose) = 18 / 180 = 0.1 mol. Phương trình: 1 C₆H₁₂O₆ → 2 Ag. n(Ag) = 0.2 mol → m = 0.2 × 108 = 21.6 gam.",
          },
        ],
      },
      {
        id: "g12-c2-2",
        title: "Saccharose & Maltose (Disaccharide) - Cấu tạo & Thủy phân",
        estimatedMinutes: 4,
        visualHook: {
          question: "Tại sao đường mía ăn hàng ngày không thể tráng bạc, nhưng đun sôi với vài giọt chanh rồi mới cho vào thuốc thử Tollens thì lại sinh ra bạc sáng bóng?",
          story: "Axit xúc tác thủy phân đường đôi saccharose thành hỗn hợp glucose và fructose tự do, các phân tử đường đơn này lập tức khử ion bạc tạo nên bề mặt tráng gương lấp lánh!",
          icon: "Wine",
        },
        keyPoints: [
          "Saccharose (C₁₂H₂₂O₁₁): Cấu tạo từ 1 gốc α-glucose và 1 gốc β-fructose qua liên kết α-1,2-glycoside. Không còn nhóm -OH hemiaxetal tự do nên không có tính khử (không tráng bạc).",
          "Phản ứng thủy phân trong môi trường acid hoặc có enzyme xúc tác: C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose).",
          "Hòa tan Cu(OH)₂ tạo phức xanh lam thẫm (do có nhiều nhóm -OH kề nhau).",
        ],
        realLifeApplication: "Sản xuất đường kính trắng từ cây mía, nấu kẹo mạch nha maltose và công nghệ bánh kẹo thực phẩm.",
        practiceQuestions: [
          {
            id: "q-12-2-2",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Chất nào sau đây không tham gia phản ứng tráng bạc?",
            options: ["Saccharose", "Glucose", "Fructose", "Formaldehyde"],
            correctIndex: 0,
            explanation: "Saccharose không chứa nhóm andehit tự do hoặc nhóm -OH hemiaxetal nên không có tính khử và không tham gia phản ứng tráng bạc.",
          },
        ],
      },
      {
        id: "g12-c2-3",
        title: "Tinh bột & Cellulose (Polysaccharide) - Chuỗi phân tử & Ứng dụng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao loài người ăn cơm ngô khoai sắn tiêu hóa thành chất bổ, nhưng ăn cỏ cây gỗ chứa cellulose lại không tiêu hóa được?",
          story: "Cả hai đều là polymer của glucose! Nhưng tinh bột liên kết bằng cầu nối α-glycoside dễ uốn lượn bị men amylase cắt nhỏ; còn cellulose liên kết bằng cầu nối β-glycoside tạo chuỗi sợi thẳng tắp cực kỳ bền chắc mà chỉ dạ dày loài nhai lại mới có vi khuẩn đặc biệt tiêu hóa được!",
          icon: "Layers",
        },
        keyPoints: [
          "Tinh bột (C₆H₁₀O₅)n gồm amylose (mạch không phân nhánh xoắn ốc) và amylopectin (mạch phân nhánh). Tác dụng với iot (I₂) cho màu xanh tím đặc trưng (phản ứng nhận biết tinh bột).",
          "Cellulose (C₆H₁₀O₅)n: Mạch kéo dài không phân nhánh gồm các mắt xích β-glucose, mỗi mắt xích có 3 nhóm -OH tự do: [C₆H₇O₂(OH)₃]n.",
          "Cellulose tác dụng với HNO₃ đặc (xúc tác H₂SO₄ đặc) tạo xenlulozo trinitrat là thuốc súng không khói uy lực.",
        ],
        realLifeApplication: "Lương thực chính của nhân loại (gạo, bánh mì), sản xuất tơ nhân tạo visco, sản xuất giấy viết và thuốc súng không khói.",
        practiceQuestions: [
          {
            id: "q-12-2-3",
            grade: 12,
            level: "Nhận biết",
            questionText: "Thuốc thử đặc trưng để nhận biết hồ tinh bột ở nhiệt độ phòng là:",
            options: ["Dung dịch Iot (I₂)", "Dung dịch AgNO₃/NH₃", "Dung dịch Cu(OH)₂", "Dung dịch Br₂"],
            correctIndex: 0,
            explanation: "Các phân tử Iot chui vào lòng chuỗi xoắn amylose tạo phức chất màu xanh tím đặc trưng.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 3 ======================
  {
    id: "g12-c3",
    grade: 12,
    chapterNumber: 3,
    title: "Chương 3: Hợp chất chứa Nitrogen (Amine - Amino Acid - Peptide)",
    description: "Cấu trúc của Amine, tính bazơ, tính chất lưỡng tính của Amino acid, liên kết peptide và phản ứng đông tụ protein.",
    icon: "HeartHandshake",
    concepts: [
      {
        id: "g12-c3-1",
        title: "Amine - Bậc Amin, Tính Bazơ & Phản ứng Aniline",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao khi làm cá tanh, các đầu bếp thường dùng chanh tươi hoặc nước giấm ăn để rửa cá?",
          story: "Mùi tanh khó chịu của cá là do các amine bay hơi (như trimetylamin). Axit trong chanh và giấm phản ứng trung hòa các amine thành muối amoni tan biến vào nước, khử sạch mùi tanh trong nháy mắt!",
          icon: "ShieldAlert",
        },
        keyPoints: [
          "Amine hình thành khi thay thế một hay nhiều nguyên tử H trong phân tử NH₃ bằng gốc hydrocarbon. Bậc amin bằng số gốc hydrocarbon gắn với N.",
          "Tính bazơ: Cặp electron tự do trên nguyên tử N có khả năng nhận proton H⁺. Thứ tự tính bazơ: Amin béo no > NH₃ > Amin thơm (Anilin C₆H₅NH₂ tính bazơ rất yếu, không làm đổi màu quỳ tím).",
          "Aniline tác dụng với nước Brom tạo kết tủa trắng 2,4,6-tribromoaniline (dùng để nhận biết anilin).",
        ],
        realLifeApplication: "Khử mùi tanh của thủy hải sản bằng nước chanh/giấm ăn, sản xuất phẩm nhuộm anilin và tổng hợp dược phẩm.",
        practiceQuestions: [
          {
            id: "q-12-3-1",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Chất nào sau đây không làm đổi màu giấy quỳ tím ẩm?",
            options: ["Aniline (C₆H₅NH₂)", "Methylamine (CH₃NH₂)", "Dimethylamine ((CH₃)₂NH)", "Amoniac (NH₃)"],
            correctIndex: 0,
            explanation: "Aniline có vòng benzen hút electron làm mật độ điện tích trên N giảm mạnh, tính bazơ rất yếu nên không thể làm đổi màu quỳ tím.",
          },
        ],
      },
      {
        id: "g12-c3-2",
        title: "Amino Acid & Cấu trúc Ion Lưỡng Cực Lưỡng Tính",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao gia vị mì chính (bột ngọt) lại có vị 'umami' đậm đà cuốn hút đến mức chinh phục mọi nền ẩm thực?",
          story: "Mì chính chính là muối mononatri của axit glutamic - một amino acid thiết yếu tự nhiên có trong nước hầm xương và cà chua chín, kích hoạt trực tiếp thụ thể vị ngọt thịt trên đầu lưỡi con người!",
          icon: "Coffee",
        },
        keyPoints: [
          "Amino acid là hợp chất hữu cơ tạp chức, chứa đồng thời nhóm amino (-NH₂) có tính bazơ và nhóm carboxyl (-COOH) có tính axit.",
          "Trong thực tế, amino acid tồn tại chủ yếu ở dạng ion lưỡng cực H₃N⁺-R-COO⁻, vì vậy chúng là chất rắn kết tinh, nhiệt độ nóng chảy cao và tan tốt trong nước.",
          "Tính chất lưỡng tính: Tác dụng được với cả dung dịch acid mạnh (nhờ nhóm -NH₂) và dung dịch base mạnh (nhờ nhóm -COOH).",
          "Các amino acid tiêu biểu: Glycine (Gly: H₂N-CH₂-COOH), Alanine (Ala), Valine (Val), Axit glutamic (Glu, làm quỳ hóa đỏ), Lysine (Lys, làm quỳ hóa xanh).",
        ],
        realLifeApplication: "Gia vị mì chính (bột ngọt), thuốc bổ trợ thần kinh não axit glutamic và thực phẩm bổ sung axit amin thiết yếu cho người tập thể hình gym.",
        practiceQuestions: [
          {
            id: "q-12-3-2",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Amino acid nào sau đây làm quỳ tím chuyển sang màu hồng?",
            options: ["Axit glutamic", "Glycine", "Alanine", "Lysine"],
            correctIndex: 0,
            explanation: "Axit glutamic có 2 nhóm -COOH và 1 nhóm -NH₂, số nhóm axit nhiều hơn số nhóm bazơ nên dung dịch có môi trường axit nhẹ làm đỏ quỳ tím.",
          },
        ],
      },
      {
        id: "g12-c3-3",
        title: "Peptide, Protein & Phản ứng Màu Biuret",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao khi vắt một lát chanh vào bát canh riêu cua nóng hổi, thịt cua lại lập tức đông tụ đóng mảng bồng bềnh thơm ngon?",
          story: "Axit citric trong chanh và nhiệt độ cao phá vỡ cấu trúc không gian bậc 3, bậc 4 của protein trong thịt cua, làm các chuỗi polypeptide liên kết chéo và đông tụ lại thành từng mảng béo ngậy!",
          icon: "Sparkles",
        },
        keyPoints: [
          "Liên kết peptide là liên kết -CO-NH- giữa hai đơn vị α-amino acid.",
          "Protein là những polypeptide cao phân tử có khối lượng từ vài vạn đến vài triệu amu.",
          "Hiện tượng đông tụ: Dưới tác dụng của nhiệt độ cao, axit, kiềm hoặc muối kim loại nặng, protein bị mất hoạt tính sinh học và đông tụ lại.",
          "Phản ứng màu biuret: Các peptide có từ 2 liên kết peptide trở lên (từ tripeptide) và protein phản ứng với Cu(OH)₂ trong kiềm tạo phức màu tím hoa cà đặc trưng.",
        ],
        realLifeApplication: "Nấu riêu cua, tráng trứng chiên, xét nghiệm albumin protein niệu trong y học chẩn đoán bệnh thận.",
        practiceQuestions: [
          {
            id: "q-12-3-3",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Chất nào sau đây không cho phản ứng màu biuret với Cu(OH)₂?",
            options: ["Dipeptide Gly-Ala", "Tripeptide Gly-Ala-Val", "Lòng trắng trứng", "Hemoglobin"],
            correctIndex: 0,
            explanation: "Dipeptide chỉ có 1 liên kết peptide nên không đủ điều kiện tạo phức màu biuret (phải có từ 2 liên kết peptide trở lên).",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 4 ======================
  {
    id: "g12-c4",
    grade: 12,
    chapterNumber: 4,
    title: "Chương 4: Polymer & Vật liệu Polymer",
    description: "Khái niệm monome, mắt xích polime, phản ứng trùng hợp, trùng ngưng; chất dẻo PE, PVC, tơ nilon-6,6, cao su và keo dán.",
    icon: "Boxes",
    concepts: [
      {
        id: "g12-c4-1",
        title: "Đại cương Polymer - Trùng hợp & Trùng ngưng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Làm thế nào hàng triệu mắt xích nhỏ bé etilen rời rạc lại kết nối thành tấm bạt nilon khổng lồ che mưa nắng cả năm không rách?",
          story: "Dưới nhiệt độ, áp suất và chất xúc tác đặc biệt, hàng triệu liên kết đôi C=C đồng loạt mở khóa tay nắm lấy nhau tạo thành chuỗi polymer siêu dài dằng dặc hàng chục nghìn mắt xích!",
          icon: "Network",
        },
        keyPoints: [
          "Polymer là những hợp chất có phân tử khối rất lớn do nhiều mắt xích (monome) liên kết với nhau.",
          "Phản ứng trùng hợp: Kết hợp nhiều phân tử nhỏ giống hoặc tương tự nhau thành phân tử lớn (yêu cầu monome có liên kết bội như C=C hoặc vòng kém bền).",
          "Phản ứng trùng ngưng: Kết hợp nhiều monome thành polime đồng thời giải phóng các phân tử nhỏ như H₂O (yêu cầu monome có ít nhất 2 nhóm chức có khả năng phản ứng như -OH, -COOH, -NH₂).",
        ],
        realLifeApplication: "Công nghiệp hóa dầu sản xuất hạt nhựa nguyên sinh tái tạo thế giới vật liệu hiện đại.",
        practiceQuestions: [
          {
            id: "q-12-4-1",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Chất nào sau đây có khả năng tham gia phản ứng trùng hợp?",
            options: ["Ethylene (CH₂=CH₂)", "Methane (CH₄)", "Ethane (C₂H₆)", "Axit axetic (CH₃COOH)"],
            correctIndex: 0,
            explanation: "Ethylene có chứa liên kết đôi C=C kém bền có thể mở ra để liên kết với các phân tử khác trong phản ứng trùng hợp tạo nhựa PE.",
          },
        ],
      },
      {
        id: "g12-c4-2",
        title: "Vật liệu Polymer - Chất dẻo, Tơ, Cao su & Keo dán",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao lốp xe đua F1 có thể bám đường và chịu ma sát khốc liệt ở tốc độ trên 300 km/h mà không bị chảy nát?",
          story: "Đó là nhờ công nghệ lưu hóa cao su của Charles Goodyear! Các nguyên tử Lưu huỳnh tạo nên những cây cầu nối đan chéo giữa các chuỗi polyisopren biến cao su mềm dẻo thành mạng lưới không gian 3D đàn hồi siêu hạng!",
          icon: "Shield",
        },
        keyPoints: [
          "Chất dẻo: PE (màng bọc thực phẩm), PVC (ống dẫn nước), PS (hộp xốp cách nhiệt), Teflon (chống dính chảo).",
          "Tơ tự nhiên (tơ tằm, bông len) và tơ hóa học: Tơ nhân tạo (tơ visco, axetat sản xuất từ xenlulozo), Tơ tổng hợp (nilon-6,6 từ axit ađipic và hexametylendiamin; lapsan).",
          "Cao su: Có tính đàn hồi. Cao su lưu hóa có mạng không gian chịu nhiệt, mài mòn và đàn hồi cao hơn cao su chưa lưu hóa.",
          "Keo dán: Keo dán epoxy, keo dán 502 (poly(metyl xianoacrylat)) đông cứng tức thì nhờ hơi ẩm không khí.",
        ],
        realLifeApplication: "Ống nước PVC, lốp xe cao su lưu hóa, áo len giữ ấm tơ nitron và chảo chống dính Teflon gia đình.",
        practiceQuestions: [
          {
            id: "q-12-4-2",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Tơ nilon-6,6 thuộc loại tơ nào sau đây?",
            options: ["Tơ poliamit tổng hợp", "Tơ bán tổng hợp (nhân tạo)", "Tơ tự nhiên", "Tơ vinylic"],
            correctIndex: 0,
            explanation: "Tơ nilon-6,6 chứa các liên kết amit -CO-NH- được điều chế bằng phản ứng trùng ngưng tổng hợp hoàn toàn.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 5 ======================
  {
    id: "g12-c5",
    grade: 12,
    chapterNumber: 5,
    title: "Chương 5: Pin điện & Điện phân",
    description: "Cặp oxi hóa - khử, thế điện cực chuẩn E°, pin Galvanic, hiện tượng ăn mòn kim loại và quá trình điện phân công nghiệp.",
    icon: "BatteryCharging",
    concepts: [
      {
        id: "g12-c5-1",
        title: "Thế điện cực chuẩn & Pin điện hóa Galvanic (Zn - Cu)",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao chỉ cắm một chiếc đinh kẽm và một sợi dây đồng vào quả chanh chua là có thể thắp sáng bóng đèn LED?",
          story: "Quả chanh đóng vai trò cầu muối dẫn điện! Kẽm có thế điện cực âm hơn tự nhường electron chạy qua dây dẫn sang điện cực đồng, tạo nên dòng điện một chiều kỳ diệu!",
          icon: "Zap",
        },
        keyPoints: [
          "Thế điện cực chuẩn E°(Mⁿ⁺/M) đặc trưng cho khả năng khử của kim loại và khả năng oxi hóa của cation kim loại ở điều kiện chuẩn.",
          "Cấu tạo Pin Galvanic: Cực âm (Anode) xảy ra quá trình oxi hóa: Zn → Zn²⁺ + 2e; Cực dương (Cathode) xảy ra quá trình khử: Cu²⁺ + 2e → Cu.",
          "Suất điện động chuẩn của pin: E°pin = E°cathode - E°anode = +0.34 - (-0.76) = +1.10 V.",
        ],
        realLifeApplication: "Pin sạc lithium-ion trên xe điện Tesla, pin cúc áo trong đồng hồ đeo tay và ắc quy xe máy.",
        practiceQuestions: [
          {
            id: "q-12-5-1",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Trong pin điện hóa Zn - Cu, quá trình xảy ra ở cực âm (anode) là:",
            options: [
              "Sự oxi hóa kim loại Zn (Zn → Zn²⁺ + 2e)",
              "Sự khử ion Cu²⁺ (Cu²⁺ + 2e → Cu)",
              "Sự khử kim loại Zn",
              "Sự oxi hóa ion Cu²⁺",
            ],
            correctIndex: 0,
            explanation: "Ở cực âm (anode), kim loại kẽm có tính khử mạnh hơn bị oxi hóa nhường electron: Zn → Zn²⁺ + 2e.",
          },
        ],
      },
      {
        id: "g12-c5-2",
        title: "Ăn mòn Kim loại & Các biện pháp Chống ăn mòn",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao vỏ tàu biển bằng thép đi biển nhiều năm không bị chìm lại được hàn các tấm kim loại Kẽm xung quanh thân tàu?",
          story: "Kẽm (Zn) có tính khử mạnh hơn Sắt (Fe). Khi ngâm trong nước biển dẫn điện, kẽm tự nguyện nhường electron đóng vai trò anode hy sinh tan rã để bảo vệ toàn vẹn lớp vỏ thép của con tàu viễn dương!",
          icon: "ShieldCheck",
        },
        keyPoints: [
          "Ăn mòn hóa học: Phát sinh do phản ứng trực tiếp giữa kim loại với môi trường không sinh ra dòng điện.",
          "Ăn mòn điện hóa: Phát sinh dòng điện giữa 2 điện cực kim loại khác nhau khi tiếp xúc trực tiếp hoặc gián tiếp và cùng ngâm trong dung dịch chất điện li (kim loại có tính khử mạnh hơn bị ăn mòn trước).",
          "Biện pháp chống ăn mòn: Phương pháp cách ly bề mặt (sơn, mạ crôm/kẽm, bôi dầu mỡ) và Phương pháp điện hóa (dùng vật hy sinh như gắn kẽm bảo vệ vỏ tàu thép).",
        ],
        realLifeApplication: "Mạ kẽm nhúng nóng ống thép xây dựng cầu đường và bảo vệ giàn khoan dầu khí ngoài khơi biển Đông.",
        practiceQuestions: [
          {
            id: "q-12-5-2",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Khi nối một thanh Sắt với một thanh Kẽm rồi nhúng vào dung dịch muối NaCl, kim loại bị ăn mòn trước là:",
            options: ["Kẽm (Zn)", "Sắt (Fe)", "Cả hai bị ăn mòn đồng thời", "Không kim loại nào bị ăn mòn"],
            correctIndex: 0,
            explanation: "Kẽm có tính khử mạnh hơn sắt nên kẽm đóng vai trò là cực âm (anode) và bị ăn mòn điện hóa trước để bảo vệ sắt.",
          },
        ],
      },
      {
        id: "g12-c5-3",
        title: "Quá trình Điện phân Nóng chảy & Điện phân Dung dịch",
        estimatedMinutes: 5,
        visualHook: {
          question: "Làm thế nào người thợ kim hoàn có thể mạ một lớp vàng 18K mỏng tanh sáng lấp lánh phủ đều lên bề mặt chiếc đồng hồ?",
          story: "Họ mắc chiếc đồng hồ vào cực âm của bình điện phân chứa muối vàng. Dưới tác dụng của dòng điện cưỡng bức, từng ion vàng Au³⁺ kéo đến bám phủ mịn màng hoàn mỹ trên bề mặt kim loại!",
          icon: "Coins",
        },
        keyPoints: [
          "Điện phân là quá trình oxi hóa - khử xảy ra trên bề mặt các điện cực dưới tác dụng của dòng điện một chiều cưỡng bức.",
          "Catot (cực âm): Nơi xảy ra sự khử cation kim loại hoặc H₂O; Anot (cực dương): Nơi xảy ra sự oxi hóa anion phi kim hoặc H₂O.",
          "Điện phân nóng chảy: Dùng để điều chế các kim loại hoạt động mạnh (nhóm IA, IIA, Al).",
          "Điện phân dung dịch: Dùng để điều chế kim loại trung bình và yếu (sau Al), sản xuất xút-clo (điện phân dung dịch NaCl có màng ngăn: 2NaCl + 2H₂O → 2NaOH + H₂↑ + Cl₂↑).",
        ],
        realLifeApplication: "Mạ vàng, mạ niken trang sức, tinh luyện đồng nguyên chất 99.99% và sản xuất xút NaOH công nghiệp.",
        practiceQuestions: [
          {
            id: "q-12-5-3",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Kim loại nào sau đây chỉ có thể điều chế bằng phương pháp điện phân nóng chảy hợp chất của nó?",
            options: ["Nhôm (Al)", "Đồng (Cu)", "Sắt (Fe)", "Bạc (Ag)"],
            correctIndex: 0,
            explanation: "Nhôm là kim loại hoạt động hóa học mạnh, có tính khử cao nên không thể dùng chất khử thông thường mà bắt buộc phải điện phân nóng chảy Al₂O₃.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 6 ======================
  {
    id: "g12-c6",
    grade: 12,
    chapterNumber: 6,
    title: "Chương 6: Đại cương về kim loại & Luyện kim",
    description: "Tính chất vật lý chung của kim loại do electron tự do, tính chất hóa học (tính khử), nhiệt luyện, thủy luyện và điện phân.",
    icon: "Hammer",
    concepts: [
      {
        id: "g12-c6-1",
        title: "Cấu tạo Kim loại & 4 Tính chất vật lý chung",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao lá vàng 24K có thể dát mỏng đến mức ánh sáng có thể lọt qua mà không hề bị nứt vỡ?",
          story: "Các electron tự do trong biển electron kim loại di chuyển linh hoạt đóng vai trò như lớp đệm bôi trơn trượt giữa các lớp ion dương, mang lại cho kim loại tính dẻo, dẫn điện, dẫn nhiệt và ánh kim kỳ diệu!",
          icon: "Coins",
        },
        keyPoints: [
          "Mạng tinh thể kim loại gồm các ion dương kim loại ở nút mạng và các electron tự do chuyển động hỗn loạn xung quanh.",
          "4 tính chất vật lý chung của kim loại: Tính dẻo, tính dẫn điện, tính dẫn nhiệt và ánh kim (tất cả đều do các electron tự do gây ra).",
          "Dẫn điện tốt nhất: Ag > Cu > Au > Al > Fe; Dẻo nhất: Vàng (Au); Cứng nhất: Crom (Cr); Nóng chảy cao nhất: Vonfram (W, 3410°C).",
        ],
        realLifeApplication: "Dây cáp điện cao thế bằng đồng và nhôm, sợi tóc bóng đèn vonfram và các trang sức vàng bạc quý giá.",
        practiceQuestions: [
          {
            id: "q-12-6-1",
            grade: 12,
            level: "Nhận biết",
            questionText: "Kim loại có độ dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại là:",
            options: ["Bạc (Ag)", "Đồng (Cu)", "Vàng (Au)", "Nhôm (Al)"],
            correctIndex: 0,
            explanation: "Bạc (Ag) là kim loại dẫn điện và dẫn nhiệt tốt nhất trong số tất cả các kim loại.",
          },
        ],
      },
      {
        id: "g12-c6-2",
        title: "Tính chất Hóa học & 3 Phương pháp Luyện kim Điều chế",
        estimatedMinutes: 5,
        visualHook: {
          question: "Làm thế nào để tách kim loại Sắt cứng cáp ra khỏi những tảng đá quặng hematit màu nâu đỏ khổng lồ?",
          story: "Trong lò cao hàng nghìn độ, khí CO nóng đỏ cướp lấy từng nguyên tử oxy trong oxit sắt Fe₂O₃, giải phóng dòng sắt nóng chảy rực lửa tuôn trào thành gang và thép!",
          icon: "Flame",
        },
        keyPoints: [
          "Tính chất hóa học chung của kim loại: Tính khử (dễ nhường e: M → Mⁿ⁺ + ne).",
          "Phương pháp nhiệt luyện: Dùng chất khử mạnh (CO, H₂, C, Al) khử ion kim loại trong oxit ở nhiệt độ cao (áp dụng cho kim loại đứng sau Al như Fe, Cu, Pb).",
          "Phương pháp thủy luyện: Dùng kim loại tự do có tính khử mạnh hơn đẩy kim loại yếu hơn ra khỏi dung dịch muối (như Fe đẩy Cu²⁺).",
          "Phương pháp điện phân: Khử cation kim loại bằng dòng điện một chiều (điện phân nóng chảy cho kim loại trước Al; điện phân dung dịch cho kim loại sau Al).",
        ],
        realLifeApplication: "Sản xuất gang thép trong lò cao luyện kim, thu hồi vàng bạc bằng phương pháp thủy luyện xianua.",
        practiceQuestions: [
          {
            id: "q-12-6-2",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Khí CO không thể dùng để nhiệt luyện điều chế kim loại nào sau đây từ oxit của nó?",
            options: ["Nhôm (Al)", "Sắt (Fe)", "Đồng (Cu)", "Chì (Pb)"],
            correctIndex: 0,
            explanation: "Khí CO chỉ khử được các oxit của kim loại đứng sau Al trong dãy hoạt động hóa học. Al₂O₃ không bị CO khử.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 7 ======================
  {
    id: "g12-c7",
    grade: 12,
    chapterNumber: 7,
    title: "Chương 7: Kim loại nhóm IA, IIA & Nhôm (Al)",
    description: "Kim loại kiềm (Na, K), kiềm thổ (Ca, Ba), hiện tượng nước cứng và cách làm mềm, nhôm và hợp chất lưỡng tính Al₂O₃, Al(OH)₃.",
    icon: "Layers",
    concepts: [
      {
        id: "g12-c7-1",
        title: "Kim loại Kiềm, Kiềm Thổ & Hiện tượng Nước Cứng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao chiếc ấm đun nước siêu tốc trong nhà sau vài tháng sử dụng lại đóng một lớp cặn đá vôi màu trắng ngà dưới đáy?",
          story: "Nước máy chứa ion Ca²⁺ và Mg²⁺ cùng gốc hidrocacbonat HCO₃⁻ (nước cứng tạm thời). Khi đun sôi, muối bị nhiệt phân giải phóng CO₂ và kết tủa đá vôi bám chặt: Ca(HCO₃)₂ → CaCO₃↓ + CO₂↑ + H₂O!",
          icon: "Flame",
        },
        keyPoints: [
          "Kim loại kiềm (nhóm IA: Li, Na, K...) có tính khử rất mạnh, phản ứng mãnh liệt với nước ở nhiệt độ thường, được bảo quản bằng cách ngâm chìm trong dầu hỏa.",
          "Nước cứng chứa nhiều ion Ca²⁺ và Mg²⁺. Nước cứng tạm thời chứa HCO₃⁻; Nước cứng vĩnh cửu chứa Cl⁻, SO₄²⁻; Nước cứng toàn phần chứa cả hai.",
          "Làm mềm nước cứng: Đun sôi (đối với nước cứng tạm thời) hoặc dùng hóa chất tạo kết tủa như Na₂CO₃, Na₃PO₄.",
        ],
        realLifeApplication: "Dùng giấm ăn hoặc chanh để tẩy sạch cặn vôi ấm đun nước và xử lý nước cứng cho lò hơi nhà máy nhiệt điện.",
        practiceQuestions: [
          {
            id: "q-12-7-1",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Hóa chất nào sau đây có thể dùng để làm mềm cả nước cứng tạm thời và nước cứng vĩnh cửu?",
            options: ["Dung dịch Na₂CO₃", "Dung dịch NaCl", "Dung dịch HCl", "Dung dịch H₂SO₄"],
            correctIndex: 0,
            explanation: "Ion CO₃²⁻ từ Na₂CO₃ kết tủa hoàn toàn cả ion Ca²⁺ và Mg²⁺ dưới dạng CaCO₃↓ và MgCO₃↓, làm mềm mọi loại nước cứng.",
          },
        ],
      },
      {
        id: "g12-c7-2",
        title: "Nhôm (Al) & Hợp chất Lưỡng Tính (Al₂O₃, Al(OH)₃)",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao đồ dùng bằng nhôm để ngoài trời mưa nắng hàng chục năm không gỉ, nhưng nếu dùng nồi nhôm nấu canh chua lại nhanh bị thủng đáy?",
          story: "Nhôm có lớp màng oxit Al₂O₃ mỏng mịn siêu bền bảo vệ. Nhưng Al₂O₃ và Al(OH)₃ lại có tính lưỡng tính tan nhanh trong môi trường axit chua và kiềm mạnh xà phòng!",
          icon: "Shield",
        },
        keyPoints: [
          "Nhôm là kim loại nhẹ, màu trắng bạc, có màng oxit Al₂O₃ bảo vệ bề mặt cực bền.",
          "Tính chất lưỡng tính của Al₂O₃ và Al(OH)₃: Tan được trong cả dung dịch acid mạnh (HCl, H₂SO₄) và dung dịch base mạnh (NaOH, KOH).",
          "Phản ứng nhiệt nhôm: Dùng bột nhôm khử oxit kim loại ở nhiệt độ cao giải phóng lượng nhiệt khổng lồ dùng hàn đường ray: 2Al + Fe₂O₃ (t°) → Al₂O₃ + 2Fe.",
          "Sản xuất nhôm bằng phương pháp điện phân nóng chảy Al₂O₃ hòa tan trong criolit (Na₃AlF₆) để hạ nhiệt độ nóng chảy từ 2050°C xuống 950°C.",
        ],
        realLifeApplication: "Vỏ máy bay hợp kim đuyra, giấy bạc bọc thực phẩm nướng, và công nghệ hàn nhiệt nhôm đường ray xe lửa.",
        practiceQuestions: [
          {
            id: "q-12-7-2",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Vai trò chính của criolit (Na₃AlF₆) trong quá trình sản xuất nhôm bằng điện phân nóng chảy quặng bauxite là:",
            options: [
              "Hạ nhiệt độ nóng chảy của Al₂O₃ và tăng độ dẫn điện của hỗn hợp",
              "Tạo kết tủa nhôm kim loại nhanh hơn",
              "Ngăn cản khí CO₂ sinh ra ở anot",
              "Làm tăng khối lượng riêng của nhôm lỏng",
            ],
            correctIndex: 0,
            explanation: "Criolit giúp hạ nhiệt độ nóng chảy từ 2050°C xuống khoảng 950°C, tiết kiệm năng lượng và tăng độ dẫn điện của hỗn hợp nóng chảy.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 8 ======================
  {
    id: "g12-c8",
    grade: 12,
    chapterNumber: 8,
    title: "Chương 8: Kim loại chuyển tiếp dãy 3d & Phức chất",
    description: "Đặc điểm cấu hình electron của Fe, Cu, Cr, hợp kim gang thép, khái niệm phức chất và vai trò sinh học của hemoglobin, diệp lục.",
    icon: "Atom",
    concepts: [
      {
        id: "g12-c8-1",
        title: "Kim loại Chuyển tiếp Dãy thứ nhất & Gang Thép",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao hợp chất của sắt và đồng trong tự nhiên lại có đủ sắc màu rực rỡ từ xanh lam, xanh lục đến đỏ gạch và vàng thau?",
          story: "Các nguyên tố chuyển tiếp có phân lớp electron 3d chưa bão hòa. Khi hấp thụ ánh sáng khả kiến, các electron d chuyển mức năng lượng phản xạ lại những sắc màu lung linh tuyệt mỹ!",
          icon: "Sparkles",
        },
        keyPoints: [
          "Các nguyên tố chuyển tiếp dãy thứ nhất (từ Sc đến Cu) có electron điền vào phân lớp 3d (cấu hình chung: [Ar] 3d¹⁻¹⁰ 4s¹⁻²).",
          "Có nhiều trạng thái oxi hóa khác nhau: Sắt có số oxh +2, +3; Crom có số oxh +2, +3, +6; Đồng có số oxh +1, +2.",
          "Gang là hợp kim của sắt với cacbon (2 - 5% C) cùng Si, Mn, S, P; Thép là hợp kim sắt chứa hàm lượng cacbon thấp hơn (0.01 - 2% C) có tính đàn hồi và chịu lực cao.",
        ],
        realLifeApplication: "Cốt thép bê tông xây dựng các tòa nhà chọc trời, sản xuất lưỡi dao phẫu thuật y tế inox không gỉ.",
        practiceQuestions: [
          {
            id: "q-12-8-1",
            grade: 12,
            level: "Nhận biết",
            questionText: "Thép là hợp kim của sắt chứa hàm lượng cacbon trong khoảng:",
            options: ["Dưới 2%", "Từ 2% đến 5%", "Trên 10%", "50%"],
            correctIndex: 0,
            explanation: "Thép chứa từ 0.01% đến 2% cacbon, trong khi gang chứa từ 2% đến 5% cacbon.",
          },
        ],
      },
      {
        id: "g12-c8-2",
        title: "Khái niệm Phức chất & Ý nghĩa Sinh học (Hóa 12 mới)",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao máu người có màu đỏ rực trong khi máu của loài mực và tôm lại có màu xanh lam kỳ lạ?",
          story: "Máu người chứa phức chất Hemoglobin với ion Fe²⁺ ở trung tâm mang màu đỏ khi ngậm oxy. Trong khi đó, máu của mực chứa phức chất Hemocyanin với ion Cu²⁺ ở trung tâm mang màu xanh lam mê hoặc!",
          icon: "Heart",
        },
        keyPoints: [
          "Phức chất gồm nguyên tử/ion trung tâm (thường là ion kim loại chuyển tiếp) liên kết phối trí với các phối tử (ligand như H₂O, NH₃, Cl⁻, CN⁻, OH⁻).",
          "Số phối trí là số liên kết sigma mà nguyên tử trung tâm tạo được với các phối tử (thường là 4 hoặc 6).",
          "Phức chất mang màu sắc đặc trưng: Ví dụ [Cu(NH₃)₄]²⁺ có màu xanh lam thẫm, [Fe(SCN)]²⁺ có màu đỏ máu.",
          "Vai trò sinh học: Hemoglobin trong máu chứa phức Fe²⁺ vận chuyển O₂; Diệp lục (chlorophyll) chứa phức Mg²⁺ quang hợp; Vitamin B12 chứa phức Co³⁺.",
        ],
        realLifeApplication: "Thuốc chống ung thư hóa trị Cisplatin [Pt(NH₃)₂Cl₂], phân tích định lượng y khoa và công nghệ xử lý nước ô nhiễm kim loại nặng.",
        practiceQuestions: [
          {
            id: "q-12-8-2",
            grade: 12,
            level: "Thông hiểu",
            questionText: "Trong phức chất [Cu(NH₃)₄]²⁺, ion trung tâm và phối tử lần lượt là:",
            options: [
              "Ion trung tâm Cu²⁺, phối tử là các phân tử NH₃",
              "Ion trung tâm NH₃, phối tử là ion Cu²⁺",
              "Ion trung tâm Cu⁺, phối tử là ion H⁺",
              "Ion trung tâm N³⁻, phối tử là Cu²⁺",
            ],
            correctIndex: 0,
            explanation: "Ion Cu²⁺ là ion trung tâm có orbital d trống nhận các cặp electron tự do của 4 phân tử phối tử NH₃ qua liên kết phối trí để tạo phức chất có màu xanh lam thẫm.",
          },
        ],
      },
    ],
  },
];
