

export interface EventCardProps extends  Event{
    locationName?:string;
    address?:string;
    size?:number;
    color:string;
    mainTypo?:string;
    bodyTypo?:string;
    href:string;
}
export interface Event {
    eventName?:string;
    date?:Date;
    icon:string;
}