import React, { useState, useEffect, useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Sandbox = () => {
  const [todo, changeTodoHook] = useState('');

  useEffect(() => {
    console.log('todo', todo);
  }, [todo]);

  const [list, setTodoListHook] = useState([]);

  useEffect(() => {
    console.log('list', list);
  }, [list]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  const changeTodo = ({ target }) => changeTodoHook(target.value);

  const appendTodo = () => {
    const todoText = todo.trim();

    if (todoText.length) {
      setTodoListHook([...list, todoText]);
      changeTodoHook('');
    }
  };

  const removeTodo = key => {
    const spliced = [...list];

    spliced.splice(key, 1);
    setTodoListHook(spliced);
  };

  return (
    <div>
      <input type="text" value={todo} onChange={changeTodo}/>

      <button type="button" onClick={appendTodo}>
        Нажми на меня
      </button>

      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

      {
        list.length && (
          list.map((item, key) => (
            <div key={key}>
              {item}
              <button type="button" onClick={() => removeTodo(key)}>x</button>
            </div>
          ))
        )
      }
    </div>
  );
};

export default Sandbox;
