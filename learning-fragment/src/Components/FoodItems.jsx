import Items from "./Items";

const FoodItems = (props) => {
  let { items } = props;

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            item={item}
            handleBuyButtonClick={() => console.log(`${item} bought`)}
          />
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
