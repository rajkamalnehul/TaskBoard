import React from "react";
import more from "../../assets/more.png";
import close from '../../assets/cancel.png';
import add from "../../assets/baseline_add_circle_black_48dp.png";
import circle from "../../assets/dry-clean.png";
import edit from "../../assets/pencil.png";
import complete from "../../assets/tick.png";

import "./taskcard.css";

class MyTask extends React.Component {
  render(props){
      return(
      <div>
        {this.props.list.map((item) => (
          <div className="list-card" key={this.props.key}>
        <div className="card-header">
        <p className="heading">{item}</p>
        <div onClick={()=>this.props.deleteTask(item)}>
        <img src={close} alt="close"  />
        </div>
        
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
    ))}
    </div>
      )}
}

export default MyTask;