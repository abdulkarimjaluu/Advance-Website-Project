
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About';
import Header from './Header';
import Footer from './Footer';
import BookingForm from './BookingForm';
import Login from './Login';
import Blogpage from './BlogPage';
import Services from './Services';
import Home from './Home';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='login' element={< Login/>} />
          <Route path='about' element={< About />} />
          <Route path='blogpage' element={< Blogpage />} />
          <Route path='header' element={<Header/>}/>
          <Route path='footer' element={<Footer/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='bookingform' element={< BookingForm />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App