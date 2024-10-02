/* Utils */
import { cn } from "../lib/utils";

export default function Button({
  onClick,
  isDisabled,
  btnName,
  icon,
  className,
}) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        "items-center gap-1 text-black border-0 font-poppins font-medium rounded-md px-3 py-1 bg-white",
        className
      )}
    >
      {btnName}
      {icon}
    </button>
  );
}
