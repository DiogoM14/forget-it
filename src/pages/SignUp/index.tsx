import React from 'react'
import { Text } from 'react-native'

import {
  Wrapper,
  Title,
  ButtonsContainer,
  GoogleButton,
  GoogleImage,
  FacebookButton,
  FacebookImage,
  MiddleText,
  ButtonText
} from './styles'

import GoogleIcon from '../../assets/icons/google.png'
import FacebookIcon from '../../assets/icons/facebook.png'

const SignUp: React.FC = () => {
  return (
    <Wrapper>
      <Title>Welcome to Forget It</Title>

      <ButtonsContainer>
        <GoogleButton>
          <GoogleImage source={GoogleIcon} />
          <ButtonText>Sign Up with Google</ButtonText>
        </GoogleButton>
        <MiddleText>Or</MiddleText>
        <FacebookButton>
          <FacebookImage source={FacebookIcon} />
          <ButtonText>Sign Up with Facebook</ButtonText>
        </FacebookButton>
      </ButtonsContainer>
    </Wrapper>
  )
}

export default SignUp
