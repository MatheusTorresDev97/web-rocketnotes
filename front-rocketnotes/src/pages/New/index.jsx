import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Section from '../../components/Section'
import NoteItem from '../../components/NoteItem'
import { Container, Form } from './styles'
import { useState } from 'react'


const New = () => {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter((link) => link !== deleted))
  }

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
            {
              links.map((link, index) =>(
                <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {handleRemoveLink(link)}}
                />
              ))
            }
            <NoteItem
              isNew
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              placeholder="Novo link" />
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