import React from "react";
import "./addTask.scss"
import Formulario from "../../components/shared/Form/Formulario"

const AddTask = (props)=>{
    return(
        <section>
            <Formulario rotaBttnCancelar="/" props={props} titulo="Adicione uma tarefa"/>
        </section>
    )
};
export default AddTask;