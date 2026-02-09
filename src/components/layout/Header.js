import React from 'react'
import  Menu  from "./menu";
import { Link } from 'react-router-dom';
 const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light shadow-lg">
    <div className="container">
        <Link className="navbar-brand" to="/">
            <img src="/images/icon.png" className="logo img-fluid me-2" />
            <span>
                    Newspaper
                <small>Latest world news</small>
            </span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Menu/>
       
    </div>
</nav>
        
  
  )
}
export default Header;