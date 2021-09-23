import React, { useEffect , useState } from "react";
import "./viewTask.scss"
import { Api } from "../../api/api"
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./styleModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
// const Style = {
//     color: '#000',
    
// }
const ViewTask = (props)=>{
    const id = props.match.params.id
    const [tarefa,setTarefa] = useState({})
    const [open, setOpen] = useState(false);
    
    useEffect(()=>{
        taskId()
    },[])

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const taskId = async ()=>{
        const response = await Api.buildGetRequestId(id);
        const data = await response.json();
        setTarefa(data)
    }
    const handleDelete = async(e)=>{
        const response = await Api.fetchDelete(id)
        const data = response;
        console.log(data)
        props.history.push('/')
    }
    
    return(
        <section className="view">
            <div className="view-container">
                <div className="view-container-title">
                    <h2 className="view-container-title-h2">{tarefa.titulo}</h2>
                <Link to= {`/edit/${tarefa._id}`} className="view-container-title-edit">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </Link>
                </div>
                <div className="view-title-desc">
                    <p>Descrição: {tarefa.descricao}</p>
                </div>
                <div className="view-info">
                    <p className="view-info-text">Prioridade: {tarefa.prioridade}</p>
                    <p className="view-info-text">Status: {tarefa.estado}</p>
                    <p className="view-info-text">Prazo: {tarefa.prazo}</p>
                    <p className="view-info-text">Criado em {tarefa.criacao}</p>
                    <button onClick={onOpenModal} className="bttn-excluir">Excluir</button>
                    <Modal open={open} onClose={onCloseModal} center>
                        <h2 style={{ color: '#2c3e50' }}>Tem certeza que deseja excluir ?</h2>
                        <button onClick={onCloseModal} className='bttn-excluir2' >Cancelar</button>
                        <button style={{ color: 'rgba(255, 0, 0, 0.836)' }}className='bttn-excluir2'onClick={handleDelete}>Excluir</button>
                    </Modal>   
                </div>
            </div>  
            
        </section>
    )
}
export default ViewTask;