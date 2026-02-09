import React from 'react'
import { Card, Container ,Row ,Col} from 'react-bootstrap';
import Fade from 'react-reveal/Zoom';

import { Link } from "react-router-dom";
function CategoriesPosts2() {
  return (
    <div className='Categories-Posts mb-5'>
    <h5 className='category-section p-2'>Sports:</h5>
    <Row>
            <Col  className='banner-col mb-3 ' lg={6} >
                <Fade>
                <Link to='/postpage'> 
                <div className=' banner-card-2  p-2' >
                    <span className='card-img  '>
                        <img className='bg-dark' variant="top" style={{ width: '100%', height: '250px', objectFit: 'cover' }} src="/images/pexels-terje-sollie-320617.jpg" />
                    </span>
                    <div className='card-body p-2'>
                    <span className='d-flex justify-content-between'>

                    <p className='post-date'>
                                <i className="bi-calendar4 custom-icon me-1"></i>
                                Tuesday, 4 July 2023
                            </p>

                            <p>
                                <i className="bi-person custom-icon me-1"></i>
                                    Karen
                            </p>

                            <p>
                                
                                    Sports
                            </p>
                
                    </span>
                    
                    <p className="post-title" style={{fontSize:'18px'}}>Where can I get some?
        </p>
                        
                    </div>
                    
                    </div>
                    </Link>
                    </Fade>
            </Col>

            <Col  className='banner-col mb-3 ' lg={6} >
                <Fade>
                <Link to='/postpage'> 
                <div className=' banner-card-2  p-2' >
                    <span className='card-img  '>
                        <img className='bg-dark' variant="top" style={{ width: '100%', height: '250px', objectFit: 'cover' }} src="/images/news/close-up-happy-people-working-together.jpg" />
                    </span>
                    <div className='card-body p-2'>
                    <span className='d-flex justify-content-between'>

                    <p className='post-date'>
                                <i className="bi-calendar4 custom-icon me-1"></i>
                                Tuesday, 4 July 2023
                            </p>

                            <p>
                                <i className="bi-person custom-icon me-1"></i>
                                    Karen
                            </p>

                            <p>
                                
                                    Sports
                            </p>
                
                    </span>
                    
                    <p className="post-title" style={{fontSize:'18px'}}>Where does it come from?

        </p>
                        
                    </div>
                    
                    </div>
                    </Link>
                    </Fade>
            </Col>

            <Col  className='banner-col mb-3 ' lg={4} >
                <Fade>
                <Link to='/postpage'> 
                <div className=' banner-card-2  p-2' >
                    <span className='card-img  '>
                        <img className='bg-dark' variant="top" style={{ width: '100%', height: '250px', objectFit: 'cover' }} src="/images/group-people-volunteering-foodbank-poor-people.jpg" />
                    </span>
                    <div className='card-body p-2'>
                    <span className='d-flex justify-content-between'>

                    <p className='post-date'>
                                <i className="bi-calendar4 custom-icon me-1"></i>
                                Tuesday, 4 July 2023
                            </p>

                            <p>
                                <i className="bi-person custom-icon me-1"></i>
                                    Karen
                            </p>

                            <p>
                                
                                    Sports
                            </p>
                
                    </span>
                    
                    <p className="post-title" style={{fontSize:'18px'}}>Why do we use it?

        </p>
                        
                    </div>
                    
                    </div>
                    </Link>
                    </Fade>
            </Col>

            <Col  className='banner-col mb-3 ' lg={4} >
                <Fade>
                <Link to='/postpage'> 
                <div className=' banner-card-2  p-2' >
                    <span className='card-img  '>
                        <img className='bg-dark' variant="top" style={{ width: '100%', height: '250px', objectFit: 'cover' }} src="/images/Free-New-Full-HD-Backgrounds-PixelsTalk.Net.png" />
                    </span>
                    <div className='card-body p-2'>
                    <span className='d-flex justify-content-between'>

                    <p className='post-date'>
                                <i className="bi-calendar4 custom-icon me-1"></i>
                                Tuesday, 4 July 2023
                            </p>

                            <p>
                                <i className="bi-person custom-icon me-1"></i>
                                    Karen
                            </p>

                            <p>
                                
                                    Sports
                            </p>
                
                    </span>
                    
                    <p className="post-title" style={{fontSize:'18px'}}>What is Lorem Ipsum?

        </p>
                        
                    </div>
                    
                    </div>
                    </Link>
                    </Fade>
            </Col>

            <Col  className='banner-col mb-3 ' lg={4} >
                <Fade>
                <Link to='/postpage'> 
                <div className=' banner-card-2  p-2' >
                    <span className='card-img  '>
                        <img className='bg-dark' variant="top" style={{ width: '100%', height: '250px', objectFit: 'cover' }} src="/images/portrait-volunteer-who-organized-donations-charity.jpg" />
                    </span>
                    <div className='card-body p-2'>
                    <span className='d-flex justify-content-between'>

                    <p className='post-date'>
                                <i className="bi-calendar4 custom-icon me-1"></i>
                                Tuesday, 4 July 2023
                            </p>

                            <p>
                                <i className="bi-person custom-icon me-1"></i>
                                    Karen
                            </p>

                            <p>
                                
                                    Sports
                            </p>
                
                    </span>
                    
                    <p className="post-title" style={{fontSize:'18px'}}>Where can I get some?
        </p>
                        
                    </div>
                    
                    </div>
                    </Link>
                    </Fade>
            </Col>
  </Row>
  
</div>
  )
}

export default CategoriesPosts2