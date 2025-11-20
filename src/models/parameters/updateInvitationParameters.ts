export interface UpdateInvitationParameters {
  id:number;
  eventDate: Date;
  deadlineDate: Date;
  groomName: string;
  brideName: string;
  quote?: string;
  expirationDate?: Date;
  qrActive?: boolean;
  link?:string;
  name:string;
}