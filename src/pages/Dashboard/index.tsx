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

      <S.Content>
        <S.Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Segunda-feira</span>
            <span>Dia 12</span>
          </p>

          <S.NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src={user.avatar_url} alt={user.name} />

              <strong>felipesuri</strong>
              <span>
                <S.ClockIcon />
                08:00
              </span>
            </div>
          </S.NextAppointment>
        </S.Schedule>
        <S.Calendar />
      </S.Content>
    </S.DashboardWrapper>
  )
}

export default Dashboard
