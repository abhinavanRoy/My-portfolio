/** utils */
import CONSTANTS from "../lib/constants/Constants";

export default function Footer() {
  return (
    <div className="absolute bottom-0 p-3">
      <h1 className="text-white font-poppins font-light opacity-60">
        &copy; {CONSTANTS.currentyear} {CONSTANTS.abhinavanRoy}
        {CONSTANTS.allRightsReserved}
      </h1>
    </div>
  );
}
