import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ITask } from "../../interfaces/models/ITask";
import { api } from "../../service/api";

export interface ITasksContext {
  tasks: ITask[] | null;
  setTasks: React.Dispatch<SetStateAction<ITask[] | null>>;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<ITask[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      const {data: {tasks}} = await api.post<{tasks: ITask[]}>(`/task/list/${user?.id}`)


      setTasks([...tasks])

    }
    fetch()
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
