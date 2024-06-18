import {AllLogin} from './components/AllLogin'
import {MainPage} from './components/MainPage'
import { User } from './components/User/user';
import { SuperAdmin } from './components/SuperAdmin/super-admin';
import { Admin } from './components/Admin/admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
  <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path='/user-login' element={<AllLogin/>} />
          <Route path='/admin-login' element={<AllLogin/>} />
          <Route path='/superadmin-login' element={<AllLogin/>} />
          <Route path='/user-login/user' element={<User/>}/>
          <Route path='/admin-login/admin' element={<Admin/>}/>
          <Route path='/superadmin-login/superadmin' element={<SuperAdmin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
