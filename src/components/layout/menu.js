import React from 'react'
import { Link } from "react-router-dom";

 const Menu = () => {
  
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/">Home</Link>
                </li>

                <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     News
                                </a>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink ">
                        <li><Link className='dropdown-item'  to='/category/sports'>sports </Link></li>

                        <li><Link className='dropdown-item'   to='/category/world'>world </Link></li>

                        <li><Link className='dropdown-item'  to='/category/business'>business </Link></li>

                        <li><Link className='dropdown-item'  to='/category/technology'>technology</Link></li>

                        <li><Link className='dropdown-item'  to='/category/science'>science </Link></li>

                        <li><Link className='dropdown-item'  to='/category/politics'>politics </Link></li>

                        <li><Link className='dropdown-item'  to='/category/startup'>startup </Link></li>

                        <li><Link className='dropdown-item'  to='/category/entertainment'>entertainment </Link></li>
                    </ul>
                </li>

                <li className="nav-item ms-3">
                    <Link className="nav-link custom-btn custom-border-btn btn" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
      
        
    
  
  )
}
export default Menu;