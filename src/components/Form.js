import '../styles/Form.css';
import GenInfoSection from './GenInfoSection.js';
import EducationSection from './EducationSection.js';
import ExperienceSection from './ExperienceSection.js';

function Form(props) {
  let formSection;
  if(props.currentSection === 'general-info') {
    formSection = <GenInfoSection updateGeneralInfo={props.updateGeneralInfo} />;
  }
  else if(props.currentSection === 'education') {
    formSection = <EducationSection updateEducation={props.updateEducation} />;
  }
  else if(props.currentSection === 'experience') {
    formSection = <ExperienceSection updateExperience={props.updateExperience} />;
  }
  return (
    <div className='form-section'>
      {formSection}
    </div>
  )
}

export default Form;