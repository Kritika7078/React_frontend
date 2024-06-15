export const AllLogin=()=>{
    return(
        <section className="AllLogin">
            <div className="AllLogin-content">
            <h1 className="AllLogin-heading">Log In</h1>
            <div>
            <label htmlFor='username'>UserName :</label>
            <br></br>
            <input id="username" type="text"></input>
            </div>
            <div>
            <label htmlFor='username'>Email :</label>
            <br></br>
            <input id="email" type="email"></input>
            </div>
            <div>
            <label htmlFor='password'>Password :</label>
            <br></br>
            <input id="password" type="text"></input>
            </div>
            <div>
            <input type='checkbox' id='remember'/>
            <label htmlFor='remember' >Remember Me</label>
            </div>
            <div><input type="submit" ></input></div>
           
            {/* <div>Don't have an account?<span></span></div> */}
            </div>
            
        </section>
    )
}