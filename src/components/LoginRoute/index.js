import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginFormMainContainer,
  LoginFormContainer,
  LoginLogo,
  InputContainer,
  Label,
  InputBox,
  CheckBox,
  LoginButton,
  CheckBoxContainer,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg, showErrorMsg: true})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const loginUrl = 'https://apis.ccbp.in/login'

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      console.log(data.error_msg)
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeShowPassword = () => {
    const {password} = this.state

    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  render() {
    const {username, password, errorMsg, showErrorMsg, isChecked} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect t0="/" />
    }

    const nxtWatchLogo = false
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

    return (
      <LoginFormMainContainer isDark>
        <LoginFormContainer isDark onSubmit={this.onSubmitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <Label htmlFor="username" isDark>
              Username
            </Label>
            <InputBox
              isDark
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password" isDark>
              Password
            </Label>
            <InputBox
              isDark
              type={isChecked ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
          </InputContainer>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="checkbox"
              onChange={this.onChangeShowPassword}
              checked={isChecked}
            />
            <Label htmlFor="checkbox" isDark>
              Show Password
            </Label>
          </CheckBoxContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </LoginFormMainContainer>
    )
  }
}

export default LoginForm
