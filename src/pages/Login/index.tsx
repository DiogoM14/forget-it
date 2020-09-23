import React from 'react'

import {
  Wrapper,
  WelcomeContainer,
  Title,
  WelcomeDescription,
  DotContainer,
  WelcomeDot,
  ButtonsContainer,
  GoogleButton,
  GoogleImage,
  FacebookButton,
  FacebookImage,
  ButtonText,
  SignUp
} from './styles'

import GoogleIcon from '../../assets/icons/google.png'
import FacebookIcon from '../../assets/icons/facebook.png'

const Login: React.FC = () => {
  return (
    <Wrapper>
      <WelcomeContainer>
        <Title>Welcome to Forget It</Title>
        <WelcomeDescription>
          Create your notes and forget your preoccupations
        </WelcomeDescription>
        <DotContainer>
          <WelcomeDot />
          <WelcomeDot />
          <WelcomeDot />
        </DotContainer>
      </WelcomeContainer>
      <ButtonsContainer>
        <GoogleButton>
          <GoogleImage source={GoogleIcon} />
          <ButtonText>Login with Google</ButtonText>
        </GoogleButton>
        <FacebookButton>
          <FacebookImage source={FacebookIcon} />
          <ButtonText>Login with Facebook</ButtonText>
        </FacebookButton>
      </ButtonsContainer>
      <SignUp>Don't have account? Sign Up!</SignUp>
    </Wrapper>
  )
}

export default Login
