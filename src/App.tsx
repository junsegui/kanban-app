import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import { BoardsDisplay } from "./components/boards-display/BoardsDisplay";
import { CC } from "./components/cc/CC";
import { Container } from "./components/container/Container";
import { ColumnModal } from "./components/modal/ColumnModal";
import { Modal } from "./components/modal/Modal";
import { SideBar } from "./components/side-bar/SideBar";
import { TopBar } from "./components/top-bar/TopBar";
import useModal from "./hooks/useModal";
import { modal } from "./redux/states/types";
import { IModal } from "./types";

function App() {
  const visible = useSelector((state: IModal) => state.modal);
  const { column } = useSelector((state: any) => state.modal);

  return (
    <>
      <Container>
        <SideBar />
        <CC>
          <TopBar />
          <BoardsDisplay />
        </CC>
      </Container>
      {visible.visible && <Modal />}
      {column && <ColumnModal />}
    </>
  );
}

export default App;
