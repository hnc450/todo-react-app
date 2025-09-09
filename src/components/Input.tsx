type InputProps = {
  label: string;
  lableStyle?: string;
  inputStyle?: string;
  typeInput?: string;
  input: string;
  setInput: (value: string) => void;
};

export default function Input({
  label,
  typeInput,
  lableStyle,
  inputStyle,
  input,
  setInput,
}: InputProps) {
  const id = "todo-input";

  return (
    <div className="w-full">
      <label htmlFor={id} className={lableStyle}>
        {label}
      </label>
      <input
        type={typeInput || "text"}
        id={id}
        name="task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={inputStyle}
        placeholder="Ex: Acheter du lait"
      />
    </div>
  );
}
