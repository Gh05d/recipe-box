import * as types from "../constants";

//Users will be saved in an array
const INITIAL_STATE = {
  modalType: null,
  modalProps: {}
};

export default function ModalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      };

    case types.HIDE_MODAL:
      return INITIAL_STATE;

    default:
      return state;
  }
}
