import { ForumPost } from "../types";

export const FORUM_POSTS_PART1: ForumPost[] = [
  {
    id: "post-1",
    authorName: "Đặng Quang Huy (Lớp 11A1)",
    authorAvatar: "🧑‍🔬",
    school: "THPT Chuyên Hà Nội - Amsterdam",
    grade: 11,
    title: "Làm sao để nhớ nhanh quy tắc cộng Markovnikov khi học Anken?",
    content:
      "Thầy cô có thể chia sẻ mẹo tư duy nhanh quy tắc cộng Markovnikov khi cho anken bất đối xứng tác dụng với HBr hoặc nước không ạ? Em hay bị nhầm C nào mang điện tích dương và C nào nhiều H.",
    tags: ["Anken", "Markovnikov", "Hóa hữu cơ"],
    upvotes: 38,
    createdAt: "2 giờ trước",
    answers: [
      {
        id: "ans-1",
        authorName: "Cô Hoàng Mai (Giáo viên Hóa)",
        content:
          "Chào Huy, em nhớ câu 'thần chú' đời thường này nhé: 'Giàu càng giàu thêm'! Nguyên tử Carbon nào ở liên kết đôi có nhiều nguyên tử H hơn (giàu H) thì sẽ ưu tiên nhận thêm nguyên tử H nữa để tạo thành sản phẩm chính. Còn nhóm chức X- hoặc -OH sẽ gắn vào C bậc cao hơn (ít H hơn) vì tạo carbocation trung gian bền hơn.",
        upvotes: 45,
        createdAt: "1 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-2",
    authorName: "Nguyễn Thu Trang (Lớp 10 Chuyên Hóa)",
    authorAvatar: "👩‍🔬",
    school: "THPT Chuyên Lê Hồng Phong, TP.HCM",
    grade: 10,
    title: "Tại sao trong cùng chu kỳ từ trái sang phải, bán kính nguyên tử lại giảm?",
    content:
      "Số electron và proton đều tăng lên mà tại sao kích thước nguyên tử lại bị co lại chứ không phình to ra ạ?",
    tags: ["Cấu tạo nguyên tử", "Bán kính", "Chu kỳ"],
    upvotes: 29,
    createdAt: "Hôm qua",
    answers: [
      {
        id: "ans-2",
        authorName: "Bùi Tiến Đạt (Học sinh Giỏi QG)",
        content:
          "Vì trong cùng chu kỳ, số lớp electron giữ nguyên (cùng n), nhưng điện tích hạt nhân Z+ tăng dần từ trái sang phải, tạo lực hút tĩnh điện lên các electron lớp ngoài cùng mạnh hơn nhiều, kéo các đám mây electron co lại gần hạt nhân hơn!",
        upvotes: 31,
        createdAt: "Hôm qua",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-3",
    authorName: "Trần Minh Đức (Lớp 12A3)",
    authorAvatar: "👨‍🎓",
    school: "THPT Kim Liên, Hà Nội",
    grade: 12,
    title: "Phân biệt nhanh phản ứng xà phòng hóa và thủy phân este trong môi trường axit",
    content:
      "Em hay bị nhầm tính thuận nghịch và sản phẩm giữa thủy phân trong dung dịch H2SO4 loãng và dung dịch NaOH. Thầy cô giải thích giúp em điểm khác biệt mấu chốt với ạ!",
    tags: ["Este", "Xà phòng hóa", "Thủy phân"],
    upvotes: 42,
    createdAt: "3 giờ trước",
    answers: [
      {
        id: "ans-3-1",
        authorName: "Thầy Lê Văn Thành (Tổ trưởng Chuyên môn Hóa)",
        content:
          "1. Môi trường axit: Thủy phân thuận nghịch (2 chiều ⇌), sản phẩm là axit cacboxylic và ancol. Phản ứng không hoàn toàn, cần đun nóng và xúc tác H2SO4 đặc/loãng.\n2. Môi trường kiềm (Xà phòng hóa): Phản ứng một chiều (→), sản phẩm là muối cacboxylat (RCOONa) và ancol. Muối không phản ứng ngược lại với ancol để tái tạo este được, nên phản ứng diễn ra hoàn toàn.",
        upvotes: 56,
        createdAt: "2 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-4",
    authorName: "Phạm Khánh Linh (Lớp 10A2)",
    authorAvatar: "🧪",
    school: "THPT Chuyên Chu Văn An, Lạng Sơn",
    grade: 10,
    title: "Mẹo cân bằng phản ứng oxi hóa - khử theo phương pháp thăng bằng electron nhanh nhất",
    content:
      "Em thường mất từ 2-3 phút cho một câu thăng bằng electron phức tạp có môi trường như Cu + HNO3 loãng hoặc Fe3O4 + HNO3. Có cách nào nhẩm hệ số siêu tốc dưới 30 giây không?",
    tags: ["Oxi hóa khử", "Thăng bằng e", "HNO3"],
    upvotes: 51,
    createdAt: "4 giờ trước",
    answers: [
      {
        id: "ans-4-1",
        authorName: "Vũ Tuấn Anh (Thủ khoa Khối A00)",
        content:
          "Công thức nhẩm thần tốc: \n1. Xác định số e nhường và nhận: Cu nhường 2e, N(+5) -> NO nhận 3e. Bội chung nhỏ nhất là 6 => Hệ số: 3 Cu và 2 NO.\n2. Điền kim loại trước: 3 Cu -> 3 Cu(NO3)2.\n3. Đếm gốc nitrat: 3 Cu(NO3)2 có 6 NO3- + 2 NO (sản phẩm khử) = 8 nguyên tử N => Điền 8 HNO3.\n4. Điền nước: 8 HNO3 có 8 H => 4 H2O.\n=> Hệ số kinh điển '3 - 8 - 3 - 2 - 4'!",
        upvotes: 68,
        createdAt: "3 giờ trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-5",
    authorName: "Lê Nhật Nam (Lớp 11B4)",
    authorAvatar: "🧑‍🏫",
    school: "THPT Marie Curie, Hải Phòng",
    grade: 11,
    title: "Tại sao muối NH4HCO3 lại được dùng làm bột nở làm bánh tiêu, bánh bao?",
    content:
      "Em thấy người ta bảo nhiệt phân muối amoni sinh ra khí làm xốp bánh. Nhưng liệu có mùi khai đọng lại trong thức ăn không ạ?",
    tags: ["Amoni", "Bột nở", "Nhiệt phân"],
    upvotes: 33,
    createdAt: "5 giờ trước",
    answers: [
      {
        id: "ans-5-1",
        authorName: "ThS. Đỗ Phương Loan (Viện Hóa học)",
        content:
          "Phương trình nhiệt phân: NH4HCO3 --(t°)--> NH3(k) + CO2(k) + H2O(h). \nCả ba sản phẩm đều là chất khí và hơi, thoát ra tạo các lỗ rỗng li ti làm bánh nở xốp phồng rất đẹp. Vì NH3 là khí dễ bay hơi khi nướng hoặc hấp chín ở nhiệt độ cao, nếu nướng kỹ thì khí NH3 bay đi hết không để lại mùi. Tuy nhiên với bánh quy ít nước người ta hay dùng NaHCO3 (baking soda) hơn để tuyệt đối tránh mùi amoniac.",
        upvotes: 41,
        createdAt: "4 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-6",
    authorName: "Võ Thảo My (Lớp 12 Chuyên)",
    authorAvatar: "🧬",
    school: "THPT Chuyên Quốc Học Huế",
    grade: 12,
    title: "Điểm khác biệt bản chất giữa Glucose và Fructose là gì?",
    content:
      "Cả hai đều có cùng CTPT C6H12O6 và đều tráng bạc được. Vậy làm sao trong bài thi TN THPT phân biệt được hai chất này bằng hóa chất trong phòng thí nghiệm?",
    tags: ["Carbohydrate", "Glucose", "Fructose", "Tráng bạc"],
    upvotes: 49,
    createdAt: "6 giờ trước",
    answers: [
      {
        id: "ans-6-1",
        authorName: "Thầy Nguyễn Hữu Trí (Chuyên viên Hóa Sở GD&ĐT)",
        content:
          "Điểm mấu chốt:\n- Glucose chứa nhóm andehit (-CH=O), Fructose chứa nhóm xeton (-CO-).\n- Trong môi trường kiềm (thuốc thử Tollens tráng bạc), Fructose đồng hóa chuyển hóa thuận nghịch thành Glucose nên cả hai đều tráng bạc được!\n- Để phân biệt: Dùng nước Brom (Br2 trong H2O)! Glucose làm mất màu nước Brom (nhóm -CHO bị oxi hóa thành -COOH). Fructose không có nhóm -CHO tự do và trong môi trường axit/trung tính của nước Brom không chuyển thành Glucose được nên KHÔNG làm mất màu nước Brom!",
        upvotes: 62,
        createdAt: "5 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-7",
    authorName: "Đỗ Tuấn Kiệt (Lớp 10A1)",
    authorAvatar: "⚡",
    school: "THPT Chuyên Lam Sơn, Thanh Hóa",
    grade: 10,
    title: "Quy tắc Octet (Bát tử) có những ngoại lệ nào hay gặp trong đề thi?",
    content:
      "Cô giáo dạy là nguyên tử có xu hướng đạt 8 electron lớp ngoài cùng bền vững như khí hiếm. Nhưng em thấy một số phân tử như PCl5, SF6 hay NO lại không đủ 8e. Giải thích thế nào ạ?",
    tags: ["Liên kết hóa học", "Quy tắc Octet", "Ngoại lệ"],
    upvotes: 37,
    createdAt: "7 giờ trước",
    answers: [
      {
        id: "ans-7-1",
        authorName: "Nguyễn Đức Anh (Đội tuyển Hóa)",
        content:
          "Có 3 loại ngoại lệ bát tử chính theo CT mới 2026:\n1. Số lẻ electron: Ví dụ phân tử NO (11e hóa trị), NO2 (17e hóa trị) - nguyên tử trung tâm không thể có 8e.\n2. Thiếu octet (dưới 8e): BeCl2 (Be chỉ có 4e), BF3, BCl3 (Bo chỉ có 6e xung quanh).\n3. Mở rộng octet (quá 8e): Xảy ra với nguyên tố chu kỳ 3 trở đi vì có phân lớp 3d trống! Ví dụ: PCl5 (P có 10e quanh nó), SF6 (S có 12e quanh nó).",
        upvotes: 44,
        createdAt: "6 giờ trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-8",
    authorName: "Hoàng Yến Nhi (Lớp 11A5)",
    authorAvatar: "🌸",
    school: "THPT Phan Châu Trinh, Đà Nẵng",
    grade: 11,
    title: "Nguyên lý Le Chatelier: Khi tăng áp suất, cân bằng chuyển dịch như thế nào?",
    content:
      "Em hay bị lúng túng khi đề bài hỏi tác động của áp suất lên phản ứng có chất rắn hoặc số mol khí 2 vế bằng nhau. Có quy tắc chung nào không?",
    tags: ["Cân bằng hóa học", "Le Chatelier", "Chuyển dịch cân bằng"],
    upvotes: 40,
    createdAt: "8 giờ trước",
    answers: [
      {
        id: "ans-8-1",
        authorName: "Cô Trần Bích Hạnh (GV THPT)",
        content:
          "Quy tắc vàng 3 bước:\n1. Chỉ đếm hệ số mol của các chất ở THỂ KHÍ (g), bỏ qua hoàn toàn chất rắn (s) và lỏng (l).\n2. Khi TĂNG áp suất chung: Cân bằng chuyển dịch theo chiều làm GIẢM số mol khí (chiều có tổng hệ số khí nhỏ hơn).\n3. Nếu tổng số mol khí ở 2 vế BẰNG NHAU (VD: H2(k) + I2(k) ⇌ 2HI(k)), việc tăng hoặc giảm áp suất KHÔNG làm chuyển dịch vị trí cân bằng!",
        upvotes: 52,
        createdAt: "7 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-9",
    authorName: "Bùi Quốc Cường (Lớp 12A2)",
    authorAvatar: "🧪",
    school: "THPT Chuyên Hưng Yên",
    grade: 12,
    title: "Bản chất phản ứng màu Biuret: Tại sao đipeptit không có phản ứng này?",
    content:
      "Đề thi tốt nghiệp hay bẫy câu này: Cho Cu(OH)2 vào dung dịch Gly-Ala thì dung dịch có xuất hiện màu tím đặc trưng không? Tại sao?",
    tags: ["Peptit", "Phản ứng màu Biuret", "Đipeptit"],
    upvotes: 54,
    createdAt: "9 giờ trước",
    answers: [
      {
        id: "ans-9-1",
        authorName: "Thầy Lê Văn Thành",
        content:
          "Câu trả lời là KHÔNG! \nĐể tạo phức màu tím với Cu(OH)2 trong môi trường kiềm, phân tử phải có ít nhất 2 LIÊN KẾT PEPTIT kế cận trở lên (tức là từ TRIPEPTIT trở lên, hoặc protein). Đipeptit (như Gly-Ala) chỉ có DUY NHẤT 1 liên kết peptit (-CO-NH-) nên không đủ cấu trúc lập thể để tạo phức chelate màu tím biuret. Đây là bẫy lý thuyết cực kỳ phổ biến trong đề thi!",
        upvotes: 73,
        createdAt: "8 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-10",
    authorName: "Mai Gia Hân (Lớp 10D1)",
    authorAvatar: "💎",
    school: "THPT Lương Thế Vinh, Hà Nội",
    grade: 10,
    title: "Phân biệt liên kết cộng hóa trị có cực, không cực và liên kết ion qua hiệu độ âm điện",
    content:
      "Em muốn xin bảng chuẩn giá trị hiệu độ âm điện Δχ theo sách giáo khoa mới Kết Nối Tri Thức và Cánh Diều để phân loại liên kết.",
    tags: ["Độ âm điện", "Liên kết ion", "Liên kết CHT"],
    upvotes: 27,
    createdAt: "10 giờ trước",
    answers: [
      {
        id: "ans-10-1",
        authorName: "Dương Minh Trí (Học sinh Giỏi Tỉnh)",
        content:
          "Theo SGK Hóa học GDPT 2018:\n- 0 ≤ Δχ < 0.4: Liên kết cộng hóa trị KHÔNG CỰC (VD: H2, Cl2, CH4 có Δχ = 0.35).\n- 0.4 ≤ Δχ < 1.7: Liên kết cộng hóa trị CÓ CỰC (phân cực) (VD: HCl, H2O, NH3).\n- Δχ ≥ 1.7: Liên kết ION (VD: NaCl, CaO, KBr).\n*Lưu ý: Một số hợp chất như HF có Δχ = 1.78 nhưng vẫn là CHT có cực do kích thước ion quá nhỏ, còn AlCl3 có bản chất CHT.",
        upvotes: 36,
        createdAt: "9 giờ trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-11",
    authorName: "Ngô Quang Đăng (Lớp 11A3)",
    authorAvatar: "⚡",
    school: "THPT Chuyên Tiền Giang",
    grade: 11,
    title: "Phản ứng nhiệt nhôm: Cách xác định các chất trong hỗn hợp sau phản ứng khi hiệu suất < 100%",
    content:
      "Khi nung hỗn hợp Al và Fe2O3 không có không khí, sản phẩm chia 2 phần tác dụng NaOH và HCl. Làm thế nào để biện luận xem Al hay Fe2O3 dư?",
    tags: ["Nhiệt nhôm", "Kim loại", "Bài toán Al"],
    upvotes: 46,
    createdAt: "11 giờ trước",
    answers: [
      {
        id: "ans-11-1",
        authorName: "Thầy Nguyễn Hữu Trí",
        content:
          "Mẹo nhận biết độc nhất vô nhị:\n- Nếu cho phần rắn sau phản ứng tác dụng với dung dịch NaOH dư mà CÓ KHÍ H2 THOÁT RA => Chắc chắn Al còn dư sau phản ứng nhiệt nhôm! Khi đó oxit sắt đã phản ứng hết (nếu phản ứng hoàn toàn) hoặc cả 2 cùng dư (nếu chưa hoàn toàn).\n- Khí H2 chỉ sinh ra do phản ứng: 2Al + 2NaOH + 2H2O -> 2NaAlO2 + 3H2! Fe và Al2O3 không sinh khí với kiềm.",
        upvotes: 59,
        createdAt: "10 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-12",
    authorName: "Lý Thị Cẩm Tú (Lớp 12A7)",
    authorAvatar: "🧵",
    school: "THPT Nguyễn Huệ, Nam Định",
    grade: 12,
    title: "Phân biệt tơ poliamit (nilon-6, nilon-6,6) và tơ vinylic (tơ nitron/olon)",
    content:
      "Đề thi hay hỏi câu: 'Tơ nào sau đây kém bền trong môi trường axit và môi trường kiềm?'. Nhờ thầy cô chỉ cách nhận diện nhóm chức gây kém bền.",
    tags: ["Polime", "Tơ tằm", "Nilon", "Poliamit"],
    upvotes: 39,
    createdAt: "12 giờ trước",
    answers: [
      {
        id: "ans-12-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Chính là các tơ chứa liên kết amide (-CO-NH-) như nilon-6 (tơ capron), nilon-6,6, nilon-7 và tơ tằm thiên nhiên!\nVì liên kết amide rất dễ bị thủy phân cắt đứt mạch polime trong cả môi trường axit mạnh lẫn môi trường kiềm (xà phòng có độ kiềm cao). Đó là lý do quần áo bằng lụa tơ tằm hay nilon không nên giặt bằng xà phòng giặt quá kiềm hoặc ngâm nước nóng.\nCòn tơ nitron (tơ olon) chứa nhóm -CN trên mạch carbon C-C no, nên rất bền với nhiệt, axit và kiềm, dùng dệt áo ấm mùa đông.",
        upvotes: 47,
        createdAt: "11 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-13",
    authorName: "Trịnh Đình Khôi (Lớp 10A4)",
    authorAvatar: "🔥",
    school: "THPT Chuyên Thái Bình",
    grade: 10,
    title: "Phân biệt Enthalpy tạo thành chuẩn (ΔfH°298) và Biến thiên Enthalpy phản ứng (ΔrH°298)",
    content:
      "Em hay bị nhầm dấu âm/dương khi tính nhiệt tỏa ra hay thu vào của phản ứng. Dấu âm là tỏa nhiệt hay thu nhiệt ạ?",
    tags: ["Nhiệt hóa học", "Enthalpy", "Tỏa nhiệt", "Thu nhiệt"],
    upvotes: 48,
    createdAt: "13 giờ trước",
    answers: [
      {
        id: "ans-13-1",
        authorName: "ThS. Đỗ Phương Loan",
        content:
          "Em nhớ quy tắc khẩu quyết này nhé: 'ÂM TỎA - DƯƠNG THU'!\n1. ΔrH°298 < 0 (giá trị ÂM): Phản ứng TỎA NHIỆT ra môi trường xung quanh (sờ vào bình thấy NÓNG lên, ví dụ phản ứng cháy, trung hòa axit - bazo).\n2. ΔrH°298 > 0 (giá trị DƯƠNG): Phản ứng THU NHIỆT từ môi trường (sờ vào bình thấy LẠNH đi, ví dụ nhiệt phân CaCO3, hòa tan NH4NO3 vào nước).\n3. Công thức tính: ΔrH°298 = Σ ΔfH°298(sản phẩm) - Σ ΔfH°298(chất đầu). Nhớ nhân với hệ số tỉ lượng trong phương trình nhé!",
        upvotes: 60,
        createdAt: "12 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-14",
    authorName: "Chu Bảo Ngọc (Lớp 11B1)",
    authorAvatar: "🧪",
    school: "THPT Chuyên Ngoại Ngữ, Hà Nội",
    grade: 11,
    title: "Tại sao phenol có tính axit yếu hơn axit cacboxylic nhưng mạnh hơn ancol?",
    content:
      "Phenol tác dụng được với dung dịch NaOH nhưng không làm đổi màu quỳ tím và không tác dụng được với NaHCO3. Tại sao vòng benzen lại làm tăng tính axit của nhóm -OH?",
    tags: ["Phenol", "Ancol", "Hiệu ứng liên hợp", "Tính axit"],
    upvotes: 35,
    createdAt: "14 giờ trước",
    answers: [
      {
        id: "ans-14-1",
        authorName: "Bùi Tiến Đạt",
        content:
          "Do hiệu ứng liên hợp p-π giữa cặp electron tự do trên nguyên tử Oxygen của nhóm -OH với hệ thống electron π của vòng benzen:\n- Cặp e của O bị hút về phía vòng benzen, làm mật độ e trên O giảm đi, liên kết O-H bị phân cực mạnh hơn nhiều so với ancol => H trở nên linh động hơn, dễ tách ra thành H+ => Tác dụng được với NaOH tạo muối natri phenolat C6H5ONa.\n- Tuy nhiên, tính axit của phenol (Ka ≈ 10^-10) vẫn yếu hơn axit cacbonic H2CO3 (Ka1 ≈ 10^-7), do đó khi sục khí CO2 vào dung dịch C6H5ONa thì phenol bị đẩy ra ngay làm dung dịch vẩn đục: C6H5ONa + CO2 + H2O -> C6H5OH + NaHCO3.",
        upvotes: 49,
        createdAt: "13 giờ trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-15",
    authorName: "Phan Văn Nam (Lớp 12A1)",
    authorAvatar: "🔋",
    school: "THPT Gia Định, TP.HCM",
    grade: 12,
    title: "Quy tắc xác định điện cực Anode và Cathode trong Pin điện hóa vs Bình điện phân",
    content:
      "Em cứ hay bị lộn cực âm/dương giữa bình ắc quy / pin Galvanic với bình điện phân nóng chảy/dung dịch. Có mẹo nhớ vĩnh viễn không ạ?",
    tags: ["Điện hóa", "Pin Galvanic", "Điện phân", "Anode", "Cathode"],
    upvotes: 61,
    createdAt: "15 giờ trước",
    answers: [
      {
        id: "ans-15-1",
        authorName: "Thầy Trần Đức (GV Chuyên Hóa)",
        content:
          "Bí quyết ghi nhớ vĩnh cửu không bao giờ sai:\n1. BẢN CHẤT QUÁ TRÌNH (Luôn luôn đúng cho cả Pin lẫn Điện phân):\n- ANODE: Luôn xảy ra quá trình OXI HÓA (nhường e). Nhớ: 'A - O' (nguyên âm đi với nhau: Anode - Oxi hóa).\n- CATHODE: Luôn xảy ra quá trình KHỬ (nhận e). Nhớ: 'C - K' (phụ âm: Cathode - Khử).\n2. DẤU CỦA ĐIỆN CỰC:\n- Ở PIN ĐIỆN (phát ra dòng điện): Anode là cực ÂM (-), Cathode là cực DƯƠNG (+).\n- Ở BÌNH ĐIỆN PHÂN (tiêu thụ điện từ nguồn ngoài): Anode nối với cực DƯƠNG (+), Cathode nối với cực ÂM (-). Nhớ câu: 'Điện phân: Dương An - Âm Cat'!",
        upvotes: 84,
        createdAt: "14 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-16",
    authorName: "Nguyễn Lê Quỳnh Anh (Lớp 10A3)",
    authorAvatar: "🧂",
    school: "THPT Chuyên Bến Tre",
    grade: 10,
    title: "Tại sao tính oxi hóa của Halogen giảm dần từ F2 đến I2?",
    content:
      "Florin phản ứng mãnh liệt với nước ngay trong bóng tối còn Iot lại phản ứng rất chậm và thuận nghịch. Bản chất tuần hoàn ở đây là gì?",
    tags: ["Halogen", "Tính oxi hóa", "Bán kính nguyên tử"],
    upvotes: 28,
    createdAt: "16 giờ trước",
    answers: [
      {
        id: "ans-16-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Từ F đến I trong nhóm VIIA (Nhóm 17):\n1. Bán kính nguyên tử tăng dần (số lớp e tăng từ 2 lên 5).\n2. Lực hút của hạt nhân đối với electron lớp ngoài cùng giảm dần, độ âm điện giảm từ 3.98 (F) xuống 2.66 (I).\n3. Do đó, khả năng nhận thêm 1 electron (X + 1e -> X-) giảm mạnh => Tính oxi hóa giảm dần: F2 > Cl2 > Br2 > I2.\nCl2 đẩy được Br2 ra khỏi muối NaBr, và Br2 đẩy được I2 ra khỏi muối NaI: Cl2 + 2NaBr -> 2NaCl + Br2.",
        upvotes: 39,
        createdAt: "15 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-17",
    authorName: "Đinh Trọng Tấn (Lớp 11A6)",
    authorAvatar: "🌿",
    school: "THPT Chuyên Vĩnh Phúc",
    grade: 11,
    title: "Phản ứng tráng bạc của Andehit: 1 mol andehit luôn tạo ra bao nhiêu mol Ag?",
    content:
      "Em làm bài toán tráng bạc andehit đơn chức mà kết quả ra số mol Ag gấp 4 lần số mol andehit. Em có làm sai chỗ nào không ạ?",
    tags: ["Andehit", "Tráng bạc", "Formaldehit", "HCHO"],
    upvotes: 43,
    createdAt: "17 giờ trước",
    answers: [
      {
        id: "ans-17-1",
        authorName: "Vũ Tuấn Anh",
        content:
          "Em không làm sai đâu! Em đã gặp trường hợp ĐẶC BIỆT DUY NHẤT của andehit đơn chức: FORMALDEHIT (HCHO)!\n- Hầu hết andehit đơn chức R-CHO: 1 mol RCHO -> 2 mol Ag.\n- Riêng HCHO (methanal) có cấu tạo H-CO-H, chứa 2 đầu nhóm -CHO tiềm tàng: \n  HCHO + 4[Ag(NH3)2]OH -> (NH4)2CO3 + 4Ag↓ + 6NH3 + 2H2O => 1 mol HCHO tạo ra 4 mol Ag!\n- Ngoài ra, các andehit 2 chức như OHC-CHO cũng tạo ra 4 Ag.",
        upvotes: 55,
        createdAt: "16 giờ trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-18",
    authorName: "Vũ Hải Đăng (Lớp 12A5)",
    authorAvatar: "🧪",
    school: "THPT Thăng Long, Hà Nội",
    grade: 12,
    title: "Phức chất trong chương trình mới 2026: Phân biệt nguyên tử trung tâm và phối tử (Ligand)",
    content:
      "Em thấy khái niệm phức chất như [Cu(H2O)6]2+ hay [Ag(NH3)2]+ khá mới lạ so với các anh chị khóa trước. Xin hỏi cách xác định số phối trí và điện tích phức chất?",
    tags: ["Phức chất", "Kim loại chuyển tiếp", "GDPT 2026", "Phối tử"],
    upvotes: 52,
    createdAt: "18 giờ trước",
    answers: [
      {
        id: "ans-18-1",
        authorName: "Thầy Trần Đức",
        content:
          "Rất chuẩn em, đây là nội dung trọng tâm mới của Hóa 12 GDPT 2026:\n1. Nguyên tử trung tâm: Thường là cation kim loại chuyển tiếp có orbital d trống (như Cu2+, Fe2+, Fe3+, Ag+, Co3+).\n2. Phối tử (Ligand): Các phân tử trung hòa hoặc anion có cặp electron tự do (như H2O, NH3, Cl-, OH-, CN-).\n3. Số phối trí: Số liên kết cho - nhận giữa phối tử với nguyên tử trung tâm. Ví dụ trong [Ag(NH3)2]+ số phối trí là 2; trong [Cu(H2O)6]2+ số phối trí là 6.\n4. Điện tích ion phức = Điện tích ion trung tâm + Tổng điện tích các phối tử. Trong [Fe(CN)6]4-, Fe2+ (+2) + 6 CN- (-6) = -4.",
        upvotes: 70,
        createdAt: "17 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-19",
    authorName: "Hoàng Minh Quân (Lớp 10A2)",
    authorAvatar: "💨",
    school: "THPT Chuyên Hạ Long, Quảng Ninh",
    grade: 10,
    title: "Yếu tố nào làm tăng tốc độ phản ứng hóa học? Tại sao thức ăn nấu trong nồi áp suất lại nhanh chín?",
    content:
      "Em muốn hiểu rõ 5 yếu tố ảnh hưởng tốc độ phản ứng theo thuyết va chạm hoạt động.",
    tags: ["Tốc độ phản ứng", "Năng lượng hoạt hóa", "Nồi áp suất"],
    upvotes: 31,
    createdAt: "19 giờ trước",
    answers: [
      {
        id: "ans-19-1",
        authorName: "ThS. Đỗ Phương Loan",
        content:
          "5 yếu tố cốt lõi:\n1. Nồng độ chất phản ứng (tăng số va chạm trong một đơn vị thể tích).\n2. Áp suất (đối với chất khí).\n3. Diện tích bề mặt tiếp xúc (nghiền nhỏ chất rắn).\n4. Nhiệt độ: Khi tăng nhiệt độ, động năng phân tử tăng, tỷ lệ va chạm hiệu quả vượt qua năng lượng hoạt hóa tăng vọt (quy tắc Van 't Hoff: tăng 10°C tốc độ tăng 2-4 lần).\n5. Chất xúc tác (làm giảm năng lượng hoạt hóa Ea).\n*Ứng dụng nồi áp suất: Nắp kín làm áp suất hơi nước tăng cao, khiến nước sôi ở 115°C - 120°C (thay vì 100°C). Nhiệt độ sôi cao hơn làm tốc độ phản ứng thủy phân và phân hủy chất xơ trong thức ăn tăng gấp 2 - 4 lần, giúp thức ăn nhanh nhừ hơn rất nhiều!",
        upvotes: 46,
        createdAt: "18 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-20",
    authorName: "Trần Bảo Trâm (Lớp 11A8)",
    authorAvatar: "🍷",
    school: "THPT Chuyên Lê Khiết, Quảng Ngãi",
    grade: 11,
    title: "Vì sao người say rượu có thể dùng nước chanh hoặc nước mía giải rượu nhanh?",
    content:
      "Dưới góc độ hóa học sinh học, ethanol bị chuyển hóa trong cơ thể ra sao và axit xitric trong chanh có tác dụng gì?",
    tags: ["Ethanol", "Ancol", "Hóa sinh", "Giải rượu"],
    upvotes: 38,
    createdAt: "20 giờ trước",
    answers: [
      {
        id: "ans-20-1",
        authorName: "Cô Hoàng Mai",
        content:
          "Góc nhìn hóa học thực tế:\n- Khi uống rượu, ethanol (C2H5OH) được enzyme alcohol dehydrogenase (ADH) ở gan oxi hóa thành acetaldehyde (CH3CHO) - đây chính là chất gây đau đầu, đỏ mặt, nôn nao độc hại, trước khi thành axit axetic (CH3COOH).\n- Nước chanh giàu axit citric (axit hữu cơ) và nước mía giàu đường fructose/glucose giúp:\n1. Bổ sung nước và chất điện giải bù lại lượng nước bị đào thải qua thận do cồn ức chế hormone chống bài niệu ADH.\n2. Đường fructose kích thích hoạt tính enzyme gan đẩy nhanh tốc độ phân giải acetaldehyde thành chất vô hại.\n3. Axit citric phản ứng este hóa một phần với ethanol trong dạ dày tạo este có mùi thơm nhẹ, giảm vị gắt của cồn.",
        upvotes: 51,
        createdAt: "19 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-21",
    authorName: "Cao Bá Đạt (Lớp 12A1)",
    authorAvatar: "🧼",
    school: "THPT Chuyên Trần Phú, Hải Phòng",
    grade: 12,
    title: "Bản chất cơ chế tẩy rửa của xà phòng: Micelle là gì và tại sao xà phòng mất tác dụng trong nước cứng?",
    content:
      "Em đọc thấy phân tử xà phòng có đầu ưa nước và đuôi kỵ nước tạo thành cấu trúc micelle cuốn hạt dầu mỡ. Vậy nước cứng chứa ion nào phá hủy quá trình này?",
    tags: ["Xà phòng", "Chất giặt rửa", "Nước cứng", "Micelle"],
    upvotes: 45,
    createdAt: "21 giờ trước",
    answers: [
      {
        id: "ans-21-1",
        authorName: "Thầy Lê Văn Thành",
        content:
          "Cơ chế hạt micelle tuyệt đẹp:\n1. Muối xà phòng C17H35COONa gồm 2 phần: Đuôi hidrocacbon (C17H35-) kỵ nước nhưng ưa dầu mỡ sẽ cắm vào hạt dầu; đầu (-COO- Na+) ưa nước hướng ra ngoài dung dịch nước. Khi khuấy rửa, các đầu ưa nước kéo giọt dầu vỡ ra thành những hạt cầu siêu nhỏ (micelle) lơ lửng trong nước và bị rửa trôi theo dòng nước!\n2. Trong NƯỚC CỨNG (chứa nhiều ion Ca2+ và Mg2+):\n  2 C17H35COO- + Ca2+ -> (C17H35COO)2Ca↓ (kết tủa trắng không tan).\n  Kết tủa này bám dính vào sợi vải làm ố vàng, hỏng quần áo và làm mất hết các ion xà phòng hoạt động bề mặt tự do => Xà phòng mất khả năng tạo bọt và tẩy rửa!",
        upvotes: 58,
        createdAt: "20 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-22",
    authorName: "Nguyễn Hải Yến (Lớp 10A6)",
    authorAvatar: "☁️",
    school: "THPT Chuyên Thái Nguyên",
    grade: 10,
    title: "Mưa axit sinh ra như thế nào? Phản ứng biến đổi khí thải SO2 và NOx trong khí quyển",
    content:
      "Em cần làm bài thuyết trình chuyên đề Hóa học môi trường về tác hại của mưa axit đối với di tích đá vôi và cây trồng.",
    tags: ["Môi trường", "Mưa axit", "SO2", "Hóa 10 GDPT"],
    upvotes: 34,
    createdAt: "22 giờ trước",
    answers: [
      {
        id: "ans-22-1",
        authorName: "ThS. Đỗ Phương Loan",
        content:
          "Nước mưa bình thường có pH ~ 5.6 do hòa tan CO2 tự nhiên. Khi pH < 5.6 thì gọi là MƯA AXIT!\nChuỗi phản ứng hình thành:\n1. Khí SO2 từ đốt than đá, lọc dầu: \n   2SO2 + O2 --(xúc tác bụi kim loại)--> 2SO3\n   SO3 + H2O -> H2SO4\n2. Khí NOx từ động cơ ô tô, máy bay nhiệt độ cao: \n   2NO + O2 -> 2NO2\n   4NO2 + O2 + 2H2O -> 4HNO3\n*Tác hại phá hủy tượng đá vôi: \n   CaCO3(r) + H2SO4(dd) -> CaSO4 + CO2↑ + H2O làm ăn mòn điêu khắc, công trình lịch sử.",
        upvotes: 43,
        createdAt: "21 giờ trước",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-23",
    authorName: "Dương Gia Bảo (Lớp 11A2)",
    authorAvatar: "🚗",
    school: "THPT Chuyên Đại học Sư Phạm, Hà Nội",
    grade: 11,
    title: "Chỉ số Octan của xăng là gì? Xăng E5 Ron 92 và Ron 95 khác nhau chỗ nào?",
    content:
      "Em hay thấy ở cây xăng có biển Ron 95-III và Xăng sinh học E5 Ron 92. Con số 92, 95 biểu thị cho tính chất hóa học gì?",
    tags: ["Nhiên liệu", "Xăng dầu", "Chỉ số Octan", "Xăng E5"],
    upvotes: 47,
    createdAt: "23 giờ trước",
    answers: [
      {
        id: "ans-23-1",
        authorName: "Bùi Tiến Đạt",
        content:
          "Kiến thức thực tế cực hay:\n- Chỉ số Octan đo KHẢ NĂNG CHỐNG KÍCH NỔ của xăng trong buồng đốt động cơ ô tô, xe máy. Isooctan (2,2,4-trimetylpentan) chống kích nổ cực tốt quy ước là 100; heptan mạch thẳng dễ kích nổ quy ước là 0.\n- Xăng Ron 95 có khả năng chống kích nổ tương đương hỗn hợp chứa 95% isooctan và 5% heptan. Chỉ số octan càng cao, xăng càng cháy êm ái, bảo vệ piston động cơ tỉ số nén cao.\n- Xăng sinh học E5: Gồm 5% thể tích ethanol sinh học (cồn C2H5OH nấu từ sắn/ngô) trộn với 95% xăng khoáng Ron 92 truyền thống. Cồn ethanol giúp tăng chỉ số octan tự nhiên và giảm phát thải CO, bảo vệ môi trường.",
        upvotes: 63,
        createdAt: "22 giờ trước",
        isAccepted: true,
      },
    ],
  },
  {
    id: "post-24",
    authorName: "Tạ Thị Mai Anh (Lớp 12 Chuyên Hóa)",
    authorAvatar: "🧬",
    school: "THPT Chuyên Bắc Ninh",
    grade: 12,
    title: "Lực bazo của các amin: Sắp xếp theo thứ tự tăng dần giải thích bằng hiệu ứng đẩy/hút electron",
    content:
      "Giữa amoniac NH3, metylamin CH3NH2, đimetylamin (CH3)2NH và anilin C6H5NH2, amin nào có lực bazo mạnh nhất và yếu nhất? Làm sao quỳ tím đổi màu?",
    tags: ["Amin", "Lực bazơ", "Anilin", "Hiệu ứng e"],
    upvotes: 50,
    createdAt: "Hôm qua",
    answers: [
      {
        id: "ans-24-1",
        authorName: "Thầy Nguyễn Hữu Trí",
        content:
          "Thứ tự lực bazơ chuẩn xác:\nC6H5NH2 (Anilin) < NH3 < CH3NH2 (bậc 1) < (CH3)2NH (bậc 2 trong dung dịch nước)!\nGiải thích:\n1. Gốc phenyl (C6H5-) hút electron làm giảm mật độ điện tích âm trên nguyên tử N => Anilin có lực bazơ cực yếu, KHÔNG làm đổi màu quỳ tím, không làm hồng phenolphthalein.\n2. Gốc ankyl (-CH3) đẩy electron làm tăng mật độ điện tích âm trên N, giúp N dễ nhận proton H+ hơn => CH3NH2 và (CH3)2NH có tính bazơ mạnh hơn NH3, làm quỳ tím hóa XANH.\n*(Lưu ý: Trimetylamin (CH3)3N bậc 3 trong dung dịch lại yếu hơn bậc 2 do hiệu ứng án ngữ không gian cản trở sự sonvat hóa proton).* ",
        upvotes: 67,
        createdAt: "Hôm qua",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-25",
    authorName: "Lâm Hoàng Phúc (Lớp 10A1)",
    authorAvatar: "🧪",
    school: "THPT Chuyên Long An",
    grade: 10,
    title: "Nguyên tắc an toàn phòng thí nghiệm khi pha loãng axit sunfuric đặc (H2SO4 đậm đặc)",
    content:
      "Tại sao tuyệt đối KHÔNG ĐƯỢC RÓT NƯỚC VÀO AXIT ĐẶC mà phải rót từ từ axit đặc vào nước dọc theo đũa thủy tinh?",
    tags: ["An toàn phòng lab", "H2SO4 đặc", "Pha loãng axit"],
    upvotes: 41,
    createdAt: "Hôm qua",
    answers: [
      {
        id: "ans-25-1",
        authorName: "Cô Hoàng Mai",
        content:
          "QUY TẮC SỐNG CÒN TRONG PHÒNG LAB:\n- Axit H2SO4 đặc hòa tan vào nước tỏa ra nhiệt lượng KHỔNG LỒ (phản ứng hydrat hóa tạo hidrate).\n- Axit H2SO4 đặc nặng gần gấp đôi nước (khối lượng riêng d = 1.84 g/ml).\n- NẾU RÓT NƯỚC VÀO AXIT: Nước nhẹ hơn nổi lên trên bề mặt axit. Nhiệt lượng giải phóng tức thì làm lớp nước tại bề mặt sôi bùng lên dữ dội, kéo theo các giọt axit đặc bắn tung tóe vào mắt, mặt và da gây bỏng sâu hoại tử cực kỳ nguy hiểm!\n- CÁCH ĐÚNG: Rót từ từ axit dọc theo đũa thủy tinh vào lượng nước lớn có sẵn và khuấy đều. Nước nhiều sẽ hấp thụ nhiệt từ từ làm mát an toàn!",
        upvotes: 76,
        createdAt: "Hôm qua",
        isAccepted: true,
        isVerifiedTeacher: true,
      },
    ],
  },
  {
    id: "post-26",
    authorName: "Đoàn Minh Nhật (Lớp 11A4)",
    authorAvatar: "⚡",
    school: "THPT Chuyên Nguyễn Du, Đắk Lắk",
    grade: 11,
    title: "Phản ứng thế Halogen vào Ankan: Tại sao Clo thế không chọn lọc bằng Brom?",
    content:
      "Khi cho propan phản ứng với Cl2 theo tỉ lệ 1:1 thì tạo 2 sản phẩm 1-clopropan (43%) và 2-clopropan (57%). Nhưng với Br2 thì 2-brompropan chiếm tới 99%! Vì sao lại có sự khác biệt lớn như vậy?",
    tags: ["Ankan", "Cơ chế gốc tự do", "Phản ứng thế", "Brom hóa"],
    upvotes: 36,
    createdAt: "Hôm qua",
    answers: [
      {
        id: "ans-26-1",
        authorName: "Bùi Tiến Đạt",
        content:
          "Theo nguyên lý phản ứng - độ chọn lọc (Reactivity-Selectivity Principle):\n- Gốc Clo tự do (Cl•) có hoạt tính rất mạnh (phản ứng tỏa nhiệt mạnh), va chạm với bất kỳ liên kết C-H nào cũng có thể bứt H tạo gốc ankyl, nên tính chọn lọc kém.\n- Gốc Brom tự do (Br•) kém hoạt động hơn nhiều (bước bứt H là thu nhiệt), trạng thái chuyển tiếp đến muộn giống cấu trúc gốc tự do, đòi hỏi năng lượng hoạt hóa thấp nhất ở C bậc cao nhất (gốc tự do bậc 2 bền hơn bậc 1) => Phản ứng brom hóa hầu như CHỈ thế vào C bậc cao (độ chọn lọc C bậc 3 : bậc 2 : bậc 1 đối với Br2 là 1600 : 82 : 1, trong khi với Cl2 chỉ là 5 : 3.8 : 1)!",
        upvotes: 48,
        createdAt: "Hôm qua",
        isAccepted: true,
      },
    ],
  },
];
