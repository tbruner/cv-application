import '../styles/Form.css';
import GenInfoSection from './GenInfoSection.js';
import EducationSection from './EducationSection.js';
import ExperienceSection from './ExperienceSection.js';

function Form(props) {
  let formSection;
  if(props.currentSection === 'general-info') {
    formSection = <GenInfoSection />;
  }
  else if(props.currentSection === 'education') {
    formSection = <EducationSection />;
  }
  else if(props.currentSection === 'experience') {
    formSection = <ExperienceSection />;
  }
  return (
    <div className='form-section'>
      {formSection}
    </div>
  )
}

export default Form;