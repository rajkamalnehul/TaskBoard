import React from "react";
import del from "../../assets/delete.png";
import close from "../../assets/cancel.png";
import "./newlist.css";

export const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} >
      <section className="modal-main">{children}</section>
    </div>
  );
};
