import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue,setInputValue] = useState('Hola Mundo');
    const handleInputChange = (e)=>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       // console.log('SubmitHecho');
       setCategories(cats => [inputValue, ...cats]);
       setInputValue('');

    }
  return (
    <form onSubmit={handleSubmit}>
    <h1>{inputValue}</h1>
       <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
    
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

