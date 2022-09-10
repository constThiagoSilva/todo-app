import { useContext } from "react"
import { Modal } from "../../../components/Modal"
import { IModelContext, ModalContext } from "../../../contexts/Modal/ModalContext"


export const AddTaskPage = () => {
    const context = useContext(ModalContext) as IModelContext
    return (
        <Modal onClose={context.onClose}>  
            aaaaaa
        </Modal>
    )
}   