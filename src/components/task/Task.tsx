import React from 'react'
import { ItemContainer, SubTask, TaskName } from './task-styles'

export const Task = () => {
  return (
    <ItemContainer>
        <TaskName>Build UI for onboarding flow</TaskName>
        <SubTask>0 of 3 subtask</SubTask>
    </ItemContainer>
  )
}
