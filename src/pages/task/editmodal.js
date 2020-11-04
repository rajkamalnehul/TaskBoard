import React, { useState } from "react";
import { Modal } from '../../components/NewList/newlist';

import del from "../../assets/delete.png";
import close from "../../assets/cancel.png";
import "./task.css";

export default class EditModal extends React.Component{
    render(){
        return(
            <Modal show={this.props.show} handleClose={this.props.hideModal}>
            <div className="modal-body">
            <div className="modal-header">
                <img src={del} alt="del" onClick={()=>this.props.handleDel(this.props.current)}/>
                <img src={close} alt="close" onClick={this.props.hideModal} />
            </div>
            <p>{this.props.current?this.props.current:''}</p>
            <textarea
                className="list-details"
                placeholder="Add Details"
            ></textarea>
            <p>Add Date</p>
            <p>Move to another list</p>
            </div>
            </Modal>
        )
    }
}