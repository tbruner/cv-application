import './styles/App.css';
import GeneralInfoSection from './components/GenInfoSection.js';
import Navigation from './components/Navigation.js';
import Form from './components/Form.js';
import Display from './components/Display.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>CV Application</h1>
      <Navigation />
      </header>
      <Form />
      <Display />
    </div>
  );
}

export default App;
