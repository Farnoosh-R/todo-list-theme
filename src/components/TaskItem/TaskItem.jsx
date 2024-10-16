import React, { useContext } from "react";
import './style.scss'
import { FaTrashCan } from "react-icons/fa6";
import ThemeContext from "../Context/Context";

const TaskItem = ({task, deleteTask, changeStatus}) => {

const themeValue = useContext(ThemeContext);

    return(
        <div className="TaskItem">
        <div className="task-box">
        <input type="checkbox" className="me-3" checked={task.status} onChange={() => changeStatus(task.id)}/>
        <span>{task.title}</span>
        </div>
        <button onClick={() => deleteTask(task.id)}>
        <FaTrashCan style={{color: themeValue.theme.color}}/>
        </button>
        </div>
    )
}
export default TaskItem;