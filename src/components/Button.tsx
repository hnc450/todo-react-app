type ButtonType = "button" | "submit" | "reset";

type ButtonProps={
    types:ButtonType;
    className:string;
    label:string;
    onClick: (id: string) => void;
    id: string;
}

export default function Button({id,types,onClick, className,label}:ButtonProps) {
  return (
    <button
      type={types}
      className={className}
      onClick={() => onClick(id)}
    >
      {label}
    </button>
  )
}
