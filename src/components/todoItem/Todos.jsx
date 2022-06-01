import React from 'react';
import { getLocalDate, getTimeCreate } from "./dateChande";

function Todos({ 
  id, text, timePlane, dateCreate, done, setTodos,
  onClickDeleteTodo, onClickCompleteTodo, onClickEditTodo, updatedItem, setUpdatedItem}) {
    
    const isCurrentBeingUpdated = updatedItem ;

    const deleteTodo = (id) => {
      onClickDeleteTodo(id);
    };

    const completeTodo = (id) => {
      onClickCompleteTodo(id);
    };

    const editTodo = (id) => {
      onClickEditTodo(id);
    };

    const handleInputTodo = ({ target: { value } }) => {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, text: value } : item
        )
      );
    }

    const renderTitleOrInput = () => {
      return isCurrentBeingUpdated === id 
      ? (<input type='text' value={text} onChange={handleInputTodo}
        onClick={(e)=> e.stopPropagation()}/>) 
      : (text);
    };

    const handleInputDateTodo = ({ target: { value } }) => {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, timePlane: value } : item
        )
      );
    }

    const renderDateOrInput = () => {
      return isCurrentBeingUpdated === id
      ? (<input type='date' value={timePlane} onChange={handleInputDateTodo}
          onClick={(e)=> e.stopPropagation()}/>)
      : (getLocalDate(timePlane))
    }
    
    return (
      <li 
        className={`${done === true ? 'todo-item todo-item-complete' : 'todo-item'}`} 
        id={id}
        onClick={()=> completeTodo(id)}
        key={id}
      >
        <div className="time-create">
          Завершить до: {renderDateOrInput()}
        </div>
        <div className="time-create">
          <p>Дата создания: {getTimeCreate(dateCreate)}</p>
        </div>
        <div className="todo-text">
          {renderTitleOrInput()}
        </div>
        <button className="button-edit"
          onClick={(e) => 
          {e.stopPropagation()
          editTodo(id)
          setUpdatedItem(isCurrentBeingUpdated ? null : id)}}>
          <p className='material-symbols-outlined'>edit</p>
        </button>
        <button className="button-delete"
          onClick={(e)=>{
            deleteTodo(id)
            e.stopPropagation()
          }}>
          <p className="material-symbols-outlined">delete</p>
        </button>
      </li>
    )
}

export default Todos