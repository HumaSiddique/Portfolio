import logo from '../Image/logo.jpg';
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-around items-center p-5 lg:p-10 space-y-5 lg:space-y-0 lg:space-x-10 text-teal-600  ">
      <div className="lg:w-1/3 ssm:w-full lg:text-center">
        <p className="text-3xl lg:text-4xl mb-2 text-white">I'M</p>
        <div className="text-5xl lg:text-5xl font-semibold text-bg-[#00FFFF]">
      <TypeAnimation
      sequence={[
        'Huma Siddique',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
        <hr className="border-white my-2 lg:my-4 w-1/4 lg:w-full" />
        <h2 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-white">About Me</h2>
        <p className="mt-2 lg:mt-4 text-lg lg:text-xl font-sans text-white">
          I am a web developer with a passion for creating dynamic and responsive websites. My expertise lies in building efficient and reliable web applications using modern technologies.
        </p>
      </div>
      <div>
        <img src={logo} alt="pic" width={310} className="rounded-full min-w-full h-auto lg:max-w-[20rem] lg:h-[20rem] border-8 border-[#069898] bg-cyan-500 shadow-lg shadow-cyan-500/50" />
      </div>
    </section>
  );
};


export default Header;

