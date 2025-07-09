import React from 'react'

const TaskList=()=>{
    const tasks=[
         { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Build a project', completed: false },
    { id: 3, title: 'Review code', completed: false },
    ];
    
 return (
    <div>
      <h3>Task List</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} — 
            <strong> {task.completed ? 'Done' : 'Pending'}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;