import React,{useState} from 'react';
import './App.css'; 
import TodoBoard from './lecture/TodoBoard';
import Todo from './lecture/Todo';

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => setTodoList((todoList)=>todoList = [...todoList, value]);
  const delItem = () => setTodoList((todoList)=>todoList = todoList.slice(0,-1));

  return(
    <div className='App'>
      <input value={value} type="text" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={addItem}>추가</button>
      <button onClick={delItem}>삭제</button>
      <Todo todoList={todoList}/>
    </div>
  )
}

export default App;