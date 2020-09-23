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
  background: red;
  margin-top: 100px;
`

export const List = styled.FlatList``

export const FooterContainer = styled.View`
  width: 100%;
  height: 100px;
  background: blue;

  flex-direction: row;
`

export const Menu = styled(RectButton)``

export const AppNote = styled.View``
