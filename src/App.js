import * as React from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import About from "./About";
import Questions from './components/Questions'
import Home from './components/Home'

import ScrollToTopButton from './ScrollToTopButton'
// import { Container } from '@mui/material '
import { Container } from '@mui/material'
import ChatModal from './components/ChatModal'

function App() {
  return (
    <>

      <Navbar />

      <Container fixed>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="home" element={<Home />} />
          <Route path="/category/:categoryId" element={<Questions />} />

        </Routes>
      </Container>

      <ChatModal />
      <ScrollToTopButton />

       
    </>
  )
}

export default App
