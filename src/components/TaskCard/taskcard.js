import React from "react";
import more from "../../assets/more.png";
import add from "../../assets/baseline_add_circle_black_48dp.png";
import circle from "../../assets/dry-clean.png";
import edit from "../../assets/pencil.png";
import complete from "../../assets/tick.png";

import "./taskcard.css";

export default function MyTask(props) {
  return (
    <div className="list-card">
      <div className="card-header">
        <p className="heading">{props.name}</p>
        <img src={more} alt="more" />
      </div>

      <div className="add-task">
        <img src={add} alt="add-new-task" />
        <p>Add a task</p>
      </div>

      <div className="task-item">
        <img src={circle} alt="add-new-task" />
        <div className="list-item-right-section">
          <p>Add a task</p>
          <img src={edit} alt="edit-task" />
        </div>
      </div>

      <div className="heading complete">
        <p>Completed(1)</p>
      </div>
      <div className="task-item">
        <img src={complete} alt="add-new-task" />

        <p>Add a task</p>
      </div>
    </div>
  );
}
