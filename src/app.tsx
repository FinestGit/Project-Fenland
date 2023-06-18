import { useModalContext } from "./context/ModalContext";

const App = () => {
  const { openModal } = useModalContext();
  return (
    <div className="app-container">
      <h1>Modal Test</h1>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default App;
