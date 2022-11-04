import React from 'react'
import { StyledButton, StyledElipsis, StyledTittle, StyledTopBar } from './StyledTopBar'
import elipsis from "../../assets/icon-vertical-ellipsis.svg"
export const TopBar = () => {
  return (
    <StyledTopBar>
        <StyledTittle>Platform Launch</StyledTittle>
        <StyledButton>+ Add New Task</StyledButton>
        <StyledElipsis src={elipsis}/>
    </StyledTopBar>
  )
}
