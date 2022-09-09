import { Modal } from "../../../assets/Modal"

interface AddTaskProps {
    isOpen: boolean;
    onClose: () => void
}

export const AddTaskPage = ({isOpen, onClose}: AddTaskProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>  
            aaaaaa
        </Modal>
    )
}