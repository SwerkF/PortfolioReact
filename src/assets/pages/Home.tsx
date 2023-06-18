import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Presentation from '../components/Presentation';
import Projets from '../components/Projets';
import Stages from '../components/Stages';
import Certifs from '../components/Certifs';
import Veilles from '../components/Veilles';
import Footer from '../components/Footer';
import Buttons from '../components/Buttons';

const Home = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <svg className="svg-1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="var(--primary)" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,218.7C672,203,768,149,864,154.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <Presentation />
            <svg style={{backgroundColor: '#efefef'}} xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="var(--primary)" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,208C672,181,768,107,864,112C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <Projets/>
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="var(--secondary)" fillOpacity="1" d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,245.3C672,235,768,213,864,176C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <Stages />
            <svg style={{backgroundColor: '#efefef'}} xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="var(--secondary)" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,192C384,213,480,267,576,250.7C672,235,768,149,864,133.3C960,117,1056,171,1152,165.3C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <Certifs />
            <svg style={{backgroundColor: '#0b0b0b'}} xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#efefef" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,117.3C672,96,768,64,864,90.7C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <Veilles />
            <svg style={{backgroundColor: '#0b0b0b'}} xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e5e5e5" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,197.3C640,213,800,267,960,282.7C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <Footer />
            <Buttons />
        </>
    );
};

export default Home;