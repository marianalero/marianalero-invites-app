import {PersonalizedProps} from "./personalizedProps";
export interface GiftListProps extends PersonalizedProps {
    mainPhrase?:string;
    items?:GiftItem[]
    bankDetails?:BankAccount[];
    bankIconStart?:string;
    bankIconEnd?:string;
    showEnvelope:boolean;
    envelopePhrase?:string;
    secondPhrase?:string;
    iconSize?:string;
    envelopeMainTypo?:string;
    envelopeFontSize?:string;
    envelopeTitleColor?:string;
    title?:string;
    giftIcon?:string;
    cardColor?:string;
    titleColor?:string;
}


export interface BankAccount extends PersonalizedProps {
    bank:string;
    name:string;
    numbers: BankNumber[]
    outlineColor?:boolean;
}

export interface BankNumber {
    numberType:string;
    number:string;
}

export interface GiftItem {
    link:string;
    icon:string;
}