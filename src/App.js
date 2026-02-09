import Header from "./components/layout/Header";
import { Route,Routes,BrowserRouter,HashRouter } from "react-router-dom";
import Home from "./views/Home";
import CategoryPage from "./views/categoryPage";
import PostPage from "./views/postPage";
import Footer from "./components/layout/footer";
import Contact from "./views/Contact";
import React,{useState,useEffect,createContext} from 'react'

import ScrollToTop from "./components/layout/ScrollToTop";
import TopHeader from "./components/layout/TopHeader";
export const Newscontext = createContext();
function App() {


  return (
    <div className="App">
    
          <BrowserRouter >
            <ScrollToTop/>
            <TopHeader/>
          <Header />
          <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route  path="/category/:categorypage"  element={<CategoryPage/>} ></Route>
  
                  <Route path="/postpage" element={<PostPage/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
                  
          </Routes>
          <Footer/>
          </BrowserRouter>
    </div>
  );
}

export default App;
  
