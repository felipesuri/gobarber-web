import React, { useCallback, useState, useEffect, useMemo } from 'react'
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import api from '../../services/api'
import { useAuth } from '../../hooks/auth'

import * as S from './styled'

interface MonthAvailabilityItem {
  day: number
  available: boolean
}

const Calendar: React.FC = () => {
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
    <S.CalendarWrapper>
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
    </S.CalendarWrapper>
  )
}

export default Calendar
