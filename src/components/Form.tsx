import { useState, useEffect } from "react";

export default function Form({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [taches, setTaches] = useState<string[]>([]);


  useEffect(() => {
    const saved = localStorage.getItem("taches");
    if (saved) {
      setTaches(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nouvelleTache = formData.get("task")?.toString();

    if (nouvelleTache && nouvelleTache.trim() !== "") {
      const nouvellesTaches = [...taches, nouvelleTache];
      localStorage.setItem("taches", JSON.stringify(nouvellesTaches));
      setTaches(nouvellesTaches);
    }
  };

  return (
    <form
      className={className ? className : "flex gap-4 my-4 items-center justify-center"}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
