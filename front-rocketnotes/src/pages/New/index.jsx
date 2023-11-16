import { Link } from 'react-router-dom'
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
            <Link to="/">voltar</Link>
            </header>

            <Input placeholder="Título" />

            <Textarea placeholder="Observações" />

            <Section title="Links úteis">
                <NoteItem value='https://google.com.br' />
                <NoteItem isNew placeholder="Novo link" />
            </Section>

            <Section title="Marcadores">
                <div className="tags">
                  <NoteItem value="react" />
                  <NoteItem isNew placeholder="Nova tag" />
                </div>
            </Section>
          </Form>
        </main>
    </Container>
  )
}

export default New