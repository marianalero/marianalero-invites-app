export interface TextInputType {
    label?:string;
    placeholder?:string;
    value?:string;
    onChange?: (value:string) => void;
    type?:string;
    name?:string;
    required?:boolean;
    disabled?:boolean;
    color?:string;
}