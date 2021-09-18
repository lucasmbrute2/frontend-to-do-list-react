import React, { useEffect , useState } from "react";
import "./viewTask.scss"
import { Api } from "../../api/api"
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactDOM from 'react-dom';
import "./styleModal.scss";

const Style = {
    color: '#000',
    
}
const ViewTask = (props)=>{
    const id = props.match.params.id
    const [tarefa,setTarefa] = useState({})
    const [open, setOpen] = useState(false);
    
    useEffect(()=>{
        getTaskById();
    },[])

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const getTaskById = async ()=>{
        const response = await Api.buildGetRequestId(id);
        const data = await response.json();
        setTarefa(data)
    }
    const handleDelete = async(e)=>{
        const response = await Api.fetchDelete(id)
        const data = response;
        props.history.push('/')
    }
    
    return(
        <section className="view">
            <div className="view-title">
                <h2 className="view-title-h2">{tarefa.titulo}</h2>
            </div>
            <div className="view-title-span">
                <span>Descrição: {tarefa.descricao}</span>
            </div>
            <div className="view-info">
                <p className="view-info-text">Prioridade: {tarefa.prioridade}</p>
                <p className="view-info-text">Status: {tarefa.estado}</p>
                <p className="view-info-text">Prazo: {tarefa.prazo}</p>
                <p className="view-info-text">Criado em {tarefa.criacao}</p>
                <Link to= {`/edit/${tarefa._id}`} className="bttn-editar">
                    <button >Editar</button>
                </Link>
                <button onClick={onOpenModal} className="bttn-excluir">Excluir</button>
                <Modal open={open} onClose={onCloseModal} center>
                    <h2 style={{ color: 'red' }}>Tem certeza que deseja excluir ?</h2>
                    <button className='bttn-excluir2'onClick={handleDelete}>Excluir</button>
                    <button onClick={onCloseModal}>Cancelar</button>
                </Modal>
            </div>
             
            
        </section>
    )
}
export default ViewTask;