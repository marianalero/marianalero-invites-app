
import Dashboard from "../pages/dashboard/dashboard";
import DemosPage from "../pages/demos/DemosPage";
import DemoOne from "../pages/demos/examples/DemoOne";
import DemoTree from "../pages/demos/examples/DemoTree";
import DemoTwo from "../pages/demos/examples/DemoTwo";
import FaqPage from "../pages/faq/faq";
import RegisterGuestPage from "../pages/guests/guests";
import HomePage from "../pages/home/HomePage";
import InvitationsPage from "../pages/invitations/invitationsPage";
import LoginPage from "../pages/login/login";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/termsConditions/TermsConditions";
import AdminPage from "../pages/users/users";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  protected?: boolean;
  adminOnly?: boolean;
}

const routes: RouteConfig[] = [
    { path: '/', element: <HomePage /> },
    { path: '/demos', element: <DemosPage /> },
    {path:'/demos/1', element: <DemoOne></DemoOne>},
    {path:'/demos/2', element: <DemoTwo></DemoTwo>},
    {path:'/demos/3', element: <DemoTree></DemoTree>},
    {path:'/terminos', element: <TermsConditions></TermsConditions>},
    {path:'/privacidad', element: <PrivacyPolicy></PrivacyPolicy>},
    {path:'/faq', element: <FaqPage></FaqPage>},
     {path:'/login', element: <LoginPage></LoginPage>},
  { path: '/panel', element: <Dashboard />, protected: true },
  { path: '/guests', element: <RegisterGuestPage />, protected: true },
  { path: '/admin', element: <AdminPage />, protected: true, adminOnly: true },
  { path: '/invitations', element: <InvitationsPage />, protected: true, adminOnly: true },
];



export default routes;