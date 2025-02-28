import { Dispatch, createContext, useContext } from "react";
import { FormAction, FormState } from "../types/formStates.type";
import { InitialModalStateProps, ModalAction } from "../types/modalState.types";

// FORM CONTEXT
export const FormStateContext = createContext<FormState | null>(null);
export const FormDispatchContext = createContext<Dispatch<FormAction> | null>(
  null
);

export const useFormState = (): FormState => {
  const context = useContext(FormStateContext);
  if (context === null) {
    throw new Error("useFormState must be used within a FormProvider");
  }
  return context;
};

export const useFormDispatch = (): Dispatch<FormAction> => {
  const context = useContext(FormDispatchContext);
  if (context === null) {
    throw new Error("useFormDispatch must be used within a FormProvider");
  }
  return context;
};

//MODAL CONTEXT
export const ModalContext = createContext<InitialModalStateProps | null>(null);
export const ModalDispatchContext = createContext<Dispatch<ModalAction> | null>(
  null
);

export const useModalState = (): InitialModalStateProps => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error("useModalState must be used within a FormProvider");
  }
  return context;
};

export const useModalDispatch = (): Dispatch<ModalAction> => {
  const context = useContext(ModalDispatchContext);

  if (context === null) {
    throw new Error("useModalDispatch must be used within a FormProvider");
  }
  return context;
};
