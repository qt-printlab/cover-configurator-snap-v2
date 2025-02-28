import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useFormDispatch } from "../context";
import { FORM_TYPE_REDUCERS } from "../types/enums";
import { FormState } from "../types/formStates.type";

export const useWatchFormChanges = (section: keyof FormState) => {
  const { watch } = useFormContext();
  const dispatch = useFormDispatch();

  useEffect(() => {
    const subscription = watch((formValues) => {
      if (!formValues[section]) return;

      Object.entries(formValues[section]).forEach(([field, value]) => {
        dispatch({
          type: FORM_TYPE_REDUCERS.UPDATE,
          section,
          field,
          value: String(value),
        });
      });
    });

    return () => subscription.unsubscribe();
  }, [watch, dispatch, section]);
};
