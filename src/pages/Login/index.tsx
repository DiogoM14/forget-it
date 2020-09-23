import React from 'react'
import { useNavigation } from '@react-navigation/native'

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
  SignUpContainer,
  SignUpText,
  SignUpButton
} from './styles'

import GoogleIcon from '../../assets/icons/google.png'
import FacebookIcon from '../../assets/icons/facebook.png'

const Login: React.FC = () => {
  const { navigate } = useNavigation()

  function handleNavigateToHomePage() {
    navigate('Home')
  }
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
        <GoogleButton onPress={handleNavigateToHomePage}>
          <GoogleImage source={GoogleIcon} />
          <ButtonText>Login with Google</ButtonText>
        </GoogleButton>
        <FacebookButton onPress={handleNavigateToHomePage}>
          <FacebookImage source={FacebookIcon} />
          <ButtonText>Login with Facebook</ButtonText>
        </FacebookButton>
      </ButtonsContainer>
      <SignUpContainer>
        <SignUpText>Don't have account? </SignUpText>
        <SignUpButton onPress={handleNavigateToHomePage}>
          <SignUpText style={{ color: '#d03715' }}>SignUp!</SignUpText>
        </SignUpButton>
      </SignUpContainer>
    </Wrapper>
  )
}

export default Login
