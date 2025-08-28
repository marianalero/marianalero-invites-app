
export interface CustomButtonProps {
   
    label:string;
    href?:string;
    icon?: React.JSX.Element;
    onClick?:() => void;
    width?:string;
    className?:string;
}

const ProButton  = (props:CustomButtonProps) => {

    return(
        <div>
           <a
            className={props.className}
            href={props.href}
            style={{
                display: "inline-block",
                textAlign: "center",
                textDecoration: "none",
                padding: "10px 20px",
                minWidth: props.width ? props.width : "200px",
         
            }}
            onClick={props.onClick}
            >
            <span>{props.label}</span>
         <span aria-hidden="true">{props.icon}</span>
            </a>
        </div>
    )
}
export default ProButton;