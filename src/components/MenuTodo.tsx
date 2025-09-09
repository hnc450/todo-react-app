import Button from "./Button";
import { useState } from "react";

const Buttons = [
  { name: 'All', id: 'all' },
  { name: 'Active', id: 'active' },
  { name: 'Completed', id: 'completed' }
];

export default function MenuTodo({
  setFilter,
}: {
  setFilter: (f: 'all' | 'active' | 'completed') => void;
}) {
  const [isActive, setIsActive] = useState<string>('all');

  const handleClick = (id: 'all' | 'active' | 'completed') => {
    setIsActive(id);
    setFilter(id);
  };

  return (
    <div className="flex justify-center gap-3 my-6">
      {Buttons.map((button) => (
        <Button
          key={button.id}
          id={button.id}
          types="button"
          className={`px-4 py-2 rounded-full font-semibold transition ${
            isActive === button.id
              ? "bg-purple-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          label={button.name}
          onClick={() => handleClick(button.id as 'all' | 'active' | 'completed')}
        />
      ))}
    </div>
  );
}
