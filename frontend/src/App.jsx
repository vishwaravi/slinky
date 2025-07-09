import * as React from 'react';
import LinkShortener from './components/LinkShortener'
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound404 from './Pages/NotFound404';
import About from './Pages/About';

export default function ButtonUsage() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-1 flex flex-col">
              <LinkShortener />
              <Cards />
            </div>
          </div>
        } />
        
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </Router>

  )
}
