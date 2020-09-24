import React,{useContext} from 'react'
import {TaskContext} from '../Context/TaskContext';
import Tasks from './Tasks';

function TaskList() {
    const {tasks} = useContext(TaskContext);

    return (
        <div>
            {tasks.length?(
            <ul className='list'>
            {tasks.map(task=>(
                <Tasks task={task} key={task.id}/>
            ))}    
            </ul>
            ):
            (<div className='no-tasks'>No Tasks</div>)}
        </div>
    )
}

export default TaskList;

