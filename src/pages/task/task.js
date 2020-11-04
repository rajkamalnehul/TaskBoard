import React from "react";
import { Modal } from '../../components/NewList/newlist';


import close from '../../assets/cancel.png';
import logo from "../../assets/logo.png";
import add from "../../assets/baseline_add_circle_black_48dp.png";
import "./task.css";
import MyTask from '../../components/TaskCard/taskcard';
import {without} from 'lodash';

export default class TaskBoard extends React.Component {
  state = {
    show: false,
    newListVal: "",
    lists: [],
    lastIndex:0
  };

  showModal = () => {
    
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = (e) => {
    this.setState({ newListVal: e.target.value });
  };


  addToList = () => {
    let tempList= this.state.lists;
    let index=this.state.lastIndex;
    tempList.push(this.state.newListVal);
    
    this.setState({
      lists:tempList,lastIndex:index+1,
      newListVal: "",})
    
    
    
    console.log(this.state.lastIndex)
    this.hideModal();
  };

  deletetask=(task)=>{
    let tempTask = this.state.lists;
    tempTask = without(tempTask,task);
    this.setState({lists:tempTask})
    console.log(this.state.lists);
  }

 
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="profile-photo"></div>
        </div>
        <div className="main">
          <MyTask  deleteTask={this.deletetask} key={this.state.lastIndex} list={this.state.lists}/>
        </div>
       

        <div className="add-button" onClick={this.showModal}>
          <img src={add} alt="add button" />
        </div>

        

        <Modal show={this.state.show} >
          <div className="modal-close">
            <img src={close} alt="close" onClick={this.hideModal} />
          </div>

          <div className="new-list-modal-body">
            <input
              placeholder="New List"
              className="new-list-name"
              value={this.state.newListVal}
              onChange={(e) => this.handleChange(e)}
            />
            <img src={add} alt="add-button" onClick={this.addToList} />
          </div>
        </Modal>
      </div>
    );
  }
}
