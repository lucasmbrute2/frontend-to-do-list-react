import React, { useEffect , useState } from "react";
import "./viewTask.scss"
import { Api } from "../../api/api"
const ViewTask = (props)=>{
    console.log(props)
    const id = props.match.params.id
    console.log(id)
    const [tarefa,setTarefa] = useState({})
    
    useEffect(()=>{
        getTaskById();
    },[])

    const getTaskById = async ()=>{
        const response = await Api.buildGetRequestId(id);
        const data = await response.json();
        setTarefa(data)
    }
    return(
        <div>
            <h2>{tarefa.titulo}</h2>
            <span>{tarefa.descricao}</span>
            <p>{tarefa.prioridade}</p>
            <p>{tarefa.estado}</p>
            <p>{tarefa.prazo}</p>
            <p>{tarefa.criacao}</p>
        </div>
    )
}
export default ViewTask;