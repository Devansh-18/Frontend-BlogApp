import React, { useContext } from 'react'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'
import { AppContext } from '../context/AppContext'

const Blogs = () => {

  const {loading, blogs} = useContext(AppContext);

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
