import { ITask } from "../../interfaces/models/ITask"
import { Container } from "./styles"

interface TaskItemProps {
    task: ITask;
}

export const TaskItem = ({task}: TaskItemProps) => {
    return (
        <Container>
            {task.title}
        </Container>
    )
}