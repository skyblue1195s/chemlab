export interface BalancingEquation {
  id: string;
  reactants: { formula: string; correctCoeff: number }[];
  products: { formula: string; correctCoeff: number }[];
  difficulty: "Dễ" | "Trung bình" | "Khó" | "Chuyên gia";
  hint: string;
}

export interface MatchPair {
  id: string;
  element: string;
  symbol: string;
  application: string;
  clue: string;
}

export interface ChemRiddle {
  id: string;
  mysteryName: string;
  symbol: string;
  clues: string[];
  explanation: string;
  bonusFunFact: string;
  aliases?: string[];
}

export const BALANCING_EQUATIONS: BalancingEquation[] = [
  {
    id: "eq1",
    reactants: [
      { formula: "Fe", correctCoeff: 2 },
      { formula: "Cl₂", correctCoeff: 3 },
    ],
    products: [{ formula: "FeCl₃", correctCoeff: 2 }],
    difficulty: "Dễ",
    hint: "Sắt tác dụng với khí Clo oxi hóa mạnh tạo muối sắt(III). Bội chung nhỏ nhất của số nguyên tử Cl (2 và 3) là 6!",
  },
  {
    id: "eq2",
    reactants: [
      { formula: "Al", correctCoeff: 2 },
      { formula: "H₂SO₄", correctCoeff: 3 },
    ],
    products: [
      { formula: "Al₂(SO₄)₃", correctCoeff: 1 },
      { formula: "H₂", correctCoeff: 3 },
    ],
    difficulty: "Trung bình",
    hint: "Nhôm nhường 3 electron, mỗi H⁺ nhận 1 electron. Cân bằng nhóm SO₄²⁻ trước (3 nhóm), sau đó đến H và Al.",
  },
  {
    id: "eq3",
    reactants: [
      { formula: "C₂H₄", correctCoeff: 1 },
      { formula: "O₂", correctCoeff: 3 },
    ],
    products: [
      { formula: "CO₂", correctCoeff: 2 },
      { formula: "H₂O", correctCoeff: 2 },
    ],
    difficulty: "Dễ",
    hint: "Đốt cháy hydrocarbon: Cân bằng C trước (2 CO₂), rồi đến H (2 H₂O), cuối cùng đếm tổng số nguyên tử O bên vế phải.",
  },
  {
    id: "eq4",
    reactants: [
      { formula: "Cu", correctCoeff: 3 },
      { formula: "HNO₃", correctCoeff: 8 },
    ],
    products: [
      { formula: "Cu(NO₃)₂", correctCoeff: 3 },
      { formula: "NO", correctCoeff: 2 },
      { formula: "H₂O", correctCoeff: 4 },
    ],
    difficulty: "Khó",
    hint: "Thăng bằng electron: 3 × (Cu → Cu²⁺ + 2e) và 2 × (N⁺⁵ + 3e → N⁺²). Tổng HNO₃ = 3×2 (tạo muối) + 2 (tạo NO) = 8!",
  },
  {
    id: "eq5",
    reactants: [
      { formula: "KMnO₄", correctCoeff: 2 },
      { formula: "HCl", correctCoeff: 16 },
    ],
    products: [
      { formula: "KCl", correctCoeff: 2 },
      { formula: "MnCl₂", correctCoeff: 2 },
      { formula: "Cl₂", correctCoeff: 5 },
      { formula: "H₂O", correctCoeff: 8 },
    ],
    difficulty: "Chuyên gia",
    hint: "Điều chế khí clo trong phòng thí nghiệm: Mn⁺⁷ nhận 5e, 2 Cl⁻ nhường 2e tạo Cl₂. Hệ số nhân chéo: 2 KMnO₄ và 5 Cl₂!",
  },
  {
    id: "eq6",
    reactants: [
      { formula: "N₂", correctCoeff: 1 },
      { formula: "H₂", correctCoeff: 3 },
    ],
    products: [{ formula: "NH₃", correctCoeff: 2 }],
    difficulty: "Dễ",
    hint: "Tổng hợp amoniac (quá trình Haber-Bosch): 1 phân tử N₂ cần 2 phân tử NH₃ để cân bằng nguyên tử N, sau đó vế trái cần 3 H₂.",
  },
  {
    id: "eq7",
    reactants: [
      { formula: "Na", correctCoeff: 2 },
      { formula: "H₂O", correctCoeff: 2 },
    ],
    products: [
      { formula: "NaOH", correctCoeff: 2 },
      { formula: "H₂", correctCoeff: 1 },
    ],
    difficulty: "Dễ",
    hint: "Kim loại kiềm tan mãnh liệt trong nước: Bên phải có 1 H trong NaOH và 2 H trong H₂ (lẻ 3 H). Nhân đôi NaOH thành 2 NaOH để được 4 H, từ đó cần 2 H₂O và 2 Na.",
  },
  {
    id: "eq8",
    reactants: [
      { formula: "Fe₃O₄", correctCoeff: 1 },
      { formula: "CO", correctCoeff: 4 },
    ],
    products: [
      { formula: "Fe", correctCoeff: 3 },
      { formula: "CO₂", correctCoeff: 4 },
    ],
    difficulty: "Trung bình",
    hint: "Khử oxit sắt trong lò cao luyện gang: Mỗi CO lấy 1 nguyên tử O tạo 1 CO₂. Vì Fe₃O₄ có 4 nguyên tử O nên cần 4 CO tạo 4 CO₂ và 3 nguyên tử Fe.",
  },
  {
    id: "eq9",
    reactants: [
      { formula: "C₂H₆O", correctCoeff: 1 },
      { formula: "O₂", correctCoeff: 3 },
    ],
    products: [
      { formula: "CO₂", correctCoeff: 2 },
      { formula: "H₂O", correctCoeff: 3 },
    ],
    difficulty: "Dễ",
    hint: "Đốt cháy cồn ethanol: 2 C tạo 2 CO₂, 6 H tạo 3 H₂O. Tổng số O bên phải là 2×2 + 3 = 7. Trừ 1 O trong C₂H₆O còn 6 O, cần đúng 3 phân tử O₂.",
  },
  {
    id: "eq10",
    reactants: [
      { formula: "Fe(OH)₂", correctCoeff: 4 },
      { formula: "O₂", correctCoeff: 1 },
      { formula: "H₂O", correctCoeff: 2 },
    ],
    products: [{ formula: "Fe(OH)₃", correctCoeff: 4 }],
    difficulty: "Trung bình",
    hint: "Kết tủa Fe(OH)₂ trắng xanh hóa nâu đỏ ngoài không khí: Fe²⁺ nhường 1e (×4); O₂ nhận 4e (×1). Cần 4 Fe(OH)₂, 1 O₂, 2 H₂O tạo 4 Fe(OH)₃.",
  },
  {
    id: "eq11",
    reactants: [
      { formula: "FeS₂", correctCoeff: 4 },
      { formula: "O₂", correctCoeff: 11 },
    ],
    products: [
      { formula: "Fe₂O₃", correctCoeff: 2 },
      { formula: "SO₂", correctCoeff: 8 },
    ],
    difficulty: "Khó",
    hint: "Đốt quặng pyrit sản xuất axit sunfuric: 2 FeS₂ cần tạo 1 Fe₂O₃ và 4 SO₂ (tổng O là 3 + 8 = 11 lẻ). Nhân đôi toàn bộ: 4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂.",
  },
  {
    id: "eq12",
    reactants: [
      { formula: "Al", correctCoeff: 8 },
      { formula: "HNO₃", correctCoeff: 30 },
    ],
    products: [
      { formula: "Al(NO₃)₃", correctCoeff: 8 },
      { formula: "N₂O", correctCoeff: 3 },
      { formula: "H₂O", correctCoeff: 15 },
    ],
    difficulty: "Khó",
    hint: "Thăng bằng electron: Al nhường 3e (nhân 8); 2 N⁺⁵ nhận 8e tạo N₂O (nhân 3). Tổng axit HNO₃ = 8×3 (tạo muối) + 3×2 (khí N₂O) = 30 HNO₃ và 15 H₂O.",
  },
  {
    id: "eq13",
    reactants: [
      { formula: "Zn", correctCoeff: 4 },
      { formula: "HNO₃", correctCoeff: 10 },
    ],
    products: [
      { formula: "Zn(NO₃)₂", correctCoeff: 4 },
      { formula: "NH₄NO₃", correctCoeff: 1 },
      { formula: "H₂O", correctCoeff: 3 },
    ],
    difficulty: "Khó",
    hint: "Kim loại mạnh tác dụng với axit nitric loãng không tạo khí: Zn nhường 2e (nhân 4); N⁺⁵ nhận 8e tạo NH₄⁺ (nhân 1). Tổng HNO₃ = 4×2 + 2 = 10, sinh ra 3 H₂O.",
  },
  {
    id: "eq14",
    reactants: [{ formula: "KClO₃", correctCoeff: 2 }],
    products: [
      { formula: "KCl", correctCoeff: 2 },
      { formula: "O₂", correctCoeff: 3 },
    ],
    difficulty: "Dễ",
    hint: "Nhiệt phân muối clorat xúc tác MnO₂: Bội số chung nhỏ nhất của số O ở 2 vế (3 và 2) là 6, nên hệ số là 2 KClO₃ → 2 KCl + 3 O₂.",
  },
  {
    id: "eq15",
    reactants: [
      { formula: "Cu", correctCoeff: 1 },
      { formula: "H₂SO₄", correctCoeff: 2 },
    ],
    products: [
      { formula: "CuSO₄", correctCoeff: 1 },
      { formula: "SO₂", correctCoeff: 1 },
      { formula: "H₂O", correctCoeff: 2 },
    ],
    difficulty: "Trung bình",
    hint: "Đồng tác dụng axit sunfuric đặc nóng: Cu nhường 2e (×1); S⁺⁶ nhận 2e tạo SO₂ (×1). Axit vừa làm chất oxi hóa (1), vừa tạo muối (1) nên cần 2 H₂SO₄ và 2 H₂O.",
  },
  {
    id: "eq16",
    reactants: [
      { formula: "Cl₂", correctCoeff: 3 },
      { formula: "KOH", correctCoeff: 6 },
    ],
    products: [
      { formula: "KCl", correctCoeff: 5 },
      { formula: "KClO₃", correctCoeff: 1 },
      { formula: "H₂O", correctCoeff: 3 },
    ],
    difficulty: "Trung bình",
    hint: "Clo tự oxi hóa - khử trong dung dịch kiềm đun nóng: Cl₂ vừa bị khử về Cl⁻¹ (nhân 5), vừa bị oxi hóa lên Cl⁺⁵ (nhân 1). Tỉ lệ: 3 Cl₂ + 6 KOH → 5 KCl + 1 KClO₃ + 3 H₂O.",
  },
  {
    id: "eq17",
    reactants: [
      { formula: "FeSO₄", correctCoeff: 10 },
      { formula: "KMnO₄", correctCoeff: 2 },
      { formula: "H₂SO₄", correctCoeff: 8 },
    ],
    products: [
      { formula: "Fe₂(SO₄)₃", correctCoeff: 5 },
      { formula: "MnSO₄", correctCoeff: 2 },
      { formula: "K₂SO₄", correctCoeff: 1 },
      { formula: "H₂O", correctCoeff: 8 },
    ],
    difficulty: "Chuyên gia",
    hint: "Phản ứng chuẩn độ permanganat kinh điển: 2 Fe²⁺ nhường 2e (nhân 5 = 10 FeSO₄); Mn⁺⁷ nhận 5e (nhân 2 = 2 KMnO₄). Cần 8 H₂SO₄ tạo môi trường, sinh ra 8 H₂O.",
  },
  {
    id: "eq18",
    reactants: [
      { formula: "P", correctCoeff: 6 },
      { formula: "KClO₃", correctCoeff: 5 },
    ],
    products: [
      { formula: "P₂O₅", correctCoeff: 3 },
      { formula: "KCl", correctCoeff: 5 },
    ],
    difficulty: "Khó",
    hint: "Phản ứng kích nổ đầu que diêm: P nhường 5e (nhân 6 cho 2P); Cl⁺⁵ nhận 6e (nhân 5 cho KClO₃). Hệ số: 6 P + 5 KClO₃ → 3 P₂O₅ + 5 KCl.",
  },
  {
    id: "eq19",
    reactants: [
      { formula: "C₃H₈", correctCoeff: 1 },
      { formula: "O₂", correctCoeff: 5 },
    ],
    products: [
      { formula: "CO₂", correctCoeff: 3 },
      { formula: "H₂O", correctCoeff: 4 },
    ],
    difficulty: "Dễ",
    hint: "Đốt cháy khí hóa lỏng propan: 3 C tạo 3 CO₂; 8 H tạo 4 H₂O. Tổng nguyên tử O bên phải = 3×2 + 4 = 10, suy ra cần đúng 5 phân tử O₂.",
  },
  {
    id: "eq20",
    reactants: [
      { formula: "Ba(OH)₂", correctCoeff: 3 },
      { formula: "Al₂(SO₄)₃", correctCoeff: 1 },
    ],
    products: [
      { formula: "BaSO₄", correctCoeff: 3 },
      { formula: "Al(OH)₃", correctCoeff: 2 },
    ],
    difficulty: "Trung bình",
    hint: "Phản ứng trao đổi tạo đồng thời 2 kết tủa: 1 Al₂(SO₄)₃ có 3 gốc SO₄²⁻ cần 3 Ba²⁺ tạo 3 BaSO₄; 3 Ba(OH)₂ cung cấp 6 OH⁻ kết hợp 2 Al³⁺ tạo 2 Al(OH)₃.",
  },
  {
    id: "eq21",
    reactants: [
      { formula: "FeO", correctCoeff: 3 },
      { formula: "HNO₃", correctCoeff: 10 },
    ],
    products: [
      { formula: "Fe(NO₃)₃", correctCoeff: 3 },
      { formula: "NO", correctCoeff: 1 },
      { formula: "H₂O", correctCoeff: 5 },
    ],
    difficulty: "Trung bình",
    hint: "FeO tác dụng axit nitric giải phóng khí NO: Fe⁺² nhường 1e (×3); N⁺⁵ nhận 3e (×1). Tổng HNO₃ = 3×3 (muối) + 1 (NO) = 10 HNO₃ và 5 H₂O.",
  },
  {
    id: "eq22",
    reactants: [
      { formula: "Cr₂O₃", correctCoeff: 1 },
      { formula: "Al", correctCoeff: 2 },
    ],
    products: [
      { formula: "Al₂O₃", correctCoeff: 1 },
      { formula: "Cr", correctCoeff: 2 },
    ],
    difficulty: "Dễ",
    hint: "Nhiệt nhôm điều chế kim loại crom: 1 Cr₂O₃ cần 2 nguyên tử Al để cướp toàn bộ 3 nguyên tử oxi, sinh ra 1 Al₂O₃ và 2 Cr.",
  },
  {
    id: "eq23",
    reactants: [
      { formula: "K₂Cr₂O₇", correctCoeff: 1 },
      { formula: "HCl", correctCoeff: 14 },
    ],
    products: [
      { formula: "KCl", correctCoeff: 2 },
      { formula: "CrCl₃", correctCoeff: 2 },
      { formula: "Cl₂", correctCoeff: 3 },
      { formula: "H₂O", correctCoeff: 7 },
    ],
    difficulty: "Chuyên gia",
    hint: "Oxi hóa axit clohiđric bằng kali đicromat: 2 Cr⁺⁶ nhận 6e (×1); 2 Cl⁻ nhường 2e tạo Cl₂ (×3). Tổng Cl bên phải = 2 (KCl) + 6 (CrCl₃) + 6 (3 Cl₂) = 14 HCl và 7 H₂O.",
  },
  {
    id: "eq24",
    reactants: [{ formula: "C₆H₁₂O₆", correctCoeff: 1 }],
    products: [
      { formula: "C₂H₅OH", correctCoeff: 2 },
      { formula: "CO₂", correctCoeff: 2 },
    ],
    difficulty: "Dễ",
    hint: "Lên men rượu từ glucozơ: 1 phân tử C₆H₁₂O₆ (6 C) dưới xúc tác enzyme men rượu sinh ra đúng 2 phân tử ethanol C₂H₅OH (4 C) và 2 phân tử CO₂ (2 C).",
  },
  {
    id: "eq25",
    reactants: [
      { formula: "Fe₃O₄", correctCoeff: 3 },
      { formula: "HNO₃", correctCoeff: 28 },
    ],
    products: [
      { formula: "Fe(NO₃)₃", correctCoeff: 9 },
      { formula: "NO", correctCoeff: 1 },
      { formula: "H₂O", correctCoeff: 14 },
    ],
    difficulty: "Khó",
    hint: "Oxit sắt từ tác dụng HNO₃: Fe₃O₄ nhường 1e (×3); N⁺⁵ nhận 3e (×1). Cần 3 Fe₃O₄ tạo 9 Fe(NO₃)₃ và 1 NO. Tổng HNO₃ = 9×3 + 1 = 28 HNO₃ và 14 H₂O.",
  },
];

