import React, { useState } from "react";

import "./App.css";
import { BoardsDisplay } from "./components/boards-display/BoardsDisplay";
import { CC } from "./components/cc/CC";
import { Container } from "./components/container/Container";
import { Modal } from "./components/modal/Modal";
import { SideBar } from "./components/side-bar/SideBar";
import { TopBar } from "./components/top-bar/TopBar";
import useModal from "./hooks/useModal";

function App() {
  const { isOpen, toggle } = useModal();
  return (
    <>
      <Container>
        {isOpen && <Modal isOpen={isOpen} toggle={toggle} />}
        <SideBar />
        <CC>
          <TopBar />
          <BoardsDisplay />
        </CC>
      </Container>
    </>
  );
}

export default App;
