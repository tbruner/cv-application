function Display(props) {
  return (
    <>
    {props.generalInfo.hasOwnProperty('firstName') && <div className="cv-header">
      <h1>{props.generalInfo.firstName} {props.generalInfo.lastName}</h1>
      <p>{props.generalInfo.city}, {props.generalInfo.state} {props.generalInfo.zip}</p>
      <p>{props.generalInfo.phone}</p>
      <p>{props.generalInfo.email}</p>
    </div>}

    {props.education[0] && <div className="education">
      <h2>EDUCATION</h2>
      
      {props.education.map((school, index) => (
        <div key={index}>
          <h3>{school.schoolName}</h3>
          <p>{school.city}, {school.state}</p>
          <p>Major: {school.major}</p>
          <p>{school.from} - {school.to}</p>
        </div>
      ))}
    </div>}

    {props.experience[0] && <div className="experience">
      <h2>EXPERIENCE</h2>

      {props.experience.map((job, index) => (
        <div key={index}>
          <h3>{job.jobTitle}</h3>
          <p>{job.employer}</p>
          <p>{job.from} - {job.to}</p>
          <p>{job.jobDuties}</p>
        </div>
      ))}
    </div>}
    </>
  );
}

export default Display;