import React, { useEffect , useState } from "react";
import "./taskList.scss";
import TaskCard from "../taskCard/taskCard"
import { Api } from "../../../api/api";

const TaskList =()=>{
    const [task,setTask] = useState([])
    
    useEffect(()=>{
        getTask();
    },[])
    
    const getTask = async () =>{
        const response = await Api.buildGetRequest();
        const data = await response.json();
        setTask(data) 
    }
    return(
        <div className="list">
           {task.map((tarefa)=>(
               <TaskCard tarefa ={tarefa} key={tarefa._id}/>
           ))}
        </div>
    )
};
export default TaskList;

