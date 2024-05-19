import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({blog}) => {
  return (
    <div>
      <div>
        <Navlink to={`/`}>
            {blog.title}
        </Navlink>
      </div>
      <div>{blog.user}</div>
      <div>{blog.tag}</div>
      <div>
        {
            blog.hashtag.map((hashtag, index)=>{
                return <NavLink to={`/hashtag/${hashtag}`} key={index}>
                    <span>{hashtag}</span>
                </NavLink>
            })
        }
      </div>
      <div>
        {
            blog.body
        }
      </div>
    </div>
  )
}

export default BlogDetails
