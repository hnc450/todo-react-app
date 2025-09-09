import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import CardContainer from "./components/CardContainer";
import { ButtonIcon } from "./components/ButtonIcon";
import { useState, useEffect } from "react";
import MenuTodo from "./components/MenuTodo";
import Form from "./components/Form";

type Tache = {
  id: string;
  label: string;
  completed: boolean;
};

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [taches, setTaches] = useState<Tache[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    const tasks = localStorage.getItem("taches");
    if (tasks) {
      setTaches(JSON.parse(tasks));
    }
  }, []);

  const handleAddTache = (label: string) => {
    const newTache: Tache = {
      id: Date.now().toString(),
      label,
      completed: false,
    };
    const updated = [...taches, newTache];
    localStorage.setItem("taches", JSON.stringify(updated));
    setTaches(updated);
  };

  const deleteAllTasks = () => {
    localStorage.removeItem("taches");
    setTaches([]);
  };

  const deleteTask = (id: string) => {
    const updated = taches.filter((t) => t.id !== id);
    localStorage.setItem("taches", JSON.stringify(updated));
    setTaches(updated);
  };

  const toggleTache = (id: string) => {
    const updated = taches.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    localStorage.setItem("taches", JSON.stringify(updated));
    setTaches(updated);
  };

  const filteredTaches = taches.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header / Toggle Form */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-700">Ma TodoList</h1>
          <ButtonIcon
            icone={<FontAwesomeIcon icon={isVisible ? faXmark : faPlus} />}
            setVisible={setIsVisible}
          />
        </div>

        {/* Formulaire */}
        {isVisible && (
          <Form
            onAdd={handleAddTache}
            className="bg-white shadow-md rounded-lg p-4 flex gap-4 items-center"
          />
        )}

        {/* Filtres */}
        <MenuTodo setFilter={setFilter} />

        {/* Liste des tâches */}
        <div className="space-y-3">
          {filteredTaches.length === 0 ? (
            <p className="text-center text-gray-500 italic">Aucune tâche à afficher</p>
          ) : (
            filteredTaches.map((tache) => (
              <CardContainer
                key={tache.id}
                label={tache.label}
                isChecked={tache.completed}
                onToggle={() => toggleTache(tache.id)}
                onDelete={() => deleteTask(tache.id)}
              />
            ))
          )}
        </div>

        {/* Bouton de suppression globale */}
        {taches.length > 0 && (
          <div className="flex justify-center pt-4">
            <ButtonIcon
              icone={<FontAwesomeIcon icon={faTrash} />}
              deleteTask={deleteAllTasks}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
