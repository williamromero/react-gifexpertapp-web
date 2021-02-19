import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ categories, setCategories }) => {
  let timer = 0;
  const [ inputValue, setInputValue ] = useState('');

  // const handleInputChange = (e) =>  { setInputValue(e); }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit ha sido detenido');
    inputValue.trim().length > 2 ? setCategories([inputValue, ...categories]) : setInputValue('');
    // Si no se tuvieran las categorias, podría llamarse el cats que viene en el callbak de SetCategories
    // inputValue.trim().length > 2 ? setCategories(cats => [...cats, inputValue]) : setInputValue('');
  };
  
  const handleKeyUp = (e) => {
    let elm = e.target.value;
    clearTimeout(timer); 
    timer = setTimeout(() => { setInputValue(elm) }, 300);
  }

  return (
    <form className="searchBox" onSubmit={ handleSubmit }>
      <span>Tu búsqueda es: { inputValue }</span>
      <input type="text" name="search" id="searchItem" placeholder="Ingresa tu búsqueda" onKeyUp={ handleKeyUp } autoComplete="off" />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}


export default AddCategory
