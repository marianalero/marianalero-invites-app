import { useEffect, useState } from "react";
import "./CountDown.css"
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";
export interface CountDownProps{
    eventDate:Date;
    bgImage?:string;
    typoHeader?:string;
    typoCountdown?:string;
    format?:string;
    fontSize?:string;
    title?:string;
    marginTop?:string;
}
const CountDown = (props:CountDownProps) => {
    const [timeRemaining, setTimeRemaining] = useState(0);
   const { t, i18n } = useTranslation();

    useEffect(() => {
      dayjs.locale(i18n.language);
    }, [i18n.language]);
    const formattedDate = dayjs(props.eventDate)
    .format(props.format ? props.format : "dddd DD MMMM YYYY");

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
            <p className={`countdown ${props.typoCountdown}`} translate="no">
				<span className="" id="days" translate="no">  {days.toString().padStart(2, "0")} <br/> <span className="labels">{t('countdown.days')}</span></span>
				<span className="" id="" translate="no">: <br/> <span></span></span>
				<span className="" id="hours" translate="no">{hours.toString().padStart(2, "0")} <br/> <span className="labels">{t('countdown.hours')}</span></span>
				<span className="" id="" translate="no">: <br/> <span ></span></span>
				<span className="" id="minutes" translate="no">{minutes.toString().padStart(2, "0")}<br/> <span className="labels">{t('countdown.minutes')}  </span></span>
				<span className="" id="" translate="no">: <br/> <span ></span></span>
				<span className="" id="seconds" translate="no">{seconds.toString().padStart(2, "0")}<br/> <span className="labels">{t('countdown.seconds')}</span></span>
			</p>
        );
      };
    return (
        <div id="countdown" style={{backgroundImage:`url('${props.bgImage}')`}}  >
			<div className="overlay"></div>
			<div className="display-over" style={{marginTop: props.marginTop ? props.marginTop : "0"}}>
				<div className="container" >
					<div className="row animate-box">
						<div className="col-md-12 section-heading text-center svg-sm colored">							
							<span style={{fontSize: props.fontSize? props.fontSize : "50px"}} className={`datewed ${props.typoHeader}`}>{props.title ? props.title :capitalizedDate}</span>
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