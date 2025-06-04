
import Grid from '@mui/material/Grid2';
import UserTable from "../../components/User/UserLists";
import ResponsiveLayout from "../../layouts/headerPanel";
const AdminPage = () => {
 
return (
    <>
      <ResponsiveLayout>

         <Grid container spacing={2} padding={2}>
          <Grid size={{xs:12,sm:12,md:12,lg:12}}>
            <UserTable></UserTable>
          </Grid>
        </Grid>
      </ResponsiveLayout>
      
    </>
)
}

export default AdminPage;