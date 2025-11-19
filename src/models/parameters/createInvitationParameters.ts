export interface CreateInvitationParameters {
  eventDate: Date;
  deadlineDate: Date;
  userId: number;
  groomName: string;
  brideName: string;
  quote?: string;
  expirationDate?: Date;
  qrActive?: boolean;
  statusId:number;
  link?:string;
  name:string;
}