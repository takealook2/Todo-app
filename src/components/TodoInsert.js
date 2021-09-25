import React, { useCallback, useState } from "react";
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback (e => {
        setValue(e.target.value);
        // 생성하려는 함수 vlaue에 
    }, []); // 비어있는 배열을 넣어 컴포넌트가 렌더링될 때 만들었던 함수 계속해서 재사용

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            // submit 이벤트는 브라우저에 새로고침 발생시킴
            // 이를 방지하기 위해 다음 함수 호출
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange} />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;