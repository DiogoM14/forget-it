import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Wrapper,
  WelcomeContainer,
  Swipe,
  Title,
  FirstText,
  SecondText,
  ThirdText,
  WelcomeDescription,
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
        <Swipe
          dotColor="#000"
          activeDotColor="#d03715"
          loop={false}
          autoplay={true}
          autoplayTimeout={15}
        >
          <FirstText>
            <Title>Welcome to Forget It</Title>
            <WelcomeDescription>
              Create your notes and forget your preoccupations
            </WelcomeDescription>
          </FirstText>

          <SecondText>
            <Title>Discover Productivity</Title>
            <WelcomeDescription>
              You can create customizable notes. Here you are the boss
            </WelcomeDescription>
          </SecondText>

          <ThirdText>
            <Title>Thank you for being here</Title>
            <WelcomeDescription>
              You can count on us to improve your experience of upgrading on
              Forget It
            </WelcomeDescription>
          </ThirdText>
        </Swipe>
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
          <SignUpText style={{ color: '#d03715' }}>Sign Up!</SignUpText>
        </SignUpButton>
      </SignUpContainer>
    </Wrapper>
  )
}

export default Login
