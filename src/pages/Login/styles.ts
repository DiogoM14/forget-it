import styled from 'styled-components/native'

export const Wrapper = styled.View`
  background: #000;
  flex: 1;

  align-items: center;
  justify-content: center;
`

export const Container = styled.View`
  background: #121212;
  width: 350px;
  height: 500px;
  border-radius: 8px;

  align-items: center;
`

export const Title = styled.Text`
  font-size: 34px;
  color: #fff;
  font-family: roboto_700;

  margin-top: 20px;
`

export const Form = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 20px;
  align-items: center;

  background: red;
`

export const Email = styled.TextInput``

export const Password = styled.TextInput``

export const LoginButton = styled.TouchableOpacity``

export const RegisterButton = styled.TouchableOpacity``
