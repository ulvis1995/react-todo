import React, { useState } from 'react';
import { inputTest } from "./todoItem/dateChande";

function TodoInput({onClickAddTodo}) {
  const [value, setValue] = useState ('');
  const [valueDate, setValueDate] = useState ('');

  const resultInput = () => {
    if (value !== '') {
      if (valueDate !== '') {
        let todo = {
          text: value,
          id: new Date().getTime(),
          done: false,
          dateCreate: new Date(),
          timePlane: `${inputTest(valueDate)}`
        }
        onClickAddTodo(todo);
        setValue('');
        setValueDate('');
      } else {
        alert ('Введите планируемую дату завершения дела');
      }
    }
  }

  return (
    <div className="todo-enter" id="todo-enter">
        <div className="todo-placeholder">
            <input type="text" placeholder="Добавить новое дело" 
              value={value} onChange={e => setValue(e.target.value)} autoFocus/>
        </div>
        <div className="todo-date">
            <input type="date" 
            value={valueDate} onChange={e => setValueDate(e.target.value)}
            />
        </div>
        <div className="todo-button">
            <button 
              onClick={resultInput}
              id="buttonAdd">Добавить
            </button>
        </div>
    </div>
  )
}

export default TodoInput;