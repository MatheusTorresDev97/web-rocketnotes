import React from 'react'
import { Container, Profile } from './styles'



const Header = () => {
  return (
    <Container>
      <Profile>
      <img
          src="https://github.com/matheustorresdev97.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Matheus Torres</strong>
        </div>
      </Profile>
    </Container>
  )
}

export default Header
