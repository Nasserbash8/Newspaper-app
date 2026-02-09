import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF , faInstagram,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons' ;

 const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-12 mb-4">
                <img src="/images/icon.png" style={{width:"80px"}} className="logo img-fluid" alt=""/>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <h5 className="site-footer-title mb-3">Quick Links</h5>

                <ul className="footer-menu">
                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Contact Us</a></li>

                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Newsroom</a></li>

                   

                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Become a volunteer</a></li>

                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Partner with us</a></li>
                </ul>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mx-auto">
                <h5 className="site-footer-title mb-3">Contact Infomation</h5>

                <p className="text-white d-flex mb-2">
                    <i className=" me-2">
                    <FontAwesomeIcon icon={faPhone}/>
                    </i>

                    <a href="tel:+201017753291" className="site-footer-link">
                        +201017753291
                    </a>
                </p>

                <p className="text-white d-flex">
                    <i className=" me-2">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    </i>

                    <a href="mailto:nasser9959@gmail.com" className="site-footer-link">
                        nasser9959@gmail.com
                    </a>
                </p>

                <p className="text-white d-flex mt-3">
                    <i className=" me-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    </i>
                    Cairo , Egypt
                </p>

                <a href="#" className="custom-btn btn mt-3">Get Direction</a>
            </div>
        </div>
    </div>

    <div className="site-footer-bottom">
        <div className="container">
            <div className="row">

                <div className="Copyright col-lg-6 col-md-7 col-12 ">
                <p>Copyright ©2022 All rights reserved | This template is made with  by <strong > Nasser Bash </strong></p>
                </div>
                
                <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                    <ul className="social-icon">
                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link ">
                            <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link">
                            <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link ">
                            <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link ">
                            <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </li>

                        
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</footer>
   
  )  
}
export default Footer;