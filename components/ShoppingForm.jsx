import { useState } from "react";

const ShoppingForm = ({ generateList }) => {
  const [groceryItems, setGroceryItems] = useState;
  ({
    item1: "",
    item2: "",
    item3: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    generateList(groceryItems);
  };
  const handleChange = (e) => {
    setGroceryItems(e.target.value);
  };
};

// const handleChange = (e) => {
//     // Destructure the values we want from the input
//     const { name, value } = e.target;
//     // Update the state object with the changes using: [name]:value
//     // This syntax will dynamically update the key that matches the 'name' with new 'value'
//     setGroceryItems((currentItems) => ({
//         ...currentItems,
//         [name]: value,
//     }));
// };
return (
  <>
    <form onSubmit={handleSubmit} />
    <label>
      item 1
      <input
        type="text"
        name="firstGroceryItem"
        value={firstGroceryItem}
        onChange={groceryItems.items1}
      />
    </label>
    <button type="submit"> Submit Stuff</button>
  </>
);
export default ShoppingForm;
