import React from 'react'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = ({loading, blogs}) => {
  return (
    <div>
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
