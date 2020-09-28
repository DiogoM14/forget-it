import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import {
  Container,
  Wrapper,
  Title,
  ListContainer,
  List,
  ListItem,
  FooterContainer,
  Menu,
  AppNote
} from './styles'

const Home: React.FC = () => {
  const [notes, setNotes] = useState([
    { name: 'Personal', number: 1 },
    { name: 'Work', number: 2 },
    { name: 'School', number: 3 },
    { name: 'School', number: 4 },
    { name: 'School', number: 5 },
    { name: 'School', number: 6 },
    { name: 'School', number: 7 },
    { name: 'School', number: 8 },
    { name: 'School', number: 9 },
    { name: 'School', number: 10 },
    { name: 'School', number: 11 },
    { name: 'School', number: 12 }
  ])

  function handleAddNote() {}

  return (
    <Wrapper>
      <Container>
        <Title>My Notes</Title>
        <ListContainer>
          {notes.map(note => {
            return (
              <List underlayColor="#fff" key={note.number}>
                <ListItem>{note.name}</ListItem>
                <ListItem>{note.number}</ListItem>
              </List>
            )
          })}
        </ListContainer>

        <FooterContainer>
          <Menu>
            <Feather name="menu" size={50} color="#fff" />
          </Menu>
          <AppNote onPress={handleAddNote}>
            <Feather name="plus" size={50} color="#fff" />
          </AppNote>
        </FooterContainer>
        <RectButton underlayColor="#fff" />
      </Container>
    </Wrapper>
  )
}

export default Home
