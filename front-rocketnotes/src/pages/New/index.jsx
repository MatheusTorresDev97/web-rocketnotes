import Header from '../../components/Header'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Section from '../../components/Section'
import NoteItem from '../../components/NoteItem'
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

            <Textarea placeholder="Observações" />

            <Section title="links úteis">
                <NoteItem value='https://google.com.br' />
                <NoteItem isNew placeholder="Novo link" />
            </Section>
          </Form>
        </main>
    </Container>
  )
}

export default New