/** Utils */
import CONSTANTS from "../lib/constants/Constants";
/** Assets */
import profilePic from "../assets/images/profilePic.jpeg";
/** Components */
import Skills from "../components/Skills";
export default function About() {
  return (
    <>
      <div className=" h-[75%] sm:h-70% overflow-auto  flex flex-col sm:flex-row items-center sm:items-start px-10  md:px-10   gap-10 w-full  ">
        <img
          className="border-gray-300 border-4 object-cover rounded-full w-36 h-36 sm:h-44 sm:w-44 "
          src={profilePic}
          alt={CONSTANTS.profilePic}
        />

        <div className="  flex px-2 flex-col   gap-5  w-full md:pr-40 ">
          <p className="text-white text-justify text-lg md:text-xl  font-poppins font-light text-wrap">
            {CONSTANTS.myDescription}
          </p>
          <Skills />
        </div>
      </div>
    </>
  );
}
