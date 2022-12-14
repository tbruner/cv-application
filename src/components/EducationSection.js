function EducationSection(props) {
  const {updateEducation, clearEducation} = props;
  return (
    <>
      <div className="form">
        <label htmlFor='school-name'>School Name</label>
        <input type='text' id='school-name' required />

        <div className='blank-grid-item'></div>
        <div className='blank-grid-item'></div>

        <div>Location:</div>

        <div className='blank-grid-item'></div>
        <div className='blank-grid-item'></div>
        <div className='blank-grid-item'></div>

        <label htmlFor='school-city'>City</label>
        <input type='text' id='school-city' required />

        <label htmlFor='school-state'>State</label>
        <input type='text' id='school-state' required />

        <label htmlFor='area-of-study'>Area of study</label>
        <input type='text' id='area-of-study' required />

        <div className='blank-grid-item'></div>
        <div className='blank-grid-item'></div>

        <label htmlFor='date-from'>From</label>
        <input type='date' id='date-from' required />

        <label htmlFor='date-to'>To</label>
        <input type='date' id='date-to' required />

        <div className="buttons">
          <button className='add' onClick={updateEducation}>Add</button>
          <button className='clear' onClick={clearEducation}>Clear</button>
        </div>
      </div>
    </>
  );
}

export default EducationSection;