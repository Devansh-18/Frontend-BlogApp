import React, { useContext } from 'react'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'
import { AppContext } from '../context/AppContext'

const Blogs = () => {

  const {loading, blogs} = useContext(AppContext);

  return (
    <div className='w-full flex flex-col items-center gap-2 mt-16 mb-80'>
      {
        loading?
        (<Spinner/>):
        (
          blogs.length === 0 ?
          (
            <div>No Blogs To Show</div>
          ):
          (
            blogs.map((blog)=>{
              return <BlogDetails key={blog._id} blog={blog}/>
            })
          )
        )
      }
    </div>
  )
}

export default Blogs
