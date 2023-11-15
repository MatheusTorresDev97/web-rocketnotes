import React from 'react'
import { Container } from './styles'

const ButtonText = ({ title, ...props }) => {
  return (
    <Container type="button" {...props}>
        {title}
    </Container>
  )
}

export default ButtonText
