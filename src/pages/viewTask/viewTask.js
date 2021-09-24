import React, { useEffect , useState } from "react";
import "./viewTask.scss"
import { Api } from "../../api/api"
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./styleModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

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
        props.history.push('/')
    }
    const date = format(new Date(tarefa.criacao),'dd/MM/yyyy')
    return(
        <section className="view">
            <div className="view-container">
                <div className="view-container-title">
                    <h2 className="view-container-title-h2">{tarefa.titulo}</h2>
                <Link to= {`/edit/${tarefa._id}`} className="view-container-title-edit">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </Link>
                </div>
               
               
                <div className="view-info">
                    <p className='view-info-p'>Descrição:<span className='view-info-span'>{tarefa.descricao}</span></p>
                    <p style={{ color: "rgba(0, 0, 0, 0.801)" }}><strong>Prioridade:</strong><span className='view-info-span'>{tarefa.prioridade}</span></p>
                    <p className="view-info-p">Status: <span className='view-info-span'>{tarefa.estado}</span></p>
                    <p className="view-info-p">Prazo: <span className='view-info-span'>{tarefa.prazo}</span></p>
                    <p className="view-info-p">Criado em <span className='view-info-span'>{date}</span></p>
                    <button onClick={onOpenModal} className="view-info-button">Excluir</button>
                    <Modal open={open} onClose={onCloseModal} center>
                        <h2 style={{ color: '#2c3e50' }}>Tem certeza que deseja excluir ?</h2>
                        <button onClick={onCloseModal} className='bttn-excluir2' >Cancelar</button>
                        <button style={{ color: 'tomato' }}className='bttn-excluir2'onClick={handleDelete}>Excluir</button>
                    </Modal>   
                </div>
            </div>  
            
        </section>
    )
}
export default ViewTask;