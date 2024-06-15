import {NavBar} from  './NavBar'
import {Home} from  './Home'
import {About} from  './About'
import {Login} from  './Login'
import {Services} from  './Services'
import {Footer} from './Footer'
import '../App.css';

export const MainPage=()=> {
    return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <Login />  
        <Services />
        <Footer/>
      </div>
    );
  }

  