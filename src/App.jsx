import { useState } from "react";

import UserImg from "./components/left/UserImg";
import Contact from "./components/left/Contact";
import Education from "./components/left/Education";
import Skills from "./components/left/Skills";
import Languages from "./components/left/Languages";

import Header from "./components/right/Header";
import Profile from "./components/right/Profile";
import Work from "./components/right/Work";
import Projects from "./components/right/Projects";
import Certificates from "./components/right/Certificates";
import Ref from "./components/right/Ref";

import "./styles/Left.css";
import "./styles/Right.css";
import "./styles/App.css";

function App() {
  const [viewMode, setViewMode] = useState(false);

  return (
    <>
      <div id="cv-preview" className="resume">
        <aside className="resume-left">
          <UserImg viewMode={viewMode} />
          <Contact viewMode={viewMode} />
          <Education viewMode={viewMode} />
          <Skills viewMode={viewMode} />
          <Languages viewMode={viewMode} />
        </aside>

        <main className="resume-right">
          <Header viewMode={viewMode} />
          <Profile viewMode={viewMode} />
          <Projects viewMode={viewMode} />
          <Certificates viewMode={viewMode} />
          <Work viewMode={viewMode} />
          <Ref viewMode={viewMode} />
        </main>
      </div>
      <div className="controls">
        <button
          className={`view-toggle ${viewMode ? "edit" : "view"}`}
          onClick={() => setViewMode((v) => !v)}
        >
          Preview
        </button>

        <button
          className="print-btn"
          onClick={() => {
            setViewMode(true);
            setTimeout(() => {
              window.print();
            }, 100);
          }}
        >
          Print CV
        </button>
      </div>
    </>
  );
}

export default App;
