import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

function GifExpertApp() {

  const [ categories, setCategories ] = useState(['Goku'])
  // const addElement = () => setCategories([...categories, 'Caballeros del Zodiaco']);

  return (
    <div className="content">
      <h2>GifExpertApp</h2>
      {/* <button onClick={ addElement }>Agregar</button> */}
      <AddCategory categories={ categories } setCategories= {setCategories} />


        { 
          categories.map((category) => {
            return <GifGrid key={category} category={ category } />
          }) 
        }
    </div>
  )
}

export default GifExpertApp;
