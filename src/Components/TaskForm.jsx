import React,{useState, useContext, useEffect} from 'react'
import {TaskContext} from '../Context/TaskContext';

function TaskForm() {
    const {addTask, clearList,editItem, editTask} = useContext(TaskContext)
    const [title,setTitle] = useState('');

    const handleChange = e =>{
        setTitle(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(!editItem){
            addTask(title);
            setTitle('');
        }else{
            editTask(title,editItem.id);    
        }
        
    }

    useEffect(()=>{
        if(editItem){
            setTitle(editItem.title);
        }else{
            setTitle('');
        }
    },[editItem])

    return (
        <form onSubmit={handleSubmit} className='form'>
           <input
            type='text'
            placeholder='Add Task...'
            value={title}
            onChange={handleChange}
            className='task-input'
            required
           />
           <div className='buttons'>
            <button type='submit' className='btn add-task-btn'>
            {editItem?'Edit Task':'Add Task'}
            </button>
            <button className='btn clear-btn' onClick={clearList}>
                Clear 
            </button>
           </div>
            
        </form>
    )
}

export default TaskForm
