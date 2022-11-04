import React from 'react'

import './App.css'
import { BoardsDisplay } from './components/boards-display/BoardsDisplay'
import { CC } from './components/cc/CC'
import { Container } from './components/container/Container'
import { SideBar } from './components/side-bar/SideBar'
import { TopBar } from './components/top-bar/TopBar'

function App() {
  return (
    <>
   <Container>
      <SideBar/>
      <CC>
        <TopBar/>
        <BoardsDisplay/>
      </CC>
   </Container>
    </>
  )
}

export default App
