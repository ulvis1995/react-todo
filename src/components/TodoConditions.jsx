import React from 'react';

function TodoConditions({todos, onClickCompleteAll, onClickDeleteAll}) {
  const completeAll = () => {
    onClickCompleteAll();
  };

  const deleteAll = () => {
    onClickDeleteAll();
  };

  return (
    <div 
      className={`${(todos.length === 0) 
        ? "button-condition passive" 
        : "button-condition"}`}
      >
        <div>
          <button onClick={() => completeAll()}>
            Завершить все</button>
        </div>
        <div>
          <button onClick={() => deleteAll()}>
            Удалить все</button>
        </div>
    </div>
  )
}

export default TodoConditions;