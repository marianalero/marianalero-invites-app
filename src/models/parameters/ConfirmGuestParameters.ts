export interface ConfirmGuestParameters {
  guestId: number;
  rsvpStatus: number;
  totalConfirmed: number;
  totalAssigned: number;
  companion?:string;
  phoneNumber?: string;
  invitationId: number;
}