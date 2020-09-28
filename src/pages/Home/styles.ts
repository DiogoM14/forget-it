import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background: #000;

  justify-content: center;
  align-items: center;
`

export const Container = styled.View`
  width: 90%;
  height: 90%;
`

export const Title = styled.Text`
  color: #dddddd;
  font-size: 42px;
  font-family: roboto_500;
`

export const ListContainer = styled.ScrollView`
  background: #121212;
  margin-top: 100px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const List = styled(RectButton)`
  width: 100%;
  flex-direction: row;

  align-content: center;
  justify-content: space-between;
`

export const ListItem = styled.Text`
  color: #fff;
  font-size: 28px;
  font-family: roboto_500;
  margin: 20px;
`

export const FooterContainer = styled.View`
  width: 100%;
  height: 100px;

  background: #121212;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Menu = styled(RectButton)`
  margin-left: 40px;
`

export const AppNote = styled(RectButton)`
  margin-right: 40px;
`
