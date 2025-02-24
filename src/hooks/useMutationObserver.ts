import { useEffect } from "react";

interface MutationObserverProps {
  callback: (mutation: MutationRecord | any) => void;
  options: MutationObserverInit;
  withAllMutations?: boolean;
}

export const useMutationObserver = ({
  callback,
  options,
  withAllMutations = false,
}: MutationObserverProps) => {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      if (withAllMutations) {
        callback(mutations);
      } else {
        mutations.forEach(callback);
      }
    });

    observer.observe(document.body, options);

    return () => observer.disconnect();
  }, [callback, options, withAllMutations]);
};
