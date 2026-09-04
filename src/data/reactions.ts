import { ReactionSimulation } from "../types";
import { CORE_INORGANIC_REACTIONS } from "./reactions/coreInorganic";
import { IONIC_ACID_BASE_REACTIONS } from "./reactions/ionicAcidBase";
import { ORGANIC_REACTIONS } from "./reactions/organicReactions";
import { ADVANCED_EQUILIBRIUM_REACTIONS } from "./reactions/advancedEquilibrium";

export const REACTIONS_DATA: ReactionSimulation[] = [
  ...CORE_INORGANIC_REACTIONS,
  ...IONIC_ACID_BASE_REACTIONS,
  ...ORGANIC_REACTIONS,
  ...ADVANCED_EQUILIBRIUM_REACTIONS,
];

export {
  CORE_INORGANIC_REACTIONS,
  IONIC_ACID_BASE_REACTIONS,
  ORGANIC_REACTIONS,
  ADVANCED_EQUILIBRIUM_REACTIONS,
};
