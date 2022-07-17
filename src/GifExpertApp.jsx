import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  // Los hooks tienen que ir implicitos en el contexto mas alto de la aplicacion
  // para evitar perder la referencia
  const [categories, setCategories] = useState(['One Punch']);
  const onNewCategory = (newCategory) => {
    // Valorant
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onNewCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
