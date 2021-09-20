import React from "react";
import "./Footer.scss"
const copy = "\u00a9"

const Footer = ()=>{
    return(
        <footer className="footer">
            {copy} Todos os direitos reservados a Lucas Victor.
        </footer>
    )
}
export default Footer;