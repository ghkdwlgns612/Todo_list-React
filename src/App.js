import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from "./component/todoTemplete";
import TodoInsert from "./component/todoInsert";
import TodoList from "./component/todoList";
import TodoListitem from "./component/todoListitem";

const App = () => {
  
  const users = [
    {
      id : 1,
      text : "hello",
      checked : true
    },
    {
      id : 2,
      text : "hello1",
      checked : false
    },
    {
      id : 3,
      text : "hello2",
      checked : false
    }
  ];
    
  const nextId = useRef(4);
  const [todos,setTodos] = useState(users);
  
  //console.log({todos});

  const onInsert = useCallback(text => {const todo = {id : nextId.current, text, checked:false,}; 
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]);

  
  const onRemove = useCallback(id => {setTodos(todos.filter(todo => todo.id !== id))},[todos]);

  // const onSet = useCallback(text =>{const data = prompt('입력하세요');
  // console.log({data});
  // setTodos({text : {data}});
  // console.log({todos});
  // },[todos]);

  
  
//  const onFix = useCallback(text => {console.log(text);},[todos]);

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} setTodos={setTodos}/>
    </TodoTemplate>

  );
}

export default App;
