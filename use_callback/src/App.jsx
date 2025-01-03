// import React,{ userState, useCallback, useState } from 'react';

// function Child ({ onClick }) {
//   console.log('Child render');
//   return <button onClick={onClick}>Click Me</button>
// }


// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');


//   const handleClick = useCallback(()  =>{
//     setCount ((prev) => prev +1);
//   },[]);

//   return(
//     <div>
//       <h1>useCallback Example</h1>
//       <p>count: {count}</p>
//       <Child onClick={handleClick} />
//       <input
//        type="text" 
//        value={text}
//        onChange={(e) => setText(e.target.value)}
//        placeholder='Type somthing...'
//        />
//     </div>
//   )
// }









import { useState } from "react";
import ReactDom from 'react-dom/client';

const App = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] =useState([]);

    const calculataion = expansiveCalculation(count);
    const increment = () => {
      setCount((c) => c + 10000);
    };
    const addTodo = () => {
      setTodo((t) => [...t, 'new Todo']);
    };

    return(
      <div>
        <div>
          <h2>my todo</h2>
          {todo.map((todo, index)=>{
            return <p key={index}>{todo}</p>

          })}
          <button onClick={addTodo}>add Todo</button>
        </div>
        <hr />
      <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {calculataion}
      </div>
      </div>
    );
  
};

const expansiveCalculation = (num) => {
  console.log('Calculating...');
  for(let i =0; i < 100000000; i++){
    num +=1;
  }
  return num;
};

export default App

