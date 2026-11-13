
import React, { useState } from "react";

function TaskForm({ onAddTask }) {

  // Gestion des champs
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [dateLimite, setDateLimite] = useState("");

  // Envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titre || !description || !dateLimite) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouvelleTache = {
      id: Date.now(),
      titre,
      description,
      statut: "En attente",
      dateLimite
    };

    onAddTask(nouvelleTache);

    setTitre("");
    setDescription("");
    setDateLimite("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Ajouter une tâche</h2>

      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={dateLimite}
        onChange={(e) => setDateLimite(e.target.value)}
      />

      <button type="submit">
        Ajouter une tâche
      </button>

    </form>
  );
}

export default TaskForm;
