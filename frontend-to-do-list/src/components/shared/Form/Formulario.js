import React from "react";
import "./Formulario.scss";

const Formulario = (props)=>{
    const handleSubmit = (e)=>{
        e.preventDefault()
        
    } 
    
    return(
        <section className="add">
            <h1 className="add-h1">{}</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                    <label htmlFor="titulo" className="add-form-group-label">Titulo</label>
                    <input type ="text"name="titulo" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="descricao" className="add-form-group-label">Descrição</label>
                    <input className="add-form" name="descricao"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prioridade"className="add-form-group-label">Prioridade</label>
                    <select className="add-form-group-select" name="prioridade">
                        <option value="alta">Alta</option>
                        <option value="media">Média</option>
                        <option value="baixa">Baixa</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="status"className="add-form-group-label">Status</label>
                    <select className="add-form-group-select" name="status">
                        <option value="fazer">Fazer</option>
                        <option value="fazendo">Fazendo</option>
                        <option value="feito">Feito</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prazo"className="add-form-group-label">Prazo</label>
                    <input className="add-form-group-input" name="prazo"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="criacao"className="add-form-group-label">Data de criação</label>
                    <input className="add-form-group-input" name="criacao"></input>
                </div>  

                <div className="add-form-buttons">
                    <button className="add-form-buttons-cancelar">Cancelar</button>
                    <button type="submit" className="add-form-buttons-salvar">Salvar</button>
                </div>
            
                      

            </form>
        </section>
    )
};
export default Formulario;