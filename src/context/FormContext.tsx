import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useReducer,
} from "react";

import { FORM_TYPE_REDUCERS } from "../types/enums";
import { FormDispatchContext, FormStateContext } from ".";
import { FormAction, FormState } from "../types/formStates.type";

const initialState: FormState = {
  standardEmbossing: {
    cover_front_standard_embossing_line1: "",
    cover_front_standard_embossing_line2: "",
    cover_front_standard_embossing_line3: "",

    font_cover_front_standard_embossing_line1: "",
    font_cover_front_standard_embossing_line1_id: null,
    font_cover_front_standard_embossing_line2: "",
    font_cover_front_standard_embossing_line2_id: null,
    font_cover_front_standard_embossing_line3: "",
    font_cover_front_standard_embossing_line3_id: null,

    cover_front_embossing_color: null,
    cover_front_embossing_color_id: null,

    cover_front_standard_embossing_placement: null,
    cover_front_standard_embossing_placement_id: null,

    extraPaymentRequiredStandardEmbossing: false,
  },
  spineEmbossing: {
    line1: "Test for save",
    line2: "",
    line3: "",
  },
};
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case FORM_TYPE_REDUCERS.UPDATE:
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value,
        },
      };
    case FORM_TYPE_REDUCERS.RESET:
      return initialState;

    default:
      return state;
  }
};

interface FormContextProps {
  children: ReactNode;
}
const FormContext = ({ children }: FormContextProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
};
export default FormContext;
