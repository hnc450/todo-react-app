import { useState, type ReactNode } from 'react';
export default function CardContainer({icone}:{icone?:ReactNode}) {
  const [isChecked, setIsChecked] =  useState<boolean>(false);
  return (
    <div className='flex justify-center items-center gap-2'>
           <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)}/>
           <p 
             className={
              isChecked ? 'line-through text-gray-400' : ''
             }
           >
            todolist
            </p>
           {icone}
    </div>
  )
}
