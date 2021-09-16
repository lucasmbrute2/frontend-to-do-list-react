import React, { useEffect , useState } from "react";
import { Api } from "../../api/api";
import { Link } from "react-router-dom";
//import Formulario from "../../components/shared/Form/Formulario";
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
            <h1 className="add-h1">Cadastre um filme</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                    <label htmlFor="titulo" className="add-form-group-label">Titulo</label>
                    <input onChange={handleFieldsChange} value={fields.titulo}type ="text"name="titulo" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="descricao" className="add-form-group-label">Descrição</label>
                    <input  onChange={handleFieldsChange} value={fields.descricao} className="add-form" name="descricao"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prioridade"className="add-form-group-label">Prioridade</label>
                    <select onChange={handleFieldsChange}className="add-form-group-select" name="prioridade">
                        <option></option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="estado"className="add-form-group-label">Status</label>
                    <select onChange={handleFieldsChange}className="add-form-group-select" name="estado">
                        <option></option>
                        <option value="Fazer" >Fazer</option>
                        <option value="Fazendo" >Fazendo</option>
                        <option value="Feito" >Feito</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prazo"className="add-form-group-label">Prazo</label>
                    <input onChange={handleFieldsChange} value={fields.prazo}className="add-form-group-input" name="prazo"></input>
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
export default EditTask;