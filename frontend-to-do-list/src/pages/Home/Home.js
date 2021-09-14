import React from "react";
import "./Home.scss"
import TaskList from "../../components/structure/taskList/taskList"


const Home =() =>{
    return(
        <section className="Home">
            <h1>To do List</h1>
            <TaskList/>
        </section>
    )
}

export default Home;