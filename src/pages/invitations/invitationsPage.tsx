
import Grid from '@mui/material/Grid2';
import ResponsiveLayout from "../../layouts/headerPanel";
import InvitationsList from '../../components/Invitation/InvitationsList';
const InvitationsPage = () => {
 
return (
    <>
      <ResponsiveLayout>

         <Grid container spacing={2} padding={2}>
          <Grid size={{xs:12,sm:12,md:12,lg:12}}>
            <InvitationsList></InvitationsList>
          </Grid>
        </Grid>
      </ResponsiveLayout>
      
    </>
)
}

export default InvitationsPage;