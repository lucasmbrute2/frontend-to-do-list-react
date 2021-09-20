import React , { useState, useEffect } from "react";
import "./Home.scss";
import TaskList from "../../components/structure/taskList/taskList";
import { Api } from "../../api/api"


const Home =() =>{
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
        <section className="Home">
            <h1 className="Home-h1">To do List</h1>
                <TaskList task={task} loading={!task.length}/>  
        </section>
    )
}

export default Home;