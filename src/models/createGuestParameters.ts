export interface CreateGuestParameters {
  fullName: string;
  isConfirmed: boolean;
  phoneNumber?: string;
  totalConfirmed: number;
  totalAssigned: number;
  invitationId: number;
}