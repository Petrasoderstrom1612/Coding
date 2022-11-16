import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import LastPage from './LastPage'
import Contact from './Contact'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Nav />} /> {/* path is where I want to come, element is my component */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/lastpage" element={<LastPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
