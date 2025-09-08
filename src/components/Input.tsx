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
           className={inputStyle}
           name="task"
        />
           
      </div>
  )
}
