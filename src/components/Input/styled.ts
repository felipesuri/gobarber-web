import styled from 'styled-components'

export const InputWrapper = styled.div`
  color: #faede8;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

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

  &::placeholder {
    color: #666360;
  }
`