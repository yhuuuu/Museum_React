import React from 'react'

function Pagination({ currentPage, totalPage, nextPageUrl, handleNextPage, handlePreviousPage }) {

    return (
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
  
  
        <button onClick={handleNextPage} disabled={!nextPageUrl}>
          Next Page
        </button>
  
        <p>
          Page {currentPage} of {totalPage}
        </p>
      </div>
    );
  }
  

export default Pagination