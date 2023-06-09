import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/index.scss'
import './assets/css/bootstrap.min.css'

import AOS from 'aos'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)

AOS.init()


