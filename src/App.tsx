import React from 'react'

import GlobalStyles from './styles/global'

import Login from './pages/Login'
// import SignUp from './pages/SignUp'

import AppProvider from './hooks'

const App: React.FC = () => (
  <>
    <AppProvider>
      <Login />
    </AppProvider>

    <GlobalStyles />
  </>
)

export default App
