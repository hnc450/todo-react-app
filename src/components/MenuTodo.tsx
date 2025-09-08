import Button from "./Button";
import { useState } from "react";

const Buttons = [
  { name: 'All', id: 'all' },
  { name: 'Active', id: 'active' },
  { name: 'Completed', id: 'completed' }
];

export default function MenuTodo() {
  const [isActive, setIsActive] =  useState<String>('all');

  const handleClick = (id: string) => {
    setIsActive(id);
  };
  return (
    <div>
        {
          Buttons.map((button)=>{
               return <Button 
                   key={button.id}
                   id={button.id}
                   types="button" 
                  className={`px-4 py-2 rounded-full ${
                   isActive === button.id ? "bg-purple-700 text-white" : "bg-gray-200 text-black"
                  }`}
                   label={button.name}
                   onClick={handleClick} 
                  />
           })
        }
    </div>
  )
}
