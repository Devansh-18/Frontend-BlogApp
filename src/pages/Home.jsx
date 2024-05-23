import React from 'react'
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col bg-slate-500 w-full h-full min-h-screen gap-4 relative'>
      <Navbar/>
      <Blogs/>
      <Footer/>

    </div>
  )
}

export default Home
