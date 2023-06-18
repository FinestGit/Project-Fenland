/* eslint-disable unicorn/prefer-query-selector */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./styles/index.scss";
import { ModalProvider } from "./context/ModalContext.tsx";
import CreateCommunityModal from "./components/Modals/CreateCommunityModal.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider modalContent={<CreateCommunityModal />}>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
