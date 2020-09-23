import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  Wrapper,
  Title,
  ListContainer,
  List,
  FooterContainer,
  Menu,
  AppNote
} from './styles'
import { Text } from 'react-native'

const Home: React.FC = () => {
  const [notes, setNotes] = useState([
    { name: 'Personal', number: '1' },
    { name: 'Work', number: '2' }
  ])

  return (
    <Wrapper>
      <Container>
        <Title>My Notes</Title>
        <ListContainer>
          <List />
        </ListContainer>

        <FooterContainer>
          <Menu>
            <Feather name="menu" size={50} color="#fff" />
          </Menu>
          <AppNote>
            <Feather name="plus" size={50} color="#fff" />
          </AppNote>
        </FooterContainer>
      </Container>
    </Wrapper>
  )
}

export default Home
