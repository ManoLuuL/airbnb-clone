import { HeaderProps } from "./types";
import { IoMdClose } from "react-icons/io";

export const Header = (props: HeaderProps) => {
  const { handleClose, title } = props;

  return (
    <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
      <button
        className="p-1 border-0 hover:opacity-70 transition absolute right-9"
        onClick={handleClose}
      >
        <IoMdClose size={18} />
      </button>
      <div className="text-lg font-semibold">{title}</div>
    </div>
  );
};
