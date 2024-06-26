import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import './App.css';



const App = () => {
  return (
    <Box width={'400px'} sx={{width: {xl: '1000px'}}} m={'auto'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
        <Footer />
    </Box>
    
  )
}

export default App