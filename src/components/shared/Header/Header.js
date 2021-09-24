import React from "react";
import "./Header.scss"
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <header className="header">
                <ul className="header-list">
                    <div className='header-list-div'>
                        <Link to="/" className="header-list-div-item">
                            <li>Home</li>
                        </Link>
                    </div>
                    <div className='header-list-div'>
                        <Link to="/add" className="header-list-div-item">
                            <li>Adicionar tarefa</li>
                        </Link>
                    </div>

                    
                
                </ul>
 
        </header>
    )
}
export default Header;