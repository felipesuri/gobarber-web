import styled from 'styled-components'
import { LogIn } from 'styled-icons/feather'
import { shade } from 'polished'

import loginBackgroundImage from '../../assets/sign-in-background.png'

export const LoginWrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  a {
    color: #ff9000;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')}
    }

    svg {
      margin-right: 6px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackgroundImage}) no-repeat center;
  background-size: cover;
`

export const Form = styled.form`
  margin: 80px 0;
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 24px;
  }

  input {
    color: #faede8;
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: #ff9000;
    color: #312e38;

    border-radius: 10px;
    border: 0;

    height: 56px;
    padding: 0 16px;
    width: 100%;
    margin-top: 16px;

    font-weight: 600;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')}
    }

  }

  a {
    color: #faede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#faede8')}
    }
  }
`

export const LoginIcon = styled(LogIn)`
  width: 16px;
  height: 16px;
`
