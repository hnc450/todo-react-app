import { useState, type ReactNode } from 'react';
type Props = {
  icone?: ReactNode;
  label: string;
};

export default function CardContainer({ icone, label }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg px-4 py-3 w-full max-w-md mx-auto transition hover:shadow-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="accent-purple-600 w-5 h-5 cursor-pointer"
        />
        <p
          className={`text-lg font-medium transition-colors duration-200 ${
            isChecked ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {label}
        </p>
      </div>
      <div className="text-purple-600 hover:text-purple-800 transition">
        {icone}
      </div>
    </div>
  );
}
