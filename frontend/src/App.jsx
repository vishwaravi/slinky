import * as React from 'react';
import LinkShortener from './components/LinkShortener'
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound404 from './Pages/NotFound404';
import About from './Pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <NavBar />
            <main className="container mx-auto px-4 py-8">
              <div className="max-w-6xl mx-auto space-y-16">
                <LinkShortener />
                <Cards />
              </div>
            </main>
          </div>
        } />
        
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}
