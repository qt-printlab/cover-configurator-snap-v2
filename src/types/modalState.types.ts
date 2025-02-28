import { MODAL_TYPE_REDUCERS, MODAL_TYPES } from "./enums";

export interface InitialModalStateProps {
  type: MODAL_TYPES | null;
  isOpen: boolean;
  payload?: any;
}

export type ModalAction =
  | {
      type: MODAL_TYPE_REDUCERS.OPEN;
      isOpen: boolean;
      payload?: any;
    }
  | { type: MODAL_TYPE_REDUCERS.CLOSE; isOpen?: boolean; payload?: any }
  | { type: MODAL_TYPES.INFO; isOpen?: boolean; payload?: any };
