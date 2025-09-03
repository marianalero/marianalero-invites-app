
import GenderReveal from "../pages/clientInvitations/GenderReveal";
import Showroom from "../pages/clientInvitations/Showroom";
import WeddingAngelicaJose from "../pages/clientInvitations/WeddingAngelicaJose";
import WeddingFerMario from "../pages/clientInvitations/WeddingFernandaMario";
import WeddingKorinaDaniel from "../pages/clientInvitations/WeddingKorinaDaniel";
import WeddingRocioMariana from "../pages/clientInvitations/WeddingRocioMariana";
import WeddingStevenArely from "../pages/clientInvitations/WeddingStevenArely";
import XVKarla from "../pages/clientInvitations/XVKarla";
import XVValeria from "../pages/clientInvitations/XVValeria";
// import WeddingKorinaDaniel from "../pages/clientInvitations/WeddingKorinaDaniel";
import Dashboard from "../pages/dashboard/dashboard";
import DemosPage from "../pages/demos/DemosPage2";
import BabyShower from "../pages/demos/examples/BabyShower";
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
  {path:'/prev-kd-3', element: <WeddingKorinaDaniel></WeddingKorinaDaniel>},
  {path:'/boda-fernanda-mario', element: <WeddingFerMario></WeddingFerMario>},
  {path:'/demos/baby-shower', element: <BabyShower></BabyShower>},
  {path:'/prev-rm-2', element: <WeddingRocioMariana></WeddingRocioMariana>},
  {path:'/boda-rocio-mariana', element: <WeddingRocioMariana></WeddingRocioMariana>},
  {path:'/gender-reveal', element: <GenderReveal></GenderReveal>},
  {path:'/showroom', element: <Showroom></Showroom>},
  {path:'/boda-steven-arely', element: <WeddingStevenArely></WeddingStevenArely>},
  {path:'/boda-angelica-jose', element: <WeddingAngelicaJose></WeddingAngelicaJose>},
  {path:'/xv-valentina', element: <XVValeria></XVValeria>},
  {path:'/pv-kx-1', element: <XVKarla></XVKarla>},
];



export default routes;