import React, { useEffect , useState } from "react";
import "./taskList.scss";
import TaskCard from "../taskCard/taskCard"

const TaskList =({ task, loading })=>{
    if(loading){
        return (
            <div class="container-loading">
                <div class="Loading"></div>
            </div>  
        )
    }
    return(
        <div className="list" style={{
        }}>
           {task.map((tarefa)=>(
               <TaskCard tarefa ={tarefa} key={tarefa._id} />
           ))}
        </div>
    )
};
export default TaskList;

