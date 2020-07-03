import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isField: boolean
}

export const InputWrapper = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666368;

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${props => props.isField && css`
    color: #ff9000;
  `}

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`

export const Content = styled.input`
  flex: 1;
  background: transparent;
  border: 0;
  color: #faede8;

  &::placeholder {
    color: #666360;
  }
`
