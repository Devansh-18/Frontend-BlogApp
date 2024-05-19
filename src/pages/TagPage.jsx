import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Navbar/>
      <button onclick={()=>{
        navigate(-1);
      }}>
        Back
      </button>
      <div>
        Showing Articles on <span>{tag}</span>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default TagPage
