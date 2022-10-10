function GeneralInfoSection() {
  return (
    <>
      <form>
        <label for='first-name'>First Name</label>
        <input type='text' id='first-name' required />

        <label for='last-name'>Last Name</label>
        <input type='text' id='last-name' required />

        <label for='email'>Email</label>
        <input type='email' id='email' required />

        <label for='phone'>Phone Number</label>
        <input type='tel' id='phone' required />

        <label for='address'>Address</label>
        <input type='text' id='address' required />

        <label for='city'>City</label>
        <input type='text' id='city' required />

        <label for='state'>State</label>
        <input type='text' id='state' required />

        <label for='zip-code'>Zip Code</label>
        <input type='number' id='zip-code' required />
      </form>
    </>
  );
}

export default GeneralInfoSection;