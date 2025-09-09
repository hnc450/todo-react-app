import type { ReactNode } from "react";

type ButtonIconProps = {
  icone: ReactNode;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTask?: () => void;
};

export const ButtonIcon = ({ icone, setVisible, deleteTask }: ButtonIconProps) => {
  const handleClick = () => {
    if (setVisible) {
      setVisible((visible) => !visible);
    } else if (deleteTask) {
      deleteTask();
    }
  };

  return (
    <button
      className="bg-purple-600 text-white font-medium px-4 py-3 rounded-full hover:bg-purple-700 transition shadow-md"
      onClick={handleClick}
    >
      {icone}
    </button>
  );
};