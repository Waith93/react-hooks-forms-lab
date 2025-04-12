import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState(items);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(searchValue) {
    setSearch(searchValue);
  }

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }

  const itemsToDisplay = itemList
    .filter((item) =>
      selectedCategory === "All" ? true : item.category === selectedCategory
    )
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
