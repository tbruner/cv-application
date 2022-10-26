import React from "react";

class ExperienceSection extends React.Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor='employer'>Employer Name</label>
          <input type='text' id='employer' required />

          <label htmlFor='job-title'>Job Title</label>
          <input type='text' id='job-title' required />

          <label htmlFor='job-date-from'>From</label>
          <input type='date' id='job-date-from' required />

          <label htmlFor='date-to'>To</label>
          <input type='date' id='job-date-to' required />

          <label htmlFor='job-duties'>Job Duties</label>
          <textarea id='job-duties' required />

          <button className='submit' onClick={this.props.updateExperience}>Update</button>
        </form>
      </>
    );
  }
}

export default ExperienceSection;