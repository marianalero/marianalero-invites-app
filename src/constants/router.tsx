
  import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import { ProtectedRoute } from "./protectedRoutes";
  
const router: React.FC = () => {
return (
    <Router >
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
    </Router>
  );
};
export default router