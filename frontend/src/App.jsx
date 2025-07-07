import * as React from 'react';
import LinkShortener from './components/LinkShortener'
import NavBar from './components/NavBar';
import Cards from './components/Cards';
export default function ButtonUsage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col">
        <LinkShortener />
        <Cards />
      </div>
    </div>
  )
}
