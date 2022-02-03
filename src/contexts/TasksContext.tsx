/* eslint-disable react-hooks/exhaustive-deps */
import { parseCookies } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Props {
  children: ReactNode
}

interface Task {
  title: string,
  description?: string,
  date?:string
}

interface TaskProps {
  tasks: Task[],
  setTasks: any
}

export const TasksContext = createContext({} as TaskProps);

export const TasksProvider = ({ children }: Props) => {
  const { '@token': token } = parseCookies();

  const [tasks, setTasks] = useState([]);
  console.log('Tasks', tasks);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/tasks/${token}`);
      setTasks(data);
    })();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
