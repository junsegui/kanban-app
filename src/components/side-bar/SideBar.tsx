import React from 'react'
import { AllBoard, BoardsContainer, CreateNewBoard, Logo, LogoContainer, SideBarContainer, TittleButton } from './Side-Bar-Styles'
import logo from "../../assets/logo-dark.svg"
import { Boards } from '../Boards/Boards'
import { SVG } from '../Boards/SVG'
import { StyledButton } from '../top-bar/StyledTopBar'


export const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoContainer>
        <Logo src={logo}/>
      </LogoContainer>
          <AllBoard>ALL BOARDS (10)</AllBoard>
      <BoardsContainer>
        <Boards/>
        <Boards/>
      </BoardsContainer>
      <CreateNewBoard>
        <SVG/>
        <TittleButton>+ Create New Board</TittleButton>
      </CreateNewBoard>
        
    </SideBarContainer>
  )
}
