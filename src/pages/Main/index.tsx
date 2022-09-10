import { useContext } from "react";
import { Button } from "../../components/Button";
import {Outlet} from 'react-router-dom'
import { TaskItem } from "../../components/TaskItem";
import { IModelContext, ModalContext } from "../../contexts/Modal/ModalContext";
import { ITask } from "../../interfaces/models/ITask";
import {
  Container,
  Content,
  TaskListContaner,
} from "./style";

export const MainPage = () => {
  const context = useContext(ModalContext) as IModelContext
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

  return (
    <Container>
      <header>
        <div className="center">
        <nav>
          <span>Todo App</span>
          <a href="#">Sair</a>
        </nav>
        <div className="add-task-button-container">
          <Button title="Tarefa" onCLick={(event) => context.onOpen()} />
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
      <Outlet/>
    </Container>
  );
};
