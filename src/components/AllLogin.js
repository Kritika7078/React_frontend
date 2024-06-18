import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const AllLogin=()=>{
    const location = useLocation();
    const path=location.pathname;
    console.log(path)
    const navigate = useNavigate()
    const gotToNewPageUser=()=>{
        navigate("/user-login/user");
      }
    const gotToNewPageAdmin=()=>{
        navigate("/admin-login/admin");
      }
    const gotToNewPageSuperAdmin=()=>{
        navigate("/superadmin-login/superadmin");
      }
 
    return(
        <section className="AllLogin">
            <div className="AllLogin-content">
            <h1 className="AllLogin-heading">Log In</h1>
            <div id="AllLogin-element">
            <label htmlFor='username'>UserName :</label>
            <br></br>
            <input id="username" type="text"></input>
            </div>
            <div id="AllLogin-element">
            <label htmlFor='username'>Email :</label>
            <br></br>
            <input id="email" type="email"></input>
            </div>
            <div id="AllLogin-element">
            <label htmlFor='password'>Password :</label>
            <br></br>
            <input id="password" type="text"></input>
            </div>
            <div id="AllLogin-element">
            {/* <input type='checkbox' id='remember'/> */}
            {/* <label htmlFor='remember' > Remember Me</label> */}
            </div>
            <div id="AllLogin-element"><button className="login-button" onClick={()=>{
                if(path === '/user-login'){
                    gotToNewPageUser();
                }
                else if(path === '/admin-login'){
                    gotToNewPageAdmin();
                } 
                else if(path === '/superadmin-login'){
                    gotToNewPageSuperAdmin();
                }
            }}>Login</button></div>
        </div> 
        </section>
    )
}