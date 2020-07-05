import React, { useRef, useCallback } from 'react'
import { Mail, Lock } from 'styled-icons/feather'
// eslint-disable-next-line no-unused-vars
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as S from './styled'

interface SignInFormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data, { abortEarly: false })

      await signIn({
        email: data.email,
        password: data.password
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
      })
    }
  }, [signIn, addToast])

  return (
    <S.LoginWrapper>
      <S.Content>
        <img src={logoImg} alt="GoBarber" />

        <S.FormWrapper ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>

          <Input name="email" icon={Mail} placeholder="E-mail" />
          <Input name="password" icon={Lock} type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </S.FormWrapper>

        <a href="login">
          <S.LoginIcon />
          Criar conta
        </a>
      </S.Content>

      <S.Background />
    </S.LoginWrapper>
  )
}

export default Login
