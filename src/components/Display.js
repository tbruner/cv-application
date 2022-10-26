function Display(props) {
  return (
    <>
    <div className="cv-header">
      <h1>{props.generalInfo.firstName} {props.generalInfo.lastName}</h1>
      <p>{props.generalInfo.city}, {props.generalInfo.state} {props.generalInfo.zip}</p>
      <p>{props.generalInfo.phone}</p>
      <p>{props.generalInfo.email}</p>
    </div>
    <div className="education">
      <h2>EDUCATION</h2>
      <h3>{props.education.schoolName}</h3>
      <p>{props.education.city}, {props.education.state}</p>
      <p>Major: {props.education.major}</p>
      <p>{props.education.from} - {props.education.to}</p>
    </div>
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <h3>{props.experience.jobTitle}</h3>
      <p>{props.experience.employer}</p>
      <p>{props.experience.from} - {props.experience.to}</p>
      <p>{props.experience.jobDuties}</p>
    </div>
    </>
  );
}

export default Display;