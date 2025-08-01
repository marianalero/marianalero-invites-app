import { Button } from "@mui/material";


export interface CustomButtonProps {
    bgColor:string;
    color:string;
    borderColor?:string;
    label:string;
    href?:string;
    icon?: React.JSX.Element;
    onClick?:() => void;
    width?:string;
}

const CustomButton  = (props:CustomButtonProps) => {

    return(
        <div>
            <Button 
            href={props.href}
            endIcon={props.icon}
            sx={{
            minWidth: props.width ? props.width : "200px",
            borderRadius:8,
            color: props.color,
            backgroundColor: props.bgColor,
            borderColor: props.borderColor ? props.borderColor : props.bgColor,
            borderStyle:props.borderColor ?"solid":"none",
            borderWidth:props.borderColor ? "1px" : "0",
            '&:hover': {
                backgroundColor: props.color,
                color:props.bgColor,
                borderColor: props.borderColor ? props.borderColor : props.bgColor,
                borderStyle:"solid",
                borderWidth:2
            },
            fontWeight:400,
            boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            }}
            onClick={props.onClick}
            >
            {props.label}
    
            </Button>
            
        </div>
    )
}
export default CustomButton;