import React from 'react'

import { useAuth } from '../../hooks/auth'
import Header from '../../components/Header'

import * as S from './styled'
import Calendar from '../../components/Calendar'

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  return (
    <S.DashboardWrapper>
      <Header user={user} />

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

          <S.Section>
            <strong>Manhã</strong>

            <S.Appointment>
              <span>
                <S.ClockIcon />
                10:00
              </span>

              <div>
                <img src={user.avatar_url} alt={user.name} />

                <strong>Felipesuri</strong>
              </div>
            </S.Appointment>
            <S.Appointment>
              <span>
                <S.ClockIcon />
                10:00
              </span>

              <div>
                <img src={user.avatar_url} alt={user.name} />

                <strong>Felipesuri</strong>
              </div>
            </S.Appointment>
            <S.Appointment>
              <span>
                <S.ClockIcon />
                10:00
              </span>

              <div>
                <img src={user.avatar_url} alt={user.name} />

                <strong>Felipesuri</strong>
              </div>
            </S.Appointment>
          </S.Section>

          <S.Section>
            <strong>Tarde</strong>
          </S.Section>
        </S.Schedule>

        <Calendar />
      </S.Content>
    </S.DashboardWrapper>
  )
}

export default Dashboard
