import React, { useContext, useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const [blog,setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const {loading,setLoading} = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  async function fetchBlogById(){
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    }
    catch(error){
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);

  }

  useEffect(()=>{
    if(blogId){
      fetchBlogById();
    }
  },[location.pathname])

  return (
    <div>
      <Navbar/>
      <div>
        <button onClick={()=>navigate(-1)}>
          Back
        </button>
      </div>
      {
        loading?
        (<Spinner/>):
        (
          blog ? 
          (
            <div>
              <BlogDetails blog={blog}/>
              <h2>Related Blogs</h2>
              {
                relatedBlogs.map((blog)=>(
                  <BlogDetails blog={blog}/>
                ))
              }
            </div>
          ):
          (
            <div>
              No Blog Available
            </div>
          )
        )
      }
    </div>
  )
}

export default BlogPage
