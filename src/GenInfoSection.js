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
      </form>
    </>
  );
}

export default GeneralInfoSection;