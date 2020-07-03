// eslint-disable-next-line no-unused-vars
import React, { InputHTMLAttributes } from 'react'
// eslint-disable-next-line no-unused-vars
import { StyledIconProps } from '@styled-icons/styled-icon'

import * as S from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon: React.ComponentType<StyledIconProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <S.InputWrapper>
    {Icon && <Icon size={16} />}
    <S.Content {...rest} />
  </S.InputWrapper>)

export default Input
