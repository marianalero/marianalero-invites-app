import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import { DialogProps } from "../../../../models/component/dialogProps";

interface GenerateGenericLinksProps extends DialogProps{
    link?:string;
}

const GenerateGenericLinks =({ open, onClose,link }:GenerateGenericLinksProps) => {

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Typography variant={'h5'} fontWeight="bold">
          Link Genericos
        </Typography>
      </DialogTitle>

      <DialogContent>
            <Grid container>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant={'body1'}  >
                        1 Persona
                    </Typography>
                    <IconButton  onClick={() => {
                      navigator.clipboard.writeText(`${link}?number=1`);
                      }}>
                        <InsertLinkRoundedIcon color="primary"/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" alignItems="center" justifyContent="center"> 
                    <Typography variant={'body1'} >
                        2 Personas
                    </Typography>
                    <IconButton  onClick={() => {
                      navigator.clipboard.writeText(`${link}?number=2`);
                      }}>
                        <InsertLinkRoundedIcon color="primary"/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant={'body1'} >
                        3 Personas
                    </Typography>
                    <IconButton  onClick={() => {
                      navigator.clipboard.writeText(`${link}?number=2`);
                      }}>
                        <InsertLinkRoundedIcon color="primary"/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant={'body1'} >
                        4 Personas
                    </Typography>
                    <IconButton  onClick={() => {
                      navigator.clipboard.writeText(`${link}?number=2`);
                      }}>
                        <InsertLinkRoundedIcon color="primary"/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant={'body1'} >
                        5 Personas
                    </Typography>
                    <IconButton  onClick={() => {
                      navigator.clipboard.writeText(`${link}?number=2`);
                      }}>
                        <InsertLinkRoundedIcon color="primary"/>
                    </IconButton>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant={'body1'} >
                        6 Personas
                    </Typography>
                    <IconButton  onClick={() => {
                      navigator.clipboard.writeText(`${link}?number=2`);
                      }}>
                        <InsertLinkRoundedIcon color="primary"/>
                    </IconButton>
                </Grid>
            </Grid>
      </DialogContent>
  
        <DialogActions>
          <Button onClick={() => onClose()}>Cerrar</Button>
        </DialogActions>
        </Dialog>
    )
}

export default GenerateGenericLinks;