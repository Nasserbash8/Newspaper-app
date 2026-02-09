import React  from 'react'
import { Container,Row  } from 'react-bootstrap';
import PostCategory from "../widget/posts";
import Lastestpost from "../widget/lastestpost";
import Sidebar from "../layout/sidebar";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const postcategory=useParams();


  return (
    <section className="news-section section-padding" id="section_5">
    <Container>
        <Row>
        <div  className="col-lg-7 col-12 ">
        <PostCategory category={postcategory.categorypage}/> 
             </div>
              <Sidebar/>
             
        </Row>
        <Lastestpost/>
      </Container>
      </section>
  )
}
export  default CategoryPage;