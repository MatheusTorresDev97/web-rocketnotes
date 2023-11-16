import Header from '../../components/Header'
import Input from '../../components/Input'

import { Container, Form } from './styles'

const New = () => {
  return (
    <Container>
        <Header />

        <main>
          <Form>
            <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
            </header>

            <Input placeholder="Título" />
          </Form>
        </main>
    </Container>
  )
}

export default New