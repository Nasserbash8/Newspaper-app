import React from 'react'
import { Link } from "react-router-dom";
 const Sidebar = () => {
  return (
  
  <div className='col-lg-4 col-12 mx-auto'>
                 <div className="news-block news-block-two-col d-flex mt-4">
      
                    
      <div className="news-block-two-col-image-wrap">
      <Link to="/postpage">
          <img src="/images/news/africa-humanitarian-aid-doctor.jpg" className="news-image img-fluid" alt=""/>
      </Link>
  </div>

  <div className="news-block-two-col-info">
      <div className="news-block-title mb-2">
          <p><Link to="/postpage" className="news-block-title-link">Lorem Ipsum</Link></p>
      </div>

      <div className="news-block-date">
          <p>
              <i className="bi-calendar4 custom-icon me-1"></i>
              Tuesday, 4 July 2023
          </p>
      </div>
  </div>
 
                </div>

                <div className="news-block news-block-two-col d-flex mt-4">
      
                    
      <div className="news-block-two-col-image-wrap">
      <Link to="/postpage">
          <img src="/images/news/medium-shot-people-collecting-foodstuff.jpg" className="news-image img-fluid" alt=""/>
      </Link>
  </div>

  <div className="news-block-two-col-info">
      <div className="news-block-title mb-2">
          <p><Link to="/postpage" className="news-block-title-link">Lorem Ipsum</Link></p>
      </div>

      <div className="news-block-date">
          <p>
              <i className="bi-calendar4 custom-icon me-1"></i>
              Tuesday, 4 July 2023
          </p>
      </div>
  </div>
 
                </div>


                <div className="news-block news-block-two-col d-flex mt-4">
      
                    
      <div className="news-block-two-col-image-wrap">
      <Link to="/postpage">
          <img src="/images/news/close-up-volunteer-oganizing-stuff-donation.jpg" className="news-image img-fluid" alt=""/>
      </Link>
  </div>

  <div className="news-block-two-col-info">
      <div className="news-block-title mb-2">
          <p><Link to="/postpage" className="news-block-title-link">Lorem Ipsum</Link></p>
      </div>

      <div className="news-block-date">
          <p>
              <i className="bi-calendar4 custom-icon me-1"></i>
              Tuesday, 4 July 2023
          </p>
      </div>
  </div>
 
                </div>


                <div className="news-block news-block-two-col d-flex mt-4">
      
                    
      <div className="news-block-two-col-image-wrap">
      <Link to="/postpage">
          <img src="/images/news/close-up-happy-people-working-together.jpg" className="news-image img-fluid" alt=""/>
      </Link>
  </div>

  <div className="news-block-two-col-info">
      <div className="news-block-title mb-2">
          <p><Link to="/postpage" className="news-block-title-link">Lorem Ipsum</Link></p>
      </div>

      <div className="news-block-date">
          <p>
              <i className="bi-calendar4 custom-icon me-1"></i>
              Tuesday, 4 July 2023
          </p>
      </div>
  </div>
 
                </div>
                <div className="category-block ">
                    <h5 className="mb-3">Categories</h5>

                    <Link to='/category/sports' className="category-block-link me-3">
                        sports
                        <span className="badge">20</span>
                    </Link>

                    <Link to='/category/business' className="category-block-link me-3">
                    business
                        <span className="badge">20</span>
                    </Link>

                    <Link to='/category/world' className="category-block-link me-3">
                    world
                        <span className="badge">20</span>
                    </Link>

                    <Link to='/category/science' className="category-block-link me-3">
                    science
                        <span className="badge">20</span>
                    </Link>

                    <Link to='/category/politics' className="category-block-link me-3">
                    politics
                        <span className="badge">20</span>
                    </Link>

                    <Link to='/category/technology' className="category-block-link me-3">
                    technology
                        <span className="badge">20</span>
                    </Link>

                    <Link to='/category/startup' className="category-block-link me-3">
                    startup
                        <span className="badge">20</span>
                    </Link>

                    <Link to='/category/entertainment' className="category-block-link">
                    entertainment
                        <span className="badge">20</span>
                    </Link>
                </div>

                <div className="tags-block">
                    <h5 className="mb-3">Tags</h5>

                    <a href="#" className="tags-block-link">
                        sports
                    </a>

                    <a href="#" className="tags-block-link">
                        Clothing
                    </a>

                    <a href="#" className="tags-block-link">
                        world
                    </a>

                    <a href="#" className="tags-block-link">
                        Children
                    </a>

                    <a href="#" className="tags-block-link">
                        Education
                    </a>

                    <a href="#" className="tags-block-link">
                        Poverty
                    </a>

                    <a href="#" className="tags-block-link">
                        Clean Water
                    </a>
                </div>

                <form className="custom-form subscribe-form" action="#" method="get" role="form">
                    <h5 className="mb-4">Newsletter Form</h5>

                    <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email Address" required/>

                    <div className="col-lg-12 col-12">
                        <button type="submit" className="form-control">Subscribe</button>
                    </div>
                </form>
  </div>
  )
}
export default Sidebar;