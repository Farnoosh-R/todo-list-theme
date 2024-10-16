import React, { useContext, useEffect, useState } from "react";
import './style.scss'
import ThemeContext from "../Context/Context";

const AddTask = ({addTask}) => {

    const [value, setValue] = useState('')
    const themeValue = useContext(ThemeContext);

const handleAddTask = (e) => {
    setValue(e);
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || value === ''){
        return
    }
    addTask(value)
    console.log(value)
}


    return(
        <div className="AddTask">
        <form onSubmit={handleSubmit} className="AddTask-form">
        <input onChange={(e) => handleAddTask(e.target.value)} className="form-control" type="text" placeholder="Enter Task"/>
        <button style={{backgroundColor: themeValue.theme.color}}>Add</button>
        </form>
        </div>
    )
}
export default AddTask;