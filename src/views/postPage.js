import React ,{useState,useEffect} from 'react'
import Sidebar from "../layout/sidebar";
import Comments from "../widget/comments";
import Lastestpost from "../widget/lastestpost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons' ;
import { Link } from 'react-router-dom';
 const PostPage = () => {

  return (
    <div>
      <section className="news-detail-header-section text-center">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12">
                            <h1 className="text-white">News Detail</h1>
                        </div>

                    </div>
                </div>
            </section>

            <section className="news-section section-padding">
                <div className="container">
                    <div className="row mb-5">

                        <div className="col-lg-7 col-12">
                            <div className="news-block">
                                <div className="news-block-top">
                                    <img src="images/news/medium-shot-volunteers-with-clothing-donations.jpg" className="news-image img-fluid" alt=""/>            
                                </div>

                                <div className="news-block-info">
                                    <div className="d-flex mt-2">
                                    <div className="news-block-date">
                                        <p>
                                            <i className="bi-calendar4 custom-icon me-1"></i>
                                            October 12, 2036
                                        </p>
                                    </div>

                                    <div className="news-block-author mx-5">
                                        <p>
                                            <i className="bi-person custom-icon me-1"></i>
                                            By Admin
                                        </p>
                                    </div>

                                    <div className="news-block-comment">
                                        <p>
                                            <i className="bi-chat-left custom-icon me-1"></i>
                                            48 Comments
                                        </p>
                                    </div>
                                </div>

                                <div className="news-block-title mb-2">
                                    <h4>Clothing donation to urban area</h4>
                                </div>

                                    <div className="news-block-body">
                                        <p><strong>Lorem Ipsum</strong> dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based on Bootstrap</p>

                                        <p><strong>Sed leo</strong> nisl, This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you.</p>

                                        <blockquote>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci.</blockquote>
                                    </div>

                                    <div className="row mt-5 mb-4">
                                        <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                                            <img src="images/news/africa-humanitarian-aid-doctor.jpg" className="news-detail-image img-fluid" alt=""/>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <img src="images/news/close-up-happy-people-working-together.jpg" className="news-detail-image img-fluid" alt=""/>
                                        </div>
                                    </div>

                                    <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please <a href="https://templatemo.com/contact" target="_blank">contact TemplateMo</a> for more information.</p>

                                    <div className="social-share border-top mt-5 py-4 d-flex flex-wrap align-items-center">
                                        <div className="tags-block me-auto">
                                            <Link to="/category/sports" className="tags-block-link">
                                                Sports
                                            </Link>

                                            <Link to="/category/technology" className="tags-block-link">
                                            technology
                                            </Link>

                                            <Link to="/category/World" className="tags-block-link">
                                            World
                                            </Link>
                                        
                                        </div>

                                        <div className="d-flex">
                                            
                                        <a href="#" className="social-icon-link "><FontAwesomeIcon icon={faFacebookF}/></a>

                                            <a href="#" className="social-icon-link "><FontAwesomeIcon icon={faTwitter}/></a>

                                            <a href="#" className="social-icon-link "><FontAwesomeIcon icon={faInstagram}/></a>

                                            <a href="#" className="social-icon-link "><FontAwesomeIcon icon={faLinkedin}/></a>
                                        </div>
                                    </div>
                                    <Comments/>
                                   
                                </div>
                            </div>
                        </div>

                        <Sidebar/>

                    </div>
                    <Lastestpost/>
                </div>
            </section>
          
    </div>
  )
}
export default PostPage;