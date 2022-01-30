import { createContext, ReactNode, useState } from "react";

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
  const [tasks, setTasks] = useState([]);
  console.log('tasks', tasks);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
