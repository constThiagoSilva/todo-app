import { useState } from "react";
import { Modal } from "../../assets/Modal";
import { Button } from "../../components/Button";
import { TaskItem } from "../../components/TaskItem";
import { ITask } from "../../interfaces/models/ITask";
import {
  Container,
  Content,
  TaskListContaner,
} from "./style";

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const DATA: ITask[] = [
    {
      id: 1,
      userId: 1,
      title: 'Ler',
      situation: false,
    },
    {
      id: 2,
      userId: 1,
      title: 'Ler',
      situation: true,
    }
  ]

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)
  return (
    <Container>
      <header>
        <div className="center">
        <nav>
          <span>Todo App</span>
          <a href="#">Sair</a>
        </nav>
        <div className="add-task-button-container">
          <Button title="Tarefa" onCLick={(event) => handleOpenModal()} />
        </div>
        </div>
      </header>
      <Content>
        <TaskListContaner>
          {
            DATA.map(task => <TaskItem key={task.id} task={task}/>)
          }
        </TaskListContaner>
      </Content>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        OLa
      </Modal>
    </Container>
  );
};
