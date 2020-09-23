import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

export const Wrapper = styled.View`
  flex: 1;
  background: #000;
  align-items: center;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: roboto_700;
  text-align: center;
  margin-top: 60%;
`

export const ButtonsContainer = styled.View`
  flex: 1;
  width: 90%;
  justify-content: flex-end;
  margin-bottom: 25%;
`

export const GoogleButton = styled(RectButton)`
  width: 100%;
  height: 70px;
  border-radius: 20px;
  background: #121212;
  margin-bottom: 20px;

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

export const MiddleText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: roboto_400;
  text-align: center;
  margin-bottom: 20px;
`
