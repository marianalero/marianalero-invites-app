import './App.css'
import './styles/fonts.css';
import { Route, Routes } from "react-router-dom";
import routes from './constants/routes';
import { ProtectedRoute } from './constants/protectedRoutes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
         {routes.map((route, index) => {
         
          const element = route.protected ? (
            <ProtectedRoute adminOnly={route.adminOnly}>
              {route.element}
            </ProtectedRoute>
          ) : (
            route.element
          );


          return <Route key={index} path={route.path} element={element} />;
        })}
        </Routes>
       <div className="App h-100">
       
     </div>
     </LocalizationProvider>
    </>
  )
}

export default App
