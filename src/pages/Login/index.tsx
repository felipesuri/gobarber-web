import React from 'react'

import logoImg from '../../assets/logo.svg'

import * as S from './styled'

const Login: React.FC = () => (
  <S.LoginWrapper>
    <S.Content>
      <img src={logoImg} alt="GoBarber" />

      <S.Form>
        <h1>Faça seu Login</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </S.Form>

      <a href="login">
        <S.LoginIcon />
          Criar conta
      </a>
    </S.Content>

    <S.Background />
  </S.LoginWrapper>
)

export default Login
