import React from 'react'
import { StyledContainer } from './StyledContainer'
interface Prop{
    children:React.ReactNode,
}
export const Container = ({children}:Prop) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}
