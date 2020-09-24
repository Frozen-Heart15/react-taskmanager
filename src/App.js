import React from 'react';
import './App.css';
import TaskContextProvider from './Context/TaskContext';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import Header from './Components/Header';


function App() {
  return (
    
     <TaskContextProvider>
     <div className='container'>
     <div className='app-wrapper'>
       <Header/>
       <div className='main'>
         <TaskForm/>
         <TaskList/>
       </div>
     </div>
     </div>  
     </TaskContextProvider> 
    
  );
}

export default App;
