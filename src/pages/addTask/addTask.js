import React, { useEffect , useState } from "react";
import { Api } from "../../api/api";
import "./addTask.scss"
import { Link } from "react-router-dom"
import Formulario from "../../components/shared/Form/Formulario"

const AddTask = (props)=>{
    const [fields,setFields] = useState({});
    
    const handleFieldsChange = (e)=>{
        const auxFields = { ...fields }
        auxFields[e.target.name] = e.target.value
        setFields(auxFields)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const response = await Api.fetchPost(fields)
            const data = await response
            props.history.push("/");
        }catch(error){
            console.log(error)
        }
    } ;
        
    return(
        <section className='add'>
            <Formulario titulo='Cadastre uma Task'/>
        </section>
    )
};
export default AddTask;