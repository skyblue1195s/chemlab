export type GradeLevel = 10 | 11 | 12;

export type ActiveTab =
  | "molecules"
  | "periodic-table"
  | "virtual-lab"
  | "reactions"
  | "curriculum"
  | "thpt-practice"
  | "gamification"
  | "community"
  | "ai-tutor";

export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  vietnameseName: string;
  atomicMass: number;
  category:
    | "alkali-metal"
    | "alkaline-earth"
    | "transition-metal"
    | "post-transition"
    | "metalloid"
    | "reactive-nonmetal"
    | "halogen"
    | "noble-gas"
    | "lanthanide"
    | "actinide";
  group: number;
  period: number;
  block: "s" | "p" | "d" | "f";
  electronConfiguration: string;
  electronsPerShell: number[];
  electronegativity?: number;
  atomicRadius?: number; // pm
  oxidationStates: number[];
  stateAtSTP: "Khí" | "Lỏng" | "Rắn";
  realWorldApplication: string;
  funFact: string;
  colorHex: string;
}

export interface MoleculeAtom {
  id: string;
  element: string;
  x: number;
  y: number;
  z: number;
  color: string;
  radius: number;
}

export interface MoleculeBond {
  from: string;
  to: string;
  type: "single" | "double" | "triple" | "aromatic";
}

export interface MoleculeData {
  id: string;
  name: string;
  formula: string;
  vietnameseName: string;
  geometry: string; // e.g., "Gấp khúc", "Tứ diện đều", "Phẳng lục giác"
  bondAngle: string;
  polarity: "Phân cực" | "Không phân cực" | "Phân cực mạnh" | "Phân cực nhẹ" | "Hợp chất ion" | "Phức chất ion";
  hybridization?: string; // sp, sp2, sp3
  category?: "inorganic" | "hydrocarbon" | "derivative" | "biochemistry" | "crystal" | "polymer" | "complex";
  gradeLevel?: GradeLevel;
  vseprType?: string; // e.g., AX4, AX3E, AX2E2, AX6...
  description: string;
  realWorldContext: string;
  atoms: MoleculeAtom[];
  bonds: MoleculeBond[];
}

export interface ReactionStep {
  stepNumber: number;
  title: string;
  description: string;
  electronMovement?: string; // Description of e transfer
  animationState: "initial" | "approach" | "transfer" | "products";
}

export interface ReactionSimulation {
  id: string;
  title: string;
  type: "ox-red" | "organic" | "equilibrium" | "electrolysis" | "acid-base" | "complex" | "precipitation";
  grade?: GradeLevel;
  categoryLabel?: string;
  energyType?: "exothermic" | "endothermic";
  enthalpy?: string;
  equation: string;
  ionEquation?: string;
  visualHook: {
    title: string;
    hookText: string;
    icon: string;
  };
  whyItMatters: string;
  steps: ReactionStep[];
  realWorldExample: string;
  visualConfig?: {
    reactantA: { name: string; formula: string; color: string; bgClass: string; state: string };
    reactantB: { name: string; formula: string; color: string; bgClass: string; state: string };
    productA: { name: string; formula: string; color: string; bgClass: string; state: string };
    productB?: { name: string; formula: string; color: string; bgClass: string; state: string };
    particleType: "electron" | "proton" | "precipitate" | "gas" | "heat" | "complex" | "bond";
    effectNotice?: string;
  };
  quickQuiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface LabReagent {
  id: string;
  name: string;
  formula: string;
  type: "metal" | "acid" | "base" | "salt" | "indicator" | "water";
  color: string; // Tailwind color or hex
  liquidColorHex: string;
  isLiquid: boolean;
  stateText: string;
  dangerNote?: string;
}

export interface LabReactionResult {
  reactants: string[]; // sorted ids
  equation: string;
  ionEquation?: string;
  phenomenon: string;
  liquidColor: string;
  precipitateColor?: string;
  hasGas: boolean;
  gasDescription?: string;
  flameEffect?: boolean;
  explanation: string;
  type: "precipitate" | "gas" | "neutralization" | "combustion" | "redox";
}

export type GlasswareType = "test-tube" | "beaker" | "erlenmeyer" | "round-bottom";

export interface LabEquipmentConfig {
  glassware: GlasswareType;
  burner: "off" | "low" | "high";
  magneticStirrer: boolean;
  rubberStopper: boolean;
  retortStand: boolean;
  phIndicatorStrip: boolean;
  temperature: number; // in °C
}

export interface LabWorkspace {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  chemicals: LabReagent[];
  equipment: LabEquipmentConfig;
  activeResult: LabReactionResult | null;
  notes?: string;
  isTemplate?: boolean;
}

export interface Question {
  id: string;
  grade: GradeLevel;
  level: "Nhận biết" | "Thông hiểu" | "Vận dụng" | "Vận dụng cao";
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  realWorldLink?: string;
}

export interface ConceptNode {
  id: string;
  title: string;
  estimatedMinutes: number;
  visualHook: {
    question: string;
    story: string;
    icon: string;
  };
  keyPoints: string[];
  realLifeApplication: string;
  practiceQuestions: Question[];
}

export interface Chapter {
  id: string;
  grade: GradeLevel;
  chapterNumber: number;
  title: string;
  description: string;
  icon: string;
  concepts: ConceptNode[];
}

export interface Badge {
  id: string;
  name: string;
  title?: string;
  description: string;
  icon: string;
  category?: "lab" | "theory" | "streak" | "game";
  unlocked: boolean;
  unlockedAt?: string;
}

export interface ChemistryQuest {
  id: string;
  title: string;
  category: "precipitate" | "gas" | "redox" | "neutralization" | "indicator" | "combustion";
  categoryLabel: string;
  grade: GradeLevel;
  requiredResultKey: string;
  hint: string;
  xpReward: number;
  completed?: boolean;
  questions?: Question[];
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  category: "quiz" | "3d" | "ai" | "lab" | "theory" | "periodic" | "game" | "community";
  categoryLabel: string;
  targetProgress: number;
  currentProgress: number;
  unit: string;
  xpReward: number;
  completed: boolean;
  claimed: boolean;
  targetTab?: string;
  iconName: "brain" | "box" | "bot" | "flask" | "book" | "atom" | "flame" | "zap" | "trophy" | "message-square" | "check";
}

export interface UserStats {
  xp: number;
  level: number;
  title: string;
  streakDays: number;
  badges: Badge[];
  completedQuests: string[];
  grade: GradeLevel;
}

export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  title: string;
  grade: number;
  xp: number;
  streak: number;
  badge?: string;
  school?: string;
  completedCount?: number;
  isUser?: boolean;
}

