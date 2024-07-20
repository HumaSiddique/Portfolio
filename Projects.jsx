import counterapp from "../Image/counterapp.jpeg";
import analogclock from "../Image/analogclock.png";
import digitalclock from "../Image/digitalclock.png";
import todolist from "../Image/todolist.png";
import youtube from "../Image/youtube.png";
import Apis from "../Image/Apis.png";

const Projects = () => {
  return (
    <div className="px-5 min-h-screen bg-black">
      <div className="grid justify-items-center">
        <h1 className="text-5xl text-white mt-10 font-semibold">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 p-4 justify-items-center">
        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse max-w-sm w-full">
          <div className="p-6">
            <div className="uppercase tracking-wide text-xl text-black font-semibold mt-1">
              Youtube-Clone
            </div>
            <div className="mt-1 text-sm">
              A YouTube clone is a basic app that lets users upload, view, and interact with videos, similar to YouTube. It includes features like video playback and search, offering a hands-on way to practice web development. <br />
              <strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-500">GitHub Profile</a> <br />
            </div>
          </div>
          <div className="p-2">
            <img src={youtube} alt="youtube" className="rounded-2xl w-full h-40 object-cover" />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse max-w-sm w-full">
          <div className="p-4">
            <div className="uppercase tracking-wide text-xl text-black font-semibold">
              AnalogClock
            </div>
            <div className="mt-1 text-sm">
              AnalogClock is a stylish web application that displays the current time in a classic analog format, providing a nostalgic touch to timekeeping. Implemented using HTML, CSS, and JavaScript, AnalogClock features smooth hour, minute, and second hands, making time tracking both functional and visually appealing. <br />
              <strong>GitHub:</strong> <a href="https://github.com/HumaSiddique/Analog-Clock" className="text-blue-500">GitHub Profile</a> <br />
            </div>
          </div>
          <div className="p-2">
            <img src={analogclock} alt="AnalogClock" className="rounded-2xl w-full h-40 object-cover" />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse max-w-sm w-full">
          <div className="p-6">
            <div className="uppercase tracking-wide text-xl text-black font-semibold">
              DigitalClock
            </div>
            <div className="mt-1 text-sm">
              DigitalClock is a simple web app displaying the current time digitally, designed for clarity and ease of use. Built with HTML, CSS, and JavaScript, it updates in real-time to provide accurate timekeeping on any device. <br />
              <strong>GitHub:</strong> <a href="https://github.com/HumaSiddique/Digital-Clock" className="text-blue-500">GitHub Profile</a> <br />
            </div>
          </div>
          <div className="p-2">
            <img src={digitalclock} alt="DigitalClock" className="rounded-2xl w-full h-40 object-cover" />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse max-w-sm w-full">
          <div className="p-5">
            <div className="uppercase tracking-wide text-xl text-black font-semibold">
              To Do List
            </div>
            <div className="mt-3 text-sm">
              ToDoList is a streamlined web application designed for organizing tasks efficiently. It allows users to create, manage, and prioritize tasks with ease. Built using HTML, CSS, and JavaScript, ToDoList features a responsive interface that adapts seamlessly across devices. <br />
              <strong>GitHub:</strong> <a href="https://github.com/HumaSiddique/To-Do-List" className="text-blue-500">GitHub Profile</a> <br />
            </div>
          </div>
          <div className="p-3">
            <img src={todolist} alt="ToDoList" className="rounded-2xl w-full h-40 object-cover" />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse max-w-sm w-full">
          <div className="p-6">
            <div className="uppercase tracking-wide text-xl text-black font-semibold">
              Counter App
            </div>
            <div className="mt-1 text-sm">
              The Counter App is a simple web tool for incrementing and decrementing a numerical count. Built with HTML, CSS, and JavaScript, it offers a clean interface and basic state management practice. Perfect for learning fundamental web development skills. <br />
              <strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-500">GitHub Profile</a> <br />
            </div>
          </div>
          <div className="p-2">
            <img src={counterapp} alt="counterapp" className="rounded-2xl w-full h-40" />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse max-w-sm w-full">
          <div className="p-5">
            <div className="uppercase tracking-wide text-xl text-black font-semibold">
              APIS
            </div>
            <div className="mt-3 text-sm">
              APIs (Application Programming Interfaces) enable different software systems to communicate and interact with each other. They define methods for requesting and exchanging data, allowing developers to integrate third-party services, access databases, or connect various components of an application efficiently. <br />
              <strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-500">GitHub Profile</a> <br />
            </div>
          </div>
          <div className="p-2">
            <img src={Apis} alt="Apis" className="rounded-2xl w-full h-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
