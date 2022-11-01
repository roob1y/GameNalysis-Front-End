import ListReviews  from "./ListReviews";
import CategoryList from "./CategoryList";

import { getAllReviews } from "../utils/api";

import { useState } from "react";

const HiddenRoles = () => {
  const [hiddenRolesReviews, setHiddenRolesReviews] = useState([]);
  getAllReviews().then(({ reviews }) => {
    const filteredHiddenRolesReviews = reviews.filter((review) => review.category === 'hidden-roles');
    setHiddenRolesReviews(filteredHiddenRolesReviews);
  });
  return (
    <>
      <main className="main">
        <h2>Reviews</h2>
        <CategoryList />
        <ListReviews reviews={hiddenRolesReviews} />
      </main>
    </>
  );
}

export default HiddenRoles;