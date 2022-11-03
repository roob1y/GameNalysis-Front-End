import { AiFillUpSquare, AiFillDownSquare } from "react-icons/ai";
import { useState, useEffect } from "react";

const Votes = ({ votes }) => {
  return (
    <>
      <div className="">
        <h5>votes: {votes}</h5>
      </div>
      <div>
        <button>
          <AiFillUpSquare size="6em" color="green" />
        </button>
      </div>
      <div>
        <button>
          <AiFillDownSquare size="6em" color="red" />
        </button>
      </div>
    </>
  );
};

export default Votes;
