import React,{useState} from 'react';
import './App.css'; 
import TodoBoard from './lecture/TodoBoard';

function App() {
  const [inputValue,setInputValue]=useState('');
  const [todoList,setTodoList]=useState([ ]);
  const delItem=()=> {
    console.log(todoList)
    setTodoList((todoList)=> todoList.slice(0,-1))
    console.log(todoList)
  }
  const addItem=( )=>{
    console.log('inputValue 여기에!',inputValue);
    setTodoList([...todoList,inputValue]);
  }
  return (
    <div className="App">
      <input value={inputValue} type='text' onChange={(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가!</button>
      <TodoBoard todoList={todoList}/>
      <button onClick={delItem}>삭제</button>
    </div>
  );
}

export default App;