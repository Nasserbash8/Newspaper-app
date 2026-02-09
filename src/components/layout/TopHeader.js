import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF , faInstagram,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons' ;
function TopHeader() {
  return (
  
        <div className="site-header p-3">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 col-12 d-flex flex-wrap">
                        <p className="d-flex me-4 mb-0">
                            <i className="bi-geo-alt me-2"></i>
                            Cairo 2022,Egypt
                        </p>

                        <p className="d-flex mb-0">
                            <i className="bi-envelope me-2"></i>

                            <a href="mailto:nasser9959@gmail.com">
                                nasser9959@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                    <div className='social d-flex   justify-content-around'>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faFacebookF}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faTwitter} /></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faInstagram}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faLinkedin}/></i>
                    </div> 
                    </div>


                    
                   
                </div>
            </div>
        </div>
    
  )
}

export default TopHeader