import styled from 'styled-components/native'

import 'react-native-gesture-handler'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'

export const Wrapper = styled.View`
  flex: 1;
  background: #000;
  align-items: center;
`

export const WelcomeContainer = styled.View`
  width: 100%;
  height: 50%;
  background: #121212;

  border-radius: 20px;
  align-items: center;
  justify-content: flex-end;
`

export const Swipe = styled(Swiper)`
  align-self: center;
  justify-content: flex-end;
`

export const FirstText = styled.View``

export const SecondText = styled.View``

export const ThirdText = styled.View``

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: roboto_700;
  text-align: center;
  margin-top: 35%;
`

export const WelcomeDescription = styled.Text`
  color: #ddd;
  margin-vertical: 24px;
  font-size: 20px;
  font-family: roboto_400;
  text-align: center;
`

export const ButtonsContainer = styled.View`
  flex: 1;
  width: 90%;
  margin-top: 70px;
`

export const GoogleButton = styled(RectButton)`
  width: 100%;
  height: 70px;
  border-radius: 20px;
  background: #121212;
  margin-bottom: 40px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`

export const GoogleImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`

export const FacebookButton = styled(RectButton)`
  width: 100%;
  height: 70px;
  border-radius: 20px;
  background: #3b5998;
  margin-bottom: 20px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`
export const FacebookImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border-radius: 8px;
  background: #fff;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: roboto_500;
`

export const SignUpContainer = styled.View`
  flex-direction: row;
`

export const SignUpText = styled.Text`
  color: #fff;
  font-family: roboto_500;
  margin-bottom: 50px;
  font-size: 16px;
`

export const SignUpButton = styled(BorderlessButton)``
