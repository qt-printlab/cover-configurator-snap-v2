import Header from "./modules/Header/Header";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import useGetConfigurationData from "./hooks/configuration/useGetConfigurationData";
import ConfiguratorWorkArea from "./modules/WorkArea/ConfiguratorWorkArea";
import ReusableModal from "./components/Modal/ReusableModal/ReusableModal";

function App() {
  const isConfiguratorOpen = useSelector(
    (state: RootState) => state.albumConfiguration.isConfiguratorOpen
  );

  useGetConfigurationData();

  return (
    <>
      {isConfiguratorOpen && (
        <>
          <Modal>
            <Header />
            <ConfiguratorWorkArea />
          </Modal>
          <ReusableModal />
        </>
      )}
    </>
  );
}

export default App;
