function GeneralInfoSection({ updateGeneralInfo }) {
  return (
    <>
      <div className="form">
        <label htmlFor='first-name'>First Name</label>
        <input type='text' id='first-name' required />

        <label htmlFor='last-name'>Last Name</label>
        <input type='text' id='last-name' required />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' required />

        <label htmlFor='phone'>Phone Number</label>
        <input type='tel' id='phone' required />

        <label htmlFor='city'>City</label>
        <input type='text' id='city' required />

        <label htmlFor='state'>State</label>
        <input type='text' id='state' required />

        <label htmlFor='zip-code'>Zip Code</label>
        <input type='number' id='zip' required />
        
        <div className="buttons">
          <button className='update' onClick={updateGeneralInfo}>Update</button>
        </div>
      </div>
    </>
  );
}

export default GeneralInfoSection;