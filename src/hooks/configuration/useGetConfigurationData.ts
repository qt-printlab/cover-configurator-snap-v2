import { getElementById } from "../../utils/getElementById";
import {
  getCoverDataThunk,
  setAlbumPersonalizations,
} from "../../redux/slices/configuratorSlice";
import { useDispatch } from "react-redux";
import { useMutationObserver } from "../useMutationObserver";
import { useCallback, useEffect } from "react";
import { store } from "../../redux/store/store";

const useGetConfigurationData = () => {
  const dispatch = useDispatch();

  //open configurator button
  const attachButtonHandler = () => {
    const buttonOpenConfigurator = getElementById("configuratorOpenButton");
    if (buttonOpenConfigurator) {
      buttonOpenConfigurator.addEventListener(
        "click",
        () => store.dispatch(getCoverDataThunk()),
        { once: true }
      );
    } else {
      console.warn("Button not found yet");
    }
  };

  //add elements to personalization array
  const handleCheckboxChange = useCallback(
    (event: Event) => {
      const container = document.querySelector(
        ".bold_option.bold_option_checkboxmulti"
      );
      if (container) {
        const checkboxElements = container.querySelectorAll(
          '.bold_option_value_element input[type="checkbox"]:checked'
        );
        const selectedValues = Array.from(checkboxElements).map(
          (checkbox: Element) => (checkbox as HTMLInputElement).value
        );
        dispatch(setAlbumPersonalizations(selectedValues));
      }
    },
    [dispatch]
  );

  // Функция для навешивания обработчика на набор элементов
  const handleCheckboxElements = useCallback(
    (checkboxElements: NodeListOf<Element>) => {
      checkboxElements.forEach((checkbox) => {
        checkbox.addEventListener("change", handleCheckboxChange);
      });
      return () => {
        checkboxElements.forEach((checkbox) => {
          checkbox.removeEventListener("change", handleCheckboxChange);
        });
      };
    },
    [handleCheckboxChange]
  );

  // callback for MutationObserver
  const checkboxPersonalizacja = useCallback(
    (mutation: MutationRecord) => {
      if (mutation.addedNodes.length) {
        const checkboxContainers = document.querySelectorAll(
          ".bold_option.bold_option_checkboxmulti"
        );

        if (checkboxContainers.length > 0) {
          const firstContainer = checkboxContainers[0];
          const checkboxElements = firstContainer.querySelectorAll(
            '.bold_option_value_element input[type="checkbox"]'
          );
          if (checkboxElements.length > 0) {
            handleCheckboxElements(checkboxElements);
          }
        }
      }
    },
    [handleCheckboxElements]
  );

  // local logic:
  useEffect(() => {
    attachButtonHandler();
  }, []);

  // local personalization
  useEffect(() => {
    const container = document.querySelector(
      ".bold_option.bold_option_checkboxmulti"
    );
    if (container) {
      const checkboxElements = container.querySelectorAll(
        '.bold_option_value_element input[type="checkbox"]'
      );
      if (checkboxElements.length > 0) {
        handleCheckboxElements(checkboxElements);
      }
    }
  }, [handleCheckboxElements]);

  // prod logic:
  useMutationObserver({
    callback: attachButtonHandler,
    options: {
      childList: true,
      subtree: true,
    },
    withAllMutations: false,
  });

  // personalization elements Prod
  useMutationObserver({
    callback: checkboxPersonalizacja,
    options: {
      childList: true,
      subtree: true,
    },
    withAllMutations: false,
  });
};

export default useGetConfigurationData;
