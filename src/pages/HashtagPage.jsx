import React from 'react'
import Blogs from '../components/Blogs';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HashtagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const hashtag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Navbar/>
      <button onclick={()=>{
        navigate(-1);
      }}>
        Back
      </button>
      <div>
        Showing Articles on <span>{hashtag}</span>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default HashtagPage
