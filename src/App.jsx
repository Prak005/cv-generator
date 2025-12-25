import UserImg from './components/left/UserImg';
import Contact from './components/left/Contact';
import Education from './components/left/Education';
import Skills from './components/left/Skills';
import Languages from './components/left/Languages';

import Profile from './components/right/Profile';
import WorkExperience from './components/right/WorkExperience';
import References from './components/right/Reference';

import './styles/left.css';
import './styles/right.css';
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
                <Profile />
                <WorkExperience />
                <References />
            </main>
        </div>
    );
}

export default App;