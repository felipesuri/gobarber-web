import React from 'react'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.svg'

import * as S from './styled'

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth()

  return (
    <S.DashboardWrapper>
      <S.Header>
        <S.HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <S.Profile>
            {user.avatar_url && <img src={user.avatar_url} alt={user.name} />}

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </S.Profile>

          <button type="button" onClick={signOut}>
            <S.LogoutIcon />
          </button>
        </S.HeaderContent>
      </S.Header>
    </S.DashboardWrapper>
  )
}

export default Dashboard
