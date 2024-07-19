

const Contact = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-teal-600">Get in Touch</h2>
        <p className="mt-4 text-xl text-teal-600">
          Feel free to reach out to me via LinkedIn, GitHub, or email. I'm open to collaboration and new opportunities.
        </p>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <a
            href="https://www.linkedin.com/in/huma-siddique-a961682a5/"
            rel="noopener noreferrer"
            className="bg-white hover:bg-blue-700 text-black font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/HumaSiddique"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          >
            GitHub
          </a>
          <a
            href="mailto:humasiddique2006@gmail.com"
            className="bg-teal-600 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
