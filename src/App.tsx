/* eslint-disable no-irregular-whitespace */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  )
}

export default App
