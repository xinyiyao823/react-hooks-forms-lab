import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  //initial state is empty string before user types anything in for state variable in name input
  const [name, setName] = useState("") 
 // set state for category selection, initial selection is Produce
 const [category, setCategory] = useState("Produce")

  function handleNameChange(e) {
    setName(e.target.value)
    
  }
  
  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // create object for newItem added by user
    onItemFormSubmit({
      id: uuid(),
      name,
      category
    })
    setName("")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        {/* create state variable for each input element */}
        <input 
        value={name} 
        onChange={handleNameChange}
        type="text" 
        name="name"
        /> 
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
