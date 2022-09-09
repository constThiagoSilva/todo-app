import { ITask } from "../../interfaces/models/ITask";
import { Container } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";

interface TaskItemProps {
  task: ITask;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <Container>
      {task.title}
      <div className="concluded-container">
        <AiFillCheckCircle />
      </div>
    </Container>
  );
};
