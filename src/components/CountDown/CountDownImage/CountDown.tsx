import { useEffect, useState } from "react";
import "./CountDown.css"
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa el idioma español
export interface CountDownProps{
    eventDate:Date;
    bgImage?:string;
    typoHeader?:string;
    typoCountdown?:string;
}
const CountDown = (props:CountDownProps) => {
    const [timeRemaining, setTimeRemaining] = useState(0);
    dayjs.locale('es');
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
            <p className={`countdown ${props.typoCountdown}`}>
				<span className="" id="days">  {days.toString().padStart(2, "0")} <br/> <span className="labels">Días</span></span>
				<span className="" id="">: <br/> <span></span></span>
				<span className="" id="hours">{hours.toString().padStart(2, "0")} <br/> <span className="labels">Hrs</span></span>
				<span className="" id="">: <br/> <span ></span></span>
				<span className="" id="minutes">{minutes.toString().padStart(2, "0")}<br/> <span className="labels">Mins</span></span>
				<span className="" id="">: <br/> <span ></span></span>
				<span className="" id="seconds">{seconds.toString().padStart(2, "0")}<br/> <span className="labels">Segs</span></span>
			</p>
        );
      };
    return (
        <div id="countdown" style={{backgroundColor:`url('${props.bgImage}')`}}  >
			<div className="overlay"></div>
			<div className="display-over">
				<div className="container" >
					<div className="row animate-box">
						<div className="col-md-12 section-heading text-center svg-sm colored">							
							<span className={`datewed ${props.typoHeader}`}>{dayjs(props.eventDate).format("dddd DD MMMM YYYY")}</span>
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
export default CountDown;