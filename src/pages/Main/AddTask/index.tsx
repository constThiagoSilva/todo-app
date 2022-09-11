import { useContext, useState } from "react"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { Modal } from "../../../components/Modal"
import { AuthContext, IAuthContext } from "../../../contexts/Auth/AuthContext"
import { IModelContext, ModalContext } from "../../../contexts/Modal/ModalContext"
import { ITasksContext, TaskContext } from "../../../contexts/Tasks/TasksContext"


export const AddTaskPage = () => {
    const {user} = useContext(AuthContext) as IAuthContext
    const {addTasks} = useContext(TaskContext) as ITasksContext
    const context = useContext(ModalContext) as IModelContext
    const [newTask, setNewTask] = useState('');
    return (
        <Modal onClose={context.onClose}>  
            <Input type="name" pleceholder="Digite sua nova tarefa" value={newTask} onChangeText={(event) => setNewTask(event.target.value)}/>
            <Button title="Adicionar" onCLick={(event) => addTasks({title: newTask, userId: user?.id})}/>
        </Modal>
    )
}   