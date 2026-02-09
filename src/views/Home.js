import React from 'react'
import { Container ,Row} from 'react-bootstrap';
import Sidebar from "../layout/sidebar";
import Lastestpost from "../widget/lastestpost";
import Featured from "../widget/featuredPosts";
import CategoriesPosts1 from "../widget/categoriesPosts1";
import CategoriesPosts2 from "../widget/categoriesPosts2";
import NewsSlider from "../widget/newsSlider";
import Donation from "../widget/Donation";
 const Home = () => {
  return (
    <div> 
       <NewsSlider/>
       <section className="news-section section-padding" id="section_5">
       <Container>
        <Row>
        <Featured/>
        <Sidebar/>
        </Row>
        <CategoriesPosts1 />
        <CategoriesPosts2/>
        <Lastestpost/>
       </Container>
     
       </section>
       <Donation/>
    </div>
    
  )
}
export default Home;