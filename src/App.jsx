import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  
  return (
    <div className='flex flex-col'>
      <Routes>
        <Route path='/' element={<Home/>} />
        
      </Routes>


    </div>
  )
}

export default App
