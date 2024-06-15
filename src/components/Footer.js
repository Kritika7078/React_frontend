import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Footer =()=>{
    return(
        <section id="footer" >
            <div className="footer-box">
                <div>
            <img className='footer-logo' src='images/logo.png'/>
            <h2 className="footer-heading">notaries</h2>
            <p className="copyright">Copyright © 2024 All rights reserved</p>
            </div>
            {/* <div className="Footer-content"> */}
                <div className="company">
                    <h5>Company</h5>
                    <ul>
                        <li><a id="footer-links" href="#home"><p id="footer-links1">Home</p></a></li>
                        <li><a id="footer-links" href="#about"><p id="footer-links1">About</p></a></li>
                        <li><a id="footer-links" href="#login"><p id="footer-links1">Login</p></a></li>
                        <li><a id="footer-links" href="#services"><p id="footer-links1">Services</p></a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h5>Contact</h5>
                    <ul>
                        <li><p id="footer-links1"><EmailIcon/>   abc@gmail.com</p></li>
                        <li><p id="footer-links1"><CallIcon/>   +91-999-7777-000</p></li>
                        <li><p id="footer-links1"><LocationOnIcon/>    Manhattan, New York, NY, United States</p></li>
                        <li><p id="footer-links1"><AccessTimeIcon/>    Mon-Fri - 08:00-19:00</p></li>
                    </ul>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}