import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({blog}) => {
  const [readmore, setReadmore] = useState(true);
  function readmoreHandler(){
    setReadmore(!readmore);
  }
  
  return (
    <div className='w-2/3 border-b-2 py-2'>
      <div className='text-lg font-bold'>
        <NavLink to={`/blog/${blog._id}`}>
            {blog.title}
        </NavLink>
      </div>
      <div className='text-xs'>by- {blog.user}</div>
      <div className='text-sm'>
        <NavLink to={`/tag/${blog.tag.replaceAll(" ","-")}`}>
          {blog.tag}
        </NavLink>
      </div>
      <div className='flex gap-2 text-sm font-semibold text-blue-900 italic'>
        {
            blog.hashtag.map((hashtag, index)=>{
                return <NavLink to={`/hashtag/${hashtag.replace(" ","-")}`} key={index}>
                    <span>{`#${hashtag}`}</span>
                </NavLink>
            })
        }
      </div>
      <div className='text-sm'>
        {
          blog.body.length >100 ?
           (
            readmore ? 
            (
              <div>
                {blog.body.substr(0,100)}...<span onClick={readmoreHandler} className='cursor-pointer text-blue-700'>Read More</span>
              </div>
            ):
            (
              <div>
                {blog.body} <span onClick={readmoreHandler} className='cursor-pointer text-blue-700'>Show Less</span>
              </div>
            )
          ):
          (
            <div>
                {blog.body}
              </div>
          )
        }
      </div>
    </div>
  )
}

export default BlogDetails
