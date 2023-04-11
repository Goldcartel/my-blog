import React from 'react';
const TodoItem = (props) => {
  return (
    <div className='todo-item'>
      {props.item + "\n" + "\n" + "\n"}
      {props.index + 1}
      <button onClick={() => props.delItem(props.todoList, props.index)}>
        삭제</button>
    </div>
  )
}
export default TodoItem;



// export default class TodoItem extends React.Component {
  
//   render() {
//     return (
//       <div className='todo-item'>
//         <div style={{marginTop:"auto", marginBottom:"auto"}}>
//           {this.props.item}
//           <button onClick={() => this.props.delItem(this.props.todoList, this.props.index)}>삭제</button>
//         </div>
//       </div>
//     );
//   }
// };
