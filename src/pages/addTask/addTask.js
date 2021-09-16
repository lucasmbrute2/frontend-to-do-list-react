import React, { useEffect , useState } from "react";
import { Api } from "../../api/api";
import "./addTask.scss"
import { Link } from "react-router-dom"
//import Formulario from "../../components/shared/Form/Formulario"

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
        <section>
            <h1 className="add-h1">Cadastre uma tarefa</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                    <label htmlFor="titulo" className="add-form-group-label">Titulo</label>
                    <input onChange={handleFieldsChange} type ="text"name="titulo" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="descricao" className="add-form-group-label">Descrição</label>
                    <input  onChange={handleFieldsChange} className="add-form" name="descricao"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prioridade"className="add-form-group-label">Prioridade</label>
                    <select onChange={handleFieldsChange}className="add-form-group-select" name="prioridade">
                        <option></option>
                        <option value="alta">Alta</option>
                        <option value="media">Média</option>
                        <option value="baixa">Baixa</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="estado"className="add-form-group-label">Status</label>
                    <select onChange={handleFieldsChange}className="add-form-group-select" name="estado">
                        <option></option>
                        <option value="fazer" >Fazer</option>
                        <option value="fazendo" >Fazendo</option>
                        <option value="feito" >Feito</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prazo"className="add-form-group-label">Prazo</label>
                    <input onChange={handleFieldsChange} className="add-form-group-input" name="prazo"></input>
                </div>
                <div className="add-form-buttons">
                    <Link to="/">
                        <button className="add-form-buttons-cancelar">Cancelar</button>
                    </Link>
                    <button type="submit" className="add-form-buttons-salvar">Salvar</button>
                </div>
            </form>
        </section>
    )
};
export default AddTask;