export interface ConfirmGuestParameters {
  guestId: number;
  rsvpStatus: number;
  totalConfirmed: number;
  totalAssigned: number;
  ccompanion?:string;
}