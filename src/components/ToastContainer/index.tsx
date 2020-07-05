import React from 'react'
import { useTransition } from 'react-spring'

import * as S from './styled'

// eslint-disable-next-line no-unused-vars
import { ToastMessage } from '../../hooks/toast'

import Toast from './Toast'

interface ToastContainerPorps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerPorps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  )

  return (
    <S.ToastWrapper>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </S.ToastWrapper>
  )
}

export default ToastContainer
