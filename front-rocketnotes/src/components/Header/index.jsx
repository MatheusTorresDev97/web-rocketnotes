import React from 'react'
import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'


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

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}

export default Header
