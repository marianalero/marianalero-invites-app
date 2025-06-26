import { Guest } from "./guest";
import { User } from "./user";


export interface Invitation {
  id: number;
  eventDate: Date;
  deadlineDate: string;
  userId: number;
  groomName: string;
  brideName: string;
  quote?: string;
  expirationDate?: Date;
  qrActive?: boolean;
  user: User;
  guests: Guest[];
  link:string;
  statusId:number;
}