import React, { useEffect , useState } from "react";
import { Api } from "../../api/api";
import { Link } from "react-router-dom";
import Formulario from "../../components/shared/Form/Formulario";
import "./editTask.scss";

const EditTask = (props)=>{
    const id = props.match.params.id
    const [fields,setFields] = useState({});

    useEffect(()=>{
        getTaskById()
    },[]);
    const getTaskById = async ()=>{
        const response = await Api.buildGetRequestId(id);
        const data = await response.json();
        setFields(data)
    ;}
    const handleFieldsChange = (e)=>{
        const auxFields = { ...fields }
        console.log(auxFields)
        auxFields[e.target.name] = e.target.value
        setFields(auxFields)
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const dados = { ...fields }
        const response = await Api.fetchPut(dados,id)
        const data = await response
        props.history.push('/')
    }
    return(
        <section className="add">
           <Formulario titulo='Editar uma tarefa'/>
        </section>
    )
};
export default EditTask;