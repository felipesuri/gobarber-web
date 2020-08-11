import React, { useCallback, useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Mail, Lock, User } from 'styled-icons/feather'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import api from '../../services/api'

import { useToast } from '../../hooks/toast'

import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as S from './styled'
import { useAuth } from '../../hooks/auth'

interface SingUPFormData {
  name: string
  email: string
  password: string
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()

  const { user } = useAuth()

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(8, 'Tamanho mínimo: 8 dígitos'),
        })

        await schema.validate(data, { abortEarly: false })

        await api.post('/users', data)

        addToast({
          type: 'sucess',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login!',
        })

        history.push('/')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
        })
      }
    },
    [addToast, history]
  )

  return (
    <S.LoginWrapper>
      <S.Header>
        <S.InternalLink to="/dashboard">
          <S.ArrowIcon />
        </S.InternalLink>
      </S.Header>
      <S.Content>
        <S.FormWrapper
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <S.AvatarWrapper>
            <img src={user.avatar_url} alt={user.name} />
            <button type="button">
              <S.CameraIcon />
            </button>
          </S.AvatarWrapper>

          <h1>Seu perfil</h1>

          <Input name="name" icon={User} placeholder="Nome" />
          <Input name="email" icon={Mail} placeholder="E-mail" />

          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            icon={Lock}
            type="password"
            placeholder="Senha atual"
          />
          <Input name="password" icon={Lock} type="password" placeholder="Senha" />
          <Input
            name="password_confirmation"
            icon={Lock}
            type="password"
            placeholder="Confirmar senha"
          />

          <Button type="submit">Confirmar mudanças</Button>
        </S.FormWrapper>
      </S.Content>
    </S.LoginWrapper>
  )
}

export default Profile
