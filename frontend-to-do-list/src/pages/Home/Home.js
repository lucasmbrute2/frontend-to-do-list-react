import React from "react";
import "./Home.scss"
import TaskList from "../../components/structure/taskList/taskList"
import Formulario from "../../components/shared/Form/Formulario"

const Home =() =>{
    return(
        <section className="Home">
            <Formulario/>
            <h1>To do List</h1>
            <TaskList/>
        </section>
    )
}

export default Home;