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
