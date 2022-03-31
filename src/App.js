// import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HomeScreen from "./components/HomeScreen"
import DetailsScreen from "./components/DetailsScreen"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
       return (
         <BrowserRouter>
           <div className="container">
              <Routes>
                     <Route path="/">
                        <Route path="/" 
                          element={<HomeScreen/>}/>
                        <Route path="detail/:id"
                          element={<DetailsScreen/>}/>
                     </Route>
              </Routes>
           </div>
         </BrowserRouter>
       );
}
      
export default App;
