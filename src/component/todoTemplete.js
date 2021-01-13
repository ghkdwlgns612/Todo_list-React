import React from 'react';
import TodoInsert from './todoInsert';
import TodoList from './todoList';
import './todoTemplete.scss';

const TodoTemplate = ({children}) => {
    return(
        <div className='TodoTemplate'>
            <div className="app-title">Todo-List</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;