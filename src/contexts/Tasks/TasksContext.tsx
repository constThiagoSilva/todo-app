import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ITask } from "../../interfaces/models/ITask";
import { api, privateApi } from "../../service/api";

export interface ITasksContext {
  tasks: ITask[] | null;
  setTasks: React.Dispatch<SetStateAction<ITask[] | null>>;
  addTasks: ({title, userId}: {title: string, userId: number}) => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<ITask[] | null>(null);

  

  const addTasks = async ({title, userId}: {title: string, userId: number}) => {
    try {
      const {data} = await privateApi.post<{task: ITask}>(`/task/add/${userId}`)

      console.log(data)
    } catch (error) {
      
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
