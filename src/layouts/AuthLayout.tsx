import React from 'react'

const AuthLayout: React.FC = ({children}) => {
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </div>
  )
}

export default AuthLayout