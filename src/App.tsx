import React, {useState} from "react";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// CSS
import styles from './App.module.css'

// Interfaces
import { ITask } from '../src/interfaces/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
