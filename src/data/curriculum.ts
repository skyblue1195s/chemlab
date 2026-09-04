import { Chapter, Question } from "../types";
import { GRADE_10_CURRICULUM as RAW_G10 } from "./curriculumGrade10";
import { GRADE_11_CURRICULUM as RAW_G11 } from "./curriculumGrade11";
import { GRADE_12_CURRICULUM as RAW_G12 } from "./curriculumGrade12";
import { GRADE_10_EXTRA_QUESTIONS } from "./extraPracticeQuestionsGrade10";
import { GRADE_11_EXTRA_QUESTIONS } from "./extraPracticeQuestionsGrade11";
import { GRADE_12_EXTRA_QUESTIONS } from "./extraPracticeQuestionsGrade12";

function injectExtraQuestions(
  chapters: Chapter[],
  extraMap: Record<string, Question[]>
): Chapter[] {
  return chapters.map((ch) => {
    const extras = extraMap[ch.id] || [];
    if (extras.length === 0 || ch.concepts.length === 0) return ch;

    // Distribute the 5 extra questions across concepts of this chapter
    const concepts = ch.concepts.map((concept, idx) => {
      let conceptExtras: Question[] = [];
      if (ch.concepts.length === 1) {
        conceptExtras = extras;
      } else if (ch.concepts.length === 2) {
        conceptExtras = idx === 0 ? extras.slice(0, 3) : extras.slice(3);
      } else {
        if (idx === 0) conceptExtras = extras.slice(0, 2);
        else if (idx === 1) conceptExtras = extras.slice(2, 4);
        else conceptExtras = extras.slice(4);
      }
      return {
        ...concept,
        practiceQuestions: [...concept.practiceQuestions, ...conceptExtras],
      };
    });

    return {
      ...ch,
      concepts,
    };
  });
}

export const GRADE_10_CURRICULUM: Chapter[] = injectExtraQuestions(
  RAW_G10,
  GRADE_10_EXTRA_QUESTIONS
);
export const GRADE_11_CURRICULUM: Chapter[] = injectExtraQuestions(
  RAW_G11,
  GRADE_11_EXTRA_QUESTIONS
);
export const GRADE_12_CURRICULUM: Chapter[] = injectExtraQuestions(
  RAW_G12,
  GRADE_12_EXTRA_QUESTIONS
);

export const CURRICULUM_DATA: Chapter[] = [
  ...GRADE_10_CURRICULUM,
  ...GRADE_11_CURRICULUM,
  ...GRADE_12_CURRICULUM,
];

export { GRADE_10_EXTRA_QUESTIONS, GRADE_11_EXTRA_QUESTIONS, GRADE_12_EXTRA_QUESTIONS };
