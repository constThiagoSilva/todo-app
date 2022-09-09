import { Button } from "../../components/Button";
import { TaskItem } from "../../components/TaskItem";
import { ITask } from "../../interfaces/models/ITask";
import {
  Container,
  Content,
  TaskListContaner,
} from "./style";

export const MainPage = () => {
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
          <Button title="Tarefa" onCLick={(event) => console.log(event)} />
        </div>
        </div>
      </header>
      <Content>
        <TaskListContaner>
          {
            DATA.map(task => <TaskItem task={task}/>)
          }
        </TaskListContaner>
      </Content>
    </Container>
  );
};
