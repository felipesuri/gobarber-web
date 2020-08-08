import styled from 'styled-components'
import { Power } from 'styled-icons/feather'

export const DashboardWrapper = styled.div``

export const Header = styled.div`
  padding: 32px 0;
  background: #28282e;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 60px;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4edf8;
    }

    strong {
      color: #ff9000;
    }
  }
`

export const LogoutIcon = styled(Power)`
  width: 20px;
  height: 20px;
`
