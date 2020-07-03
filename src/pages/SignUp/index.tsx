import React from 'react'
import { Mail, Lock, User } from 'styled-icons/feather'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as S from './styled'

const SignUp: React.FC = () => (
  <S.LoginWrapper>
    <S.Background />

    <S.Content>
      <img src={logoImg} alt="GoBarber" />

      <S.Form>
        <h1>Faça seu Cadastro</h1>

        <Input name="name" icon={User} placeholder="Nome" />
        <Input name="email" icon={Mail} placeholder="E-mail" />
        <Input name="password" icon={Lock} type="password" placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>

      </S.Form>

      <a href="login">
        <S.ArrowIcon />
          Voltar para Login
      </a>
    </S.Content>
  </S.LoginWrapper>
)

export default SignUp
