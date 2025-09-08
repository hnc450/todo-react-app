import Button from "./Button";

type InputProps = {
    label: string;
    lableStyle?: string;
    inputStyle?: string;
    typeInput?: string;
}

export default function Input({label,typeInput,lableStyle,inputStyle}:InputProps) {
  const id:string = 'todo-input';

  return (
      <div>
        <label htmlFor={id} className={lableStyle}>
            {
              label
            }
        </label>
        <input
           type={typeInput ? typeInput : 'text'} 
           id={id} 
           className={inputStyle}/>
          <Button types="submit" className="bg-purple-600 px-5 py-3 rounded-full text-white" label="ajouter"/>
      </div>
  )
}
