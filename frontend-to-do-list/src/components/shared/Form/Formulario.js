import React, { useState , useEffect } from "react";
import "./Formulario.scss";
import { Api } from "../../../api/api";
import { Link } from "react-router-dom";

const Formulario = ({ props , titulo , rotaBttnCancelar })=>{
    const [fields,setFields] = useState({});
    const [funcao,setFuncao] = useState(true)
    const id = props.match.params.id
    
    useEffect(()=>{
        getTaskById()
    },[])
    
    const getTaskById = async ()=>{
        const response = await Api.buildGetRequestId(id)
        const data = await response.json()
        setFields(data)
    }
    const handleFieldsChange = (e)=>{
        const auxFields = { ...fields }
        auxFields[e.target.name] = e.target.value
        console.log(auxFields)
        setFields(auxFields)
    };
    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            const response = await Api.fetchPost(fields)
            const data = await response
        }catch(error){
            console.log(error)
        }
        
    } ;
    
    return(
        <section className="add">
            <h1 className="add-h1">{titulo}</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                    <label htmlFor="titulo" className="add-form-group-label">Titulo</label>
                    <input onChange={handleFieldsChange} value={fields.titulo} type ="text"name="titulo" className="add-form-group-input"></input>
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
export default Formulario;