/* eslint-disable no-irregular-whitespace */
import {useEffect} from 'react';
import Navbar from './assets/components/Navbar';
import Landing from './assets/components/Landing';
import Presentation from './assets/components/Presentation';
import Projets from './assets/components/Projets';
import Stages from './assets/components/Stages'

function App() {

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

  useEffect(() => {
    let random = Math.floor(Math.random() * colors.length)
    document.documentElement.style.setProperty("--primary", colors[random]["--primary"])
    document.documentElement.style.setProperty("--secondary", colors[random]["--secondary"])
  })

  return (
    <>
      <Navbar />
      <Landing />
      <svg className="svg-1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--primary)" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,218.7C672,203,768,149,864,154.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <Presentation />
      <svg style={{backgroundColor: '#edecec'}} xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--primary)" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,208C672,181,768,107,864,112C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <Projets/>
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--secondary)" fillOpacity="1" d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,245.3C672,235,768,213,864,176C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <Stages />
    </>
  )
}

export default App
