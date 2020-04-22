import React from 'react'

function LoadMore(props) {
    return (
        <div className="text-center p-2 m-5">
        <button className="btn btn-info" onClick={props.onLoadMore}>
          Load More
        </button>
      </div>
    )
}

export default LoadMore