export const MATCH_PAIRS: MatchPair[] = [
  {
    id: "m1",
    element: "Lithium (Liti)",
    symbol: "Li",
    application: "Pin xe điện Tesla/VinFast & Smartphone",
    clue: "Kim loại kiềm nhẹ nhất, giữ năng lượng di động toàn cầu",
  },
  {
    id: "m2",
    element: "Helium (Heli)",
    symbol: "He",
    application: "Làm mát máy chụp cộng hưởng từ MRI",
    clue: "Khí hiếm không bắt lửa, điểm sôi thấp nhất vũ trụ",
  },
  {
    id: "m3",
    element: "Carbon (Cacbon)",
    symbol: "C",
    application: "Vừa làm ruột bút chì vừa làm kim cương đắt giá",
    clue: "Nguyên tố cơ sở của sự sống hữu cơ và cấu trúc nano",
  },
  {
    id: "m4",
    element: "Chlorine (Clo)",
    symbol: "Cl",
    application: "Khử trùng nước sinh hoạt & hồ bơi",
    clue: "Khí vàng lục mùi hắc, diệt khuẩn nguồn nước",
  },
  {
    id: "m5",
    element: "Copper (Đồng)",
    symbol: "Cu",
    application: "Lõi dây cáp điện & động cơ điện tử",
    clue: "Kim loại màu đỏ cam dẫn điện cực kỳ xuất sắc",
  },
  {
    id: "m6",
    element: "Titanium (Titan)",
    symbol: "Ti",
    application: "Cấy ghép xương y tế & vỏ máy bay siêu âm",
    clue: "Siêu bền, nhẹ, tương thích sinh học hoàn hảo với cơ thể",
  },
];

