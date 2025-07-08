export interface RSVPType {
    count?:number;
    dateLine:Date;
    mainTypo?:string;
    bodyTypo?:string;
    color:string;
    bgColor:string;
    bgImage?:string;
    colorButton:string;
    guestId?:number;
    invitationId:number;
    qrActive:boolean;
    confirmed?:() => void;
}