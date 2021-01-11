import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from "./component/todoTemplete";
import TodoInsert from "./component/todoInsert";
import TodoList from "./component/todoList";
import TodoListitem from "./component/todoListitem";

function createBulkTodos() {
  const array = [];
  for(let i=1;i<=2500;i++){
    array.push({
      id : i,
      // eslint-disable-next-line no-template-curly-in-string
      text : '할 일 ${i}',
      checked : false,
    });
  }
  return array;
}

const App = () => {

  const [todos,setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked:false,
      };
      setTodos(todos =>todos.concat(todo));
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos =>todos.filter(todo=>todo.id !== id));
    },[]
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(
          todo => todo.id === id ? {...todo,checked: !todo.checked} : todo,
        ),
      );
    },
    [],
  );
   // console.log(onInsert);
  return( 
  <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos = {todos} onToggle={onToggle} onRemove={onRemove}/>
  </TodoTemplate>
  
  )};

export default App;
