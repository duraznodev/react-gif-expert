import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newInput = inputValue.trim();
    if (newInput.length <= 1) return;

    onNewCategory(newInput);
    setInputValue('');
  };

  return (
    <form action='' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gif'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
