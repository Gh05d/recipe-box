import React from "react";
import { connect } from "react-redux";
import RecipeModal from "./RecipeModal";
import * as types from "../constants";

const MODAL_COMPONENTS = {
  [types.MODAL_TYPE_RECIPE]: RecipeModal
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[modalType];

  return <ModalComponent {...modalProps} />;
};

export default connect(state => state.modal)(ModalRoot);
