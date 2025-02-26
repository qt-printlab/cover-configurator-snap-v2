import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import ArrowLeft from "../../components/Icons/ArrowLeft";
import Logo from "../../components/Logo/Logo";
import useGetTranslations from "../../hooks/configuration/useGetTranslations";
import styles from "./styles.module.scss";
import { useCallback } from "react";
import { setIsModalOpen } from "../../redux/slices/configuratorSlice";

const Header = () => {
  const { t } = useGetTranslations();
  const dispatch = useDispatch();

  const labels = {
    headerTitle: t("header.closeConfiguratorTitle"),
    headerSaveAlbumButton: t("header.saveConfigurator"),
  };
  const handleCloseConfigurator = useCallback(() => {
    dispatch(setIsModalOpen(false));
  }, []);

  return (
    <header className={styles.wrapperHeader}>
      <div className={styles.containerHeader}>
        <Button
          className={styles.headerCloseContainer}
          onClick={handleCloseConfigurator}
        >
          <ArrowLeft />
          <p>{labels.headerTitle}</p>
        </Button>
        <Logo />

        <Button
          className={styles.buttonSaveAlbum}
          type="submit"
          form="configuratorForm"
        >
          {labels.headerSaveAlbumButton}
        </Button>
      </div>
    </header>
  );
};

export default Header;
