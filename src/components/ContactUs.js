const ContactUs = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h3 className="font-bold text-lg">Contact Us</h3>
      </div>
      <div>
        <div className="mx-4 py-2">
          <label>Name:</label>
          <input
            type="text"
            className="mx-4 p-1 border border-black rounded-sm"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mx-4 py-2">
          <label>Email:</label>
          <input
            type="text"
            className="mx-4 p-1 border border-black rounded-sm"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mx-4 py-2">
          <label>Message:</label>
          <input
            type="text"
            className="mx-4 p-1 border border-black rounded-sm"
            placeholder="Enter your Message"
          />
        </div>
        <button className="m-4 p-1 border border-black rounded-sm bg-green-600 text-white">
          Submit
        </button>
      </div>
      <div className="px-4">
        <h3 className="pt-6 font-semibold">Developer: Sanjeev Ivatury.</h3>
        <h3 className="font-semibold">
          For any queries, mail us at: saisanjeev97@gmail.com
        </h3>
        <h3 className="font-semibold">
          Our Operational Address is: Hyderabad, Telangana-500050
        </h3>

        <h3 className="font-semibold">
          This app is developed using React, JavaScript, HTML, Tailwind CSS,
          Redux Toolkit.
        </h3>
      </div>
    </div>
  );
};

export default ContactUs;
