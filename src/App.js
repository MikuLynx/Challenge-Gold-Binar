import './body.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Landing from './Pages/Landing';
import Section from './Pages/Section';
import Footer from './Pages/Footer';
import MainSection from "./components/MainSection";
import ListMobil from './Pages/ListMobil';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Landing/>
      <Routes>
        <Route exact path ='/' element={<Home/>}></Route>
        <Route exact path ='/ListMobil' element={<ListMobil/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
