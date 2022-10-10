function EducationSection() {
  return (
    <>
      <form>
        <label for='school-name'>School Name</label>
        <input type='text' id='school-name' required />

        <label for='location'>Location</label>
        <input type='text' id='location' required />

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