import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import CardContainer from "./components/CardContainer";
import Input from "./components/Input";
import { ButtonIcon } from "./components/ButtonIcon";
import { useState,useEffect } from "react";
import MenuTodo from "./components/MenuTodo";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  const [isVisible, setIsVisible] =  useState<boolean>(false);
   const [taches, setTaches] = useState<Record<string, string>>({});

    useEffect(() => {
    const tasks = localStorage.getItem("taches");
    if (tasks) {
      setTaches(JSON.parse(tasks));
    }
    console.log(tasks);
  }, []);
  return (
    <>
       <ButtonIcon
        icone={<FontAwesomeIcon icon={isVisible ? faXmark : faPlus}/>}
        setVisible={setIsVisible}
        />
       {
         isVisible ?
         <Form>
             <Input label="Entrez votre tache" lableStyle="" inputStyle="w-full border-l-2  py-2 px-4 border-2 border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-600 transition duration-200 placeholder-gray-400" typeInput="text"/>
             <Button 
              types="submit" 
              className="bg-purple-600 px-5 py-3 rounded-full text-white" 
              label="ajouter"
              id="submit-todo"
              onClick={(id) => console.log("Clicked", id)}
             />

         </Form> : ''
       }
      
       <MenuTodo/>

      {Object.entries(taches).map(([key, value]) => (
        <CardContainer key={key} icone={<FontAwesomeIcon icon={faXmark}/>} label={value} />
      ))}
      <ButtonIcon icone={ <FontAwesomeIcon icon={faTrash}/>}/>
    </>
  )
}

export default App
