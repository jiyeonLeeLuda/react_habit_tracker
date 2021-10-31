import React, { memo, useRef } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = useRef(); // React.createRef();
  const formRef = useRef(); //React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); //submit 클릭시 페이지 새로고침 발생을 없앰 (default)
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value='';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='add-habit-box' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-habit-input'
        placeholder='Habit'
      />
      <button className='habit-button add-habit'>Add</button>
    </form>
  );
});

export default HabitAddForm;
