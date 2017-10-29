import React from "react";
import { connect } from "react-redux";
import { hideModal } from "./ModalActions";
import Modal from "./Modal";

const RecipeModal = ({ title, onConfirm, modalpagetitle, hideModal, body }) => {
  return (
    //remove onClose if the Modal should only be closed via clicking one of the buttons
    <Modal
      title={title}
      onClose={() => hideModal()}
      modalpagetitle={modalpagetitle}>
      {body}
    </Modal>
  );
};

export default connect(null, { hideModal })(RecipeModal);
