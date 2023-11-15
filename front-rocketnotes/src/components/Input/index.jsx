import { Container } from './styles'
import React from 'react'

export const Input = ({icon: Icon, ...props}) => {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...props} />
        </Container>
    )
}

export default Input