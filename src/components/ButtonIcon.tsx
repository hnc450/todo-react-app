import type { ReactNode } from 'react';

type ButtonIconProps = {
    icone: ReactNode,
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>
}

export const ButtonIcon = ({icone,setVisible}: ButtonIconProps) => {

    return (

    <button
       className='bg-purple-600 text-white font-medium px-3 py-2 rounded-md hover:bg-indigo-700 transition rounded-full'
       onClick ={setVisible ? (() => setVisible(true)) : undefined}
     > 
       {icone}
    </button>
);
}