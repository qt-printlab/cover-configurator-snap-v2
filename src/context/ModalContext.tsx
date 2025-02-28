import { ReactNode, useReducer } from "react";
import { InitialModalStateProps, ModalAction } from "../types/modalState.types";
import { ModalContext, ModalDispatchContext } from ".";
import { MODAL_TYPE_REDUCERS } from "../types/enums";

interface ModalContextProps {
  children: ReactNode;
}

const initialModalState: InitialModalStateProps = {
  type: null,
  isOpen: false,
  payload: null,
};

const modalReducer = (
  state: InitialModalStateProps,
  action: ModalAction
): InitialModalStateProps => {
  switch (action.type) {
    case MODAL_TYPE_REDUCERS.OPEN:
      return {
        isOpen: true,
        type: action.payload.type,
        payload: action.payload,
      };
    case MODAL_TYPE_REDUCERS.CLOSE:
      return {
        isOpen: false,
        type: null,
        payload: null,
      };

    default:
      return state;
  }
};

export const ModalProvider = ({ children }: ModalContextProps) => {
  const [state, setState] = useReducer(modalReducer, initialModalState);

  return (
    <ModalContext.Provider value={state}>
      <ModalDispatchContext.Provider value={setState}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};
