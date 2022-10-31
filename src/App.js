import { useState } from 'react';
import './styles/App.css';
import './styles/Navigation.css'
import Form from './components/Form.js';
import Display from './components/Display.js'

function App() {
  const [currentSection, setCurrentSection] = useState('general-info');
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

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

  function updateGeneralInfo() {
    setGeneralInfo({
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value
    });
  }

  function updateEducation() {
    setEducation([{
      schoolName: document.getElementById('school-name').value,
      city: document.getElementById('school-city').value,
      state: document.getElementById('school-state').value,
      major: document.getElementById('area-of-study').value,
      from: document.getElementById('date-from').value,
      to: document.getElementById('date-to').value
    }]);
  }

  function updateExperience() {
    setExperience({
      employer: document.getElementById('employer').value,
      jobTitle: document.getElementById('job-title').value,
      from: document.getElementById('job-date-from').value,
      to: document.getElementById('job-date-to').value,
      jobDuties: document.getElementById('job-duties').value
    });
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
      <div className='content'>
        <Form currentSection={currentSection} updateGeneralInfo={updateGeneralInfo} updateEducation={updateEducation} updateExperience={updateExperience} />
        <Display generalInfo={generalInfo} education={education} experience={experience} />
      </div>
    </div>
  );
}

export default App;
