
import React from "react";

function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className="task-card">
      <h3>{task.titre}</h3>

      <p>{task.description}</p>

      <p>
        Statut: {task.statut}
      </p>

      <p>
        Date limite: {task.dateLimite || "Non définie"}
      </p>

      <button onClick={() => onComplete(task.id)}>
        Complete
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
