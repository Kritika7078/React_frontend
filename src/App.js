import {AllLogin} from './components/AllLogin'
import {MainPage} from './components/MainPage'
import { User } from './components/User/user';
import { SuperAdmin } from './components/SuperAdmin/super-admin';
import { Admin } from './components/Admin/admin';
import {Register} from './Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
  <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>} />
          {/* <Route path='/user-login' element={<AllLogin/>} />
          <Route path='/admin-login' element={<AllLogin/>} />
          <Route path='/superadmin-login' element={<AllLogin/>} /> */}
          {/* <Route path='/login' element={<AllLogin/>} /> */}
          <Route path="/register" element={<Register/>} />
          <Route path="/register-user" element={<Register/>} />
          <Route path="/register-notary" element={<Register/>} />
          <Route path="/login-user" element={<AllLogin/>} />
          <Route path="/login-notary" element={<AllLogin/>} />
          <Route path="/login-user/user" element={<User/>} />
          <Route path="/login-notary/notary" element={<Admin/>} />
     
           
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
