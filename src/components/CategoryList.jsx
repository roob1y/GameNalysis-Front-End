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
      {categoryOptions.map((category) => {
        return <Link to={`/${category}`} key={category}>{category}</Link>;
      })}
    </ul>
  );
};

export default CategoryList;
