import React from 'react';

import Todos from './todoItem/Todos';

function TodosList({
  todos, onClickCompleteTodo, onClickEditTodo, 
  onClickDeleteTodo, setUpdatedItem, updatedItem, setTodos }) {

  return (
    <div className="todo-list">
        {todos!==[] && (
          <ul className="todo-list_param" id="todo-list_param">
           { todos.map((obj) => (
           <Todos 
            id={obj.id}
            key={obj.id}
            text={obj.text}
            done={obj.done}
            dateCreate={obj.dateCreate}
            timePlane={obj.timePlane}
            onClickCompleteTodo={onClickCompleteTodo}
            onClickEditTodo={onClickEditTodo}
            onClickDeleteTodo={onClickDeleteTodo}
            updatedItem={updatedItem}
            setUpdatedItem={setUpdatedItem}
            setTodos={setTodos}
            todos={todos}
            />))
           }
          </ul>)}
    </div>
  )
}

export default TodosList;