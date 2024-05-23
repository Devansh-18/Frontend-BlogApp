import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage'
import HashtagPage from './pages/HashtagPage';
import { useLocation,useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams();

  const {fetchBlogs} = useContext(AppContext);

  useEffect(()=>{
    
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("/tag")){
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogs(Number(page),tag,null);
    }
    else if(location.pathname.includes("hashtag")){
      const hashtag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogs(Number(page), null, hashtag);
    }
    else{
      fetchBlogs(Number(page));
    }
    
  },[location.pathname, location.search])
  
  return (
    <div className='w-full h-full min-h-screen flex'>
      <Routes className='w-full h-full'>
        <Route className='h-full' path='/' element={<Home/>} />
        <Route path='/blog/:blogId' element={<BlogPage/>} />
        <Route path='/tag/:tag' element={<TagPage/>} />
        <Route path='/hashtag/:hashtag' element={<HashtagPage/>} />
      </Routes>


    </div>
  )
}

export default App