export interface ForumAnswer {
  id: string;
  authorName: string;
  content: string;
  upvotes: number;
  createdAt: string;
  isAccepted?: boolean;
  isVerifiedTeacher?: boolean;
}

export interface ForumPost {
  id: string;
  authorName: string;
  authorAvatar?: string;
  school?: string;
  grade: GradeLevel;
  title: string;
  content: string;
  tags: string[];
  upvotes: number;
  createdAt: string;
  answers: ForumAnswer[];
}

// ================= THPT EXAM TYPES (CẤU TRÚC ĐỀ THI 2026 THEO BỘ GD&ĐT) =================
export interface THPTMultipleChoiceQuestion {
  id: string;
  questionNumber: number;
  questionText: string;
  image?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
  difficulty: "Nhận biết" | "Thông hiểu" | "Vận dụng";
}

export interface THPTTrueFalseItem {
  statementId: "a" | "b" | "c" | "d";
  statementText: string;
  isCorrect: boolean; // true = Đúng, false = Sai
  explanation: string;
}

export interface THPTTrueFalseQuestion {
  id: string;
  questionNumber: number;
  contextText: string;
  image?: string;
  items: THPTTrueFalseItem[];
  topic: string;
}

export interface THPTShortAnswerQuestion {
  id: string;
  questionNumber: number;
  questionText: string;
  correctAnswer: string; // Số hoặc từ khóa
  acceptedAnswers?: string[]; // Các dạng đáp án tương đương chấp nhận (vd: "4", "4.0", "4,0")
  unit?: string;
  explanation: string;
  topic: string;
}

export interface THPTExam {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  timeLimitMinutes: number;
  description: string;
  difficultyRating: "Tiêu chuẩn" | "Phân hóa cao" | "Thực chiến 8+" | "Thực chiến 9+" | "Đề Minh Họa";
  part1: THPTMultipleChoiceQuestion[]; // Trắc nghiệm nhiều lựa chọn
  part2: THPTTrueFalseQuestion[];     // Trắc nghiệm Đúng / Sai
  part3: THPTShortAnswerQuestion[];    // Trắc nghiệm Trả lời ngắn
}

export interface THPTExamResult {
  examId: string;
  completedAt: string;
  timeSpentSeconds: number;
  part1Score: number;
  part2Score: number;
  part3Score: number;
  totalScore: number; // Thang điểm 10.0
  correctPart1Count: number;
  totalPart1Count: number;
  part2Details: {
    questionId: string;
    correctItemsCount: number;
    score: number;
  }[];
  correctPart3Count: number;
  totalPart3Count: number;
}
