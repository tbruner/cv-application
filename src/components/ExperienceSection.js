class ExperienceSection extends React.Component {
  render() {
    return (
      <>
        <form>
          <label for='employer'>Employer Name</label>
          <input type='text' id='employer' required />

          <label for='job-title'>Job Title</label>
          <input type='text' id='job-title' required />

          <label for='job-date-from'>From</label>
          <input type='date' id='job-date-from' required />

          <label for='date-to'>To</label>
          <input type='date' id='job-date-to' required />

          <label for='job-duties'>Job Duties</label>
          <input type='text' id='job-duties' required />

          <button type='submit' class='submit'>Submit</button>
        </form>
      </>
    );
  }
}