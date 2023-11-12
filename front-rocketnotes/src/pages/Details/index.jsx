import React from 'react'
import { Container } from './styles'
import Button from '../../components/Button'

const Details = () => {
    return (
        <Container>
            <h1>Hello World</h1>

            <Button title="Login" loading/>
            <Button title="Cadastrar"/>
            <Button title="Voltar"/>
        </Container>

    )
}

export default Details
