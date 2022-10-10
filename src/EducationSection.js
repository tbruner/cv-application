function EducationSection() {
  return (
    <>
      <form>
        <label for='school-name'>School Name</label>
        <input type='text' id='school-name' required />

        <div>Location</div>
        
        <label for='school-city'>City</label>
        <input type='text' id='school-city' required />

        <label for='school-state'>State</label>
        <input type='text' id='school-state' required />

        <label for='area-of-study'>Area of study</label>
        <input type='text' id='area-of-study' required />

        <label for='date-from'>From</label>
        <input type='date' id='date-from' required />

        <label for='date-to'>To</label>
        <input type='date' id='date-to' required />
      </form>
    </>
  );
}

export default EducationSection;