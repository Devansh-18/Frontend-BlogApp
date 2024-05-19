import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({blog}) => {
  return (
    <div>
      <div>
        <NavLink to={`/blog/${blog._id}`}>
            {blog.title}
        </NavLink>
      </div>
      <div>{blog.user}</div>
      <NavLink to={`/tag/${blog.tag.replaceAll(" ","-")}`}>
        {blog.tag}
      </NavLink>
      <div>
        {
            blog.hashtag.map((hashtag, index)=>{
                return <NavLink to={`/hashtag/${blog.hashtag.replaceAll(" ","-")}`} key={index}>
                    <span>{`#${hashtag}`}</span>
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
