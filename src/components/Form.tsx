import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form({
  className,
  onAdd,
}: {
  className?: string;
  onAdd?: (tache: string) => void;
}) {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;

    onAdd?.(input);
    setInput("");
  };

  return (
    <form
      className={`bg-white shadow-md rounded-lg p-4 flex gap-4 items-center justify-center ${className ?? ""}`}
      onSubmit={handleSubmit}
    >
      <Input
        label="Entrez votre tâche"
        lableStyle="block mb-2 text-sm font-medium text-gray-700"
        inputStyle="w-full border-2 border-purple-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-600 transition duration-200 placeholder-gray-400"
        typeInput="text"
        input={input}
        setInput={setInput}
      />

      <Button
        types="submit"
        className="bg-purple-600 px-5 py-3 rounded-full text-white font-semibold hover:bg-purple-700 transition"
        label="Ajouter"
        id="submit-todo"
        onClick={() => {}}
      />
    </form>
  );
}
