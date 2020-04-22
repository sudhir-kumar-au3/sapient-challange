import React from 'react'
function Spinner() {
    return (
            <div className="d-flex justify-content-center text-center">
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
    )
}

export default Spinner
