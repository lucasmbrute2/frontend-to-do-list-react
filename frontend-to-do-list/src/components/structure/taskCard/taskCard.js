import React from "react";
import "./taskCard.scss";
import { Link } from 'react-router-dom';

const TaskCard = ( tarefa )=>{
    console.log(tarefa)
    return(
        <Link to="/view/:id" className='card'>
            <div className='card-container'>
                <h2 className='card-container-h2'>{tarefa.titulo}</h2>
                <span className='card-container-descricao'>{tarefa.descricao}</span>
                <p className='card-container-prioridade'>{tarefa.prioridade}</p>
                <p className='card-container-p'>{tarefa.estado}</p>
                <p className='card-container-p'>{tarefa.prazo}</p>	
                <p className='card-container-p'>{tarefa.criacao}</p>
            </div>
        </Link>
    )
};
export default TaskCard;