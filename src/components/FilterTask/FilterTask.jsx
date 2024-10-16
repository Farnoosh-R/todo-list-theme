import React, { useState } from "react";
import './style.scss'

const FilterTask = ({task, taskFilter}) => {

const [filter, setFilter] = useState('all')

const handleFilter = (filterValue) => {
    setFilter(filterValue)
    taskFilter(filterValue)
}


    return(
        <div className="FilterTask">
        <span>{`${task.length} item`}</span>
        <div filter-box>
        <button onClick={() => handleFilter('all')} className={filter === 'all' ? 'active me-2' : 'me-2'}>All</button>
        <button onClick={() => handleFilter('active')} className={filter === 'active' ? 'active me-2' : 'me-2'}>Active</button>
        <button onClick={() => handleFilter('completed')} className={filter === 'completed' ? 'active me-2' : 'me-2'}>Completed</button>
        </div>
        </div>
    )
}
export default FilterTask;