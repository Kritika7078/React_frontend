import {NavBar} from  './components/NavBar'
import {Home} from  './components/Home'
import {About} from  './components/About'
import {Login} from  './components/Login'
import {Services} from  './components/Services'
import {Footer} from './components/Footer'
import {AllLogin} from './components/AllLogin'
import {MainPage} from './components/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
  <div className="App">
     <BrowserRouter>
    
      {/* <NavBar />
      <Home />
      <About />
      <Login />  
      <Services />
      <Footer/> */}
      <Routes>
          <Route path="/" element={<MainPage/>} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Login/>} />
          <Route path="/" element={<Services />} />
          <Route path="/" element={<Footer/>} /> */}
          <Route path='/login' element={<AllLogin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
