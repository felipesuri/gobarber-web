import React, { useCallback, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { FormHandles } from '@unform/core'
import { Mail, Lock, User } from 'styled-icons/feather'

import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as S from './styled'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'Tamanho mínimo: 8 digítos')
      })

      await schema.validate(data, { abortEarly: false })
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <S.LoginWrapper>
      <S.Background />

      <S.Content>
        <img src={logoImg} alt="GoBarber" />

        <S.FormWrapper ref={formRef} onSubmit={handleSubmit} >
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={User} placeholder="Nome" />
          <Input name="email" icon={Mail} placeholder="E-mail" />
          <Input name="password" icon={Lock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

        </S.FormWrapper>

        <S.InternalLink to="/">
          <S.ArrowIcon />
          Voltar para Login
        </S.InternalLink>
      </S.Content>
    </S.LoginWrapper>
  )
}

export default SignUp
