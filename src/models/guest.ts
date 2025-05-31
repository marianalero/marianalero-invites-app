export interface Guest {
  id: number;
  fullName: string;
  isConfirmed: boolean;
  phoneNumber?: string;
  totalConfirmed: number;
  totalAssigned: number;
  invitationId: number;
  qrCodeToken?: string;
  registeredAttendance: boolean;
}