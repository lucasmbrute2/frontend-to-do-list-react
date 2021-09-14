import React from "react";
import "./Formulario.scss";

const Formulario = (props)=>{
    return(
        <section className="add">
            <h1 className="add-h1">{}</h1>
            <form className="add-form">
                <div className="add-form-group">
                    <label htmlFor="titulo" className="add-form-group-label"></label>
                    <input ></input>
                </div>
                <div className="add-form-group">
                    <label className="add-form-group-label"></label>
                    <input></input>
                </div>
                <div className="add-form-group">
                    <label className="add-form-group-label"></label>
                    <input></input>
                </div>
                <div className="add-form-group">
                    <label className="add-form-group-label"></label>
                    <input></input>
                </div>
                <div className="add-form-group">
                    <label className="add-form-group-label"></label>
                    <input></input>
                </div>
                <div className="add-form-group">
                    <label className="add-form-group-label"></label>
                    <input></input>
                </div>  

            
                      

            </form>
        </section>
    )
};
export default Formulario;