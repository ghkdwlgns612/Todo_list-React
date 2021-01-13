import React, { useState } from "react";
import './todoListitem.scss'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline,MdContentCut} from "react-icons/md" 
import cn from 'classnames';

const TodoListitem = ({todo,onRemove,setTodos}) => {
    const {id,text,checked} = todo;
    const todo_text = todo.text;
    const [value,setValue] = useState(todo.text);
   // console.log({value});
    

    
    return(
    <div className="TodoListitem">
        <div className={cn('checkbox',{checked})}>
            {checked?<MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
            <div className='text'>{value}</div>    
        </div>
        <div className='fix'><MdContentCut onClick={e=>{e.preventDefault();
        const propmpt_value = prompt("입력하세요");
        setValue(propmpt_value);
        console.log({value});}}/>
        </div>
        <div className='remove'><MdRemoveCircleOutline onClick={()=>onRemove(id)}/></div>
    </div>
    );


};

export default TodoListitem;