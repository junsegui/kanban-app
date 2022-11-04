import React from 'react'
import { CCStyled } from './CCStyled'
interface Prop{
    children:React.ReactNode,
}
export const CC = ({children}:Prop) => {
  return (
    <CCStyled>{children}</CCStyled>
  )
}
