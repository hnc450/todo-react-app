import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import CardContainer from "./components/CardContainer";
import Input from "./components/Input";
import { ButtonIcon } from "./components/ButtonIcon";
import { useState } from "react";
import MenuTodo from "./components/MenuTodo";


function App() {
  const [isVisible, setIsVisible] =  useState<boolean>(false);

  return (
    <>
       <ButtonIcon
        icone={<FontAwesomeIcon icon={faPlus}/>}
        setVisible={setIsVisible}
        />
       {
         isVisible ?  <Input label="Entrez votre tache" lableStyle="" inputStyle="border-l-2 border-pink-300" typeInput="text"/> : ''
       }
      
       <MenuTodo/>

      <CardContainer icone={<FontAwesomeIcon icon={faXmark}/>}/>
      <ButtonIcon icone={ <FontAwesomeIcon icon={faTrash}/>}/>
    </>
  )
}

export default App
