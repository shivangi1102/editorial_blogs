import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage } from './Pages/LoginPage';
import  HomePage  from "./Pages/HomePage";
import { Header } from './Components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Edit from './Components/Edit';
import Newarticle from './Pages/Newarticle';
import ReviewPage from './Pages/ReviewPage';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/home/edit" element={<Edit/>}/>
          <Route path="/home/new" element={<Newarticle/>}/>
          <Route path="/home/review" element={<ReviewPage/>}/>
        </Routes>
        </Router>
    
  );
}

export default App;
