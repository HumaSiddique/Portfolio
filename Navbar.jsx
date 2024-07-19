import { Link } from "react-router-dom";
import { BsMortarboardFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 w-full ">
      <div className="text-teal-600 font-mono text-3xl tracking-wider flex items-center mb-4 lg:mb-0">
        <BsMortarboardFill className="mr-2" />
        <Link to="/">PORTFOLIO</Link>
      </div>
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
        
      <Link to="/" className="text-white rounded-full h-9 px-5 py-1 text-xl transition-colors duration-200 hover:bg-teal-600 hover:text-black">Home</Link>
        
        <Link
          to="/Services"
          className="text-white rounded-full h-9 px-5 py-1 text-xl transition-colors duration-200 hover:bg-teal-600 hover:text-black"

        >
          Services
        </Link>
        <Link
          to="/Projects"
          className="text-white rounded-full h-9 px-5 py-1 text-xl transition-colors duration-200 hover:bg-teal-600 hover:text-black"

        >
          Project
        </Link>
        <Link
          to="/Contact"
          className="text-white rounded-full h-9 px-5 py-1 text-xl transition-colors duration-200 hover:bg-teal-600 hover:text-black"

        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
