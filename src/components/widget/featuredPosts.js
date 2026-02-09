import React , {useState} from 'react'
import Fade from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
const Featured = () => {
  return (
    <Fade>
  
    <div className="col-lg-7 col-12">
    <div className="news-block ">
          <div className="news-block-top  ">
              <Link to="/postpage">
                  <img src='/images/news/africa-humanitarian-aid-doctor.jpg' className="news-image img-fluid" alt=""/>
              </Link>

          </div>
          <div className="news-block-info">
              <div className="d-flex mt-2">
                  <div className="news-block-date">
                      <p>
                          <i className="bi-calendar4 custom-icon me-1"></i>
                          Tuesday, 4 July 2023
                      </p>
                  </div>

                  <div className="news-block-author mx-5">
                      <p>
                          <i className="bi-person custom-icon me-1"></i>
                            Karen
                      </p>
                  </div>

                  <div className="news-block-comment">
                      <p>
                          <i className="bi-chat-left custom-icon me-1"></i>
                          32 Comments
                      </p>
                  </div>
              </div>

              <div className="news-block-title mb-2">
                  <h4><Link to="/postpage" className="news-block-title-link">What is Lorem Ipsum?</Link></h4>
              </div>

              <div className="news-block-body">
                  <p> <Link to="/postpage">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<strong>more...</strong></Link>`</p>
              </div>
          </div>
      </div>

      <div className="news-block ">
          <div className="news-block-top  ">
              <Link to="/postpage">
                  <img src='/images/news/africa-humanitarian-aid-doctor.jpg' className="news-image img-fluid" alt=""/>
              </Link>

          </div>
          <div className="news-block-info">
              <div className="d-flex mt-2">
                  <div className="news-block-date">
                      <p>
                          <i className="bi-calendar4 custom-icon me-1"></i>
                          Tuesday, 4 July 2023
                      </p>
                  </div>

                  <div className="news-block-author mx-5">
                      <p>
                          <i className="bi-person custom-icon me-1"></i>
                            Karen
                      </p>
                  </div>

                  <div className="news-block-comment">
                      <p>
                          <i className="bi-chat-left custom-icon me-1"></i>
                          32 Comments
                      </p>
                  </div>
              </div>

              <div className="news-block-title mb-2">
                  <h4><Link to="/postpage" className="news-block-title-link">Why do we use it?</Link></h4>
              </div>

              <div className="news-block-body">
                  <p> <Link to="/postpage">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<strong>more...</strong></Link>`</p>
              </div>
          </div>
      </div>

      <div className="news-block ">
          <div className="news-block-top  ">
              <Link to="/postpage">
                  <img src='/images/news/africa-humanitarian-aid-doctor.jpg' className="news-image img-fluid" alt=""/>
              </Link>

          </div>
          <div className="news-block-info">
              <div className="d-flex mt-2">
                  <div className="news-block-date">
                      <p>
                          <i className="bi-calendar4 custom-icon me-1"></i>
                          Tuesday, 4 July 2023
                      </p>
                  </div>

                  <div className="news-block-author mx-5">
                      <p>
                          <i className="bi-person custom-icon me-1"></i>
                            Karen
                      </p>
                  </div>

                  <div className="news-block-comment">
                      <p>
                          <i className="bi-chat-left custom-icon me-1"></i>
                          32 Comments
                      </p>
                  </div>
              </div>

              <div className="news-block-title mb-2">
                  <h4><Link to="/postpage" className="news-block-title-link">Where does it come from?
              </Link></h4>
              </div>

              <div className="news-block-body">
                  <p> <Link to="/postpage">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

<strong>more...</strong></Link>`</p>
              </div>
          </div>
      </div>


     </div>
     </Fade>
  )
}
export default Featured;
