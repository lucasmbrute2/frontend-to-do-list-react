import React from "react";
import "./taskCard.scss";
import { Link } from 'react-router-dom';

const TaskCard = ({ tarefa })=>{
    console.log(tarefa.titulo)
    return(
        <Link to={`/view/${tarefa._id}`} className='card'>
            <div className='card-container'>
                <h2 className='card-container-h2'>{tarefa.titulo}</h2>
                <span className='card-container-descricao'>{tarefa.descricao}</span>
                <p className='card-container-prioridade'>{tarefa.prioridade}</p>
                <p className='card-container-p'>{tarefa.titulo}</p>
                <p className='card-container-p'></p>	
                <p className='card-container-p'></p>
            </div>
        </Link>
    )
};
export default TaskCard;