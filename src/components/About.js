import { Divider } from "@mui/material"

export const About=()=>{
    return(
        <section className="about" id="about">
            {/* <div classname="about-elements"> */}
            <div className="about-img" >
            {/* <img className=" img" alt="img" src="images/3-bg.jpg"></img> */}
            </div >
            <div className="content-about">
            <h1 className="heading-about" >About Us</h1>
            <hr className="divider"/>
            {/* <Divider variant="middle" style={{borderColor:"#c07830",borderWidth:"3px",width:"200px"}} flexItem  /> */}
            <div class="line headers-text-separator"></div>
            <p className="info"  >At our platform, we offer a unique digital locker experience for users, 
                and differentiate between admin and super admin accounts with customized functionalities. Our goal
                 is to provide a secure and efficient solution for your digital storage needs.</p>
            </div>
            {/* </div> */}
        </section>
    )
}