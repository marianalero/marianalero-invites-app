import { Guest } from "./guest";

export interface GuestsResult {
  guests:Guest[];
  total: number;
  totalConfirmed: number;
  totalNotConfirmed: number;
  totalWithoutResponse: number;
}