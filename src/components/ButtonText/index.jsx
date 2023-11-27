import React from 'react'
import { Container } from './styles'

const ButtonText = ({ title, isActive = false, ...props }) => {
  return (
    <Container type="button" isActive={isActive} {...props}>
      {title}
    </Container>
  )
}

export default ButtonText
