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

const Home: React.FC = () => {
  // const [notes, setNotes] = useState([{name}, {}])

  return (
    <Wrapper>
      <Container>
        <Title>My Notes</Title>
        <ListContainer>
          <List></List>
        </ListContainer>

        <FooterContainer>
          <Feather name="menu" size={50} color="#fff" />
          <Feather name="plus" size={50} color="#fff" />
        </FooterContainer>
      </Container>
    </Wrapper>
  )
}

export default Home
