import React from "react";
import "./taskCard.scss";
import { Link } from 'react-router-dom';

const TaskCard = ({ tarefa })=>{
    return(
        <Link to={`/view/${tarefa._id}`} className='card'>
            <div className='card-container'>
                <h2 className='card-container-h2'>{tarefa.titulo}</h2>
                <p className='card-container-descricao'>{tarefa.descricao}</p>
                <div className="linha"></div>
                <div className='card-container-group-text'>
                    <p className='card-container-prioridade'>Prioridade: {tarefa.prioridade}</p>
                    <p className='card-container-p'>Status: {tarefa.estado}</p>
                    <p className='card-container-p'>Prazo: {tarefa.prazo}</p>	
                    <p className='card-container-criacao'>Criado em {tarefa.criacao}</p>
                </div>
            </div>
        </Link>
    )
};
export default TaskCard;