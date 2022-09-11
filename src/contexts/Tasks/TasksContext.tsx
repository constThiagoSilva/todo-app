import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { ITask } from "../../interfaces/models/ITask";
import { api, privateApi } from "../../service/api";

export interface ITasksContext {
  tasks: ITask[] | null;
  setTasks: React.Dispatch<SetStateAction<ITask[] | null>>;
  addTasks: ({title, userId}: {title: string, userId: number | undefined}) => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<ITask[] | null>(null);
  const navigate = useNavigate()

  

  const addTasks = async ({title, userId}: {title: string, userId: number | undefined}) => {
    try {
      const {data: {task}} = await privateApi.post<{task: ITask}>(`/task/add/${userId}`, {title})

      setTasks(prev => [...(prev as []), task])

      navigate('/main/tasks')

    } catch (error) {
      
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
