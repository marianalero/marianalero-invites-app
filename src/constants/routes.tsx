import DemosPage from "../pages/demos/DemosPage";
import DemoOne from "../pages/demos/examples/DemoOne";
import HomePage from "../pages/home/HomePage";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
  { path: '/demos', element: <DemosPage /> },
  {path:'/demos/1', element: <DemoOne></DemoOne>}
];

export default routes;