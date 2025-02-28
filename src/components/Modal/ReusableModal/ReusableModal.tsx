import { useModalDispatch, useModalState } from "../../../context";
import { MODAL_TYPE_REDUCERS, MODAL_TYPES } from "../../../types/enums";
import { Button } from "../../Button/Button";
import Modal from "../Modal";
import style from "./styles.module.scss";

const ReusableModal = () => {
  const { isOpen, type, payload } = useModalState() || {};
  const modalDispatch = useModalDispatch();

  if (!isOpen) return null;

  return (
    <div className={style.overlayModal}>
      <div className={style.reusableModalWrapper}>
        <div className={style.contentContainerReusableModal}>
          {type === MODAL_TYPES.INFO && (
            <>
              <p>{payload?.message}</p>

              <div className={style.containerBtns}>
                <Button
                  onClick={() => {
                    payload?.confirmAction?.();
                    modalDispatch({ type: MODAL_TYPE_REDUCERS.CLOSE });
                  }}
                >
                  OK
                </Button>

                <Button
                  onClick={() => {
                    payload?.cancelAction?.();
                    modalDispatch({ type: MODAL_TYPE_REDUCERS.CLOSE });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}

          {/* {type === MODAL_TYPES.INFO && <div></div>} */}
        </div>
      </div>
    </div>
  );
};

export default ReusableModal;
