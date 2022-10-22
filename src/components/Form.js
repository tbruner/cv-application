import GenInfoSection from './GenInfoSection.js';
import EducationSection from './EducationSection.js';
import ExperienceSection from './ExperienceSection.js';

function Form(props) {
  if(props.currentSection === 'general-info') {
    return <GenInfoSection />
  }
  else if(props.currentSection === 'education') {
    return <EducationSection />
  }
  else if(props.currentSection === 'experience') {
    return <ExperienceSection />
  }
}

export default Form;