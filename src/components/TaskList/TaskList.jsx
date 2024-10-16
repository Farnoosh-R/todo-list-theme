import React, { useState } from "react";
import './style.scss';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({task, deleteTask, changeStatus}) => {


    return(
        <div className="TaskList">
        {task.map((item, index) => {
            return(
                <TaskItem task={item} key={index} deleteTask={deleteTask} changeStatus={changeStatus}/>
            )
        })}
        </div>
    )
}
export default TaskList;