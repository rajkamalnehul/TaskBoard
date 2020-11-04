import React from "react";
import { Modal } from '../../components/NewList/newlist';


import close from '../../assets/cancel.png';
import logo from "../../assets/logo.png";
import add from "../../assets/baseline_add_circle_black_48dp.png";
import "./task.css";
import MyTask from '../../components/TaskCard/taskcard';
import {without} from 'lodash';
import EditModal from './editmodal.js';

export default class TaskBoard extends React.Component {
  state = {
    showEdit:false,
    current:"",
    show: false,
    newListVal: "",
    tasks:"",
    taskList:[],
    lists: [],
    lastIndex:0
  };

  

  showEditModal = (item) => {
    this.setState({current:item})
    console.log(item)
    console.log("open");
    this.setState({ showEdit: true });
  };

  hideEditModal=()=>{
    this.setState({ showEdit: false });
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
    
    this.hideModal();
  };

  addTask=()=>{
    let tempTask=this.state.taskList;
    tempTask.push(this.state.tasks);
    this.setState({
      taskList:tempTask,
      tasks: ""});
      console.log(this.state.taskList);
    
  }

  deletetask=(task)=>{
    let tempTask = this.state.lists;
    tempTask = without(tempTask,task);
    this.setState({lists:tempTask})
    console.log(this.state.lists);
    this.setState({taskList:[]})
  }

  delParticularTask=(task)=>{
    let tempTask=this.state.taskList;
    tempTask=without(tempTask,task);
    this.setState({taskList:tempTask})
    this.hideEditModal();
  }

  handleChangeTask=(e)=>{
    this.setState({tasks: e.target.value  });
  }

 
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div > 
          <img alt="profile" className="profile-photo" src={`https://picsum.photos/50/50`}/>
          </div>
        </div>
        <div className="main">
          <MyTask  deleteTask={this.deletetask} key={this.state.lastIndex} list={this.state.lists} handleChangeTask={this.handleChangeTask} addtask={this.addTask} tasks={this.state.tasks} taskList={this.state.taskList} showEditModal={this.showEditModal} hideEditModal={this.hideEditModal}/>
        </div>
       

        <div className="add-button" onClick={this.showModal}>
          <img src={add} alt="add button" />
        </div>

        <EditModal current={this.state.current} show={this.state.showEdit} hideModal={this.hideEditModal} handleDel={this.delParticularTask}/>


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
