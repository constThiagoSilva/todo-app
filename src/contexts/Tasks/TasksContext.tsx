import React, { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { ITask } from "../../interfaces/models/ITask";
import { api } from "../../service/api";
import { AuthContext, IAuthContext } from "../Auth/AuthContext";

export interface ITasksContext {
    tasks: ITask[] | null;
    setTasks: React.Dispatch<SetStateAction<ITask[] | null>>
}

interface TasksProviderProps {
    children: ReactNode
}

export const TaskContext = createContext<ITasksContext | null>(null)

export const TasksProvider = ({children}: TasksProviderProps) => {
    const [tasks, setTasks] = useState<ITask[] | null>(null);
    const {user} = useContext(AuthContext) as IAuthContext

    useEffect(() => {
        const fetch = async () => {
            const {data} = await api.post(`/task/list/${user?.id}`)

            console.log(data)
        }
        fetch()
    }, []);
    
    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}