import React from "react";
import { usePagination, DOTS } from "../../hooks";

import {
  PaginationContainer,
  PaginationItem,
  Arrow,
} from "./Pagination.styled";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  let lastPage = paginationRange[paginationRange.length - 1];

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <PaginationContainer>
      <PaginationItem
        className={currentPage === 1 ? 'disabled' : ''} 
        onClick={onPrevious}
      >
        <Arrow className="left" />
      </PaginationItem>
      {paginationRange.map((pageNumber, index) => {
        console.log('i: ', index);
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <PaginationItem key={index} className="dots">&#8230;</PaginationItem>;
        }
        // Render our Page Pills
        return (
          <PaginationItem
            className={pageNumber === currentPage ? "selected" : ''}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        className={currentPage === lastPage ? 'disabled' : ''}
        onClick={onNext}
      >
        <Arrow className="right" />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;

