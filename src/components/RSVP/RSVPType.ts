export interface RSVPType {
    count?:number;
    dateLine?:Date;
    mainTypo?:string;
    bodyTypo?:string;
    color:string;
    bgColor:string;
    bgImage?:string;
    colorButton:string;
    guestId?:number;
    invitationId:number;
    qrActive:boolean;
    confirmed?: (name: string,confirmText: string, phoneNumber: string,  totalConfirmed: string) => void;
    excelURL?:string;
    textColor:string;
    classButtonName?:string;
    fontSize?:string;
}