import './body.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Popper from '@popperjs/core';
import Landing from './Pages/Landing';
import Section from './Pages/Section';
import Footer from './Pages/Footer';
// import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
