// import { useState } from "react";

// const Navbar = () => {
//    const [state, setState] = useState(0);

//    const clickHandler = () =>{
//     setState(state +1)
//    }
//    const myclickHandler = () =>{
//     setState(state -1)
//    }
//   return (
//     <div>
//       <h1 className="mt-32 text-8xl">{state}</h1>
//       <div  className="mt-60 flex gap-60 ml-64 ">
//         <button
//           onClick={clickHandler}
//           className="cursor-pointer transition-all bg-black text-white px-6 py-2 rounded-lg
//                 border-gray-700
//                  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
//                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
//         >
//           Increament
//         </button>
//         <button
//         onClick={myclickHandler}
//         className="cursor-pointer transition-all bg-black text-white px-6 py-2 rounded-lg
//                   border-gray-700
//                     border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
//                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
//                     Decreament
//         </button> 
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import Header from "./Header";

const Main = () => {
  return (
    <div >
      <Header />
    </div>
  );
};

export default Main;
