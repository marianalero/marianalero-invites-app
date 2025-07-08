import { IconButton, Paper, Typography } from "@mui/material"
import { BankAccount } from "./models/bankAccount"
import ReactCardFlip from "react-card-flip";
import { useState } from 'react';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const BankCard  = (item:BankAccount) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(prev => !prev);
    };
    return(
         <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Frente de la tarjeta */}
      <div
        key="front"
        onClick={handleClick}
        style={{
          height: '200px',
          width: '300px',
          backgroundColor: item.bgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          color:item.color,
        }}
      >
        <h6 style={{textAlign:"center"}}  className={`${item.bodyTypo}`}>Ver datos bancarios<br/> {item.name}</h6>
      </div>

      {/* Reverso de la tarjeta */}
      <div
        key="back"
        onClick={handleClick}
        style={{
          width: '300px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor:item.bgColor,
          color:item.color,
          padding:16
        }}
      >
       <Paper 
            variant="outlined"
            sx={{
                borderColor:item.color,
                padding:2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }} >
                <Typography variant='body1'  textAlign={"center"} className={`${item.bodyTypo}`}>{item.type}: {item.number}
                    <IconButton
                      onClick={() => {
                      setIsFlipped(false);
                      navigator.clipboard.writeText(item.number.trim());
                     
                      }}
                    >
                    <ContentCopyIcon sx={{color:item.bgColor}} />
                </IconButton>
                </Typography>
                <Typography variant='body1'  textAlign={"center"} className={`${item.bodyTypo}`}>Banco: {item.bank}  </Typography>
                <Typography variant='body1'  textAlign={"center"} className={`${item.bodyTypo}`}>Beneficiario: {item.name}</Typography>
         </Paper>
      </div>
    </ReactCardFlip>
       
    )
}

export default BankCard;