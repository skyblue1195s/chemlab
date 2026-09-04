import { LabWorkspace } from "../types";
import { LAB_REAGENTS, LAB_REACTION_RESULTS } from "./virtualLabData";

const fe = LAB_REAGENTS.find((r) => r.id === "fe")!;
const hcl = LAB_REAGENTS.find((r) => r.id === "hcl")!;
const cuso4 = LAB_REAGENTS.find((r) => r.id === "cuso4")!;
const naoh = LAB_REAGENTS.find((r) => r.id === "naoh")!;
const quy_tim = LAB_REAGENTS.find((r) => r.id === "quy_tim")!;

export const DEFAULT_TEMPLATE_WORKSPACES: LabWorkspace[] = [
  {
    id: "template-fe-hcl",
    name: "Thực nghiệm Kim loại + Axit (Fe + HCl) thu khí H₂",
    description: "Khảo sát tốc độ thoát khí H₂ và hiện tượng đổi màu dung dịch sang muối sắt (II) FeCl₂ màu xanh nhạt.",
    createdAt: "Mẫu thực hành có sẵn",
    updatedAt: "Mẫu chuẩn GDPT 2026",
    isTemplate: true,
    chemicals: fe && hcl ? [fe, hcl] : [],
    equipment: {
      glassware: "test-tube",
      burner: "off",
      magneticStirrer: false,
      rubberStopper: true,
      retortStand: true,
      phIndicatorStrip: false,
      temperature: 28,
    },
    activeResult: LAB_REACTION_RESULTS["fe+hcl"] || null,
    notes: "Quan sát bọt khí H₂ sủi liên tục trên bề mặt đinh sắt và thoát theo ống dẫn khí cao su. Khi đậy nút có ống vuốt, khí H₂ có thể đốt cháy tạo ngọn lửa xanh mờ.",
  },
  {
    id: "template-cuso4-naoh",
    name: "Tạo kết tủa Cu(OH)₂ & Đun nóng nhiệt phân trong cốc",
    description: "Phản ứng trao đổi ion tạo kết tủa xanh lơ Cu(OH)₂; khi bật đèn cồn đun nóng, kết tủa phân hủy thành CuO màu đen.",
    createdAt: "Mẫu thực hành có sẵn",
    updatedAt: "Mẫu chuẩn GDPT 2026",
    isTemplate: true,
    chemicals: cuso4 && naoh ? [cuso4, naoh] : [],
    equipment: {
      glassware: "beaker",
      burner: "low",
      magneticStirrer: true,
      rubberStopper: false,
      retortStand: true,
      phIndicatorStrip: false,
      temperature: 65,
    },
    activeResult: LAB_REACTION_RESULTS["cuso4+naoh"] || null,
    notes: "Khi cho NaOH vào dung dịch CuSO₄, xuất hiện kết tủa nhầy Cu(OH)₂ màu xanh lam. Bật đèn cồn nâng nhiệt lên ~65°C và bật máy khuấy từ, kết tủa Cu(OH)₂ bị nhiệt phân tạo chất rắn CuO màu đen lắng dần xuống đáy cốc.",
  },
  {
    id: "template-hcl-indicator",
    name: "Thử môi trường Axit với Chỉ thị Quỳ tím trong Bình tam giác",
    description: "Nhận biết môi trường axit mạnh bằng chỉ thị màu; chuẩn bị cho quá trình chuẩn độ dung dịch bằng buret.",
    createdAt: "Mẫu thực hành có sẵn",
    updatedAt: "Mẫu chuẩn GDPT 2026",
    isTemplate: true,
    chemicals: hcl && quy_tim ? [hcl, quy_tim] : [],
    equipment: {
      glassware: "erlenmeyer",
      burner: "off",
      magneticStirrer: true,
      rubberStopper: false,
      retortStand: false,
      phIndicatorStrip: true,
      temperature: 25,
    },
    activeResult: LAB_REACTION_RESULTS["hcl+quy_tim"] || null,
    notes: "Bình tam giác Erlenmeyer chứa dung dịch HCl; khi nhỏ quỳ tím, dung dịch lập tức chuyển sang màu đỏ đậm (pH ≈ 1.0). Máy khuấy từ giúp hóa chất đồng nhất nhanh chóng.",
  },
];
