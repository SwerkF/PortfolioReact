/* eslint-disable no-irregular-whitespace */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    const colors = [
      {"--primary": "#048B9A", "--secondary": "#7A9E7E"},
      {"--primary": "#F18F01", "--secondary": "#006E90"},
      {"--primary": "#439A86", "--secondary": "#6969B3"},
      {"--primary": "#187795", "--secondary": "#2589BD"},
      {"--primary": "#97C100", "--secondary": "#436436"},
      {"--primary": "#EE7B30", "--secondary": "#846B8A"},
      {"--primary": "#679289", "--secondary": "#1D7874"},
      {"--primary": "#246A73", "--secondary": "#E3170A"},
      {"--primary": "#FF668C", "--secondary": "#607196"},
      {"--primary": "#993399", "--secondary": "#F5DEB3"},
      {"--primary": "#008080", "--secondary": "#DAB568"},
      {"--primary": "#483D8B", "--secondary": "#E5D121"},
      {"--primary": "#FF6347", "--secondary": "#006400"},
      {"--primary": "#FFA07A", "--secondary": "#4682B4"},
      {"--primary": "#DA70D6", "--secondary": "#00D66B"},
      {"--primary": "#6495ED", "--secondary": "#8B0000"},
      {"--primary": "#7B68EE", "--secondary": "#F08080"},
      {"--primary": "#9370DB", "--secondary": "#FFA500"}
    ]
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty("--primary", color["--primary"]);
    document.documentElement.style.setProperty("--secondary", color["--secondary"]);
    
    window.addEventListener('beforeunload', (e) => {
      if (!localStorage.getItem('rememberMe')) {
        localStorage.removeItem('token')
      }
    })


  }, [])

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
