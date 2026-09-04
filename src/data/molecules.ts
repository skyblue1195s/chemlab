import { MoleculeData } from "../types";
import { MOLECULES_GRADE_10 } from "./moleculesGrade10";
import { MOLECULES_GRADE_11 } from "./moleculesGrade11";
import { MOLECULES_GRADE_12 } from "./moleculesGrade12";

export { MOLECULES_GRADE_10, MOLECULES_GRADE_11, MOLECULES_GRADE_12 };

export const MOLECULES_DATA: MoleculeData[] = [
  ...MOLECULES_GRADE_10,
  ...MOLECULES_GRADE_11,
  ...MOLECULES_GRADE_12,
];
