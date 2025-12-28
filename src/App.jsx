import UserImg from './components/left/UserImg';
import Contact from './components/left/Contact';
import Education from './components/left/Education';
import Skills from './components/left/Skills';
import Languages from './components/left/Languages';

import Header from './components/right/Header';
import Profile from './components/right/Profile';
import Work from './components/right/Work';
import Projects from './components/right/Projects';
import Certificates from './components/right/Certificates';
import Ref from './components/right/Ref';

import './styles/Left.css';
import './styles/Right.css';
import './styles/App.css';

function App() {
    return(
        <div className="resume">
            <aside className="resume-left">
                <UserImg />
                <Contact />
                <Education />
                <Skills />
                <Languages />
            </aside>
            <main className="resume-right">
                <Header />
                <Profile />
                <Projects />
                <Certificates />
                <Work />
                <Ref />
            </main>
            <div>
                <button onClick={() => window.print()}>Download CV</button>
            </div>
        </div>
    );
}

export default App;