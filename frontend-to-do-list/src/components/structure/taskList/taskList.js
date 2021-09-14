import React from "react";
import "./taskList.scss";
import TaskCard from "../taskCard/taskCard"
const TaskList =()=>{
    return(
        <section>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </section>
    )
};
export default TaskList;

