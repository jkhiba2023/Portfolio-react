import { useForm } from "@formspree/react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  const [state, formSubmit] = useForm("xdkwewgq");
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
    event.preventDefault();
    formSubmit(event);
    setMeet({ fullName: "", emailid: "", phoneNumber: "", message: "" });
  };

  if (state.succeeded) {
    return (
      <p className="text-center text-green-500 mt-10">
        Thanks for reaching out!
      </p>
    );
  }

  return (
    <section id="contact" className="mt-24 px-4 md:px-0">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 border-b-4 border-blue-500 inline-block pb-2">
          Contact
        </h1>
      </div>

      <p className="text-center text-gray-700 max-w-3xl mx-auto">
        If you are looking for a passionate Front-End Engineer, I’d be glad to
        connect. I am open to interview opportunities where I can showcase my
        skills in HTML, CSS, JavaScript, and React. Please feel free to reach
        out—I’d be happy to schedule a conversation at your convenience.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center mt-12 gap-6">
        <a
          href="https://github.com/jkhiba2023"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition duration-300"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/jabir-khan-1833a637b"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="mailto:jabirkhan4748@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition duration-300"
        >
          <SiGmail size={32} />
        </a>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-2xl p-8 bg-gray-900 rounded-3xl shadow-2xl shadow-black/40">
          <form className="space-y-6" onSubmit={localSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={meet.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="email"
              name="emailid"
              placeholder="Email"
              value={meet.emailid}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={meet.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={meet.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
