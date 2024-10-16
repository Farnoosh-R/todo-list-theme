import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import FilterTask from "../FilterTask/FilterTask";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {


    const [refresh, setRefresh] = useState(0);
    const [filterTask, setFilterTask] = useState([]);
    const [filter, setFilter] = useState('all');

    const [task, setTask] = useState([

        {
            id: uuidv4(),
            title: 'task 1',
            status: false
        },
        {
            id: uuidv4(),
            title: 'task 2',
            status: true
        }
    
    ])

    const addTask = (taskTitle) => {
        const newTask = [
            ...task,
            {
                id: uuidv4(),
                title: taskTitle,
                status: false
            }

        ]

        setTask(newTask)
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const deleteTask = (taskId) => {
        let newTasks = task;
        newTasks = task.filter((item) => item.id !== taskId)
        setTask(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    const changeStatus = (taskId) => {
        let newTasks = task;
        let taskIndex = task.findIndex((item) => item.id === taskId)
        newTasks[taskIndex].status = !newTasks[taskIndex].status;
        setTask(newTasks);
        setRefresh(refresh + 1)
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

useEffect(() => {

    if (filter === 'all'){
        setFilterTask(task)
    }else if (filter === 'active'){
        setFilterTask(task.filter((item) => !item.status))
    }else if (filter === 'completed'){
        setFilterTask(task.filter((item) => item.status))
    }
}, [filter, task, refresh])

useEffect(() => {

       let storedData = JSON.parse(localStorage.getItem('tasks'))
       setTask(storedData)
    
})

    return(
        <div className="TodoApp">
        <AddTask addTask={addTask}/>
        <TaskList task={filterTask} deleteTask={deleteTask} changeStatus={changeStatus}/>
        <FilterTask task={filterTask} taskFilter={setFilter}/>
        </div>
    )
}
export default TodoApp;