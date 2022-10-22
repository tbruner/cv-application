import { useState } from 'react';
import './styles/App.css';
import './styles/Navigation.css'
import Form from './components/Form.js';
import Display from './components/Display.js'

function App() {
  const [currentSection, setCurrentSection] = useState('general-info');

  function sectionSelect(e) {
    if(e.target.value === 'general-info') {
      setCurrentSection('general-info');
    }
    else if(e.target.value === 'education') {
      setCurrentSection('education');
    }
    else if(e.target.value === 'experience') {
      setCurrentSection('experience');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>CV Application</h1>
      <nav>
        <button value='general-info' onClick={sectionSelect}>General Information</button>
        <button value='education' onClick={sectionSelect}>Education</button>
        <button value='experience' onClick={sectionSelect}>Experience</button>
      </nav>
      </header>
      <Form currentSection = {currentSection} />
      <Display />
    </div>
  );
}

export default App;
