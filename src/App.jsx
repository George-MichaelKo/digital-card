import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Photo from '../components/photo.jsx'
import Intro from '../components/intro.jsx'
import About from '../components/about.jsx'
import Interest from '../components/interest.jsx'
import Footer from '../components/footer.jsx'

function App() {
  
  return (
    <div className="container">
      <Photo/>
      <div className="cont-b">
      <Intro/>
      <About/>
      <Interest/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
