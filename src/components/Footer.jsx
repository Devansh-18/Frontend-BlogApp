import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    
    const {page,totalPages,pageChangeHandler} = useContext(AppContext);
    if(!totalPages) return null;
  return (
    <div className='w-full fixed bottom-0 bg-slate-400 py-4'>
      <div className='mx-auto w-2/3 flex justify-between'>

      
          <div className='flex gap-2'>
            {
                page>1 &&
                (
                    <button className='border-2 border-slate-600 rounded-md w-20 hover:bg-slate-700 transition-all ease-in-out' onClick={()=>pageChangeHandler(page-1)}>
                        Previous
                    </button>
                )
            }
            {
                page<totalPages &&
                (
                    <button className='border-2 border-slate-600 rounded-md w-20 hover:bg-slate-700 transition-all ease-in-out' onClick={()=>pageChangeHandler(page+1)}>
                        Next
                    </button>
                )
            }
          </div>
          <div className='text-black'>
            Page {page} of {totalPages}
          </div>
          </div>
          </div>
  )
}

export default Footer
