import React from 'react'

function Pagination({currentPage, totalPage,nextPageUrl, handleNextPage, handlePreviousPage}) {
    return (
        <div className="pagination">
            <p> Page {currentPage} of {totalPage}</p>

            <button onClick={handlePreviousPage} disabled={currentPage === 1}> Pervious Page </button>

            <button onClick={handleNextPage} disabled={!nextPageUrl} >Next Page </button>
        </div>
    )
}

export default Pagination