import React from 'react';
import './todoTemplete.scss';

const TodoTemplate = ({children}) => {
    return(
    <div className='Todotemplate'>
        <div className='app-title'>일정관리</div>
        <div className='content'>{children}</div>
    </div>
    );
};

export default TodoTemplate;