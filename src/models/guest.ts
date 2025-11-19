import { Answer } from "./question";

export interface Guest {
  id: number;
  fullName: string;
  rsvpStatus?: number;
  phoneNumber?: string;
  totalConfirmed: number;
  totalAssigned: number;
  invitationId: number;
  qrCodeToken?: string;
  registeredAttendance: boolean;
  companion?: string;
  answers?: Answer[];
}