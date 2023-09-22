import React from 'react'

const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <form className="create_form">
      <input
        type="text"
        placeholder='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <input type='submit' value="Add todo" onClick={handleAction} />
    </form>
  );
};

export default NewTodoForm
