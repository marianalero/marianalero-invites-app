

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
}
export interface Event {
    eventName?:string;
    date?:Date;
    icon?:string;
    image?:string;
}