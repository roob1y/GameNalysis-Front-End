import React from "react";

function SortByReviews({ searchParams, setSearchParams }) {
  function handleParamChange(key, val) {
    searchParams.set(key, val);
    setSearchParams(searchParams);
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="sort_by">
          Sorted By
          <select
            name="sort_by"
            id="sort_by"
            type="dropdown"
            onChange={(event) => {
              handleParamChange("sort_by", event.target.value);
            }}
            defaultValue={searchParams.get("sort_by")}
          >
            <option value="created_at">Date added</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label htmlFor="sort_by">
          Order
          <select
            name="order"
            id="order"
            type="dropdown"
            onChange={(event) =>
              handleParamChange("order", event.target.value)
            }
            defaultValue={searchParams.get("order")}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </fieldset>
    </form>
  );
}

export default SortByReviews;
