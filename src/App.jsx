import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

function App(){
    return(
        <div className="App">
            <h1>CV Generator</h1>
            <GeneralInfo />
            <Education />
            <Experience />
        </div>
    );
}

export default App;