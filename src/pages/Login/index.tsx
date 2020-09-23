import React from 'react'
import { Text } from 'react-native'

import {
  Wrapper,
  Container,
  LoginContainer,
  Title,
  Form,
  Email,
  Password,
  LoginButton,
  RegisterButton
} from './styles'

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Forget It</Title>
        <Form>
          <Email placeholder="E-mail" />
          <Password placeholder="Password" />

          <LoginButton />
          <RegisterButton />
        </Form>
      </Container>
    </Wrapper>
  )
}

export default Login
