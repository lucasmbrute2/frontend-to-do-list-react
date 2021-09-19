import React from "react";
import Formulario from "../../components/shared/Form/Formulario";
import "./FormPage.scss"
import { useParams } from "react-router-dom";

const FormPage = (props)=>{;
//id={id? Number.parseInt(id,10): null 
    const { id } = useParams();
    return(
        <Formulario props={props}/>
    )
};
export default FormPage