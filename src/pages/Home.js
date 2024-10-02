/** Utils */
import CONSTANTS from "../lib/constants/Constants";
import Lottie from "lottie-react";
import animationData from "../assets/lotties/heroAnim.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center p-5">
      <h1 className="text-white font-paprika text-4xl md:text-6xl">
        {CONSTANTS.abhinavanRoy}
      </h1>
      <p className="text-white text-wrap font-poppins text-xl sm:text-xl md:text-2xl text-center font-light opacity-85">
        {CONSTANTS.shortDetail}
      </p>
      <Lottie
        style={{ width: 320, height: 320 }}
        animationData={animationData}
        loop={true}
      />
    </div>
  );
}
