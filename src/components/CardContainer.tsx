import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
  onDelete?: () => void;
};


export default function CardContainer({ label, isChecked, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-lg px-4 py-3 w-full max-w-md mx-auto transition hover:shadow-md hover:bg-purple-50 mb-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          className="accent-purple-600 w-5 h-5 cursor-pointer"
        />
        <p
          className={`text-lg font-medium ${
            isChecked ? "line-through text-gray-400" : "text-gray-800"
          } transition-colors duration-200`}
        >
          {label}
        </p>
      </div>
      <button
        onClick={onDelete}
        className="text-purple-600 hover:text-purple-800 transition"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
