import React from 'react'

function Pagination({gotoNextPage,gotoPrevPage}) {
    return (
        <div>
            {gotoPrevPage && <button onclick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}

export default Pagination
