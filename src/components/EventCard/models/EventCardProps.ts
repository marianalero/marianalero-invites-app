

export interface EventCardProps extends  Event{
    locationName?:string;
    address?:string;
    size?:number;
    color:string;
    mainTypo?:string;
    bodyTypo?:string;
    href:string;
    colorButton:string;
    colorIcon?:string;
    bgColor?:string;
    fontSize?:string;
    textColor?:string;
    hiddenDate?:boolean;
}
export interface Event {
    eventName?:string;
    date?:Date;
    endDate?:Date;
    icon?:string;
    image?:string;
}