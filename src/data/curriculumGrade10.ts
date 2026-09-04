import { Chapter } from "../types";

export const GRADE_10_CURRICULUM: Chapter[] = [
  // ====================== CHƯƠNG 1 ======================
  {
    id: "g10-c1",
    grade: 10,
    chapterNumber: 1,
    title: "Chương 1: Cấu tạo nguyên tử",
    description: "Thành phần nguyên tử, hạt nhân (proton, neutron), lớp vỏ electron, orbital nguyên tử (AO) và cấu hình electron.",
    icon: "Atom",
    concepts: [
      {
        id: "g10-c1-1",
        title: "Thành phần nguyên tử & Kích thước hạt nhân",
        estimatedMinutes: 4,
        visualHook: {
          question: "Nếu phóng to hạt nhân nguyên tử to bằng quả bóng tennis đặt ở giữa sân vận động, thì electron nằm ở đâu?",
          story: "Nguyên tử hầu như hoàn toàn là khoảng chân không rỗng! Nếu hạt nhân to bằng quả bóng tennis ở giữa sân bóng, các hạt electron siêu nhỏ sẽ bay lượn tít ở tận hàng ghế khán giả trên cùng ngoài rìa sân vận động!",
          icon: "Sparkles",
        },
        keyPoints: [
          "Nguyên tử gồm hạt nhân mang điện dương (proton p mang điện +1, neutron n không mang điện) và vỏ electron (e mang điện -1).",
          "Khối lượng nguyên tử tập trung hầu hết ở hạt nhân vì khối lượng electron vô cùng nhỏ (me ≈ 0.00055 amu).",
          "Số đơn vị điện tích hạt nhân Z = số proton = số electron. Số khối A = Z + N.",
          "Đồng vị là các nguyên tử của cùng một nguyên tố có cùng số proton Z nhưng khác nhau về số neutron N (dẫn đến số khối A khác nhau).",
        ],
        realLifeApplication: "Định lượng đồng vị phóng xạ Cacbon-14 để xác định niên đại các cổ vật khảo cổ học hàng nghìn năm tuổi.",
        practiceQuestions: [
          {
            id: "q-10-1-1",
            grade: 10,
            level: "Nhận biết",
            questionText: "Hạt nào sau đây trong nguyên tử không mang điện tích?",
            options: ["Neutron", "Proton", "Electron", "Positron"],
            correctIndex: 0,
            explanation: "Trong 3 loại hạt cơ bản của nguyên tử: proton mang điện +1, electron mang điện -1, còn neutron là hạt trung hòa không mang điện.",
          },
          {
            id: "q-10-1-2",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Nguyên tử Kali có Z = 19 và số khối A = 39. Số hạt neutron trong Kali là:",
            options: ["20", "19", "39", "58"],
            correctIndex: 0,
            explanation: "Số neutron N = A - Z = 39 - 19 = 20.",
          },
        ],
      },
      {
        id: "g10-c1-2",
        title: "Orbital nguyên tử & Cấu hình electron",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao pháo hoa đêm Giao thừa lại bừng sáng với đủ màu sắc đỏ, vàng, xanh biếc?",
          story: "Nhiệt độ nổ kích thích các electron nhảy vọt lên mức năng lượng cao hơn. Khi chúng 'rơi' trở về orbital cơ bản, năng lượng giải phóng dưới dạng photon ánh sáng màu sắc đặc trưng: Na màu vàng rực, Cu màu xanh lam, Sr màu đỏ thẫm!",
          icon: "Flame",
        },
        keyPoints: [
          "Orbital nguyên tử (AO) là khu vực không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%).",
          "AO s có dạng hình cầu, AO p có dạng hình số 8 nổi hai thùy định hướng theo các trục x, y, z.",
          "Thứ tự mức năng lượng: 1s 2s 2p 3s 3p 4s 3d 4p 5s... Nguyên lý Pauli: Mỗi AO chứa tối đa 2 electron có spin ngược chiều nhau.",
          "Quy tắc Hund: Trong cùng một phân lớp, các electron phân bố sao cho số electron độc thân là cực đại và có spin cùng chiều.",
        ],
        realLifeApplication: "Giải thích nguyên lý phát quang của đèn LED, đèn quảng cáo khí hiếm Neon và cảm biến quang phổ hồng ngoại.",
        practiceQuestions: [
          {
            id: "q-10-1-3",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Cấu hình electron của nguyên tử Nhôm (Z = 13) ở trạng thái cơ bản là:",
            options: [
              "1s² 2s² 2p⁶ 3s² 3p¹",
              "1s² 2s² 2p⁶ 3s³",
              "1s² 2s² 2p⁶ 3s¹ 3p²",
              "1s² 2s² 2p⁶ 4s² 3d¹",
            ],
            correctIndex: 0,
            explanation: "Với Z = 13, phân bố lần lượt vào các phân lớp: 1s² 2s² 2p⁶ 3s² 3p¹ (lớp thứ 3 có 3 electron hóa trị).",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 2 ======================
  {
    id: "g10-c2",
    grade: 10,
    chapterNumber: 2,
    title: "Chương 2: Bảng tuần hoàn & Định luật tuần hoàn",
    description: "Cấu tạo bảng tuần hoàn (ô, chu kỳ, nhóm), xu hướng biến đổi bán kính, độ âm điện, tính kim loại/phi kim.",
    icon: "Table",
    concepts: [
      {
        id: "g10-c2-1",
        title: "Cấu tạo Bảng tuần hoàn các nguyên tố",
        estimatedMinutes: 4,
        visualHook: {
          question: "Tại sao Mendeleev lại có thể dự đoán chính xác sự tồn tại của Gali và Tecgitec trước khi chúng được tìm ra?",
          story: "Năm 1869, Mendeleev nhận thấy các tính chất của nguyên tố lặp lại theo chu kỳ. Ông táo bạo để trống các ô trên bảng và dự báo chính xác khối lượng, mật độ và phản ứng của các nguyên tố chưa ai nhìn thấy!",
          icon: "Lightbulb",
        },
        keyPoints: [
          "Bảng tuần hoàn gồm 7 chu kỳ (hàng ngang) và 18 cột chia thành 8 nhóm A (nguyên tố s, p) và 8 nhóm B (nguyên tố d, f).",
          "Số thứ tự ô nguyên tố = Số hiệu nguyên tử Z = Số proton = Số electron.",
          "Số thứ tự chu kỳ = Số lớp electron trong nguyên tử.",
          "Số thứ tự nhóm A = Số electron hóa trị = Số electron lớp ngoài cùng.",
        ],
        realLifeApplication: "Phân loại các vật liệu bán dẫn (Silic, Gecmani ở nhóm IVA) tạo nên bộ vi xử lý máy tính và điện thoại thông minh.",
        practiceQuestions: [
          {
            id: "q-10-2-1",
            grade: 10,
            level: "Nhận biết",
            questionText: "Nguyên tố Clo ở ô số 17, chu kỳ 3, nhóm VIIA. Số electron lớp ngoài cùng của Clo là:",
            options: ["7", "3", "17", "8"],
            correctIndex: 0,
            explanation: "Nguyên tố thuộc nhóm VIIA có 7 electron ở lớp ngoài cùng.",
          },
        ],
      },
      {
        id: "g10-c2-2",
        title: "Xu hướng biến đổi tính chất & Định luật tuần hoàn",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao nguyên tử Liti (Li) lại nhỏ hơn Natri (Na), nhưng lại giữ electron chặt hơn?",
          story: "Tưởng tượng hạt nhân như một nam châm. Khi đi xuống dưới trong cùng nhóm, số lớp electron tăng lên làm bán kính nở rộng, electron ngoài cùng ở quá xa nam châm nên dễ bị giật mất hơn!",
          icon: "Maximize2",
        },
        keyPoints: [
          "Trong 1 chu kỳ (trái → phải): Bán kính nguyên tử giảm, độ âm điện tăng, tính kim loại giảm, tính phi kim tăng.",
          "Trong 1 nhóm A (trên → dưới): Bán kính nguyên tử tăng, độ âm điện giảm, tính kim loại tăng, tính phi kim giảm.",
          "Tính acid của oxide và hydroxide cao nhất tăng dần trong chu kỳ và giảm dần trong nhóm A.",
          "Định luật tuần hoàn: Tính chất của các nguyên tố và đơn chất cũng như thành phần và tính chất của các hợp chất biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân.",
        ],
        realLifeApplication: "Dự đoán khả năng ăn mòn và độ độc hại của các kim loại nặng trong môi trường như Chì, Asen, Thủy ngân.",
        practiceQuestions: [
          {
            id: "q-10-2-2",
            grade: 10,
            level: "Vận dụng",
            questionText: "Dãy nguyên tố nào sau đây được xếp theo chiều tính phi kim tăng dần?",
            options: ["Si < P < S < Cl", "Cl < S < P < Si", "F < Cl < Br < I", "Na < Mg < Al < Si"],
            correctIndex: 0,
            explanation: "Các nguyên tố Si, P, S, Cl cùng thuộc chu kỳ 3. Đi từ trái sang phải, tính phi kim tăng dần: Si < P < S < Cl.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 3 ======================
  {
    id: "g10-c3",
    grade: 10,
    chapterNumber: 3,
    title: "Chương 3: Liên kết hóa học",
    description: "Quy tắc Octet, liên kết ion, liên kết cộng hóa trị phân cực/không phân cực, liên kết hydrogen & tương tác van der Waals.",
    icon: "Network",
    concepts: [
      {
        id: "g10-c3-1",
        title: "Quy tắc Octet & Liên kết Ion",
        estimatedMinutes: 4,
        visualHook: {
          question: "Tại sao muối ăn NaCl có thể chịu được nhiệt độ trên 800°C mà không bị nóng chảy hay cháy đen?",
          story: "Kim loại Na mãnh liệt nhường 1 electron cho phi kim Clo để tạo thành các ion Na⁺ và Cl⁻. Lực hút tĩnh điện đa chiều giữa hàng triệu ion tạo thành mạng tinh thể lập phương vững chắc tựa kim cương!",
          icon: "Shield",
        },
        keyPoints: [
          "Quy tắc Octet (bát tử): Nguyên tử có xu hướng đạt cấu hình 8 electron ở lớp ngoài cùng giống khí hiếm (hoặc 2e giống He).",
          "Liên kết ion hình thành do lực hút tĩnh điện giữa các ion mang điện tích trái dấu (kim loại điển hình + phi kim điển hình).",
          "Hợp chất ion có nhiệt độ nóng chảy và sôi cao, dẫn điện khi nóng chảy hoặc hòa tan trong nước.",
        ],
        realLifeApplication: "Ứng dụng làm chất điện giải trong pin, dung dịch truyền y tế (nước muối sinh lý 0.9%) và vật liệu chịu lửa.",
        practiceQuestions: [
          {
            id: "q-10-3-1",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Liên kết ion được hình thành chủ yếu giữa:",
            options: [
              "Kim loại điển hình và phi kim điển hình",
              "Hai nguyên tử phi kim có cùng độ âm điện",
              "Các nguyên tử kim loại với nhau",
              "Hai phân tử khí hiếm",
            ],
            correctIndex: 0,
            explanation: "Hiệu độ âm điện lớn giữa kim loại điển hình (nhóm IA, IIA) và phi kim điển hình (nhóm VIIA, VIA) dẫn đến sự nhường nhận electron tạo liên kết ion.",
          },
        ],
      },
      {
        id: "g10-c3-2",
        title: "Liên kết Cộng hóa trị & Phân cực phân tử",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao khí oxy (O₂) và nước (H₂O) đều có liên kết cộng hóa trị nhưng oxy là khí còn nước là chất lỏng ở nhiệt độ thường?",
          story: "Phân tử oxy chia đều electron (không phân cực), trong khi oxy trong nước hút mạnh electron về phía mình tạo thành phân tử có cực với hai đầu điện tích âm - dương tách biệt rõ rệt!",
          icon: "Droplets",
        },
        keyPoints: [
          "Liên kết cộng hóa trị hình thành do một hoặc nhiều cặp electron dùng chung giữa 2 nguyên tử phi kim.",
          "Hiệu độ âm điện Δχ < 0.4: liên kết không phân cực (e chia đều).",
          "0.4 ≤ Δχ < 1.7: liên kết phân cực (e lệch về nguyên tử có độ âm điện lớn hơn).",
          "Liên kết cho - nhận: Cặp electron dùng chung chỉ do một nguyên tử đóng góp.",
        ],
        realLifeApplication: "Dung môi nước hòa tan các chất dinh dưỡng trong cơ thể sống và giải thích tính chất trơ của khí nitơ N₂ trong bảo quản thực phẩm.",
        practiceQuestions: [
          {
            id: "q-10-3-2",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Phân tử nào sau đây có liên kết cộng hóa trị không phân cực?",
            options: ["N₂", "H₂O", "HCl", "NH₃"],
            correctIndex: 0,
            explanation: "Phân tử N₂ gồm hai nguyên tử Nitơ giống nhau, hiệu độ âm điện bằng 0 nên cặp e dùng chung nằm chính giữa, liên kết không phân cực.",
          },
        ],
      },
      {
        id: "g10-c3-3",
        title: "Liên kết Hydrogen & Tương tác Van der Waals",
        estimatedMinutes: 4,
        visualHook: {
          question: "Tại sao những con gọng vó có thể đi lại nhẹ nhàng trên mặt nước mà không bị chìm?",
          story: "Tất cả là nhờ mạng lưới liên kết hydrogen giữa các phân tử H₂O! Chúng hút nhau tạo sức căng bề mặt đàn hồi nâng đỡ đôi chân gọng vó như tấm đệm lò xo vô hình!",
          icon: "Sparkles",
        },
        keyPoints: [
          "Liên kết hydrogen hình thành giữa nguyên tử H linh động (liên kết với F, O, N) với nguyên tử F, O, N mang điện âm của phân tử khác.",
          "Tương tác van der Waals là lực hút tĩnh điện yếu giữa các lưỡng cực tạm thời hoặc cảm ứng giữa các phân tử.",
          "Liên kết hydrogen làm tăng đáng kể nhiệt độ sôi và nhiệt độ nóng chảy của nước, cồn và axit cacboxylic so với các chất tương đương.",
        ],
        realLifeApplication: "Giữ cấu trúc chuỗi xoắn kép của phân tử di truyền DNA và giải thích tại sao tảng băng tuyết lại nổi trên mặt đại dương.",
        practiceQuestions: [
          {
            id: "q-10-3-3",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Nhiệt độ sôi của H₂O (100°C) cao hơn nhiều so với H₂S (-60°C) chủ yếu là do:",
            options: [
              "Giữa các phân tử H₂O có liên kết hydrogen liên phân tử",
              "Phân tử H₂O có khối lượng mol lớn hơn H₂S",
              "Liên kết H-O bền hơn liên kết H-S",
              "H₂S là chất khí ở điều kiện thường",
            ],
            correctIndex: 0,
            explanation: "Oxi có độ âm điện lớn và bán kính nhỏ nên giữa các phân tử H₂O hình thành liên kết hydrogen liên phân tử bền vững, làm nhiệt độ sôi tăng vọt.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 4 ======================
  {
    id: "g10-c4",
    grade: 10,
    chapterNumber: 4,
    title: "Chương 4: Phản ứng Oxi hóa - Khử",
    description: "Bản chất chuyển dịch electron, xác định số oxi hóa, phương pháp thăng bằng electron 4 bước và ứng dụng thực tiễn.",
    icon: "Zap",
    concepts: [
      {
        id: "g10-c4-1",
        title: "Bản chất Oxi hóa - Khử & Số oxi hóa",
        estimatedMinutes: 4,
        visualHook: {
          question: "Tại sao thanh sắt để ngoài trời mưa sau vài tuần lại bị ăn mòn thành bột gỉ sét màu nâu đỏ?",
          story: "Không khí ẩm chứa Oxi và H₂O liên tục 'cướp' electron của nguyên tử sắt kim loại. Quá trình chuyển giao hàng tỷ electron này biến sắt bóng loáng thành hợp chất gỉ Fe₂O₃.xH₂O xốp và vỡ vụn!",
          icon: "ShieldAlert",
        },
        keyPoints: [
          "Số oxi hóa là điện tích giả định của nguyên tử trong phân tử nếu giả định tất cả liên kết đều là liên kết ion.",
          "Quy tắc xác định số oxi hóa: Đơn chất bằng 0; H thường là +1 (trừ hiđrua kim loại); O thường là -2 (trừ peoxit và OF₂); Tổng số oxh trong phân tử bằng 0.",
          "Khử cho - O nhận: Chất khử là chất nhường electron (số oxi hóa tăng); Chất oxi hóa là chất nhận electron (số oxi hóa giảm).",
          "Quá trình oxi hóa (sự oxi hóa) là quá trình nhường e; Quá trình khử (sự khử) là quá trình nhận e.",
        ],
        realLifeApplication: "Cơ chế hoạt động của pin điện thoại lithium-ion, phản ứng quang hợp của cây xanh và sự hô hấp tế bào.",
        practiceQuestions: [
          {
            id: "q-10-4-1",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Số oxi hóa của nguyên tử Nitơ trong ion nitrat (NO₃⁻) là:",
            options: ["+5", "+3", "-3", "+4"],
            correctIndex: 0,
            explanation: "Gọi số oxh của N là x: x + 3×(-2) = -1 → x = +5.",
          },
        ],
      },
      {
        id: "g10-c4-2",
        title: "Phương pháp Thăng bằng Electron & Cân bằng phản ứng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Làm thế nào để cân bằng chính xác một phản ứng phức tạp giữa kim loại và axit HNO₃ sinh ra hỗn hợp nhiều khí độc?",
          story: "Định luật bảo toàn điện tích khẳng định: Số electron mà chất khử nhường đi bắt buộc phải đúng bằng số electron mà chất oxi hóa nhận về!",
          icon: "Scale",
        },
        keyPoints: [
          "Nguyên tắc cốt lõi: Tổng số electron nhường = Tổng số electron nhận.",
          "4 bước thăng bằng e: 1. Xác định số oxh thay đổi → 2. Viết quá trình oxi hóa & khử → 3. Tìm bội chung nhỏ nhất để nhân hệ số chéo → 4. Điền hệ số và cân bằng các nguyên tố còn lại (kim loại → gốc axit → môi trường → H₂O).",
          "Phản ứng tự oxi hóa - khử: Cùng một chất vừa đóng vai trò chất khử vừa đóng vai trò chất oxi hóa (ví dụ Cl₂ tác dụng NaOH).",
        ],
        realLifeApplication: "Tính toán lượng thuốc nổ đen, kiểm soát phản ứng hàn nhiệt nhôm đường ray xe lửa và sản xuất axit sulfuric công nghiệp.",
        practiceQuestions: [
          {
            id: "q-10-4-2",
            grade: 10,
            level: "Vận dụng",
            questionText: "Trong phản ứng: Cu + HNO₃ → Cu(NO₃)₂ + NO₂ + H₂O, tỉ lệ phân tử HNO₃ đóng vai trò chất oxi hóa so với HNO₃ tạo môi trường là:",
            options: ["1 : 1", "1 : 2", "2 : 1", "1 : 4"],
            correctIndex: 0,
            explanation: "Phản ứng cân bằng: Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O. Có 4 phân tử HNO₃ tham gia: 2 phân tử tạo 2NO₂ (chất oxi hóa) và 2 phân tử tạo Cu(NO₃)₂ (môi trường). Tỉ lệ là 2 : 2 = 1 : 1.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 5 ======================
  {
    id: "g10-c5",
    grade: 10,
    chapterNumber: 5,
    title: "Chương 5: Năng lượng hóa học (Nhiệt hóa học)",
    description: "Phản ứng tỏa nhiệt, thu nhiệt, biến thiên enthalpy chuẩn ΔrH°₂₉₈, nhiệt tạo thành chuẩn ΔfH°₂₉₈ và năng lượng liên kết.",
    icon: "Flame",
    concepts: [
      {
        id: "g10-c5-1",
        title: "Biến thiên Enthalpy chuẩn & Phản ứng Tỏa nhiệt/Thu nhiệt",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao khi bị chấn thương thể thao, túi chườm lạnh áp vào lập tức lạnh buốt dù không hề cất trong tủ đông?",
          story: "Bên trong túi chườm chứa muối Amoni nitrat (NH₄NO₃) và nước. Khi bóp vỡ túi nước bên trong, muối hòa tan thu nhiệt cực mạnh từ môi trường, hạ nhiệt độ xuống gần 0°C chỉ trong tích tắc!",
          icon: "Snowflake",
        },
        keyPoints: [
          "Phản ứng tỏa nhiệt: Giải phóng năng lượng ra môi trường dưới dạng nhiệt (ΔrH°₂₉₈ < 0), làm nhiệt độ môi trường xung quanh tăng lên.",
          "Phản ứng thu nhiệt: Hấp thụ nhiệt từ môi trường (ΔrH°₂₉₈ > 0), làm nhiệt độ môi trường xung quanh hạ xuống.",
          "Điều kiện chuẩn: Áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với dung dịch) và nhiệt độ 25°C (298 K).",
        ],
        realLifeApplication: "Túi chườm nóng tự sôi của quân đội, túi chườm lạnh sơ cứu thể thao, và đánh giá hiệu suất của bếp gas hóa lỏng LPG.",
        practiceQuestions: [
          {
            id: "q-10-5-1",
            grade: 10,
            level: "Nhận biết",
            questionText: "Một phản ứng có ΔrH°₂₉₈ = -890.3 kJ. Kết luận nào sau đây là chính xác?",
            options: [
              "Phản ứng tỏa nhiệt ra môi trường",
              "Phản ứng thu nhiệt từ môi trường",
              "Phản ứng không có sự biến thiên năng lượng",
              "Phản ứng chỉ xảy ra ở 0 Kelvin",
            ],
            correctIndex: 0,
            explanation: "Dấu âm (ΔrH°₂₉₈ < 0) theo quy ước nhiệt hóa học GDPT 2026 biểu thị phản ứng tỏa nhiệt.",
          },
        ],
      },
      {
        id: "g10-c5-2",
        title: "Tính Enthalpy theo Nhiệt tạo thành & Năng lượng liên kết",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao nhiên liệu Hydro (H₂) được coi là nhiên liệu xanh tương lai có năng lượng đốt cháy gấp 3 lần xăng dầu?",
          story: "Liên kết H-H và O=O giàu năng lượng khi kết hợp tạo thành liên kết O-H siêu bền trong phân tử H₂O, giải phóng một lượng nhiệt khổng lồ mà sản phẩm duy nhất chỉ là hơi nước tinh khiết!",
          icon: "Zap",
        },
        keyPoints: [
          "Nhiệt tạo thành chuẩn (ΔfH°₂₉₈) là biến thiên enthalpy của phản ứng tạo thành 1 mol chất từ các đơn chất bền ở điều kiện chuẩn. Nhiệt tạo thành chuẩn của đơn chất bền bằng 0.",
          "Công thức theo nhiệt tạo thành: ΔrH°₂₉₈ = Σ ΔfH°₂₉₈(sản phẩm) - Σ ΔfH°₂₉₈(chất đầu).",
          "Công thức theo năng lượng liên kết (cho chất khí): ΔrH°₂₉₈ = Σ Eb(chất đầu) - Σ Eb(sản phẩm).",
        ],
        realLifeApplication: "Thiết kế buồng đốt động cơ tên lửa đẩy vũ trụ sử dụng hydro lỏng và oxy lỏng.",
        practiceQuestions: [
          {
            id: "q-10-5-2",
            grade: 10,
            level: "Vận dụng",
            questionText: "Cho phản ứng đốt cháy metan: CH₄(k) + 2O₂(k) → CO₂(k) + 2H₂O(l). Biết ΔfH°₂₉₈(CH₄) = -74.8 kJ/mol; ΔfH°₂₉₈(CO₂) = -393.5 kJ/mol; ΔfH°₂₉₈(H₂O) = -285.8 kJ/mol. Biến thiên enthalpy chuẩn của phản ứng là:",
            options: ["-890.3 kJ", "+890.3 kJ", "-604.5 kJ", "-965.1 kJ"],
            correctIndex: 0,
            explanation: "ΔrH° = [(-393.5) + 2×(-285.8)] - [(-74.8) + 2×0] = -965.1 - (-74.8) = -890.3 kJ.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 6 ======================
  {
    id: "g10-c6",
    grade: 10,
    chapterNumber: 6,
    title: "Chương 6: Tốc độ phản ứng hóa học",
    description: "Khái niệm tốc độ phản ứng, biểu thức định luật tác dụng khối lượng và 5 yếu tố ảnh hưởng đến tốc độ phản ứng.",
    icon: "Gauge",
    concepts: [
      {
        id: "g10-c6-1",
        title: "Tốc độ phản ứng & Định luật tác dụng khối lượng",
        estimatedMinutes: 4,
        visualHook: {
          question: "Tại sao thuốc nổ đen bùng phát trong 1 phần nghìn giây, trong khi thanh sắt phải mất nhiều năm mới bị gỉ hoàn toàn?",
          story: "Mỗi phản ứng diễn ra với một vận tốc hoàn toàn khác nhau. Khái niệm tốc độ phản ứng giúp các nhà hóa học đo lường và làm chủ thời gian phản ứng diễn ra!",
          icon: "Clock",
        },
        keyPoints: [
          "Tốc độ phản ứng hóa học là đại lượng đặc trưng cho sự biến thiên nồng độ của một trong các chất phản ứng hoặc sản phẩm trong một đơn vị thời gian.",
          "Biểu thức tốc độ trung bình: v_tb = ± ΔC / Δt (dấu trừ cho chất đầu, dấu cộng cho sản phẩm).",
          "Định luật tác dụng khối lượng (cho phản ứng đơn giản aA + bB → sản phẩm): v = k × [A]ᵃ × [B]ᵇ, trong đó k là hằng số tốc độ phản ứng.",
        ],
        realLifeApplication: "Tính toán liều lượng giải phóng hoạt chất chậm của viên thuốc con nhộng trong dạ dày bệnh nhân.",
        practiceQuestions: [
          {
            id: "q-10-6-1",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Cho phản ứng đơn giản: 2NO(k) + O₂(k) → 2NO₂(k). Biểu thức định luật tác dụng khối lượng của phản ứng này là:",
            options: [
              "v = k × [NO]² × [O₂]",
              "v = k × [NO] × [O₂]",
              "v = k × [NO₂]²",
              "v = k × [NO]² / [O₂]",
            ],
            correctIndex: 0,
            explanation: "Theo định luật tác dụng khối lượng, số mũ tương ứng với hệ số tỉ lượng của chất phản ứng: v = k × [NO]² × [O₂].",
          },
        ],
      },
      {
        id: "g10-c6-2",
        title: "5 Yếu tố ảnh hưởng đến Tốc độ phản ứng",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao nấu thức ăn trong nồi áp suất lại nhanh chín gấp 3 lần nồi thường, và than tổ ong đục lỗ lại cháy rực hơn than khối?",
          story: "Nồi áp suất tăng nhiệt độ nước sôi lên 120°C kích thích phân tử va chạm mạnh mẽ. Còn lỗ than tổ ong làm tăng diện tích tiếp xúc với khí oxy gấp nhiều lần, khiến than bốc cháy dữ dội!",
          icon: "Flame",
        },
        keyPoints: [
          "Nồng độ: Tăng nồng độ chất phản ứng làm tăng số va chạm hiệu quả giữa các phân tử → v tăng.",
          "Áp suất: Tăng áp suất chất khí làm các phân tử khí sát lại gần nhau, tương tự tăng nồng độ → v tăng.",
          "Nhiệt độ: Tăng nhiệt độ làm các phân tử chuyển động nhanh hơn và có động năng lớn vượt qua rào cản năng lượng hoạt hóa → v tăng.",
          "Diện tích tiếp xúc: Nghiền nhỏ chất rắn làm tăng diện tích bề mặt tiếp xúc → v tăng.",
          "Chất xúc tác: Làm giảm năng lượng hoạt hóa Ea của phản ứng mà không bị tiêu hao sau phản ứng → v tăng mạnh.",
          "Quy tắc Van 't Hoff: Khi nhiệt độ tăng 10°C, tốc độ phản ứng tăng từ 2 đến 4 lần (hệ số γ = 2 - 4).",
        ],
        realLifeApplication: "Bảo quản thực phẩm trong tủ đông lạnh, sử dụng men nở bánh mì và bộ chuyển đổi xúc tác Pt-Rh trên ống xả xe máy.",
        practiceQuestions: [
          {
            id: "q-10-6-2",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Chất xúc tác làm tăng tốc độ phản ứng hóa học chủ yếu bằng cách:",
            options: [
              "Làm giảm năng lượng hoạt hóa của phản ứng",
              "Làm tăng nhiệt độ của hệ phản ứng",
              "Làm tăng biến thiên enthalpy ΔrH°",
              "Làm tăng nồng độ của chất phản ứng",
            ],
            correctIndex: 0,
            explanation: "Chất xúc tác mở ra một con đường phản ứng mới có năng lượng hoạt hóa (Ea) thấp hơn, giúp nhiều phân tử đạt đủ năng lượng để phản ứng hơn.",
          },
        ],
      },
    ],
  },

  // ====================== CHƯƠNG 7 ======================
  {
    id: "g10-c7",
    grade: 10,
    chapterNumber: 7,
    title: "Chương 7: Nguyên tố nhóm Halogen (Nhóm VIIA)",
    description: "Đặc điểm nhóm Halogen (F₂, Cl₂, Br₂, I₂), tính oxi hóa mạnh giảm dần, hydrogen halide, axit hydrohalic và muối halide.",
    icon: "TestTubes",
    concepts: [
      {
        id: "g10-c7-1",
        title: "Đơn chất Halogen - Tính chất & Quy luật biến thiên",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao tinh thể Iot màu tím đen khi đun nóng lại bốc khói tím ngắt mà không hề bị nóng chảy thành giọt chất lỏng?",
          story: "Đó là hiện tượng thăng hoa kỳ thú của Iot! Tương tác van der Waals giữa các phân tử I₂ tương đối yếu, khi nhận nhiệt chúng lập tức chuyển thẳng từ thể rắn sang thể hơi màu tím quyến rũ!",
          icon: "Sparkles",
        },
        keyPoints: [
          "Các halogen gồm F₂, Cl₂, Br₂, I₂ tồn tại ở dạng phân tử hai nguyên tử X₂ có liên kết cộng hóa trị.",
          "Trạng thái và màu sắc đậm dần: F₂ (khí lục nhạt) → Cl₂ (khí vàng lục) → Br₂ (chất lỏng nâu đỏ) → I₂ (chất rắn tím đen thăng hoa).",
          "Nhiệt độ nóng chảy và nhiệt độ sôi tăng dần từ F₂ đến I₂ do khối lượng phân tử và tương tác van der Waals tăng dần.",
          "Tính oxi hóa giảm dần: F₂ > Cl₂ > Br₂ > I₂ (Halogen đứng trước đẩy được halogen đứng sau ra khỏi dung dịch muối: Cl₂ + 2NaBr → 2NaCl + Br₂).",
        ],
        realLifeApplication: "Clo dùng khử trùng nước hồ bơi và sinh hoạt, sản xuất chất dẻo PVC, dung dịch cồn Iot sát khuẩn y tế và muối ăn iodized phòng bướu cổ.",
        practiceQuestions: [
          {
            id: "q-10-7-1",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Khi sục khí Clo dư vào dung dịch NaBr, hiện tượng quan sát được là:",
            options: [
              "Dung dịch chuyển sang màu vàng nâu do tạo thành Br₂",
              "Xuất hiện kết tủa trắng",
              "Không có hiện tượng gì xảy ra",
              "Dung dịch mất màu hoàn toàn",
            ],
            correctIndex: 0,
            explanation: "Clo có tính oxi hóa mạnh hơn Brom nên đẩy Br⁻ ra khỏi muối tạo đơn chất Br₂ tan trong nước có màu vàng nâu: Cl₂ + 2NaBr → 2NaCl + Br₂.",
          },
        ],
      },
      {
        id: "g10-c7-2",
        title: "Hydrogen Halide & Nhận biết Muối Halide",
        estimatedMinutes: 5,
        visualHook: {
          question: "Tại sao axit clohiđric (HCl) đựng trong chai thủy tinh an toàn, nhưng axit flohiđric (HF) lại ăn mòn thủng đáy bình thủy tinh?",
          story: "Axit HF có khả năng đặc biệt phản ứng với silic đioxit (SiO₂) thành phần chính của thủy tinh: 4HF + SiO₂ → SiF₄↑ + 2H₂O. Vì thế, HF được các nghệ nhân dùng để khắc chữ nghệ thuật lên kính!",
          icon: "ShieldAlert",
        },
        keyPoints: [
          "Hydrogen halide (HX) là các hợp chất khí, tan rất nhiều trong nước tạo thành dung dịch hydrohalic acid tương ứng.",
          "Tính acid tăng dần: HF (axit yếu) < HCl < HBr < HI (axit rất mạnh).",
          "Tính khử của các ion halide tăng dần: F⁻ < Cl⁻ < Br⁻ < I⁻.",
          "Nhận biết ion halide bằng dung dịch AgNO₃: F⁻ (không kết tủa), Cl⁻ (kết tủa AgCl trắng), Br⁻ (kết tủa AgBr vàng nhạt), I⁻ (kết tủa AgI vàng đậm).",
        ],
        realLifeApplication: "Khắc hoa văn lên kính bằng axit HF, tráng phim chụp ảnh nhạy sáng bằng AgBr, và nhận diện muối trong phòng thí nghiệm.",
        practiceQuestions: [
          {
            id: "q-10-7-2",
            grade: 10,
            level: "Thông hiểu",
            questionText: "Chất nào sau đây dùng để khắc chữ và hình hoa văn lên bề mặt thủy tinh?",
            options: ["Dung dịch HF", "Dung dịch HCl", "Dung dịch H₂SO₄", "Dung dịch NaOH"],
            correctIndex: 0,
            explanation: "HF phản ứng hòa tan silic đioxit trong thủy tinh: SiO₂ + 4HF → SiF₄ + 2H₂O, được ứng dụng để khắc chữ lên kính.",
          },
        ],
      },
    ],
  },
];
