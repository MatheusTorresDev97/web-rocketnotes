import React from 'react'
import { Container, Links, Content } from './styles'
import Header from '../../components/Header'
import Section from '../../components/Section'
import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Tag from '../../components/Tag'

const Details = () => {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <ButtonText title="Excluir nota" />

                    <Section title='Links utéis'>
                        <Links>
                            <li>
                                <a href="#">https://google.com.br</a>
                            </li>
                            <li>
                                <a href="#">https://google.com.br</a>
                            </li>
                        </Links>
                    </Section>

                    <Section title='Marcadores'>
                        <Tag title='express' />
                        <Tag title='node' />
                    </Section>
                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>

    )
}

export default Details
