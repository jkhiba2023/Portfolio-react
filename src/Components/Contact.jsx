import { useForm } from "@formspree/react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  const [state, formSubmit] = useForm("xdkwewgq"); // renamed handleSubmit -> formSubmit

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const [meet, setMeet] = useState({
    fullName: "",
    emailid: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setMeet((preValue) => ({ ...preValue, [name]: value }));
  };

  const localSubmit = (event) => {
    // renamed this one too
    event.preventDefault();
    console.log(meet);

    // if you want to send to Formspree:
    formSubmit(event);

    // reset form
    setMeet({ fullName: "", emailid: "", phoneNumber: "", message: "" });
  };

  return (
    <section id="contact" className="text-gray-800 mt-10  px-6 md:px-3">
      <div className="space-y-10">
        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 inline-block pb-2">
          Contact
        </h1>
      </div>
      <div className="mt-10">
        <p className="text-center font-medium">
          If you are looking for a passionate and dedicated Front-End Engineer,
          I’d be glad to connect. I am open to interview opportunities where I
          can showcase my skills in HTML, CSS, JavaScript, and React, and
          discuss how I can contribute to your team. Please feel free to reach
          out—I’d be happy to schedule a conversation at your convenience.
        </p>
      </div>
      <div className="flex justify-center mt-20 gap-5">
        <a
          href="https://github.com/jkhiba2023"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition duration-300 ease-in-out"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/jabir-khan-1833a637b"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition duration-300 ease-in-out"
        >
          <FaLinkedin size={40} className="text-[#0A66C2] " />
        </a>
        <a
          href="mailto:jabirkhan4748@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition duration-300 ease-in-out"
        >
          <SiGmail size={40} className="text-[#EA4335] " />
        </a>

        {/* Tooltip */}
        <span
          className="absolute left-1/2 -translate-x-1/2 -top-10 
                   bg-gray-800 text-white text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 transition-opacity"
        >
          jabirkhan4748@gmail.com
        </span>
      </div>
      <div className="flex flex-col items-center mt-20 space-y-6">
        {/* Heading */}
        <h4 className="font-extrabold uppercase text-2xl hover:underline transition duration-300 ease-in-out">
          Contact
        </h4>

        {/* Contact Form Box */}
        <div className="shadow-none md:shadow md:shadow-gray-400 w-full max-w-2xl p-0 md:p-10 rounded-2xl bg-white">
          <form className="space-y-4 w-full" onSubmit={localSubmit}>
            <div>
              <input
                type="text"
                autoComplete="off"
                name="fullName"
                className="text-lg md: text-sm border border-gray-400 w-full px-3 py-2 rounded"
                placeholder="Enter Full Name"
                value={meet.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                autoComplete="off"
                name="emailid"
                className="text-lg md: text-sm border border-gray-400 w-full px-3 py-2 rounded"
                placeholder="Enter Your Email ID"
                value={meet.emailid}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="number"
                autoComplete="off"
                name="phoneNumber"
                className="text-lg md: text-sm border border-gray-400 w-full px-3 py-2 rounded"
                placeholder="Enter Your Phone No"
                value={meet.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                autoComplete="off"
                className="text-lg md: text-sm border border-gray-400 w-full px-3 py-2 rounded"
                placeholder="Message Me"
                value={meet.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 text-gray-100 px-4 py-2 rounded hover:bg-gray-800 transition"
              disabled={state.submitting}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
