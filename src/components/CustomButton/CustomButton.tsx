import { Button } from "@mui/material";


export interface CustomButtonProps {
    bgColor:string;
    color:string;
    label:string;
    href?:string;
    icon?: React.JSX.Element;
    onClick?:() => void;
}

const CustomButton  = (props:CustomButtonProps) => {

    return(
        <div>
            <Button 
            href={props.href}
            endIcon={props.icon}
            sx={{
            minWidth:"200px",
            borderRadius:8,
            color: props.color,
            backgroundColor: props.bgColor,
            '&:hover': {
                backgroundColor: props.color,
                color:props.bgColor,
                borderColor: props.bgColor,
                borderStyle:"solid",
                borderWidth:2
            },
            fontWeight:400,
            boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            }}>
            {props.label}
            </Button>
            
        </div>
    )
}
export default CustomButton;