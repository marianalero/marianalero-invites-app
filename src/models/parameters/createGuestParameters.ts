export interface CreateGuestParameters {
  fullName: string;
  rsvpStatus: number;
  phoneNumber?: string;
  totalConfirmed: number;
  totalAssigned: number;
  invitationId: number;
  companion?:string;
}