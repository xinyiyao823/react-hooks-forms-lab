import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Define State for Search
  const [searchInput, setSearchInput] = useState("") //empty string before user types anything in

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  // for category
  .filter(
    (item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
    })
  //for search
  .filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))

  function onSearchChange(e) {
    let input = e.target.value;
    setSearchInput(input)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={searchInput} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