export const CHEM_RIDDLES: ChemRiddle[] = [
  {
    id: "r1",
    mysteryName: "Lithium",
    symbol: "Li",
    aliases: ["li", "liti", "lithium"],
    clues: [
      "Tôi là kim loại có khối lượng riêng nhẹ nhất trong bảng tuần hoàn (thậm chí nổi trên dầu hỏa).",
      "Tôi nằm ở ô số 3, chu kỳ 2, nhóm IA.",
      "Tôi là 'trái tim' của cuộc cách mạng năng lượng xanh và điện thoại thông minh ngày nay.",
      "Muối của tôi từng được dùng làm thuốc điều trị tâm thần rối loạn lưỡng cực.",
    ],
    explanation: "Lithium (Liti, ký hiệu Li, Z=3) là kim loại kiềm nhẹ nhất và có điện thế oxi hóa khử cao nhất, lý tưởng cho pin sạc Li-ion.",
    bonusFunFact: "Pin Liti đã mang lại giải Nobel Hóa học năm 2019 cho 3 nhà khoa học John B. Goodenough, M. Stanley Whittingham và Akira Yoshino.",
  },
  {
    id: "r2",
    mysteryName: "Nitrogen",
    symbol: "N",
    aliases: ["n", "nito", "nitơ", "nitrogen", "n2"],
    clues: [
      "Tôi chiếm tới 78% thể tích không khí bạn đang hít thở từng giây.",
      "Hai nguyên tử của tôi liên kết với nhau bằng một liên kết ba siêu bền vững (N≡N).",
      "Nhờ liên kết bền này, tôi rất trơ ở nhiệt độ phòng và được dùng để bơm vào gói snack chống ỉu.",
      "Ở thể lỏng -196°C, tôi làm đông cứng nhanh thực phẩm và tế bào y học.",
    ],
    explanation: "Nitơ (Nitrogen, ký hiệu N, Z=7) tạo liên kết ba có năng lượng phân ly cực lớn (945 kJ/mol), khiến phân tử N₂ cực kỳ trơ hóa học ở nhiệt độ thường.",
    bonusFunFact: "Quá trình Haber-Bosch chuyển hóa N₂ thành amoniac (NH₃) là phát minh cung cấp phân bón nuôi sống hơn 50% dân số thế giới hiện đại.",
  },
  {
    id: "r3",
    mysteryName: "Carbon",
    symbol: "C",
    aliases: ["c", "cacbon", "carbon"],
    clues: [
      "Tôi có 4 electron hóa trị, có thể tạo chuỗi mạch thẳng, mạch nhánh hoặc vòng khép kín bất tận.",
      "Dạng thù hình này của tôi làm ruột bút chì viết bài mềm mại, nhưng dạng khác lại cứng nhất tự nhiên.",
      "Toàn bộ ngành Hóa học Hữu cơ được xây dựng xung quanh nguyên tử của tôi.",
      "Đồng vị C-14 của tôi giúp các nhà khảo cổ xác định niên đại cổ vật hàng nghìn năm tuổi.",
    ],
    explanation: "Cacbon (Carbon, ký hiệu C, Z=6) có khả năng tự liên kết tạo nên hàng chục triệu hợp chất hữu cơ phong phú của sự sống.",
    bonusFunFact: "Graphene - một lớp đơn nguyên tử carbon - dẫn điện tốt hơn đồng và bền hơn thép 200 lần!",
  },
  {
    id: "r4",
    mysteryName: "Oxygen",
    symbol: "O",
    aliases: ["o", "oxy", "oxi", "oxygen", "duong khi", "dưỡng khí", "o2"],
    clues: [
      "Tôi chiếm khoảng 21% thể tích khí quyển và là nguyên tố dồi dào nhất trong vỏ Trái Đất (gần 46%).",
      "Tôi là điều kiện tiên quyết cho sự hô hấp hiếu khí của hầu hết các sinh vật sống và quá trình duy trì sự cháy.",
      "Dạng thù hình 3 nguyên tử của tôi tạo thành tầng lá chắn bảo vệ sự sống hành tinh khỏi bức xạ cực tím UV gay gắt.",
      "Khi làm lạnh ở thể lỏng (-183°C), tôi có màu xanh da trời nhạt và bị nam châm hút (tính thuận từ kỳ thú).",
    ],
    explanation: "Oxygen (Oxi, ký hiệu O, Z=8) là phi kim hoạt động hóa học mạnh, tạo oxit với hầu hết các nguyên tố. Tầng ozone (O₃) trong tầng bình lưu hấp thụ tới 98% tia tử ngoại độc hại.",
    bonusFunFact: "Mỗi ngày một người trưởng thành hít thở khoảng 550 lít khí oxy tinh khiết để đốt cháy thức ăn tạo năng lượng ATP cho tế bào!",
  },
  {
    id: "r5",
    mysteryName: "Hydrogen",
    symbol: "H",
    aliases: ["h", "hidro", "hydro", "hydrogen", "h2"],
    clues: [
      "Tôi là nguyên tố đầu tiên trong bảng tuần hoàn (ô số 1, chu kỳ 1) và nhẹ nhất trong toàn vũ trụ.",
      "Tôi chiếm khoảng 75% tổng khối lượng vật chất thông thường cấu thành nên các vì sao và thiên hà.",
      "Năng lượng Mặt Trời được tạo ra từ phản ứng nhiệt hạch kết hợp 4 hạt nhân của tôi thành một hạt nhân Heli.",
      "Khi đốt cháy trong oxy, tôi chỉ sinh ra hơi nước tinh khiết nên được coi là nhiên liệu xanh tối thượng của tương lai.",
    ],
    explanation: "Hydrogen (Hiđro, ký hiệu H, Z=1) chỉ gồm 1 proton và 1 electron, là nguyên tố nguyên thủy sinh ra sau vụ nổ Big Bang.",
    bonusFunFact: "Ở áp suất cực cao hơn 4 triệu atmosphere trong lòng sao Mộc, hydro bị ép thành 'hydro kim loại' dẫn điện như dây đồng!",
  },
  {
    id: "r6",
    mysteryName: "Iron",
    symbol: "Fe",
    aliases: ["fe", "sat", "sắt", "iron", "ferrum"],
    clues: [
      "Tôi là kim loại chuyển tiếp nhóm VIIIB, có cấu hình electron [Ar] 3d⁶ 4s².",
      "Tôi là thành phần chủ yếu tạo nên lõi kim loại nóng chảy của Trái Đất, sinh ra từ trường bảo vệ hành tinh.",
      "Tôi giữ vị trí trung tâm trong phân tử hemoglobin của hồng cầu, nhuộm máu người thành màu đỏ và vận chuyển oxy.",
      "Hợp kim của tôi với cacbon chính là thép và gang - xương sống của toàn bộ nền văn minh công nghiệp hiện đại.",
    ],
    explanation: "Sắt (Iron/Ferrum, ký hiệu Fe, Z=26) là kim loại phổ biến thứ 4 trong vỏ Trái Đất và phổ biến nhất tính theo tổng khối lượng cả hành tinh.",
    bonusFunFact: "Màu đỏ rỉ sét của Sao Hỏa (Hành tinh Đỏ) chính là do bề mặt của nó phủ đầy bột sắt(III) oxit (Fe₂O₃)!",
  },
  {
    id: "r7",
    mysteryName: "Gold",
    symbol: "Au",
    aliases: ["au", "vang", "vàng", "gold", "aurum"],
    clues: [
      "Tôi là kim loại quý màu vàng ánh kim lấp lánh, nằm ở nhóm IB, chu kỳ 6 với ký hiệu có gốc từ tiếng Latinh nghĩa là 'bình minh rực rỡ'.",
      "Tôi có tính dẻo phi thường: chỉ 1 gram của tôi có thể dát mỏng thành lá rộng tới 1 mét vuông hoặc kéo thành sợi dài 3 cây số!",
      "Tôi trơ tuyệt đối với axit thông thường và oxy không khí, chỉ tan được trong hỗn hợp 'nước cường toan' (aqua regia).",
      "Tôi được mạ lên tấm che mũ bảo hiểm của phi hành gia NASA để phản xạ bức xạ hồng ngoại độc hại trong không gian.",
    ],
    explanation: "Vàng (Gold/Aurum, ký hiệu Au, Z=79) là kim loại quý có độ âm điện cao bất thường trong kim loại và tính khử yếu nhất dãy điện hóa.",
    bonusFunFact: "Khoảng 10 phần tử vàng được tìm thấy trong mọi tấn nước biển, nhưng hiện chưa có công nghệ kinh tế nào để tách lọc lượng vàng khổng lồ này!",
  },
  {
    id: "r8",
    mysteryName: "Mercury",
    symbol: "Hg",
    aliases: ["hg", "thuy ngan", "thủy ngân", "mercury", "hydrargyrum"],
    clues: [
      "Tôi là kim loại duy nhất ở thể lỏng ở điều kiện nhiệt độ và áp suất tiêu chuẩn phòng thí nghiệm.",
      "Tên tiếng Latinh cổ của tôi có nghĩa là 'nước bạc' (hydrargyrum), giọt của tôi lăn tròn không thấm ướt bề mặt thủy tinh.",
      "Tôi nở vì nhiệt rất đều đặn nên từng là thành phần không thể thiếu trong các ống nhiệt kế y tế và phong vũ biểu cổ điển.",
      "Hơi của tôi cực kỳ độc đối với hệ thần kinh, nhưng tôi có khả năng hòa tan nhiều kim loại khác tạo thành hỗn hống (amalgam).",
    ],
    explanation: "Thủy ngân (Mercury, ký hiệu Hg, Z=80) có liên kết kim loại yếu do các electron 6s bị co ngót tương đối tính bền vững, khiến điểm nóng chảy hạ thấp xuống -38,83°C.",
    bonusFunFact: "Người La Mã cổ đại từng dùng quặng thủy ngân chu sa (HgS) màu đỏ son tươi tắn để làm màu vẽ tranh tường và son môi quý tộc!",
  },
  {
    id: "r9",
    mysteryName: "Chlorine",
    symbol: "Cl",
    aliases: ["cl", "clo", "chlorine", "cl2"],
    clues: [
      "Tôi là một phi kim thuộc nhóm Halogen (VIIA), ở dạng đơn chất là chất khí màu vàng lục có mùi xốc hắc rất đặc trưng.",
      "Tôi có tính oxi hóa rất mạnh, thường được dẫn vào nước máy và hồ bơi sinh hoạt để tiêu diệt vi khuẩn và khử trùng dịch bệnh.",
      "Khi kết hợp với kim loại kiềm Natri, tôi tạo thành một khoáng chất gia vị thiết yếu có mặt trên mọi bàn ăn khắp năm châu.",
      "Trong dạ dày con người, tôi hiện diện dưới dạng ion Cl⁻ trong axit HCl dịch vị với nồng độ pH khoảng 1.5 - 2.0 giúp tiêu hóa thức ăn.",
    ],
    explanation: "Clo (Chlorine, ký hiệu Cl, Z=17) có độ âm điện lớn (3.16). Phản ứng với nước sinh ra axit hipoclorơ (HClO) có tính sát trùng tẩy màu cực mạnh.",
    bonusFunFact: "Khí clo được nhà hóa học Thụy Điển Carl Wilhelm Scheele phát hiện lần đầu năm 1774 khi cho quặng pyrolusit (MnO₂) tác dụng với axit clohiđric.",
  },
  {
    id: "r10",
    mysteryName: "Sodium",
    symbol: "Na",
    aliases: ["na", "natri", "sodium"],
    clues: [
      "Tôi là kim loại kiềm mềm đến mức bạn có thể dễ dàng cắt bằng một con dao gọt hoa quả thông thường.",
      "Bề mặt mới cắt của tôi sáng bóng như bạc nhưng lập tức xỉn màu trong không khí chỉ sau vài giây.",
      "Khi thả một mẩu nhỏ của tôi vào chậu nước, tôi nóng chảy vo tròn thành viên bi chạy lướt trên mặt nước và bốc cháy mãnh liệt.",
      "Tôi nhuộm ngọn lửa đèn khí thành màu vàng rực rỡ đặc trưng dùng trong các bóng đèn chiếu sáng cao tốc ban đêm.",
    ],
    explanation: "Natri (Sodium, ký hiệu Na, Z=11) có 1 electron lớp ngoài cùng dễ nhường, bán kính lớn nên tính khử rất mạnh, phải được bảo quản ngâm chìm trong dầu hỏa.",
    bonusFunFact: "Mặc dù kim loại Natri nổ khi gặp nước và khí Clo độc hại chết người, nhưng hợp chất NaCl của chúng lại cần thiết tuyệt đối cho sự sống muôn loài!",
  },
  {
    id: "r11",
    mysteryName: "Copper",
    symbol: "Cu",
    aliases: ["cu", "dong", "đồng", "copper", "cuprum"],
    clues: [
      "Tôi là một kim loại có sắc màu đỏ cam ấm áp độc nhất vô nhị (cùng với vàng là 2 kim loại màu không bạc trong tự nhiên).",
      "Tôi có độ dẫn điện và dẫn nhiệt tuyệt vời, chỉ xếp sau bạc nhưng giá thành rẻ hơn nhiều nên làm lõi mọi sợi dây điện gia đình.",
      "Tôi là kim loại đầu tiên được loài người thuần hóa nấu chảy hơn 10.000 năm trước, mở ra Thời đại Kim khí vẻ vang.",
      "Khi để lâu ngoài không khí ẩm, bề mặt của tôi phủ một lớp màng màu xanh xám bảo vệ chính là lớp đồng gỉ (patina) trên tượng Nữ Thần Tự Do.",
    ],
    explanation: "Đồng (Copper/Cuprum, ký hiệu Cu, Z=29) có cấu hình electron bán bão hòa đặc biệt [Ar] 3d¹⁰ 4s¹, tính dẫn điện dẫn nhiệt siêu hạng.",
    bonusFunFact: "Tượng Nữ Thần Tự Do ở New York ban đầu hoàn toàn sáng màu đồng đỏ sáng bóng, nhưng sau vài thập kỷ đã biến thành màu xanh ngọc bích do tạo muối CuCO₃.Cu(OH)₂!",
  },
  {
    id: "r12",
    mysteryName: "Silicon",
    symbol: "Si",
    aliases: ["si", "silic", "silicon"],
    clues: [
      "Tôi là một á kim nhóm IVA chu kỳ 3, là nguyên tố phổ biến thứ nhì trong lớp vỏ Trái Đất (chiếm gần 28%).",
      "Tôi là thành phần cốt lõi của cát biển, thạch anh, đá hoa cương và các loại đất sét gốm sứ.",
      "Nhờ tính chất bán dẫn kỳ diệu, tôi được tinh chế đến độ sạch 99.9999999% để đúc nên các tấm wafer vi xử lý và chip máy tính.",
      "Tên tôi được đặt cho một thung lũng công nghệ lừng danh toàn cầu ở bang California, Hoa Kỳ.",
    ],
    explanation: "Silic (Silicon, ký hiệu Si, Z=14) là chất bán dẫn có độ rộng vùng cấm 1.1 eV, cho phép chế tạo hàng tỷ bóng bán dẫn transistor trên một con chip kích thước hạt đậu.",
    bonusFunFact: "Hơn 90% khoáng vật tạo đá của lớp vỏ địa cầu là các hợp chất silicat có chứa liên kết siêu bền Si-O!",
  },
  {
    id: "r13",
    mysteryName: "Sulfur",
    symbol: "S",
    aliases: ["s", "luu huynh", "lưu huỳnh", "sulfur", "sulphur"],
    clues: [
      "Tôi là phi kim thể rắn màu vàng chanh tươi sáng, không mùi khi ở trạng thái tinh khiết và giòn tan khi nghiền nhỏ.",
      "Trong lòng đất gần các miệng núi lửa đang hoạt động, tôi kết tinh thành những khối quặng vàng rực tích tụ bốc khói cay xè.",
      "Khi bị đốt cháy, tôi cháy với ngọn lửa màu xanh lam ma mị sinh ra chất khí mùi hắc gay gắt gây ho sặc sụa (SO₂).",
      "Tôi là nguyên liệu khởi đầu để sản xuất axit sunfuric (H₂SO₄) - hóa chất có sản lượng lớn nhất hành tinh được mệnh danh là 'mẹ các hóa chất'.",
    ],
    explanation: "Lưu huỳnh (Sulfur, ký hiệu S, Z=16) có nhiều dạng thù hình (S_alpha hình thoi, S_beta đơn tà) tạo thành mạch vòng S₈.",
    bonusFunFact: "Quá trình lưu hóa cao su bằng bột lưu huỳnh do Charles Goodyear phát minh năm 1839 đã biến mủ cao su tự nhiên dính nhớp thành lốp xe hơi đàn hồi chịu lực ngày nay!",
  },
  {
    id: "r14",
    mysteryName: "Calcium",
    symbol: "Ca",
    aliases: ["ca", "canxi", "calcium"],
    clues: [
      "Tôi là một kim loại kiềm thổ nhóm IIA, ô số 20 với cấu hình electron là [Ar] 4s².",
      "Tôi là nguyên tố kim loại phong phú nhất trong cơ thể con người (chiếm khoảng 1.5 - 2% trọng lượng cơ thể).",
      "Khoảng 99% lượng của tôi trong cơ thể tích tụ tạo nên bộ khung xương vững chắc và hàm răng cứng cáp của bạn.",
      "Trong tự nhiên, tôi tạo nên những rạn san hô kỳ vĩ dưới đại dương, vỏ ốc, vỏ trứng gà và những dãy núi đá vôi hùng vĩ như vịnh Hạ Long.",
    ],
    explanation: "Canxi (Calcium, ký hiệu Ca, Z=20) tạo muối canxi cacbonat (CaCO₃) và canxi hiđrophotphat Ca₅(PO₄)₃OH (hydroxyapatite) là khoáng hóa tạo độ bền xương.",
    bonusFunFact: "Thạch nhũ và măng đá tuyệt mỹ trong các hang động kỳ ảo như Phong Nha - Kẻ Bàng hình thành từ phản ứng thuận nghịch tan - kết tủa của CaCO₃ với CO₂ và nước hàng triệu năm!",
  },
  {
    id: "r15",
    mysteryName: "Phosphorus",
    symbol: "P",
    aliases: ["p", "photpho", "phosphorus", "phosphor"],
    clues: [
      "Tên của tôi trong tiếng Hy Lạp cổ đại có nghĩa là 'vật mang lại ánh sáng' (Morning Star).",
      "Dạng thù hình màu trắng của tôi tự bốc cháy trong không khí ở 30°C và phát ra ánh sáng lân quang màu xanh lục trong bóng tối.",
      "Dạng thù hình màu đỏ của tôi an toàn hơn nhiều và được quét ở mặt bên của hộp que diêm để quẹt lửa ma sát.",
      "Tôi là thành phần cấu tạo nên 'đồng tiền năng lượng' ATP cung cấp sức sống cho từng nhịp đập tế bào và khung xương ADN của muôn loài.",
    ],
    explanation: "Photpho (Phosphorus, ký hiệu P, Z=15) có dạng thù hình P trắng tứ diện P₄ cực độc và tự bốc cháy, trong khi P đỏ polymer hóa thì bền vững hơn.",
    bonusFunFact: "Năm 1669, nhà giả kim người Đức Hennig Brand đã vô tình phát hiện ra photpho trắng khi cô cạn hàng trăm lít nước tiểu trong nỗ lực tìm kiếm Hòn Đá Triết Gia!",
  },
  {
    id: "r16",
    mysteryName: "Aluminum",
    symbol: "Al",
    aliases: ["al", "nhom", "nhôm", "aluminum", "aluminium"],
    clues: [
      "Tôi là kim loại phong phú nhất trong vỏ Trái Đất (chiếm hơn 8% khối lượng), đứng trên cả sắt.",
      "Mặc dù là kim loại hoạt động mạnh, tôi lại không bị ăn mòn trong không khí nhờ lớp màng oxit Al₂O₃ siêu mỏng nhưng cực kỳ trơ khít khao bảo vệ.",
      "Tôi nhẹ chỉ bằng một phần ba so với sắt, dẻo và dẫn điện tốt nên được dùng làm vỏ lon nước ngọt, dây điện cao thế và thân máy bay phản lực.",
      "Trước khi có phương pháp điện phân nóng chảy bauxite vào cuối thế kỷ 19, tôi từng đắt đỏ và quý giá hơn cả vàng ròng!",
    ],
    explanation: "Nhôm (Aluminum, ký hiệu Al, Z=13) có màng oxit thụ động hóa bảo vệ. Sản xuất công nghiệp bằng quá trình Hall-Héroult điện phân Al₂O₃ nóng chảy cùng cryolite Na₃AlF₆.",
    bonusFunFact: "Hoàng đế Pháp Napoleon III từng tổ chức quốc yến chiêu đãi thượng khách quý bằng bộ dao nĩa làm bằng nhôm, trong khi các quan chức khác chỉ được dùng dao nĩa bằng vàng!",
  },
  {
    id: "r17",
    mysteryName: "Helium",
    symbol: "He",
    aliases: ["he", "heli", "helium"],
    clues: [
      "Tôi là nguyên tố duy nhất trong bảng tuần hoàn được con người phát hiện ra trên Mặt Trời trước khi tìm thấy trên Trái Đất.",
      "Tôi là chất khí trơ không màu, không mùi, hoàn toàn không bắt lửa và nhẹ thứ nhì vũ trụ.",
      "Khi hít một ngụm nhỏ khí của tôi, dây thanh quản của bạn sẽ rung nhanh hơn khiến giọng nói của bạn the thé nghe như chú vịt Donald!",
      "Ở nhiệt độ -269°C (chỉ 4.2 độ trên độ không tuyệt đối), tôi hóa lỏng để làm mát cuộn dây nam châm siêu dẫn trong các cỗ máy chụp cộng hưởng từ MRI cứu người.",
    ],
    explanation: "Heli (Helium, ký hiệu He, Z=2) có cấu hình electron 1s² bão hòa bền vững tuyệt đối, không phản ứng với bất kỳ chất nào ở điều kiện bình thường.",
    bonusFunFact: "Dưới 2.17 K, Heli lỏng biến thành trạng thái siêu lỏng (superfluidity) không hề có ma sát nội, có thể tự bò ngược lên thành cốc thủy tinh và tràn ra ngoài!",
  },
  {
    id: "r18",
    mysteryName: "Silver",
    symbol: "Ag",
    aliases: ["ag", "bac", "bạc", "silver", "argentum"],
    clues: [
      "Tôi là nhà vô địch tuyệt đối về khả năng dẫn điện và dẫn nhiệt trong tất cả 118 nguyên tố của bảng tuần hoàn.",
      "Tôi có bề mặt phản xạ ánh sáng tốt nhất nên từ xa xưa đã được tráng lên kính để tạo ra gương soi cho con người ngắm nhìn.",
      "Các ion của tôi có khả năng phá vỡ màng tế bào vi khuẩn cực mạnh, được người xưa dùng làm đũa thử độc và bình đựng nước giữ độ tinh khiết.",
      "Trong ngành trang sức và tiền tệ cổ, tôi luôn là người bạn đồng hành song hành bên cạnh vàng.",
    ],
    explanation: "Bạc (Silver/Argentum, ký hiệu Ag, Z=47) có cấu hình [Kr] 4d¹⁰ 5s¹. Phản ứng tráng bạc bằng dung dịch AgNO₃ trong NH₃ với glucozơ là thí nghiệm then chốt của Hóa học 12.",
    bonusFunFact: "Cái tên của đất nước Argentina ở Nam Mỹ bắt nguồn trực tiếp từ từ 'argentum' (nghĩa là bạc trong tiếng Latinh), do những người thám hiểm Tây Ban Nha tin rằng nơi đây có dãy núi bạc vô tận!",
  },
  {
    id: "r19",
    mysteryName: "Iodine",
    symbol: "I",
    aliases: ["i", "iot", "iốt", "iodine", "i2"],
    clues: [
      "Tôi là một phi kim halogen nặng, ở nhiệt độ phòng tồn tại dưới dạng tinh thể hình vảy màu tím đen lấp lánh ánh kim.",
      "Khi đun nóng nhẹ, tôi không hề nóng chảy mà chuyển thẳng từ thể rắn sang hơi khí màu tím biếc quyến rũ (hiện tượng thăng hoa).",
      "Dung dịch của tôi phản ứng với hồ tinh bột tạo thành một phức chất có màu xanh tím đặc trưng dùng để nhận biết tinh bột trong hạt gạo.",
      "Tôi là một vi chất dinh dưỡng tối quan trọng để tuyến giáp tổng hợp hormone thyroxine, thiếu tôi trẻ em sẽ chậm phát triển trí tuệ và bị bệnh bướu cổ.",
    ],
    explanation: "Iot (Iodine, ký hiệu I, Z=53) tạo liên kết yếu giữa các phân tử I₂ nên dễ thăng hoa. Muối ăn bổ sung một lượng vi lượng KI hoặc KIO₃ để phòng chống bướu cổ toàn dân.",
    bonusFunFact: "Dung dịch cồn i-ốt (Povidone-iodine) màu nâu đỏ sát khuẩn vết thương phổ biến trong mọi tủ thuốc gia đình nhờ khả năng tiêu diệt virus và vi khuẩn vết thương tức thì!",
  },
  {
    id: "r20",
    mysteryName: "Titanium",
    symbol: "Ti",
    aliases: ["ti", "titan", "titanium"],
    clues: [
      "Tên của tôi được đặt theo tên của những vị thần Titan khổng lồ đầy sức mạnh trong thần thoại Hy Lạp.",
      "Tôi có tỷ lệ độ bền trên trọng lượng cao nhất trong các kim loại cấu trúc: cứng như thép nhưng nhẹ hơn thép tới 45%.",
      "Tôi trơ tuyệt đối với nước biển và dịch mô cơ thể nên được các bác sĩ phẫu thuật dùng làm đinh nẹp xương, khớp háng và chân răng Implant cấy ghép vĩnh viễn.",
      "Oxit TiO₂ của tôi có màu trắng tinh khôi không độc hại, chiếm hơn 70% thị phần chất tạo màu trắng trong sơn tường, giấy, và kem chống nắng.",
    ],
    explanation: "Titan (Titanium, ký hiệu Ti, Z=22) có màng TiO₂ bảo vệ cực kỳ bền vững, chống ăn mòn hóa học xuất sắc ngay cả trong nước biển sâu và axit nóng.",
    bonusFunFact: "Chiếc máy bay trinh sát siêu âm SR-71 Blackbird bay nhanh gấp 3 lần vận tốc âm thanh được chế tạo với thân vỏ hơn 85% từ hợp kim titan để chịu được nhiệt độ ma sát không khí lên tới 300°C!",
  },
  {
    id: "r21",
    mysteryName: "Potassium",
    symbol: "K",
    aliases: ["k", "kali", "potassium"],
    clues: [
      "Tôi là kim loại kiềm nhóm IA, ô số 19 với cấu hình electron là [Ar] 4s¹.",
      "Khi thả vào nước, phản ứng của tôi tỏa nhiệt dữ dội đến mức khí hydro sinh ra bốc cháy với ngọn lửa màu tím hoa cà kiêu kỳ.",
      "Tôi dồi dào trong quả chuối chín, khoai tây và là thành phần của phân bón NPK giúp cây trồng đậu quả, cứng cây và chống chịu sâu bệnh.",
      "Trong cơ thể người, ion của tôi tập trung chủ yếu ở dịch nội bào, phối hợp với ion natri để bơm dẫn truyền xung thần kinh và giữ nhịp tim đều đặn.",
    ],
    explanation: "Kali (Potassium/Kalium, ký hiệu K, Z=19) có bán kính nguyên tử lớn hơn natri nên tính kim loại và tính khử mạnh hơn natri rõ rệt.",
    bonusFunFact: "Khoảng 0.012% lượng kali trong tự nhiên là đồng vị phóng xạ Kali-40 (K-40), vì vậy mỗi quả chuối bạn ăn thực sự phát ra một lượng phóng xạ tự nhiên cực nhỏ hoàn toàn vô hại!",
  },
  {
    id: "r22",
    mysteryName: "Magnesium",
    symbol: "Mg",
    aliases: ["mg", "magie", "magnesium"],
    clues: [
      "Tôi là một kim loại kiềm thổ nhóm IIA chu kỳ 3, có màu trắng bạc nhẹ bằng hai phần ba nhôm.",
      "Khi châm lửa đốt dải băng của tôi, tôi bốc cháy mãnh liệt với ngọn lửa màu trắng chói lòa phát ra nhiều tia tử ngoại (từng dùng làm đèn flash máy ảnh thời sơ khai).",
      "Tôi là 'trái tim' của sự sống thực vật: một ion của tôi nằm chính xác ở vị trí trung tâm của vòng porphyrin trong phân tử diệp lục (chlorophyll) quang hợp.",
      "Các vận động viên thể dục dụng cụ và leo núi thoa bột muối cacbonat của tôi lên lòng bàn tay để hút mồ hôi và chống trơn trượt.",
    ],
    explanation: "Magie (Magnesium, ký hiệu Mg, Z=12) tham gia vào hơn 300 phản ứng enzym trong cơ thể người và là ion trung tâm của chất diệp lục quang hợp biến đổi năng lượng mặt trời.",
    bonusFunFact: "Cháy magie không thể dập bằng nước hay bình cứu hỏa CO₂ vì magie nóng đỏ khử cả CO₂ (2Mg + CO₂ → 2MgO + C) và nước tạo khí cháy H₂, chỉ có thể dập bằng cát khô!",
  },
  {
    id: "r23",
    mysteryName: "Fluorine",
    symbol: "F",
    aliases: ["f", "flo", "fluorine", "f2"],
    clues: [
      "Tôi đứng đầu nhóm Halogen (ô số 9, chu kỳ 2) và là nguyên tố có độ âm điện cao nhất bảng tuần hoàn (3.98 theo thang Pauling).",
      "Tôi là 'bạo chúa' oxi hóa: tôi phản ứng dữ dội với hầu hết mọi đơn chất, kể cả nước, thủy tinh và thậm chí cả các khí hiếm cứng đầu như Xenon và Krypton.",
      "Dù ở dạng đơn chất F₂ là một chất khí màu vàng nhạt cực độc, nhưng ion F⁻ ở nồng độ thích hợp trong kem đánh răng lại giúp tái khoáng hóa men răng và chống sâu răng tuyệt hảo.",
      "Polymer chứa nguyên tố của tôi (Teflon - PTFE) trơn trượt đến mức hầu như không chất nào bám dính được, làm nên lớp chống dính của chảo chiên rán hiện đại.",
    ],
    explanation: "Flo (Fluorine, ký hiệu F, Z=9) có bán kính nhỏ và lực hút hạt nhân cực mạnh, là chất oxi hóa mạnh nhất trong hóa học, đẩy được oxy ra khỏi nước: 2F₂ + 2H₂O → 4HF + O₂.",
    bonusFunFact: "Nhiều nhà hóa học thế kỷ 19 như Humphry Davy, George Gore đã bị mù hoặc ngộ độc nặng khi cố gắng phân lập khí flo tinh khiết trước khi Henri Moissan thành công năm 1886 và nhận giải Nobel Hóa học!",
  },
];

