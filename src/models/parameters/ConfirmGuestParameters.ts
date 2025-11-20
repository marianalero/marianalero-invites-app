import { Answer } from "../question";

export interface ConfirmGuestParameters {
  guestId: number;
  rsvpStatus: number;
  totalConfirmed: number;
  totalAssigned: number;
  companion?:string;
  phoneNumber?: string;
  invitationId: number;
  answers?: Answer[];
}