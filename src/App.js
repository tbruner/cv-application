import './styles/App.css';
import '../styles/Navigation.css'
import Form from './components/Form.js';
import Display from './components/Display.js'

function App() {
  const [currentSection, setCurrentSection] = useState('general-info');

  return (
    <div className="App">
      <header className="App-header">
      <h1>CV Application</h1>
      <nav>
        <button id='general-info-button'>General Information</button>
        <button id='education-button'>Education</button>
        <button id='experience-button'>Experience</button>
      </nav>
      </header>
      <Form currentSection = {currentSection} />
      <Display />
    </div>
  );
}

export default App;
