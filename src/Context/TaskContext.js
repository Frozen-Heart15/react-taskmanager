import React,{createContext, useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';  

export const TaskContext = createContext();

const TaskContextProvider = props =>{
    const [tasks,setTasks] = useState([
        {id:uuid(),title:"Read a book"},
        {id:uuid(),title:"Watch a show"},
        {id:uuid(),title:"Write some code"}
    ]);

    const [editItem,setEditItem] = useState(null);

    const addTask = title=>{
        setTasks([...tasks, {id:uuid(),title}]);
    }

    const removeTask = id=>{
        setTasks(tasks.filter(task => task.id !== id ));
    }

    const clearList = ()=>{
        setTasks([]);
    }

    const findItem = id =>{
        const item = tasks.find(task=> task.id === id);
        setEditItem(item);
    }

    const editTask = (title,id)=>{
        const newTasks = tasks.map(task => (task.id===id?{title,id}:task));
        setTasks(newTasks);
        setEditItem(null);
    }

    return(
        <TaskContext.Provider 
        value={{
            tasks,
            addTask,
            removeTask,
            clearList,
            findItem,
            editTask,
            editItem
        }}
        >
        {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;