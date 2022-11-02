import { Link } from "react-router-dom";

const CategoryList = () => {
  const categoryOptions = [
    "strategy",
    "hidden-roles",
    "dexterity",
    "push-your-luck",
    "roll-and-write",
    "deck-building",
    "engine-building",
  ];
  return (
      <ul>
        <h3>Categories</h3>
        {categoryOptions.map((category) => {
          return <Link to={`/${category}`} key={category}><li>{category}</li></Link>;
        })}
      </ul>
  );
};

export default CategoryList;
