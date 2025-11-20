
import BabyShowerAlec from "../pages/clientInvitations/BabyShowerAlec";
import BauAlondra from "../pages/clientInvitations/BauAlondra";
import BauIvanna from "../pages/clientInvitations/BauIvanna";
import BauMatias from "../pages/clientInvitations/BauMatias";
import BSSophia from "../pages/clientInvitations/BSSophia";
import CivilWeddingKarolMario from "../pages/clientInvitations/CivilWeddingKarolMario";
import GenderReveal from "../pages/clientInvitations/GenderReveal";
import Showroom from "../pages/clientInvitations/Showroom";
import Silvia60 from "../pages/clientInvitations/Silvia60";
import STDDalia from "../pages/clientInvitations/STDDalia";
import WeddingAdelineOsvaldoTree from "../pages/clientInvitations/WeddingAdelineOsvaldo3";
import WeddingAngelicaJose from "../pages/clientInvitations/WeddingAngelicaJose";
import WeddingCendyAdrian from "../pages/clientInvitations/WeddingCendyAdrian";
import WeddingFerMario from "../pages/clientInvitations/WeddingFernandaMario";
import WeddingKarolMario from "../pages/clientInvitations/WeddingKarolMario";
import WeddingKorinaDaniel from "../pages/clientInvitations/WeddingKorinaDaniel";
import WeddingRocioMariana from "../pages/clientInvitations/WeddingRocioMariana";
import WeddingStephaniaIsamael from "../pages/clientInvitations/WeddingStephaniaIsamael";
import WeddingStevenArely from "../pages/clientInvitations/WeddingStevenArely";
import XVAlexia from "../pages/clientInvitations/XVAlexia";
import XVDainaly from "../pages/clientInvitations/XVDainaly";
import XVDaniela from "../pages/clientInvitations/XVDaniela";
import XVKarla from "../pages/clientInvitations/XVKarla";
import XVMelanie from "../pages/clientInvitations/XVMelanie";
import XVValeria from "../pages/clientInvitations/XVValeria";
import CreacionesPage from "../pages/creations/creations";
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
  // pagina
    { path: '/', element: <HomePage /> },
    { path: '/demos', element: <DemosPage /> },
    {path:'/demos/1', element: <DemoOne></DemoOne>},
    {path:'/demos/2', element: <DemoTwo></DemoTwo>},
    {path:'/demos/3', element: <DemoTree></DemoTree>},
    {path:'/demos/baby-shower', element: <BabyShower></BabyShower>},
    {path:'/terminos', element: <TermsConditions></TermsConditions>},
    {path:'/privacidad', element: <PrivacyPolicy></PrivacyPolicy>},
    {path:'/faq', element: <FaqPage></FaqPage>},
    {path:'/creaciones', element: <CreacionesPage></CreacionesPage>},
    //panel
     {path:'/login', element: <LoginPage></LoginPage>},
  { path: '/panel', element: <Dashboard />, protected: true },
  { path: '/guests', element: <RegisterGuestPage />, protected: true },
  { path: '/admin', element: <AdminPage />, protected: true, adminOnly: true },
  { path: '/invitations', element: <InvitationsPage />, protected: true, adminOnly: true },
  //Bodas
   {path:'/boda-fernanda-mario', element: <WeddingFerMario></WeddingFerMario>},
   {path:'/boda-rocio-mariana', element: <WeddingRocioMariana></WeddingRocioMariana>},
  {path:'/boda-steven-arely', element: <WeddingStevenArely></WeddingStevenArely>},
  {path:'/boda-angelica-jose', element: <WeddingAngelicaJose></WeddingAngelicaJose>},
  {path:'/boda-adilene-osvaldo', element: <WeddingAdelineOsvaldoTree></WeddingAdelineOsvaldoTree>},
  {path:'/boda-karol-mario', element: <WeddingKarolMario></WeddingKarolMario>},
  {path:'/boda-civil-karol-mario', element: <CivilWeddingKarolMario></CivilWeddingKarolMario>},
  //XV
  {path:'/xv-valentina', element: <XVValeria></XVValeria>},
  {path:'/xv-daniela-lizbeth', element: <XVDaniela></XVDaniela>},
  {path:'/xv-karla-ximena', element: <XVKarla></XVKarla>},
  {path:'/xv-melani-samadhi', element: <XVMelanie></XVMelanie>},   
  {path:'/xv-dainaly', element: <XVDainaly></XVDainaly>},
   {path:'/xv-alexia', element: <XVAlexia></XVAlexia>},
  //Bautizo
  {path:'/bau-alondra', element: <BauAlondra></BauAlondra>},
  {path:'/bau-matias', element: <BauMatias></BauMatias>},
   {path:'/bautizo-ivanna', element: <BauIvanna></BauIvanna>},
  //OTROS
  {path:'/gender-reveal', element: <GenderReveal></GenderReveal>},
  {path:'/showroom', element: <Showroom></Showroom>},
  {path:'/60-silvia', element: <Silvia60></Silvia60>},
  {path:'/bridalshower-sophia', element: <BSSophia></BSSophia>},
  {path:'/save-date-xv-dalia', element: <STDDalia></STDDalia>},
   {path:'/baby-shower-alec', element: <BabyShowerAlec></BabyShowerAlec>},
  //Borradores
  {path:'/prev-kd-3', element: <WeddingKorinaDaniel></WeddingKorinaDaniel>},
  {path:'/prev-ca-2', element: <WeddingCendyAdrian></WeddingCendyAdrian>},
  {path:'/prev-ws-1', element: <WeddingStephaniaIsamael></WeddingStephaniaIsamael>},
  
];



export default routes;