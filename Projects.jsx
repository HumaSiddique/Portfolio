import counterapp from "../Image/counterapp.jpeg";
import analogclock from "../Image/analogclock.jpeg";
import digitalclock from "../Image/digitalclock.jpeg";
import todolist from "../Image/todolist.png";

const Projects = () => {
  return (
    <div className="  px-5 min-h-screen bg-black">
      <div className="grid justify-items-center ">
        <h1 className="text-5xl text-white mt-10 font-semibold">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 p-8 ">
        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse  ">
          <div className="p-8 ">
            <div className="uppercase tracking-wide text-xl text-black font-semibold mt-1">
              CounterApp
            </div>
            <div className="mt-6">
                  CounterApp is a sleek and intuitive web application designed for tracking counts with precision and ease. <br />
                   Built using modern web technologies, CounterApp offers a responsive and user-friendly interface for managing numeric data. <br />
                       <strong>GitHub:</strong> [GitHub Profile](https://github.com/yourusername) <br />
                       <strong>LinkedIn:</strong> [LinkedIn Profile](https://www.linkedin.com/in/yourprofile)
            </div>

          </div>
          <div className="p-2">
            <img src={counterapp} alt="CounterApp" className="rounded-2xl w-full h-60 " />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="p-8">
            <div className="uppercase tracking-wide text-xl text-black font-semibold">
              AnalogClock
            </div>
            <div className="mt-0">
  AnalogClock is a stylish web application that displays the current time in a classic analog format, providing a nostalgic touch to timekeeping. <br />
  Implemented using HTML, CSS, and JavaScript, AnalogClock features smooth hour, minute, and second hands, making time tracking both functional and visually appealing. <br />
  <strong>GitHub:</strong> [GitHub Profile](https://github.com/yourusername) <br />
  <strong>LinkedIn:</strong> [LinkedIn Profile](https://www.linkedin.com/in/yourprofile)
</div>

          </div>
          <div className="p-2 text-black">
            <img src={analogclock} alt="AnalogClock" className="rounded-2xl w-full h-60 " />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="p-8 text-black">
            <div className="uppercase tracking-wide text-xl font-semibold">
              DigitalClock
            </div>
            <div className="mt-2">
  DigitalClock is a simple web app displaying the current time digitally, designed for clarity and ease of use. Built with HTML, CSS, and JavaScript, it updates in real-time to provide accurate timekeeping on any device. <br />
  <strong>GitHub:</strong> [GitHub Profile](https://github.com/yourusername) <br />
  <strong>LinkedIn:</strong> [LinkedIn Profile](https://www.linkedin.com/in/yourprofile)
</div>

          </div>
          <div className="p-2 ">
            <img src={digitalclock} alt="DigitalClock" className="rounded-2xl w-full h-60 object-cover" />
          </div>
        </div>

        <div className="bg-teal-600 rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="p-8 text-black">
            <div className="uppercase tracking-wide text-xl  font-semibold">
              To Do List
            </div>
            <div className="mt-2">
  ToDoList is a streamlined web application designed for organizing tasks efficiently. It allows users to create, manage, and prioritize tasks with ease. Built using HTML, CSS, and JavaScript, ToDoList features a responsive interface that adapts seamlessly across devices. <br />
  <strong>GitHub:</strong> [GitHub Profile](https://github.com/yourusername) <br />
  <strong>LinkedIn:</strong> [LinkedIn Profile](https://www.linkedin.com/in/yourprofile)
</div>

          </div>
          <div className="p-2">
            <img src={todolist} alt="ToDoList"height={250} className="rounded-2xl w-full h-60 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
