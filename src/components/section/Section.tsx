import React from 'react'
import { Task } from '../task/Task'

import { Container, Img,  Label, LabelContainer, WidthContaier } from './Section-Styles'

export const Section = () => {
  return (
    <Container>
        <WidthContaier>
            <LabelContainer>
                <Img/>
                <Label>TODO (0)</Label>
            </LabelContainer>
           <Task/>
           <Task/>
           <Task/>
           <Task/>
           <Task/>
           <Task/>
           <Task/>
           <Task/>
            
        </WidthContaier>
    </Container>
  )
}
