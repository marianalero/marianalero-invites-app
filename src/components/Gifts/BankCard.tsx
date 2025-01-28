import { Paper, Typography } from "@mui/material"
import { BankAccount } from "./models/bankAccount"

const BankCard  = (item:BankAccount) => {

    return(
        <Paper 
            variant="outlined"
            sx={{
                borderColor:item.color,
                padding:2
                }} >
                <Typography variant='body1'  textAlign={"center"} className={`${item.bodyTypo}`}>{item.type}: {item.number}</Typography>
                <Typography variant='body1'  textAlign={"center"} className={`${item.bodyTypo}`}>Banco: {item.bank}</Typography>
                <Typography variant='body1'  textAlign={"center"} className={`${item.bodyTypo}`}>Beneficiario: {item.name}</Typography>
         </Paper>
    )
}

export default BankCard;