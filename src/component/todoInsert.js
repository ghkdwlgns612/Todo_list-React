import React, { useCallback, useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import './todoInsert.scss'

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');

    const onChange = useCallback(e => {setValue(e.target.value);},[]);
    
//    console.log({value});

    const onSubmit = useCallback(e => {onInsert(value); setValue(''); e.preventDefault();}
    ,[value])

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
        <input type='text' placeholder='할 일을 입력하세요.' onChange={onChange} value={value} />
        <button type="submit"><BsFillPlusSquareFill/></button>
        </form>
    );
}

export default TodoInsert;
