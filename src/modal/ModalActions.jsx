import * as types from "../constants";

export const showModal = (modalType, modalProps) => {
  return {
    type: types.SHOW_MODAL,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const hideModal = () => {
  return {
    type: types.HIDE_MODAL
  };
};
