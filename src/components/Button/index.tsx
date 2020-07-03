// eslint-disable-next-line no-unused-vars
import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styled'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => (
  <S.ButtonWrapper type="button" {...props}>{props.children}</S.ButtonWrapper>
)

export default Button
