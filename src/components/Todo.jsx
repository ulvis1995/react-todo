import React, { useState } from 'react';
import TodoConditions from './TodoConditions';
import TodoInput from './TodoInput';
import TodosList from './TodosList';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [updatedItem, setUpdatedItem] = useState(null);

  const handleAddTodo = (todo) => {
    setTodos(prev => [...prev, todo]);
  };

  const handleDeleteTodos = (id) => {
    const ind = todos.findIndex(obj => obj.id===id);
    todos.splice(ind, 1);
    setTodos(prev => [...prev]);
  };

  const handleCompleteTodo = (id) => {
    const ind = todos.findIndex(obj => obj.id===id);
    todos[ind].done ===  true 
      ? todos[ind].done = false
      :todos[ind].done = true

    setTodos(prev => [...prev]);
  };

  const handleCompleteAll = () => {
    todos.forEach(obj => obj.done = true);
    setTodos(prev => [...prev]);
  };

  const handleDeleteAll = () => {
    todos.length = 0;
    setTodos(prev => [...prev]);
  };

  const handleEditTodo = (id) => {
    const ind = todos.findIndex(obj => obj.id===id);
    setUpdatedItem (ind)
  };


  return (
    <div className='todo'>
      <TodoInput onClickAddTodo={handleAddTodo} />
      <TodoConditions todos={todos} 
        onClickCompleteAll={handleCompleteAll}
        onClickDeleteAll={handleDeleteAll} />
      <TodosList todos={todos} 
        onClickDeleteTodo={handleDeleteTodos}
        onClickCompleteTodo={handleCompleteTodo}
        onClickEditTodo={handleEditTodo}
        updatedItem={updatedItem}
        setUpdatedItem={setUpdatedItem}
        setTodos={setTodos}
        />
    </div>
  )
}

export default Todo;