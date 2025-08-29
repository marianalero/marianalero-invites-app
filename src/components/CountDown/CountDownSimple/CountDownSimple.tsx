import { useEffect, useState } from "react";
import "./CountDownSimple.css"
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa el idioma español

export interface CountDownSimpleProps{
    eventDate:Date;
    bgColor?:string;
    primaryColor:string;
    secondarColor:string;
    typoHeader?:string;
    typoCountdown?:string;
    circleBgColor?:string;
    circleTextColor?:string;
    title?:string;
    fontSize?:string;
    bgImage?:string;
}
const CountDownSimple = (props:CountDownSimpleProps) => {
    const [timeRemaining, setTimeRemaining] = useState(0);
    dayjs.locale('es');
    const formattedDate = dayjs(props.eventDate)
        .format("dddd DD MMMM YYYY");
    const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    useEffect(() => {
        
        if (props.eventDate) {
          const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const eventTime = props.eventDate.getTime();
            let remainingTime = eventTime - currentTime;
    
            if (remainingTime <= 0) {
              remainingTime = 0;
              clearInterval(countdownInterval);
            }
    
            setTimeRemaining(remainingTime);
          }, 1000);
    
          return () => clearInterval(countdownInterval);
        }
      }, [props.eventDate, timeRemaining]);
    
    const formatTime = (time:number) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        return (
            <div className={`countdown ${props.typoCountdown}`}>
				<span   id="days"  > <div className="countdown-circle"  style={{backgroundColor:props.circleBgColor,  color:props.circleTextColor ? props.circleTextColor : props.primaryColor}}>{days.toString().padStart(2, "0")}</div>   <span style={{ color:props.primaryColor}} className="labels">Días</span></span>
				<span className="" id="">: <br/> <span></span></span>
				<span  id="hours" > <div className="countdown-circle"  style={{backgroundColor:props.circleBgColor,  color:props.circleTextColor ? props.circleTextColor : props.primaryColor}}>{hours.toString().padStart(2, "0")}</div>  <span style={{ color:props.primaryColor}} className="labels">Hrs</span></span>
				<span className="" id="">: <br/> <span ></span></span>
				<span  id="minutes" ><div className="countdown-circle"  style={{backgroundColor:props.circleBgColor,  color:props.circleTextColor ? props.circleTextColor : props.primaryColor}}>{minutes.toString().padStart(2, "0")}</div><span style={{ color:props.primaryColor}} className="labels">Mins</span></span>
				<span className="" id="">: <br/> <span ></span></span>
				<span  id="seconds" ><div className="countdown-circle"  style={{backgroundColor:props.circleBgColor, color:props.circleTextColor ? props.circleTextColor : props.primaryColor}}>{seconds.toString().padStart(2, "0")}</div><span style={{ color:props.primaryColor}} className="labels">Segs</span></span>
			</div>
        //   <div className="countdown-display">
        //     <div className="countdown-value">
        //       {days.toString().padStart(2, "0")} <span>days</span>
        //     </div>
        //     <div className="countdown-value">
        //       {hours.toString().padStart(2, "0")} <span> hours</span>
        //     </div>
        //     <div className="countdown-value">
        //       {minutes.toString().padStart(2, "0")} <span>minutes</span>
        //     </div>
        //     <div className="countdown-value">
        //       {seconds.toString().padStart(2, "0")} <span>seconds</span>
        //     </div>
        //   </div>
        );
      };
    return (
        <div id="countdown" style={{ backgroundImage:props.bgImage,backgroundSize:"cover", backgroundColor:props.bgColor}}  >
			<div className="display-over">
				<div className="container" >
					<div className="row animate-box">
						<div className="col-md-12 section-heading text-center svg-sm colored">							
							<span style={{fontSize: props.fontSize? props.fontSize : "50px",color:props.secondarColor}}  className={`datewed ${props.typoHeader}`}>{props.title ? props.title :capitalizedDate}</span>
						</div>
					</div>
					<div className="row animate-box">
						<div className="col-md-12 text-center">
                                {formatTime(timeRemaining)}						
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
export default CountDownSimple;