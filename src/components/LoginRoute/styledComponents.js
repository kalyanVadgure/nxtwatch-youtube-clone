import styled from 'styled-components'

export const LoginFormMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 415px;
  padding: 30px 20px 10px 20px;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
`

export const LoginLogo = styled.img`
  height: 38px;
  align-self: center;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0px 8px 0px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  margin: 8px 0px 8px 0px;
`

export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  line-height: 1.4;
  font-weight: 600;
`
export const InputBox = styled.input`
  height: 30px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #475569;
  outline: none;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`
export const CheckBox = styled.input``

export const LoginButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px 8px 20px;
  font-size: 18px;
  margin: 8px 0px 0px 0px;
`
export const ErrorMsg = styled.p`
  color: red;
  line-height: 0;
`
