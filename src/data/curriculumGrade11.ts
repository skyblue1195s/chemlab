import { Chapter } from "../types";

export const GRADE_11_CURRICULUM: Chapter[] = [
  // ====================== CHƯƠNG 1 ======================
  {
    id: "g11-c1",
    grade: 11,
    chapterNumber: 1,
    title: "Chương 1: Cân bằng hóa học & Sự điện li",
    description: "Cân bằng thuận nghịch, hằng số Kc, nguyên lý Le Chatelier, thuyết acid - base Brønsted - Lowry, thang đo pH và chuẩn độ.",
    icon: "Scale",
    concepts: [
      {
        id: "g11-c1-1",
        title: "Cân bằng hóa học & Hằng số cân bằng Kc",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao khi mở nắp chai nước ngọt có ga, bọt khí CO₂ lại ùng ục trào lên dữ dội?",
          story: "Khí CO₂ được nén ở áp suất cao hòa tan vào nước: CO₂(k) ⇌ CO₂(dd). Mở nắp làm áp suất giảm đột ngột. Theo Le Chatelier, cân bằng lập tức chuyển dịch theo chiều nghịch để giải phóng khí CO₂, tạo tiếng 'xì' và bọt ga trào dâng sảng khoái!",
          icon: "Wine",
        },
        keyPoints: [
          "Cân bằng hóa học là cân bằng động: Tốc độ phản ứng thuận = Tốc độ phản ứng nghịch (v thuận = v nghịch > 0).",
          "Hằng số cân bằng Kc chỉ phụ thuộc vào bản chất phản ứng và nhiệt độ (không đổi khi thay đổi nồng độ hoặc áp suất).",
          "Nguyên lý Le Chatelier: Hệ cân bằng khi chịu tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất) sẽ tự chuyển dịch theo chiều làm giảm tác động đó.",
          "Tăng nhiệt độ: chuyển dịch chiều thu nhiệt (ΔrH° > 0); Tăng áp suất: chuyển dịch chiều giảm số mol khí.",
        ],
        realLifeApplication: "Quy trình tổng hợp Amoniac Haber-Bosch: Nén khí ở 200 atm, 450°C có xúc tác Fe để sản xuất hàng triệu tấn phân đạm mỗi năm.",
        practiceQuestions: [
          {
            id: "q-11-1-1",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Cho cân bằng: N₂(k) + 3H₂(k) ⇌ 2NH₃(k) (ΔrH°₂₉₈ = -92 kJ). Để cân bằng chuyển dịch theo chiều thuận (tạo thêm NH₃), cần:",
            options: [
              "Tăng nhiệt độ và giảm áp suất",
              "Giảm nhiệt độ và tăng áp suất",
              "Tăng nhiệt độ và tăng áp suất",
              "Giảm nồng độ N₂",
            ],
            correctIndex: 1,
            explanation: "Phản ứng thuận tỏa nhiệt (ΔrH° < 0) nên hạ nhiệt độ làm cân bằng chuyển dịch theo chiều thuận. Chiều thuận làm giảm số mol khí (4 mol → 2 mol) nên tăng áp suất làm chuyển dịch theo chiều thuận.",
          },
        ],
      },
      {
        id: "g11-c1-2",
        title: "Thuyết Acid - Base Bronsted-Lowry & Thang đo pH",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao ăn đồ chua (chanh, xoài) làm men răng ê buốt và nước bọt trong miệng cân bằng pH như thế nào?",
          story: "Axit giải phóng ion H⁺ làm pH khoang miệng hạ xuống dưới 5.5, hòa tan tinh thể canxi men răng. Nước bọt đóng vai trò hệ đệm sinh học tinh vi đưa pH trở lại cân bằng 7.2 bảo vệ nụ cười của bạn!",
          icon: "Droplets",
        },
        keyPoints: [
          "Theo Brønsted - Lowry: Acid là chất cho proton (H⁺), Base là chất nhận proton (H⁺).",
          "Chất lưỡng tính vừa có khả năng cho H⁺ vừa có khả năng nhận H⁺ (như H₂O, HCO₃⁻, HSO₃⁻).",
          "Thang đo pH = -log[H⁺]. pH < 7 là môi trường acid, pH = 7 trung tính, pH > 7 là môi trường base.",
          "Tích số ion của nước ở 25°C: Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴. Suy ra pH + pOH = 14.",
        ],
        realLifeApplication: "Cải tạo đất nông nghiệp bị nhiễm phèn chua bằng vôi bột CaCO₃, đo pH nước ao nuôi tôm cá và thuốc kháng acid dạ dày.",
        practiceQuestions: [
          {
            id: "q-11-1-2",
            grade: 11,
            level: "Vận dụng",
            questionText: "Một dung dịch NaOH có nồng độ 0.01 M. Giá trị pH của dung dịch này ở 25°C là:",
            options: ["2", "12", "14", "7"],
            correctIndex: 1,
            explanation: "NaOH điện li hoàn toàn: [OH⁻] = 0.01 M = 10⁻² M → pOH = 2 → pH = 14 - pOH = 14 - 2 = 12.",
          },
        ],
      },
      {
        id: "g11-c1-3",
        title: "Chuẩn độ Acid - Base & Sự thủy phân của muối",
        estimatedMinutes: 5,
        visualHook: {
          question: "Làm thế nào để kiểm nghiệm chính xác nồng độ axit acetic trong chai giấm gạo bày bán ở siêu thị?",
          story: "Các kiểm nghiệm viên dùng phương pháp chuẩn độ: nhỏ từ từ từng giọt dung dịch kiềm NaOH chuẩn từ buret vào bình tam giác chứa giấm. Khi giọt cuối cùng làm chất chỉ thị phenolphtalein đổi sang màu hồng phấn diệu kỳ, điểm tương đương đã được xác định chính xác!",
          icon: "CheckCircle2",
        },
        keyPoints: [
          "Chuẩn độ acid - base là phương pháp xác định nồng độ dung dịch acid (hoặc base) bằng dung dịch base (hoặc acid) đã biết trước nồng độ.",
          "Điểm tương đương: Thời điểm acid và base phản ứng vừa đủ với nhau theo phương trình hóa học.",
          "Chỉ thị màu: Phenolphtalein (không màu trong acid/trung tính, hồng trong base pH > 8.3); Quỳ tím (đỏ trong acid, xanh trong base).",
          "Sự thủy phân muối: Muối tạo bởi cation base mạnh và anion acid yếu (như CH₃COONa) có môi trường kiềm (pH > 7); Muối tạo bởi cation base yếu và anion acid mạnh (như NH₄Cl) có môi trường acid (pH < 7).",
        ],
        realLifeApplication: "Kiểm tra chất lượng nguồn nước sinh hoạt gia đình và kiểm định độ chua của các sản phẩm thực phẩm lên men.",
        practiceQuestions: [
          {
            id: "q-11-1-3",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Dung dịch muối nào sau đây có môi trường kiềm (pH > 7)?",
            options: ["CH₃COONa", "NaCl", "NH₄Cl", "KNO₃"],
            correctIndex: 0,
            explanation: "CH₃COONa tạo bởi base mạnh (NaOH) và acid yếu (CH₃COOH). Anion CH₃COO⁻ bị thủy phân nhận H⁺ giải phóng ion OH⁻ làm dung dịch có tính kiềm (pH > 7).",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 2 ======================
  {
    id: "g11-c2",
    grade: 11,
    chapterNumber: 2,
    title: "Chương 2: Nitrogen & Sulfur",
    description: "Đơn chất Nitơ, amoniac NH₃, muối amoni, axit nitric HNO₃, hiện tượng phú dưỡng, lưu huỳnh S, khí SO₂ và axit H₂SO₄.",
    icon: "CloudRain",
    concepts: [
      {
        id: "g11-c2-1",
        title: "Khí Nitrogen, Amoniac (NH₃) & Hiện tượng Phú dưỡng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao sấm sét trong cơn mưa dông đầu mùa lại được ví như 'ông trời bón đạm miễn phí' cho ruộng đồng?",
          story: "Tia sét có nhiệt độ trên 3000°C bẻ gãy liên kết ba cực bền N≡N trong không khí, kết hợp với O₂ tạo NO rồi chuyển hóa thành ion nitrat NO₃⁻ ngấm xuống đất làm cây lúa xanh mướt!",
          icon: "Zap",
        },
        keyPoints: [
          "Nitrogen (N₂) trơ ở nhiệt độ thường do có liên kết ba N≡N rất bền (năng lượng liên kết 945 kJ/mol). Hoạt động hóa học ở nhiệt độ cao.",
          "Amoniac (NH₃) có cấu trúc chóp tam giác, tan rất nhiều trong nước tạo dung dịch có tính base yếu và tính khử mạnh.",
          "Hiện tượng phú dưỡng (eutrophication): Dư thừa nitrat và phosphat trong ao hồ làm tảo bùng phát nhanh, cạn kiệt oxy hòa tan khiến cá và sinh vật thủy sinh chết hàng loạt.",
        ],
        realLifeApplication: "Bơm khí nitơ bảo quản gói bim bim giòn tan, sản xuất phân đạm urê và xử lý nước thải ao hồ nuôi tôm.",
        practiceQuestions: [
          {
            id: "q-11-2-1",
            grade: 11,
            level: "Nhận biết",
            questionText: "Ở nhiệt độ thường, khí Nitrogen (N₂) khá trơ về mặt hóa học chủ yếu do:",
            options: [
              "Phân tử có liên kết ba N≡N rất bền vững",
              "Nitơ có độ âm điện rất lớn",
              "Phân tử Nitơ không phân cực",
              "Khí Nitơ nhẹ hơn không khí",
            ],
            correctIndex: 0,
            explanation: "Liên kết ba N≡N có năng lượng liên kết rất lớn (945 kJ/mol) nên ở nhiệt độ phòng rất khó bị bẻ gãy.",
          },
        ],
      },
      {
        id: "g11-c2-2",
        title: "Axit Nitric (HNO₃) & Tính Oxi hóa rất mạnh",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao axit nitric HNO₃ đặc có thể hòa tan được cả kim loại Đồng (Cu) bóng loáng vốn trơ với axit HCl?",
          story: "HCl chỉ có thể oxi hóa kim loại đứng trước Hydro bằng ion H⁺. Còn trong HNO₃, ion nitrat NO₃⁻ trong môi trường acid có tính oxi hóa cực mạnh, 'bẻ gãy' electron của Đồng tạo dung dịch muối xanh biếc và bốc khói màu nâu đỏ NO₂ rực lửa!",
          icon: "Flame",
        },
        keyPoints: [
          "HNO₃ là một axit mạnh và là chất oxi hóa rất mạnh.",
          "Oxi hóa hầu hết kim loại (trừ Au, Pt) lên số oxi hóa cao nhất, sinh ra các sản phẩm khử của Nitơ: NO₂ (khí màu nâu đỏ), NO (khí không màu hóa nâu ngoài không khí), N₂O, N₂, NH₄NO₃.",
          "Kim loại Fe, Al, Cr bị thụ động hóa (không phản ứng) trong dung dịch HNO₃ đặc, nguội do tạo màng oxit bảo vệ bề mặt.",
        ],
        realLifeApplication: "Sản xuất phân bón đạm amoni nitrat, tinh chế vàng bạc trang sức và sản xuất thuốc nổ công nghiệp.",
        practiceQuestions: [
          {
            id: "q-11-2-2",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Kim loại nào sau đây bị thụ động hóa trong dung dịch HNO₃ đặc, nguội?",
            options: ["Fe và Al", "Cu và Ag", "Zn và Mg", "Na và K"],
            correctIndex: 0,
            explanation: "Fe, Al (và Cr) bị thụ động hóa trong dung dịch HNO₃ đặc nguội và H₂SO₄ đặc nguội.",
          },
        ],
      },
      {
        id: "g11-c2-3",
        title: "Lưu huỳnh, Khí SO₂, Mưa axit & Axit Sunfuric (H₂SO₄)",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao khi pha loãng axit sunfuric đặc tuyệt đối không được đổ nước vào axit mà phải rót từ từ axit vào nước?",
          story: "Axit H₂SO₄ đặc háo nước mãnh liệt và tỏa lượng nhiệt khổng lồ. Nếu đổ nước vào axit, nước sôi bùng lên tức thì làm axit bắn tung tóe gây bỏng hóa chất cực kỳ nguy hiểm!",
          icon: "ShieldAlert",
        },
        keyPoints: [
          "Lưu huỳnh đioxit SO₂ là khí không màu, mùi hắc độc, là nguyên nhân chính gây ra mưa axit làm hủy hoại rừng cây và tượng đá vôi.",
          "Axit sunfuric đặc có 3 tính chất đặc trưng: Tính axit mạnh, tính oxi hóa rất mạnh và tính háo nước (làm than hóa đường saccharose: C₁₂H₂₂O₁₁ → 12C + 11H₂O).",
          "Thuốc thử nhận biết ion sulfate SO₄²⁻ là dung dịch muối Ba²⁺ (như BaCl₂) tạo kết tủa trắng BaSO₄ không tan trong axit mạnh.",
        ],
        realLifeApplication: "Sản xuất ắc quy chì xe máy, phân bón superphosphate cho nông nghiệp và công nghệ sản xuất bột giấy.",
        practiceQuestions: [
          {
            id: "q-11-2-3",
            grade: 11,
            level: "Nhận biết",
            questionText: "Thuốc thử đặc trưng để nhận biết ion sulfate (SO₄²⁻) trong dung dịch là:",
            options: ["Dung dịch BaCl₂", "Dung dịch AgNO₃", "Quỳ tím", "Khí CO₂"],
            correctIndex: 0,
            explanation: "Ion Ba²⁺ phản ứng với ion SO₄²⁻ tạo kết tủa trắng BaSO₄ siêu bền không tan trong các axit mạnh.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 3 ======================
  {
    id: "g11-c3",
    grade: 11,
    chapterNumber: 3,
    title: "Chương 3: Đại cương về Hóa học hữu cơ",
    description: "Hợp chất hữu cơ, thuyết cấu tạo, đồng đẳng, đồng phân, các phương pháp tách tinh chế và phân tích phổ IR, MS.",
    icon: "FlaskConical",
    concepts: [
      {
        id: "g11-c3-1",
        title: "Hợp chất hữu cơ, Thuyết cấu tạo & Đồng đẳng, Đồng phân",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao cùng có công thức phân tử C₂H₆O nhưng một chất là cồn uống say sưa (rượu), còn chất kia lại là khí gây mê chết người (ete)?",
          story: "Đó chính là hiện tượng đồng phân! Trật tự liên kết giữa các nguyên tử quyết định linh hồn của phân tử: C-C-O-H là cồn rượu ethanol lỏng, trong khi C-O-C là khí đimetyl ete có tính chất hoàn toàn đối lập!",
          icon: "Boxes",
        },
        keyPoints: [
          "Hợp chất hữu cơ là hợp chất của cacbon (trừ CO, CO₂, muối cacbonat, xianua, cacbua...).",
          "Thuyết cấu tạo hóa học: Các nguyên tử liên kết theo đúng hóa trị (C hóa trị IV, H hóa trị I, O hóa trị II, N hóa trị III) và theo một trật tự nhất định.",
          "Hiện tượng đồng đẳng: Những hợp chất có thành phần phân tử hơn kém nhau một hay nhiều nhóm -CH₂- nhưng có tính chất hóa học tương tự nhau.",
          "Hiện tượng đồng phân: Những hợp chất khác nhau nhưng có cùng công thức phân tử (đồng phân mạch cacbon, đồng phân nhóm chức, đồng phân vị trí liên kết bội/nhóm chức).",
        ],
        realLifeApplication: "Thiết kế các loại thuốc tân dược điều trị bệnh nhắm trúng đích dựa vào hình thể không gian phân tử.",
        practiceQuestions: [
          {
            id: "q-11-3-1",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Số lượng đồng phân cấu tạo có công thức phân tử C₄H₁₀ là:",
            options: ["2", "3", "4", "5"],
            correctIndex: 0,
            explanation: "C₄H₁₀ có 2 đồng phân cấu tạo: butan mạch thẳng (CH₃-CH₂-CH₂-CH₃) và isobutan mạch nhánh (CH₃-CH(CH₃)-CH₃).",
          },
        ],
      },
      {
        id: "g11-c3-2",
        title: "Các phương pháp Tách biệt và Tinh chế",
        estimatedMinutes: 4,
        visualHook: {
          question: "Làm thế nào người dân vùng núi nấu được những giọt tinh dầu tràm nguyên chất thơm ngát từ lá cây rừng?",
          story: "Người ta đun lá tràm với nước, tinh dầu nhẹ hơn bốc hơi theo hơi nước rồi ngưng tụ qua ống sinh hàn làm lạnh. Phương pháp chưng cất lôi cuốn hơi nước tách riêng tinh dầu tinh khiết nổi lên trên mặt nước!",
          icon: "Filter",
        },
        keyPoints: [
          "Chưng cất: Dựa vào sự khác nhau về nhiệt độ sôi giữa các chất lỏng (ví dụ nấu rượu etylic, chưng cất dầu mỏ).",
          "Chiết: Dựa vào độ hòa tan khác nhau của chất trong hai dung môi không trộn lẫn vào nhau (dùng phễu chiết tách lớp dầu và lớp nước).",
          "Kết tinh: Tách chất rắn dựa vào độ tan thay đổi theo nhiệt độ (hòa tan nóng rồi làm lạnh để chất rắn kết tinh tinh khiết).",
          "Sắc ký cột: Tách hỗn hợp dựa vào sự phân bố khác nhau giữa pha tĩnh và pha động.",
        ],
        realLifeApplication: "Chiết xuất tinh dầu sả đuổi muỗi, sản xuất đường mía kết tinh trắng tinh khiết và tách cafein khỏi hạt cà phê.",
        practiceQuestions: [
          {
            id: "q-11-3-2",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Phương pháp thích hợp nhất để tách cồn (etanol) ra khỏi hỗn hợp rượu và nước là:",
            options: ["Chưng cất phân đoạn", "Chiết bằng phễu chiết", "Kết tinh lại", "Lọc qua giấy lọc"],
            correctIndex: 0,
            explanation: "Etanol (sôi ở 78.3°C) và nước (sôi ở 100°C) có nhiệt độ sôi khác nhau nên dùng phương pháp chưng cất để tách.",
          },
        ],
      },
      {
        id: "g11-c3-3",
        title: "Xác định Công thức phân tử & Phổ hiện đại (IR, MS)",
        estimatedMinutes: 5,
        visualHook: {
          question: "Làm thế nào các chuyên gia kiểm nghiệm tìm ra công thức của một loại dược chất mới chỉ với vài giọt mẫu phẩm vi lượng?",
          story: "Họ đưa mẫu vào máy quang phổ hồng ngoại IR và phổ khối lượng MS. Các bước sóng hấp thụ và mảnh phân tử bắn phá hé lộ chính xác nhóm chức và khối lượng phân tử M trong vài giây!",
          icon: "Activity",
        },
        keyPoints: [
          "Công thức đơn giản nhất cho biết tỉ lệ số nguyên tử của các nguyên tố trong phân tử: C : H : O = (mC/12) : (mH/1) : (mO/16).",
          "Phổ khối lượng (MS): Xác định khối lượng mol phân tử M dựa vào tín hiệu của pic ion phân tử [M⁺] có giá trị m/z lớn nhất.",
          "Phổ hồng ngoại (IR): Xác định các nhóm chức đặc trưng (vùng hấp thụ nhóm O-H khoảng 3650 - 3200 cm⁻¹; nhóm C=O khoảng 1750 - 1650 cm⁻¹).",
        ],
        realLifeApplication: "Xét nghiệm phòng chống doping trong thể thao Olympic và kiểm nghiệm an toàn thực phẩm.",
        practiceQuestions: [
          {
            id: "q-11-3-3",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Tín hiệu pic ion phân tử [M⁺] trên phổ MS có giá trị m/z = 46. Phân tử khối của hợp chất này là:",
            options: ["46 g/mol", "23 g/mol", "92 g/mol", "64 g/mol"],
            correctIndex: 0,
            explanation: "Giá trị m/z của pic ion phân tử [M⁺] chính là khối lượng mol phân tử M = 46 g/mol.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 4 ======================
  {
    id: "g11-c4",
    grade: 11,
    chapterNumber: 4,
    title: "Chương 4: Hydrocarbon",
    description: "Cấu tạo và tính chất của Alkane, Alkene, Alkyne, Aren (Benzen, Toluen); phản ứng thế, cộng phá vỡ liên kết pi, trùng hợp.",
    icon: "Network",
    concepts: [
      {
        id: "g11-c4-1",
        title: "Alkane - Cấu tạo, Phản ứng Thế & Nhiên liệu khí đốt",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao bình gas nấu ăn trong bếp nhà bạn lại chứa hỗn hợp propan và butan nén hóa lỏng?",
          story: "Các ankan mạch ngắn dễ hóa lỏng dưới áp suất vừa phải và khi cháy tỏa ra lượng nhiệt năng cực kỳ lớn, không tạo khói bụi độc hại, trở thành nguồn nhiên liệu lý tưởng cho hàng tỷ gia đình!",
          icon: "Flame",
        },
        keyPoints: [
          "Alkane là các hydrocarbon no, mạch hở, chỉ chứa liên kết đơn C-C và C-H, công thức chung CnH2n+2 (n ≥ 1).",
          "Phản ứng đặc trưng: Phản ứng thế halogen (chiếu sáng): CH₄ + Cl₂ → CH₃Cl + HCl.",
          "Quy tắc thế: Nguyên tử halogen ưu tiên thế vào nguyên tử C bậc cao hơn (nhiều nhánh hơn, ít H hơn).",
          "Phản ứng cracking: Bẻ gãy ankan mạch dài thành ankan và anken mạch ngắn hơn dưới tác dụng nhiệt và xúc tác.",
        ],
        realLifeApplication: "Nhiên liệu khí đốt LPG (bếp gas), xăng dầu cho xe cộ và sáp nến thắp sáng parafin.",
        practiceQuestions: [
          {
            id: "q-11-4-1",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Khi clo hóa isobutan (2-metylpropan) theo tỉ lệ mol 1:1 có chiếu sáng, sản phẩm chính thu được là:",
            options: [
              "2-clo-2-metylpropan",
              "1-clo-2-metylpropan",
              "1-clobutan",
              "2-clobutan",
            ],
            correctIndex: 0,
            explanation: "Clo ưu tiên thế vào nguyên tử cacbon bậc III (ở vị trí số 2) tạo ra sản phẩm chính là 2-clo-2-metylpropan.",
          },
        ],
      },
      {
        id: "g11-c4-2",
        title: "Alkene, Alkyne & Phản ứng Cộng phá vỡ liên kết Pi",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao một quả chuối chín đặt cạnh nải chuối xanh lại có thể làm cả nải chuối cùng chín rộ chỉ sau một đêm?",
          story: "Chuối chín tự nhiên tiết ra khí ethylene (C₂H₄). Đây là hoocmon thực vật tự nhiên kích thích chuyển hóa tinh bột thành đường, làm hoa quả chín vàng thơm nức!",
          icon: "Apple",
        },
        keyPoints: [
          "Alkene (CnH2n) chứa 1 liên kết đôi C=C; Alkyne (CnH2n-2) chứa 1 liên kết ba C≡C. Liên kết pi kém bền dễ bị phá vỡ.",
          "Phản ứng cộng: Làm mất màu dung dịch nước brom (thuốc thử nhận biết liên kết bội): CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br.",
          "Quy tắc Markovnikov: Khi cộng HX vào anken bất đối xứng, H ưu tiên cộng vào C bậc thấp hơn (có nhiều H hơn), X cộng vào C bậc cao hơn.",
          "Alkyne có liên kết ba đầu mạch (alk-1-yne) phản ứng với dung dịch AgNO₃/NH₃ tạo kết tủa vàng nhạt (nhận biết axetilen).",
        ],
        realLifeApplication: "Dấm chín trái cây, tổng hợp nhựa nhiệt dẻo PE, PVC và đèn xì hàn cắt kim loại oxy - axetilen.",
        practiceQuestions: [
          {
            id: "q-11-4-2",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Chất nào sau đây tác dụng với dung dịch AgNO₃ trong NH₃ tạo kết tủa màu vàng nhạt?",
            options: ["Acetylene (CH≡CH)", "Ethylene (CH₂=CH₂)", "Methane (CH₄)", "Ethanol (C₂H₅OH)"],
            correctIndex: 0,
            explanation: "Acetylene có liên kết ba đầu mạch (có nguyên tử H linh động) tham gia phản ứng thế ion bạc tạo kết tủa vàng nhạt AgC≡CAg.",
          },
        ],
      },
      {
        id: "g11-c4-3",
        title: "Aren (Hydrocarbon thơm) - Vòng Benzen & Toluene",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao vòng benzen C₆H₆ có chứa đến 3 liên kết đôi nhưng lại không làm mất màu nước brom như anken thông thường?",
          story: "Năm 1865, Kekulé nằm mơ thấy con rắn cắn đuôi mình thành một vòng tròn. 6 electron pi trên vòng benzen giải tỏa đều tạo thành một hệ thơm siêu bền vững, khiến benzen 'dễ thế, khó cộng'!",
          icon: "Shield",
        },
        keyPoints: [
          "Benzen C₆H₆ có cấu trúc lục giác đều phẳng, hệ liên kết pi liên hợp thơm đặc biệt bền vững.",
          "Tính chất hóa học đặc trưng: Dễ tham gia phản ứng thế (với Br₂ có xúc tác FeBr₃, nitro hóa với hỗn hợp HNO₃/H₂SO₄ đặc), khó tham gia phản ứng cộng.",
          "Quy tắc thế vào vòng thơm: Nhóm thế loại 1 đẩy e (-CH₃, -OH) định hướng thế ưu tiên vào vị trí ortho (o-) và para (p-); Nhóm thế loại 2 hút e (-NO₂, -COOH) định hướng thế vào vị trí meta (m-).",
        ],
        realLifeApplication: "Dung môi công nghiệp pha sơn, sản xuất thuốc nổ TNT (trinitrotoluen) và tổng hợp phẩm nhuộm azo.",
        practiceQuestions: [
          {
            id: "q-11-4-3",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Khi cho toluene (C₆H₅-CH₃) tác dụng với hỗn hợp HNO₃ đặc và H₂SO₄ đặc đun nóng, sản phẩm chính thu được là:",
            options: [
              "Hỗn hợp ortho-nitrotoluene và para-nitrotoluene",
              "meta-nitrotoluene",
              "Benzyl nitrate",
              "Phenylnitromethane",
            ],
            correctIndex: 0,
            explanation: "Nhóm -CH₃ là nhóm đẩy electron kích hoạt vòng benzen và định hướng phản ứng thế ưu tiên vào vị trí ortho và para.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 5 ======================
  {
    id: "g11-c5",
    grade: 11,
    chapterNumber: 5,
    title: "Chương 5: Dẫn xuất Halogen - Alcohol - Phenol",
    description: "Cấu trúc nhóm chức -OH, liên kết hydrogen liên phân tử, tính chất của Ethanol, Glycerol và tính acid yếu của Phenol.",
    icon: "Droplets",
    concepts: [
      {
        id: "g11-c5-1",
        title: "Dẫn xuất Halogen - Cấu tạo & Phản ứng Thế/Tách",
        estimatedMinutes: 4,
        visualHook: {
          question: "Tại sao các khí gas làm lạnh CFC thế hệ cũ trong tủ lạnh lại bị cấm sử dụng trên toàn thế giới theo Nghị định thư Montreal?",
          story: "Các dẫn xuất clo-flo của hydrocarbon khi bay lên tầng bình lưu bị tia tử ngoại phân hủy giải phóng các gốc tự do Clo. Mỗi nguyên tử Clo có thể phá hủy hàng trăm nghìn phân tử Ozon, làm thủng lá chắn bảo vệ sự sống Trái Đất!",
          icon: "ShieldAlert",
        },
        keyPoints: [
          "Dẫn xuất halogen hình thành khi thay thế nguyên tử H trong hydrocarbon bằng nguyên tử halogen (F, Cl, Br, I).",
          "Phản ứng thế nhóm halogen (thủy phân trong dung dịch kiềm): R-X + NaOH (t°) → R-OH + NaX.",
          "Phản ứng tách hiđro halogenua (tạo anken): Quy tắc tách Zaitsev - halogen ưu tiên tách ra cùng với H ở C bậc cao hơn (tạo anken có nhiều nhóm thế hơn, bền hơn).",
        ],
        realLifeApplication: "Sản xuất thuốc gây mê halothane trong phẫu thuật y khoa và chất sinh hàn thân thiện môi trường HFC.",
        practiceQuestions: [
          {
            id: "q-11-5-1",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Đun nóng 2-brombutan với KOH trong dung dịch cồn (etanol), sản phẩm chính tạo thành là:",
            options: ["But-2-en", "But-1-en", "Butan-2-ol", "Butan-1-ol"],
            correctIndex: 0,
            explanation: "Theo quy tắc Zaitsev, nguyên tử Br tách cùng với H ở nguyên tử C số 3 (bậc cao hơn C số 1) tạo ra anken nhiều nhóm thế bền hơn là But-2-en.",
          },
        ],
      },
      {
        id: "g11-c5-2",
        title: "Alcohol - Cấu tạo, Liên kết Hydrogen & Phản ứng Oxi hóa",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao cồn y tế 70 độ sát trùng vết thương hiệu quả hơn nhiều so với cồn nguyên chất 96 độ?",
          story: "Cồn 96 độ làm đông tụ protein lớp vỏ ngoài quá nhanh tạo màng bọc bảo vệ vi khuẩn bên trong. Cồn 70 độ có lượng nước vừa đủ giúp cồn thấm sâu vào bên trong tế bào vi khuẩn phá hủy cấu trúc triệt để!",
          icon: "ShieldCheck",
        },
        keyPoints: [
          "Alcohol có nhóm -OH gắn trực tiếp vào C no. Tạo liên kết hydrogen liên phân tử nên có nhiệt độ sôi cao hơn hydrocarbon tương ứng.",
          "Phản ứng thế H của nhóm -OH: Tác dụng với kim loại kiềm Na giải phóng H₂.",
          "Phản ứng oxi hóa không hoàn toàn bằng CuO (t°): Ancol bậc 1 → Aldehyde; Ancol bậc 2 → Ketone; Ancol bậc 3 không bị oxi hóa.",
          "Polyalcohol có các nhóm -OH kề nhau (như glycerol, etylen glycol) hòa tan Cu(OH)₂ ở nhiệt độ thường tạo phức màu xanh lam thẫm đặc trưng.",
        ],
        realLifeApplication: "Dung dịch sát khuẩn cồn 70°, chất chống đông động cơ ô tô (etylen glycol) và kem dưỡng ẩm da glycerol.",
        practiceQuestions: [
          {
            id: "q-11-5-2",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Oxi hóa ancol etylic (CH₃CH₂OH) bằng bột CuO đun nóng thu được sản phẩm hữu cơ là:",
            options: ["Acetaldehyde (CH₃CHO)", "Axit axetic (CH₃COOH)", "Acetone (CH₃COCH₃)", "Ethylene (CH₂=CH₂)"],
            correctIndex: 0,
            explanation: "Ancol bậc 1 bị CuO oxi hóa nhẹ thành aldehyde: CH₃CH₂OH + CuO → CH₃CHO + Cu + H₂O.",
          },
        ],
      },
      {
        id: "g11-c5-3",
        title: "Phenol - Tính Acid yếu & Phản ứng Thế vòng thơm",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao phenol có nhóm -OH giống ancol nhưng lại có thể phản ứng với xút NaOH và làm quỳ tím đổi màu nhẹ?",
          story: "Vòng benzen hút electron làm tăng độ phân cực của liên kết O-H khiến nguyên tử H trở nên linh động hơn nhiều so với trong ancol. Sự cộng hưởng này trao cho phenol tính axit độc nhất vô nhị!",
          icon: "Zap",
        },
        keyPoints: [
          "Phenol là hợp chất có nhóm -OH liên kết trực tiếp với nguyên tử C của vòng benzen.",
          "Tính acid yếu: Tác dụng được với dung dịch kiềm mạnh NaOH tạo muối natri phenolat (C₆H₅OH + NaOH → C₆H₅ONa + H₂O), nhưng yếu hơn axit cacbonic (bị CO₂ đẩy ra).",
          "Phản ứng thế trên vòng thơm: Nhóm -OH kích hoạt vòng benzen, tác dụng với nước Brom tạo ngay kết tủa trắng 2,4,6-tribromophenol (dùng nhận biết phenol).",
        ],
        realLifeApplication: "Sản xuất nhựa bakelite cách điện, thuốc hạ sốt giảm đau paracetamol và thuốc trừ sâu nông nghiệp.",
        practiceQuestions: [
          {
            id: "q-11-5-3",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Nhỏ nước Brom vào dung dịch phenol, hiện tượng quan sát được là:",
            options: [
              "Xuất hiện kết tủa màu trắng 2,4,6-tribromophenol",
              "Dung dịch chuyển sang màu xanh lam thẫm",
              "Có bọt khí thoát ra mãnh liệt",
              "Xuất hiện kết tủa màu vàng tươi",
            ],
            correctIndex: 0,
            explanation: "Nhóm -OH định hướng thế vào 3 vị trí ortho và para cùng lúc tạo kết tủa trắng 2,4,6-tribromophenol.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 6 ======================
  {
    id: "g11-c6",
    grade: 11,
    chapterNumber: 6,
    title: "Chương 6: Hợp chất Carbonyl & Carboxylic Acid",
    description: "Nhóm carbonyl C=O trong aldehyde và ketone, phản ứng tráng bạc với thuốc thử Tollens, nhóm carboxyl -COOH và phản ứng ester hóa.",
    icon: "Sparkles",
    concepts: [
      {
        id: "g11-c6-1",
        title: "Aldehyde & Ketone - Phản ứng Tráng Bạc & Tạo Iodoform",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao những chiếc gương soi sáng bóng trong nhà bạn hay ruột phích giữ nhiệt lại có lớp bạc tráng gương kỳ diệu?",
          story: "Các thợ thủ công cho dung dịch andehit fomic tác dụng với thuốc thử Tollens [Ag(NH₃)₂]OH. Phân tử andehit nhường electron khử ion Ag⁺ thành những nguyên tử bạc lấp lánh bám chặt vào bề mặt thủy tinh!",
          icon: "Sparkle",
        },
        keyPoints: [
          "Hợp chất carbonyl chứa nhóm >C=O (Aldehyde: R-CH=O; Ketone: R-CO-R').",
          "Aldehyde có tính khử: Tác dụng với thuốc thử Tollens tạo kết tủa bạc sáng bóng: RCHO + 2[Ag(NH₃)₂]OH → RCOONH₄ + 2Ag↓ + 3NH₃ + H₂O.",
          "Tác dụng với Cu(OH)₂ trong kiềm đun nóng tạo kết tủa đỏ gạch Cu₂O.",
          "Phản ứng tạo Iodoform: Các hợp chất chứa nhóm CH₃-C=O phản ứng với I₂/NaOH tạo kết tủa vàng CHI₃ (dùng nhận biết acetaldehyde, axeton).",
        ],
        realLifeApplication: "Tráng ruột phích nước, tráng gương soi, sản xuất dung dịch ướp xác formon (focmon) và chất tẩy sơn móng tay axeton.",
        practiceQuestions: [
          {
            id: "q-11-6-1",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Chất nào sau đây tác dụng với thuốc thử Tollens đun nóng sinh ra kết tủa kim loại Bạc (Ag)?",
            options: ["Acetaldehyde (CH₃CHO)", "Acetone (CH₃COCH₃)", "Ethanol (C₂H₅OH)", "Axit axetic (CH₃COOH)"],
            correctIndex: 0,
            explanation: "CH₃CHO có nhóm chức andehit (-CH=O) có tính khử nên tham gia phản ứng tráng bạc tạo Ag sáng bóng.",
          },
        ],
      },
      {
        id: "g11-c6-2",
        title: "Carboxylic Acid - Tính Acid & Phản ứng Ester hóa",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao khi bị kiến ba khoang hay ong đốt cắn rất ngứa rát, người xưa lại xoa vôi bột hoặc nước tro bếp lên vết cắn?",
          story: "Nọc độc kiến chứa axit fomic HCOOH gây bỏng rát tế bào. Vôi bột kiềm tính Ca(OH)₂ trung hòa axit tức thì biến nọc độc thành muối và nước làm dịu cơn đau nhanh chóng!",
          icon: "Shield",
        },
        keyPoints: [
          "Carboxylic acid chứa nhóm carboxyl -COOH liên kết với gốc hydrocarbon hoặc nguyên tử H.",
          "Tính acid: Làm quỳ tím hóa đỏ, tác dụng kim loại đứng trước H giải phóng H₂, tác dụng oxit bazơ, bazơ và muối cacbonat giải phóng CO₂.",
          "Phản ứng ester hóa: Axit cacboxylic tác dụng với ancol có xúc tác H₂SO₄ đặc đun nóng tạo este và nước (phản ứng thuận nghịch): RCOOH + R'OH ⇌ RCOOR' + H₂O.",
        ],
        realLifeApplication: "Sản xuất giấm ăn tự nhiên (chứa 4-5% axit axetic), bảo quản thực phẩm chống nấm mốc và điều chế thuốc giảm đau aspirin.",
        practiceQuestions: [
          {
            id: "q-11-6-2",
            grade: 11,
            level: "Thông hiểu",
            questionText: "Hỗn hợp chất nào sau đây tham gia phản ứng ester hóa tạo thành etyl axetat?",
            options: [
              "CH₃COOH và C₂H₅OH (H₂SO₄ đặc, t°)",
              "HCOOH và C₂H₅OH (H₂SO₄ đặc, t°)",
              "CH₃COOH và CH₃OH (H₂SO₄ đặc, t°)",
              "CH₃CHO và C₂H₅OH (H₂SO₄ đặc, t°)",
            ],
            correctIndex: 0,
            explanation: "Phản ứng ester hóa: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (etyl axetat) + H₂O.",
          },
        ],
      },
    ],
  },
];
