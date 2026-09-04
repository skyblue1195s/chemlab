import { Question } from "../types";

export const GRADE_10_EXTRA_QUESTIONS: Record<string, Question[]> = {
  // ==================== CHƯƠNG 1: CẤU TẠO NGUYÊN TỬ ====================
  "g10-c1": [
    {
      id: "q-10-1-ex1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Số lượng orbital nguyên tử (AO) có trong các phân lớp s, p, d, f lần lượt là:",
      options: ["1, 3, 5, 7", "1, 2, 3, 4", "2, 6, 10, 14", "1, 4, 9, 16"],
      correctIndex: 0,
      explanation: "Mỗi phân lớp chứa số lượng orbital nguyên tử là số lẻ liên tiếp: phân lớp s có 1 AO, phân lớp p có 3 AO, phân lớp d có 5 AO, và phân lớp f có 7 AO.",
      realWorldLink: "Cơ sở hình thành các liên kết định hướng trong không gian phân tử."
    },
    {
      id: "q-10-1-ex2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Số electron tối đa có thể chứa trong lớp electron thứ 3 (lớp M, với n = 3) là:",
      options: ["18 electron", "8 electron", "9 electron", "32 electron"],
      correctIndex: 0,
      explanation: "Số electron tối đa trong lớp thứ n là 2n². Với lớp M (n = 3), số electron tối đa = 2 × 3² = 18 electron (gồm các phân lớp 3s² 3p⁶ 3d¹⁰).",
    },
    {
      id: "q-10-1-ex3",
      grade: 10,
      level: "Vận dụng",
      questionText: "Nguyên tử của nguyên tố X có tổng số hạt cơ bản (p, n, e) là 40. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Cấu hình electron của X là:",
      options: [
        "1s² 2s² 2p⁶ 3s² 3p¹",
        "1s² 2s² 2p⁶ 3s²",
        "1s² 2s² 2p⁶ 3s² 3p²",
        "[Ne] 3s² 3p³"
      ],
      correctIndex: 0,
      explanation: "Gọi số hạt là p, e, n. Ta có p = e. Tổng hạt: 2p + n = 40. Hạt mang điện nhiều hơn không mang điện: 2p - n = 12. Cộng hai vế ta được 4p = 52 => p = 13 (Nhôm - Al). Cấu hình e của Al: 1s² 2s² 2p⁶ 3s² 3p¹.",
    },
    {
      id: "q-10-1-ex4",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Ion Fe²⁺ (sắt II, Z = 26) có cấu hình electron ở trạng thái cơ bản là:",
      options: [
        "[Ar] 3d⁶",
        "[Ar] 3d⁴ 4s²",
        "[Ar] 3d⁵ 4s¹",
        "[Ar] 3d⁶ 4s²"
      ],
      correctIndex: 0,
      explanation: "Nguyên tử Fe (Z = 26) có cấu hình: [Ar] 3d⁶ 4s². Khi nhường 2 electron để tạo ion Fe²⁺, các electron ở phân lớp ngoài cùng 4s bị tách ra trước, để lại cấu hình [Ar] 3d⁶.",
    },
    {
      id: "q-10-1-ex5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Nguyên tố Clo trong tự nhiên gồm 2 đồng vị bền: ³⁵Cl (nguyên tử khối 35) chiếm 75,77% và ³⁷Cl (nguyên tử khối 37) chiếm 24,23%. Phần trăm khối lượng của đồng vị ³⁵Cl trong hợp chất Kali clorat (KClO₄, biết K = 39, O = 16) là:",
      options: ["19,16%", "25,29%", "19,55%", "24,80%"],
      correctIndex: 0,
      explanation: "Nguyên tử khối trung bình của Cl: M_Cl = (35 × 75,77 + 37 × 24,23) / 100 = 35,48. Phân tử khối KClO₄ = 39 + 35,48 + 16 × 4 = 138,48. Khối lượng ³⁵Cl trong 1 mol KClO₄ là: 35 × 0,7577 = 26,52 g. %m(³⁵Cl) = (26,52 / 138,48) × 100% ≈ 19,15% - 19,16%.",
    }
  ],

  // ==================== CHƯƠNG 2: BẢNG TUẦN HOÀN & ĐỊNH LUẬT TUẦN HOÀN ====================
  "g10-c2": [
    {
      id: "q-10-2-ex1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Các nguyên tố trong cùng một nhóm A của bảng tuần hoàn có đặc điểm chung nào sau đây?",
      options: [
        "Có cùng số electron hóa trị ở lớp ngoài cùng",
        "Có cùng số lớp electron",
        "Có cùng số khối A",
        "Có cùng bán kính nguyên tử"
      ],
      correctIndex: 0,
      explanation: "Các nguyên tố nhóm A có cùng số electron hóa trị (bằng số thứ tự của nhóm), do đó chúng có tính chất hóa học tương tự nhau.",
    },
    {
      id: "q-10-2-ex2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Trong một chu kỳ theo chiều tăng dần của điện tích hạt nhân (từ trái sang phải), quy luật biến đổi nào sau đây là ĐÚNG?",
      options: [
        "Bán kính nguyên tử giảm dần, độ âm điện tăng dần",
        "Bán kính nguyên tử tăng dần, độ âm điện giảm dần",
        "Tính kim loại tăng dần, tính phi kim giảm dần",
        "Độ âm điện giảm dần, tính phi kim tăng dần"
      ],
      correctIndex: 0,
      explanation: "Trong cùng chu kỳ từ trái sang phải, số lớp e không đổi nhưng điện tích hạt nhân tăng làm lực hút giữa hạt nhân và e lớp ngoài cùng mạnh hơn => bán kính nguyên tử giảm dần, độ âm điện và tính phi kim tăng dần.",
    },
    {
      id: "q-10-2-ex3",
      grade: 10,
      level: "Vận dụng",
      questionText: "Dãy nào sau đây sắp xếp các hydroxide theo thứ tự tính acid TĂNG DẦN?",
      options: [
        "H₃AlO₃ < H₂SiO₃ < H₃PO₄ < H₂SO₄ < HClO₄",
        "HClO₄ < H₂SO₄ < H₃PO₄ < H₂SiO₃ < H₃AlO₃",
        "H₂SiO₃ < H₃AlO₃ < H₂SO₄ < H₃PO₄ < HClO₄",
        "H₃PO₄ < H₂SO₄ < HClO₄ < H₂SiO₃ < H₃AlO₃"
      ],
      correctIndex: 0,
      explanation: "Trong chu kỳ 3: Al -> Si -> P -> S -> Cl, độ âm điện tăng dần nên tính phi kim tăng dần, dẫn tới tính acid của các hydroxide cao nhất tăng dần: Al(OH)₃ < H₂SiO₃ < H₃PO₄ < H₂SO₄ < HClO₄.",
    },
    {
      id: "q-10-2-ex4",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Nguyên tố X có cấu hình electron [Ne] 3s² 3p⁴. Vị trí của X trong bảng tuần hoàn là:",
      options: [
        "Ô số 16, chu kỳ 3, nhóm VIA",
        "Ô số 16, chu kỳ 4, nhóm IVA",
        "Ô số 14, chu kỳ 3, nhóm VIA",
        "Ô số 16, chu kỳ 3, nhóm IVB"
      ],
      correctIndex: 0,
      explanation: "X có tổng số e = 10 + 2 + 4 = 16 => Ô số 16. Có 3 lớp electron => Chu kỳ 3. Lớp ngoài cùng có 6 electron (nguyên tố p) => Nhóm VIA (lưu huỳnh - Sulfur).",
    },
    {
      id: "q-10-2-ex5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Hai nguyên tố X và Y thuộc cùng một phân nhóm chính (nhóm A) và ở hai chu kỳ kế tiếp nhau. Tổng số hạt proton của nguyên tử X và Y là 32. Tên của hai nguyên tố X, Y là:",
      options: [
        "Magnesium (Mg, Z = 12) và Calcium (Ca, Z = 20)",
        "Sodium (Na, Z = 11) và Scandium (Sc, Z = 21)",
        "Oxygen (O, Z = 8) và Chromium (Cr, Z = 24)",
        "Carbon (C, Z = 6) và Iron (Fe, Z = 26)"
      ],
      correctIndex: 0,
      explanation: "Vì X và Y thuộc cùng một nhóm A ở 2 chu kỳ kế tiếp nên hiệu số hạt proton Z_Y - Z_X có thể là 8 hoặc 18. Nếu Z_Y - Z_X = 8: Kết hợp Z_X + Z_Y = 32 => Z_X = 12 (Mg, chu kỳ 3, nhóm IIA) và Z_Y = 20 (Ca, chu kỳ 4, nhóm IIA). Thỏa mãn hoàn toàn.",
    }
  ],

  // ==================== CHƯƠNG 3: LIÊN KẾT HÓA HỌC ====================
  "g10-c3": [
    {
      id: "q-10-3-ex1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Liên kết ion thường được hình thành giữa hai nguyên tử nào sau đây?",
      options: [
        "Kim loại điển hình (nhóm IA, IIA) và phi kim điển hình (nhóm VIA, VIIA)",
        "Hai nguyên tử phi kim có độ âm điện tương đương nhau",
        "Hai nguyên tử kim loại chuyển tiếp",
        "Nguyên tử khí hiếm và nguyên tử kim loại"
      ],
      correctIndex: 0,
      explanation: "Liên kết ion được hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu, thường giữa kim loại điển hình (dễ nhường e tạo cation) và phi kim điển hình (dễ nhận e tạo anion), hiệu độ âm điện ≥ 1,7.",
    },
    {
      id: "q-10-3-ex2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Phân tử N₂ có liên kết ba bền vững gồm:",
      options: [
        "1 liên kết σ và 2 liên kết π",
        "3 liên kết σ",
        "3 liên kết π",
        "2 liên kết σ và 1 liên kết π"
      ],
      correctIndex: 0,
      explanation: "Trong liên kết ba giữa 2 nguyên tử Nitơ (N≡N): gồm có 1 liên kết σ tạo thành do sự xen phủ trục và 2 liên kết π tạo thành do sự xen phủ bên của các orbital p.",
    },
    {
      id: "q-10-3-ex3",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Nhiệt độ sôi của nước (H₂O, 100°C) cao hơn bất thường so với hydrogen sulfide (H₂S, -60°C) chủ yếu là do:",
      options: [
        "Giữa các phân tử nước hình thành mạng lưới liên kết hydrogen liên phân tử bền",
        "Khối lượng phân tử H₂O lớn hơn H₂S",
        "Liên kết cộng hóa trị H-S bền hơn H-O",
        "Nước có dạng hình học đường thẳng"
      ],
      correctIndex: 0,
      explanation: "Do oxi có độ âm điện lớn và kích thước nhỏ, phân tử H₂O phân cực mạnh và tạo được liên kết hydrogen liên phân tử bền vững, đòi hỏi năng lượng nhiệt lớn để phá vỡ khi sôi.",
    },
    {
      id: "q-10-3-ex4",
      grade: 10,
      level: "Vận dụng",
      questionText: "Số liên kết σ (sigma) và liên kết π (pi) có trong một phân tử propin (CH₃-C≡CH) lần lượt là:",
      options: [
        "6 liên kết σ và 2 liên kết π",
        "5 liên kết σ và 3 liên kết π",
        "7 liên kết σ và 1 liên kết π",
        "6 liên kết σ và 1 liên kết π"
      ],
      correctIndex: 0,
      explanation: "Công thức cấu tạo propin: H₃C-C≡C-H. Nhóm CH₃ có 3 liên kết C-H và 1 liên kết đơn C-C (tổng 4 liên kết σ). Liên kết ba C≡C gồm 1 liên kết σ và 2 liên kết π. Liên kết C-H cuối là 1 liên kết σ. Tổng cộng: 6 liên kết σ và 2 liên kết π.",
    },
    {
      id: "q-10-3-ex5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Cho năng lượng liên kết ở 298 K: E_b(H-H) = 436 kJ/mol; E_b(Cl-Cl) = 243 kJ/mol; E_b(H-Cl) = 432 kJ/mol. Biến thiên enthalpy chuẩn (Δ_r H°₂₉₈) của phản ứng: H₂(k) + Cl₂(k) → 2HCl(k) là:",
      options: ["-185 kJ", "+185 kJ", "-92,5 kJ", "+92,5 kJ"],
      correctIndex: 0,
      explanation: "Δ_r H°₂₉₈ = ∑E_b(chất đầu) - ∑E_b(sản phẩm) = [E_b(H-H) + E_b(Cl-Cl)] - 2 × E_b(H-Cl) = (436 + 243) - 2 × 432 = 679 - 864 = -185 kJ.",
    }
  ],

  // ==================== CHƯƠNG 4: PHẢN ỨNG OXI HÓA - KHỬ ====================
  "g10-c4": [
    {
      id: "q-10-4-ex1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Số oxi hóa của nguyên tố Crom (Cr) trong hợp chất Potassium dichromate (K₂Cr₂O₇) là:",
      options: ["+6", "+3", "+2", "+7"],
      correctIndex: 0,
      explanation: "Trong K₂Cr₂O₇: K có số oxi hóa +1, O có số oxi hóa -2. Gọi x là số oxi hóa của Cr: 2 × (+1) + 2x + 7 × (-2) = 0 => 2 + 2x - 14 = 0 => 2x = 12 => x = +6.",
    },
    {
      id: "q-10-4-ex2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Trong phản ứng: 2NO₂ + 2NaOH → NaNO₂ + NaNO₃ + H₂O, khí NO₂ đóng vai trò là:",
      options: [
        "Vừa là chất khử, vừa là chất oxi hóa",
        "Chỉ là chất khử",
        "Chỉ là chất oxi hóa",
        "Chất môi trường"
      ],
      correctIndex: 0,
      explanation: "Trong NO₂, số oxi hóa của N là +4. Sau phản ứng, N tạo thành NaNO₂ (N có số oxi hóa +3, giảm e => nhận e) và NaNO₃ (N có số oxi hóa +5, tăng e => nhường e). Do đó NO₂ vừa là chất khử vừa là chất oxi hóa (phản ứng tự oxi hóa - khử).",
    },
    {
      id: "q-10-4-ex3",
      grade: 10,
      level: "Vận dụng",
      questionText: "Cân bằng phương trình phản ứng oxi hóa khử sau bằng phương pháp thăng bằng electron: Cu + HNO₃(loãng) → Cu(NO₃)₂ + NO + H₂O. Tổng hệ số nguyên tối giản của các chất tham gia và tạo thành là:",
      options: ["20", "22", "18", "24"],
      correctIndex: 0,
      explanation: "Quá trình: 3 × (Cu⁰ → Cu²⁺ + 2e) và 2 × (N⁺⁵ + 3e → N⁺²). Phương trình: 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O. Tổng hệ số = 3 + 8 + 3 + 2 + 4 = 20.",
    },
    {
      id: "q-10-4-ex4",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi sục khí SO₂ vào dung dịch thuốc tím (KMnO₄ trong môi trường H₂SO₄), dung dịch bị mất màu tím. Vai trò của SO₂ trong phản ứng này là:",
      options: [
        "Chất khử",
        "Chất oxi hóa",
        "Chất xúc tác",
        "Chất môi trường"
      ],
      correctIndex: 0,
      explanation: "Khí SO₂ (S⁺⁴) nhường 2e để chuyển thành SO₄²⁻ (S⁺⁶), làm khử Mn⁺⁷ trong dung dịch tím đậm thành ion Mn²⁺ không màu. Vì vậy SO₂ đóng vai trò là chất khử.",
    },
    {
      id: "q-10-4-ex5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Hòa tan hoàn toàn 4,8 gam kim loại Mg vào dung dịch HNO₃ loãng dư, thu được 0,896 lít khí X duy nhất (đktc, 0°C và 1 atm) và dung dịch Y không chứa muối amoni. Khí X là:",
      options: ["N₂O", "NO", "N₂", "NO₂"],
      correctIndex: 0,
      explanation: "n(Mg) = 4,8 / 24 = 0,2 mol => Số mol electron nhường: n_e(nhường) = 0,2 × 2 = 0,4 mol. n(khí X) = 0,896 / 22,4 = 0,04 mol. Số electron nhận của 1 phân tử khí X = 0,4 / 0,04 = 10 e. N⁺⁵ + 10e → N₂⁰ (2 × 5e = 10e). Vậy khí X chính là N₂.",
    }
  ],

  // ==================== CHƯƠNG 5: NĂNG LƯỢNG HÓA HỌC ====================
  "g10-c5": [
    {
      id: "q-10-5-ex1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Nhiệt tạo thành chuẩn (Δ_f H°₂₉₈) của đơn chất ở dạng bền vững nhất trong điều kiện chuẩn có giá trị bằng:",
      options: ["0 kJ/mol", "100 kJ/mol", "-298 kJ/mol", "> 0 kJ/mol"],
      correctIndex: 0,
      explanation: "Theo quy ước quốc tế trong nhiệt hóa học, nhiệt tạo thành chuẩn của đơn chất bền nhất ở điều kiện chuẩn (298 K, 1 bar) được quy ước bằng 0 kJ/mol.",
    },
    {
      id: "q-10-5-ex2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Phản ứng đốt cháy cồn (ethanol): C₂H₅OH(l) + 3O₂(k) → 2CO₂(k) + 3H₂O(l) có Δ_r H°₂₉₈ = -1367 kJ. Phát biểu nào sau đây là ĐÚNG?",
      options: [
        "Đây là phản ứng tỏa nhiệt mạnh, khi đốt cháy 1 mol ethanol giải phóng 1367 kJ nhiệt lượng",
        "Đây là phản ứng thu nhiệt, cần cung cấp liên tục 1367 kJ để phản ứng duy trì",
        "Năng lượng của các chất tham gia thấp hơn năng lượng của các chất sản phẩm",
        "Phản ứng làm nhiệt độ môi trường xung quanh giảm đi"
      ],
      correctIndex: 0,
      explanation: "Khi biến thiên enthalpy chuẩn Δ_r H°₂₉₈ < 0, phản ứng là phản ứng tỏa nhiệt; nhiệt lượng được giải phóng ra môi trường ngoài làm môi trường nóng lên.",
    },
    {
      id: "q-10-5-ex3",
      grade: 10,
      level: "Vận dụng",
      questionText: "Cho nhiệt tạo thành chuẩn: Δ_f H°₂₉₈(CO₂) = -393,5 kJ/mol; Δ_f H°₂₉₈(H₂O) = -285,8 kJ/mol; Δ_f H°₂₉₈(CH₄) = -74,8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng đốt cháy metan: CH₄(k) + 2O₂(k) → CO₂(k) + 2H₂O(l) là:",
      options: ["-890,3 kJ", "+890,3 kJ", "-604,5 kJ", "-965,1 kJ"],
      correctIndex: 0,
      explanation: "Δ_r H°₂₉₈ = [Δ_f H°(CO₂) + 2 × Δ_f H°(H₂O)] - [Δ_f H°(CH₄) + 2 × Δ_f H°(O₂)] = [-393,5 + 2 × (-285,8)] - [-74,8 + 0] = -965,1 - (-74,8) = -890,3 kJ.",
    },
    {
      id: "q-10-5-ex4",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Túi chườm lạnh khẩn cấp trong sơ cứu thể thao hoạt động dựa trên sự hòa tan của muối ammonium nitrate (NH₄NO₃) vào nước. Quá trình này là:",
      options: [
        "Quá trình thu nhiệt, làm giảm nhiệt độ xung quanh túi chườm",
        "Quá trình tỏa nhiệt, làm tăng nhiệt độ xung quanh",
        "Phản ứng oxi hóa - khử tỏa năng lượng",
        "Quá trình vật lý không có sự thay đổi năng lượng"
      ],
      correctIndex: 0,
      explanation: "Sự hòa tan NH₄NO₃ vào nước là quá trình thu nhiệt (ΔH > 0), nó hấp thu nhiệt từ môi trường xung quanh khiến nước trong túi hạ xuống gần 0°C, giúp hạ nhiệt giảm sưng đau tức thì.",
    },
    {
      id: "q-10-5-ex5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Đốt cháy hoàn toàn 1 kg than đá (chứa 90% cacbon, còn lại là tạp chất không cháy). Cho nhiệt đốt cháy của C: C(r) + O₂(k) → CO₂(k) (Δ_r H°₂₉₈ = -393,5 kJ/mol). Nhiệt lượng tỏa ra khi đốt cháy 1 kg than đá trên là:",
      options: ["29512,5 kJ", "32791,7 kJ", "26561,3 kJ", "35415,0 kJ"],
      correctIndex: 0,
      explanation: "Khối lượng cacbon nguyên chất trong 1 kg than = 1000 × 0,90 = 900 g. Số mol C = 900 / 12 = 75 mol. Nhiệt lượng tỏa ra = 75 mol × 393,5 kJ/mol = 29512,5 kJ.",
    }
  ],

  // ==================== CHƯƠNG 6: TỐC ĐỘ PHẢN ỨNG HÓA HỌC ====================
  "g10-c6": [
    {
      id: "q-10-6-ex1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Biểu thức định luật tác dụng khối lượng cho phản ứng đơn giản: aA + bB → sản phẩm là:",
      options: [
        "v = k · [A]^a · [B]^b",
        "v = k · ([A] + [B])",
        "v = k · [A] / [B]",
        "v = [A]^a / [B]^b"
      ],
      correctIndex: 0,
      explanation: "Định luật tác dụng khối lượng phát biểu: Ở nhiệt độ không đổi, tốc độ phản ứng hóa học tỉ lệ thuận với tích số nồng độ các chất phản ứng với số mũ bằng hệ số tỉ lượng tương ứng trong phương trình hóa học.",
    },
    {
      id: "q-10-6-ex2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi bảo quản thực phẩm trong tủ lạnh ở ngăn mát (4°C) hoặc ngăn đá (-18°C), thức ăn giữ được lâu hơn là vì:",
      options: [
        "Nhiệt độ thấp làm giảm tốc độ các phản ứng phân hủy sinh hóa và vi khuẩn",
        "Nhiệt độ thấp làm tăng nồng độ chất bảo quản trong thực phẩm",
        "Nhiệt độ thấp làm tăng diện tích tiếp xúc của thực phẩm",
        "Nhiệt độ thấp đóng vai trò xúc tác làm chậm phản ứng"
      ],
      correctIndex: 0,
      explanation: "Theo quy tắc Van't Hoff, khi hạ nhiệt độ thì tốc độ phản ứng giảm mạnh. Do đó, các phản ứng ôi thiu, biến chất của thực phẩm và sự sinh sôi của vi sinh vật bị kìm hãm tối đa.",
    },
    {
      id: "q-10-6-ex3",
      grade: 10,
      level: "Vận dụng",
      questionText: "Cho phản ứng: 2CO(k) + O₂(k) → 2CO₂(k). Nếu tăng nồng độ khí CO lên gấp 2 lần và giữ nguyên nồng độ O₂ thì tốc độ phản ứng thuận tăng lên bao nhiêu lần (coi phản ứng là đơn giản)?",
      options: ["4 lần", "2 lần", "8 lần", "16 lần"],
      correctIndex: 0,
      explanation: "Biểu thức tốc độ: v = k · [CO]² · [O₂]. Khi [CO] tăng 2 lần: v' = k · (2[CO])² · [O₂] = 4 · k · [CO]² · [O₂] = 4v. Tốc độ tăng lên 4 lần.",
    },
    {
      id: "q-10-6-ex4",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Chất xúc tác làm tăng tốc độ phản ứng hóa học bằng cách nào sau đây?",
      options: [
        "Làm giảm năng lượng hoạt hóa (Ea) của phản ứng",
        "Làm tăng năng lượng hoạt hóa của phản ứng",
        "Làm tăng biến thiên enthalpy Δ_r H° của phản ứng",
        "Làm chuyển dịch cân bằng theo chiều thuận"
      ],
      correctIndex: 0,
      explanation: "Chất xúc tác mở ra một con đường phản ứng mới có năng lượng hoạt hóa (Ea) thấp hơn, làm cho số phân tử có đủ năng lượng để va chạm hiệu quả tăng lên, dẫn đến tốc độ phản ứng tăng vọt.",
    },
    {
      id: "q-10-6-ex5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Một phản ứng hóa học có hệ số nhiệt độ Van't Hoff γ = 3. Khi tăng nhiệt độ từ 30°C lên 60°C thì tốc độ của phản ứng đó tăng lên bao nhiêu lần?",
      options: ["27 lần", "9 lần", "81 lần", "3 lần"],
      correctIndex: 0,
      explanation: "Theo định luật Van't Hoff: v_T2 / v_T1 = γ^((T2 - T1) / 10) = 3^((60 - 30) / 10) = 3³ = 27 lần.",
    }
  ],

  // ==================== CHƯƠNG 7: NGUYÊN TỐ NHÓM HALOGEN ====================
  "g10-c7": [
    {
      id: "q-10-7-ex1",
      grade: 10,
      level: "Nhận biết",
      questionText: "Halogen nào sau đây ở điều kiện thường là chất lỏng có màu nâu đỏ, dễ bay hơi và gây bỏng nặng nếu dính vào da?",
      options: ["Bromine (Br₂)", "Chlorine (Cl₂)", "Iodine (I₂)", "Fluorine (F₂)"],
      correctIndex: 0,
      explanation: "Ở điều kiện thường, F₂ là khí lục nhạt, Cl₂ là khí vàng lục, Br₂ là chất lỏng màu nâu đỏ độc hại, và I₂ là chất rắn tinh thể màu tím đen.",
    },
    {
      id: "q-10-7-ex2",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Khi nhỏ dung dịch Silver nitrate (AgNO₃) vào 4 ống nghiệm chứa lần lượt dung dịch NaF, NaCl, NaBr, NaI, hiện tượng quan sát được là:",
      options: [
        "NaF không tạo kết tủa; NaCl kết tủa trắng; NaBr kết tủa vàng nhạt; NaI kết tủa vàng đậm",
        "Cả 4 ống nghiệm đều tạo kết tủa trắng",
        "NaF tạo kết tủa vàng; 3 ống còn lại không có hiện tượng",
        "Chỉ có NaI tạo kết tủa đen"
      ],
      correctIndex: 0,
      explanation: "AgF tan trong nước (không kết tủa); AgCl kết tủa trắng; AgBr kết tủa màu vàng nhạt; AgI kết tủa màu vàng sẫm. Đây là phản ứng đặc trưng để nhận biết các ion halide.",
    },
    {
      id: "q-10-7-ex3",
      grade: 10,
      level: "Vận dụng",
      questionText: "Sục khí Cl₂ dư vào dung dịch chứa hỗn hợp gồm NaBr và NaI. Các muối halide bị oxi hóa lần lượt là:",
      options: [
        "NaI bị oxi hóa trước, sau đó đến NaBr",
        "NaBr bị oxi hóa trước, sau đó đến NaI",
        "Cả hai muối bị oxi hóa đồng thời",
        "Chỉ có NaBr bị oxi hóa"
      ],
      correctIndex: 0,
      explanation: "Tính khử của các ion halide tăng dần: F⁻ < Cl⁻ < Br⁻ < I⁻. Vì I⁻ có tính khử mạnh nhất nên NaI bị Cl₂ oxi hóa trước thành I₂, sau khi I⁻ phản ứng hết thì Cl₂ mới tiếp tục oxi hóa Br⁻ thành Br₂.",
    },
    {
      id: "q-10-7-ex4",
      grade: 10,
      level: "Thông hiểu",
      questionText: "Hợp chất nào sau đây của halogen được dùng để khắc chữ hoặc hoa văn chìm lên bề mặt thủy tinh?",
      options: ["Hydrofluoric acid (HF)", "Hydrochloric acid (HCl)", "Hydrobromic acid (HBr)", "Sodium chloride (NaCl)"],
      correctIndex: 0,
      explanation: "Axit HF có tính chất đặc biệt là ăn mòn thủy tinh do phản ứng hòa tan silic dioxit: SiO₂ + 4HF → SiF₄ + 2H₂O. Vì vậy HF được sử dụng để khắc chữ lên thủy tinh.",
    },
    {
      id: "q-10-7-ex5",
      grade: 10,
      level: "Vận dụng cao",
      questionText: "Cho 15,8 gam KMnO₄ tác dụng hoàn toàn với dung dịch HCl đặc dư, đun nóng. Toàn bộ lượng khí Clo sinh ra được dẫn vào dung dịch chứa 0,4 mol KI. Sau khi phản ứng xảy ra hoàn toàn, khối lượng Iodine (I₂) thu được là:",
      options: ["50,8 gam", "25,4 gam", "63,5 gam", "101,6 gam"],
      correctIndex: 0,
      explanation: "n(KMnO₄) = 15,8 / 158 = 0,1 mol. Phản ứng: 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O => n(Cl₂) = 0,1 × 5 / 2 = 0,25 mol. Phản ứng với KI: Cl₂ + 2KI → 2KCl + I₂. Tỉ lệ: 0,25 mol Cl₂ cần 0,5 mol KI; thực tế chỉ có 0,4 mol KI nên KI hết, Cl₂ dư. Số mol I₂ tạo thành = n(KI) / 2 = 0,4 / 2 = 0,2 mol. Khối lượng I₂ = 0,2 × 254 = 50,8 gam.",
    }
  ]
};
