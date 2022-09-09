import { Button } from "../../components/Button";
import {
  Container,
  Content,
  TaskListContaner,
} from "./style";

export const MainPage = () => {
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
          a
        </TaskListContaner>
      </Content>
    </Container>
  );
};
