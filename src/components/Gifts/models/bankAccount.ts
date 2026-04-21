export interface BankAccount{
    
    bank:string;
    name:string;
    color:string;
    bodyTypo:string
    bgColor:string;
    numbers: BankNumber[]
    outlineColor?:boolean;
    concept?:string;
}

export interface BankNumber {
    numberType:string;
    number:string;
}