import React from 'react'

import GlobalStyles from './styles/global'

import Login from './pages/Login'
// import SignUp from './pages/SignUp'

import { AuthProvider } from './hooks/AuthContext'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Login />
    </AuthProvider>

    <GlobalStyles />
  </>
)

export default App
