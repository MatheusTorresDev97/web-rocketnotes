import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import Header from '../../components/Header'
import Input from '../../components/Input'
import ButtonText from '../../components/ButtonText'
import Section from '../../components/Section'
import Note from '../../components/Note'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

const Home = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const { data } = await api.get('/tags')
      setTags(data)
    }
    fetchTags()
  }, [])
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
      <li><ButtonText title="Todos" isActive /></li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}><ButtonText title={tag.name} isActive /></li>
          ))

        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section>
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }} />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}

export default Home
