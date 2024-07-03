import { useState } from "react";
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

      const [loginData,setLoginData]=useState(
            {username:"",email:"",password:""}
      )

      function handleChange(event){
            const {name,value}=event.target
            setLoginData(prevData=>{
                    return{...prevData,[name]:value}
                }
            )
      }

      function handleSubmit(e) {
        e.preventDefault();
        //submitToApi(formData)
        console.log(loginData)
      }
 
    return(
        <section className="AllLogin">
            <div className="AllLogin-content">
            <h1 className="AllLogin-heading">Log In</h1>
            
            <form onSubmit={handleSubmit}>
            <div id="AllLogin-element">
            <label htmlFor='username'>UserName :</label>
            <br></br>
            <input id="username" onChange={handleChange} name="username" value={loginData.username} type="text"></input>
            </div>
            <div id="AllLogin-element">
            <label htmlFor='email'>Email :</label>
            <br></br>
            <input id="email" onChange={handleChange} name="email" value={loginData.email} type="email"></input>
            </div>
            <div id="AllLogin-element">
            <label htmlFor='password'>Password :</label>
            <br></br>
            <input id="password" onChange={handleChange} name="password" value={loginData.password} type="text"></input>
            </div>
            <div id="AllLogin-element">
            {/* <input type='checkbox' id='remember'/> */}
            {/* <label htmlFor='remember' > Remember Me</label> */}
            </div>
            <div id="AllLogin-element"><button type="submit" className="login-button" onClick={(e)=>{
                if(path === '/user-login'){
                    //handleSubmit(e)
                    gotToNewPageUser();
                }
                else if(path === '/admin-login'){
                    //handleSubmit(e)
                    gotToNewPageAdmin();
                } 
                else if(path === '/superadmin-login'){
                    //handleSubmit(e)
                    gotToNewPageSuperAdmin();
                    
                }
            }}>Login</button>
            </div>
            </form>
        </div> 
        </section>
    )
}