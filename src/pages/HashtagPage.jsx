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
    <div className='flex flex-col bg-slate-500 w-full h-full gap-4'>
      <Navbar/>
      <div className='w-2/3 mx-auto'>
        <button className='border-2 border-slate-600 rounded-md w-20 hover:bg-slate-700 transition-all ease-in-out' onClick={()=>{
          navigate(-1);
        }}>
          Back
        </button>
        <div className='text-lg font-bold'>
          Showing Articles on <span>{hashtag}</span>
        </div>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default HashtagPage
