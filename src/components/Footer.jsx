import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    
    const {page,totalPages,pageChangeHandler} = useContext(AppContext);
  return (
    <div>
      <div>
        {
            page>1 &&
            (
                <button onClick={pageChangeHandler(page-1)}>
                    Previous
                </button>
            )
        }
        {
            page<totalPages &&
            (
                <button onClick={pageChangeHandler(page+1)}>
                    Next
                </button>
            )
        }
      </div>
      <div>
        Page {page} of {totalPages}
      </div>
    </div>
  )
}

export default Footer
