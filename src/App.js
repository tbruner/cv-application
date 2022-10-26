import { useState } from 'react';
import './styles/App.css';
import './styles/Navigation.css'
import Form from './components/Form.js';
import Display from './components/Display.js'

function App() {
  const [currentSection, setCurrentSection] = useState('general-info');
  const [generalInfo, setGeneralInfo] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@aol.org',
    phone: '123-456-7890',
    address: '000 Mocking Bird Lane',
    city: 'Zoo',
    state: 'Ichigan',
    zip: '12345'
  });
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();

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

  }

  function updateExperience() {

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
      <Form currentSection={currentSection} updateGeneralInfo={updateGeneralInfo} updateEducation={updateEducation} updateExperience={updateExperience} />
      <Display generalInfo={generalInfo} />
    </div>
  );
}

export default App;
