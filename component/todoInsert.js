import React, { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import './todoInsert.scss'

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');

    const onChange1 = useCallback(e =>{
        setValue(e.target.value);
 //       console.log(e.target.value);
    },[])

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert,value],
    );
 //   console.log(onInsert);
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange1} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;