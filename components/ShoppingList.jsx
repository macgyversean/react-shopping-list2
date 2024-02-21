const ShoppingList = ({ items }) => {
  const { item1, item2, item3 } = items;
  return (
    <>
      <ul>
        {item1}
        {item2}
        {item3}
      </ul>
    </>
  );
};
export default ShoppingList;
