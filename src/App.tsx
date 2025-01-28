import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from './constants/routes';


function App() {
  return (
    <>
     <Router >
          <Routes>
          {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
          ))}
          </Routes>
      </Router>
       <div className="App">
       
     </div>
    </>
  )
}

export default App
