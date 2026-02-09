import React ,{useState}from 'react'
import {Button , Card  , Col ,Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Zoom';
import { Link } from "react-router-dom";

 const Lastestpost = () => {


  return (
    <Fade>
      <Row>
      <div className="col-lg-12 col-12 text-center my-4">
                            <h2>Latest News</h2>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div className="custom-block-wrap">
                    <img src="/images/news/medium-shot-people-collecting-foodstuff.jpg" className="custom-block-image " alt=""/>

                    <div className="custom-block">
                        <div className="custom-block-body">
                            <h6 className="mb-3">Why do we use it?
</h6>

                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout from a Lorem Ipsum passage. 

</p>

                            <div className="progress mt-4">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="d-flex align-items-center my-2">
                                <p className="mb-0">
                                    
                                Tuesday, 4 July 2023


                                </p>

                                <p className="ms-auto mb-0">
                                    
                                   Karen
                                </p>
                            </div>
                        </div>

                        <Link to="/postpage" className="custom-btn btn">Read more</Link>
                    </div>
                </div>
                         </div>

                         <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div className="custom-block-wrap">
                    <img src="/images/news/close-up-volunteer-oganizing-stuff-donation.jpg" className="custom-block-image " alt=""/>

                    <div className="custom-block">
                        <div className="custom-block-body">
                            <h6 className="mb-3">lorem ipsum
</h6>

                            <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'. 

</p>

                            <div className="progress mt-4">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="d-flex align-items-center my-2">
                                <p className="mb-0">
                                    
                                Tuesday, 4 July 2023


                                </p>

                                <p className="ms-auto mb-0">
                                    
                                   Karen
                                </p>
                            </div>
                        </div>

                        <Link to="/postpage" className="custom-btn btn">Read more</Link>
                    </div>
                </div>
                         </div>

                         <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div className="custom-block-wrap">
                    <img src="/images/news/medium-shot-volunteers-with-clothing-donations.jpg" className="custom-block-image " alt=""/>

                    <div className="custom-block">
                        <div className="custom-block-body">
                            <h6 className="mb-3">Where does it come from?
</h6>

                            <p> in Virginia, looked up one of the more obscure Latin words, consectetur and going through the cites of the word in classical literature . 

</p>

                            <div className="progress mt-4">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="d-flex align-items-center my-2">
                                <p className="mb-0">
                                    
                                Tuesday, 4 July 2023


                                </p>

                                <p className="ms-auto mb-0">
                                    
                                   Karen
                                </p>
                            </div>
                        </div>

                        <Link to="/postpage" className="custom-btn btn">Read more</Link>
                    </div>
                </div>
                         </div>
                        </Row>
    </Fade>
  )
}
export default Lastestpost;