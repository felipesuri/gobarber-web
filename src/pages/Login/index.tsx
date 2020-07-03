import React from 'react'
import { Mail, Lock } from 'styled-icons/feather'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as S from './styled'

const Login: React.FC = () => (
  <S.LoginWrapper>
    <S.Content>
      <img src={logoImg} alt="GoBarber" />

      <S.Form>
        <h1>Faça seu Login</h1>

        <Input name="email" icon={Mail} placeholder="E-mail" />
        <Input name="password" icon={Lock} type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

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
