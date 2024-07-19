import React, { useRef } from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Register=()=>{
    const location = useLocation();
    const path=location.pathname;
    console.log(path)
    const inputRef=useRef();
    const [files,setFiles] = useState(null);

    const navigate = useNavigate()
    const gotToNewPageUser=()=>{
        navigate("/login-user");
      }
    const gotToNewPageAdmin=()=>{
        navigate("/login-notary");
      }

      const [RegisterData,setRegisterData]=useState(
            {username:"",email:"",password:"",phone:""}
      )

      const handleDragOver =(e)=>{
        e.preventDefault();
      }

      const handleDrop =(e)=>{
        e.preventDefault();
        console.log(e)
        console.log(Array.from(e.dataTransfer.files))
        setFiles(Array.from(e.dataTransfer.files))
        console.log( "files",files)
       
        if (files) return (
            <div className='uploads'>
                <ul>
                    {Array.from(files).map((file,index)=>{<li key={index}>{file.name}</li>})}
                </ul>
                <div>
                    <button onClick={()=>{setFiles(null)}}>Cancel</button>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
          )
      }

      

      //send files to the server 
      const handleUpload = ()=>{
            console.log("upload")
      }

      function handleChange(event){
            const {name,value}=event.target
            setRegisterData(prevData=>{
                    return{...prevData,[name]:value}
                }
            )
      }

      function handleSubmit(e) {
        e.preventDefault();
        //submitToApi(formData)
        console.log(RegisterData)
      }

     
 
    return(
        <section className="AllRegister">
            <div className="AllRegister-content">
            <h1 className="AllRegister-heading">Register</h1>
            
            <form onSubmit={handleSubmit}>
            <div id="AllRegister-element">
            <label htmlFor='username'>UserName :</label>
            <br></br>
            <input id="username" onChange={handleChange} name="username" value={RegisterData.username} type="text"></input>
            </div>
            <div id="AllRegister-element">
            <label htmlFor='email'>Email :</label>
            <br></br>
            <input id="email" onChange={handleChange} name="email" value={RegisterData.email} type="email"></input>
            </div>
            <div id="AllRegister-element">
            <label htmlFor='password'>Password :</label>
            <br></br>
            <input id="password" onChange={handleChange} name="password" value={RegisterData.password} type="password"></input>
            </div>
            <div id="AllRegister-element">
            <label htmlFor='phone'>Phone No. :</label>
            <br></br>
            <input id="phone" onChange={handleChange} name="username" value={RegisterData.phone} type="text"></input>
            </div>

            <div>
                {!files && (
                    <div className='dropzone' onDragOver={handleDragOver} on onDrop={handleDrop}>
                        <h3>Drag and drop files to upload</h3>
                        <h3>Or</h3>
                        <input type='file' mutiple  accept="image/*,.pdf" onChange={(e)=>{setFiles(e.target.files)}} hidden ref={inputRef}/>
                        <button onClick={()=>{inputRef.current.click((e)=>{setFiles(e.target.files)})}} >Select Files</button>
                    </div>
                )}
            </div>

            <div id="AllRegister-element"><button type="submit" className="Register-button" onClick={(e)=>{
               if(path === '/register-user'){
                handleSubmit(e)
                gotToNewPageUser();
            }
            else if(path === '/register-notary'){
                handleSubmit(e)
                gotToNewPageAdmin();
            } 
            }}>Register</button>
            </div>
            </form>
        </div> 
        </section>
    )
}


