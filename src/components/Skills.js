/** utils */
import CONSTANTS from "../lib/constants/Constants";
/**components */
import Chip from "./Chip";

export default function Skills() {
  const skillList = CONSTANTS.skillList;
  return (
    <div className="flex flex-col gap-1 ">
      <h1 className="text-white font-poppins font-semibold text-2xl">
        {CONSTANTS.skills}
      </h1>
      {skillList.map((skillGroup) => (
        <>
          <h1 className="text-white font-poppins font-light pl-4 opacity-90  text-lg">
            {skillGroup.skillGroupName}
          </h1>
          <div className="flex flex-wrap gap-2 pl-4 py-1">
            {skillGroup.skillGroupItems.map((skill) => (
              <>
                <Chip chipTitle={skill} />
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
