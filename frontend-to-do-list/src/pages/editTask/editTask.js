import React from "react";
import Formulario from "../../components/shared/Form/Formulario";
import "./editTask.scss";

const EditTask = ()=>{
    return(
        <div className="edit-container">
            <Formulario titulo="Edite a tarefa"/>
        </div>
    )
};
export default EditTask;