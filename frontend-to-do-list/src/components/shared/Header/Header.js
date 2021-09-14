import React from "react";
import "./Header.scss"
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <header className="header">
           <div className="container">
                <ul className="header-list">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    
                    <Link to="">
                    </Link>
                
                </ul>
           </div>
        </header>
    )
}
export default Header;