import React, { useState } from 'react';

const Todo = () => {

  const [input, setInput] = useState();
  const [items, setItems] = useState([]);

  const addHandler = e => {
    e.preventDefault();
    if(input){
      setItems([...items,input]);
      setInput('')
    }
  }

  
  return (
    <div>

      <form onSubmit={addHandler}>
        <input
          type="text"
          id="inputTodo"
          name="inputTodo"
          placeholder="type a task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {items.map((ele, i) => {
          return (
            <div key={i}>{ele}
           
            </div>
        )})}
      </div>

    </div>
  );
};
export default Todo;
