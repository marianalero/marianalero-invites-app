import { Guest } from "./guest";
import { Answer } from "./question";

export interface GuestsResult {
  guests:Guest[];
  total: number;
  totalConfirmed: number;
  totalNotConfirmed: number;
  totalWithoutResponse: number;
  answers?: Answer[];
}