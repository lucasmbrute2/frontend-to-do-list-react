import React from "react";
import "./Home.scss";
import TaskList from "../../components/structure/taskList/taskList";

const Home =() =>{
    return(
        <section className="Home">
            <TaskList/>
        </section>
    )
}

export default Home;