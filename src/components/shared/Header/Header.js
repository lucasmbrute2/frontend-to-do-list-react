import React from "react";
import "./Header.scss"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{
    return(
        <header className="header">
                <ul className="header-list">
                    <Link to="/" className='header-list-div'>
                        <div className="header-list-div-item">
                            <FontAwesomeIcon icon={faHome} className='header-list-div-item-fa'></FontAwesomeIcon>
                            <li className='header-list-div-item-li'>Home</li>
                        </div>
                    </Link>
                    <Link to="/add" className='header-list-div'>
                        <div className="header-list-div-item">
                            <FontAwesomeIcon icon={faEdit} className='header-list-div-item-fa'></FontAwesomeIcon>
                            <li className='header-list-div-item-li'>Adicionar tarefa</li>
                        </div>
                    </Link>

                        
                    
                </ul>
 
        </header>
    )
}
export default Header;