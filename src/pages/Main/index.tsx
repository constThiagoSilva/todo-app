import { useContext, useEffect } from "react";
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
import { AuthContext, IAuthContext } from "../../contexts/Auth/AuthContext";
import { ITasksContext, TaskContext } from "../../contexts/Tasks/TasksContext";
import { api, privateApi } from "../../service/api";

export const MainPage = () => {
  const context = useContext(ModalContext) as IModelContext
  const {user} = useContext(AuthContext) as IAuthContext
  const {tasks, setTasks} = useContext(TaskContext) as ITasksContext

  useEffect(() => {
    const fetch = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const {
          data: { tasks },
        } = await privateApi.post<{ tasks: ITask[] }>(`/task/list/${user?.id}`);

        console.log(tasks, 'fist')

        setTasks([...tasks]);
      } catch (error) {
        console.log(error)
      }
    };
    fetch();
  }, []);

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
      <h1>{user?.name}</h1>
      <Content>
        <TaskListContaner>
          {
            tasks?.map(task => <TaskItem key={task.id} task={task}/>)
          }
        </TaskListContaner>
      </Content>
      <Outlet/>
    </Container>
  );
};
