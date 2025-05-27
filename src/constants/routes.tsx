import DemosPage from "../pages/demos/DemosPage";
import DemoOne from "../pages/demos/examples/DemoOne";
import DemoTree from "../pages/demos/examples/DemoTree";
import DemoTwo from "../pages/demos/examples/DemoTwo";
import FaqPage from "../pages/faq/faq";
import HomePage from "../pages/home/HomePage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/termsConditions/TermsConditions";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
  { path: '/demos', element: <DemosPage /> },
  {path:'/demos/1', element: <DemoOne></DemoOne>},
  {path:'/demos/2', element: <DemoTwo></DemoTwo>},
  {path:'/demos/3', element: <DemoTree></DemoTree>},
  {path:'/terminos', element: <TermsConditions></TermsConditions>},
   {path:'/privacidad', element: <PrivacyPolicy></PrivacyPolicy>},
    {path:'/faq', element: <FaqPage></FaqPage>}
];

export default routes;