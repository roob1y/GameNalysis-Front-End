import React from "react";

function SortByOrder({ searchParams, setSearchParams }) {
  function handleParamChange(key, val) {
    console.log('key: ', key);
    searchParams.set(key, val);
    setSearchParams(searchParams);
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="sort_by">
          Sort By
          <select
            name="sort_by"
            id="sort_by"
            type="dropdown"
            onChange={(event) => {
              handleParamChange("sort_by", event.target.value);
            }}
            defaultValue={searchParams.get("sort_by")}
          >
            <option value="created_at">Date Added</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
            <option value="designer">Designer</option>
            <option value="owner">Owner</option>
          </select>
        </label>
        <label htmlFor="sort_by">
          Order
          <select
            name="order"
            id="order"
            type="dropdown"
            onChange={(event) => handleParamChange("order", event.target.value)}
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

export default SortByOrder;
