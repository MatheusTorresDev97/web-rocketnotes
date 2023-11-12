import React from 'react'
import { Container } from './styles'

const Button = ({title, loading = false, ...rest}) => {
    return (
        <Container 
        type='button'
        disabled={loading}
        {...rest}
        >
            {loading ? 'Carregando' : title}
        </Container>
    )
}

export default Button
