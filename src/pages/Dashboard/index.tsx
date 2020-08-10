import React, { useCallback, useState, useEffect, useMemo } from 'react'
import DayPicker, { DayModifiers } from 'react-day-picker'

import { useAuth } from '../../hooks/auth'
import Header from '../../components/Header'
import Calendar from '../../components/Calendar'

import * as S from './styled'
import api from '../../services/api'

interface MonthAvailabilityItem {
  day: number
  available: boolean
}

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [monthAvailability, setMonthAvailability] = useState<MonthAvailabilityItem[]>([])

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day)
    }
  }, [])

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month)
  }, [])

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        setMonthAvailability(response.data)
      })
  }, [currentMonth, user.id])

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()

        return new Date(year, month, monthDay.day)
      })

    return dates
  }, [currentMonth, monthAvailability])

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

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março ',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </S.Content>
    </S.DashboardWrapper>
  )
}

export default Dashboard
