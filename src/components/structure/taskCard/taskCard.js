import React from "react";
import "./taskCard.scss";
import { Link } from 'react-router-dom';

const TaskCard = ({ tarefa , loading })=>{
    if(loading){
        return <div>Carregando...</div>
    }
    return(
        <Link to={`/view/${tarefa._id}`} className='card'>
            <div className='card-container'>
                <h2 className='card-container-h2'>{tarefa.titulo}</h2>
                <p className='card-container-descricao'>{tarefa.descricao}</p>
                <div className="linha"></div>
                <div className='card-container-group-text'>
                    <div className="card-container-group-text-div">
                        <p className={tarefa.prioridade=='baixa'?"card-container-group-text-div-baixa" :tarefa.prioridade=='media'?"card-container-group-text-div-media" : "card-container-group-text-div-alta"}><span>Prioridade</span> {tarefa.prioridade}</p>
                    </div>
                    <div className="card-container-group-text-div">
                        <p className='card-container-p'><span>Status</span> {tarefa.estado}</p>
                    </div>
                    <div className="card-container-group-text-div">
                        <p className='card-container-p'><span>Prazo</span> {tarefa.prazo}</p>	
                    </div>
                </div>
            </div>
        </Link>
    )
};
export default TaskCard;