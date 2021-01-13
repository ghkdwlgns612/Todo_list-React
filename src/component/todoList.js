import React from "react";
import './todoListitem.scss'
import TodoListitem from "./todoListitem";

const TodoList = ({todos,onRemove,setTodos}) => {

//    console.log({todos});

    return   (
    <div className='TodoList'>
         {todos.map(todo => (<TodoListitem setTodos={setTodos} todo={todo} key={todo.id} onRemove={onRemove} />))} 
    </div>

    );
};

export default TodoList;