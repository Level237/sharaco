import React, { ReactNode } from 'react'
import '../../assets/css/vendor.min.css'
import '../../assets/css/theme.min-1.css'
import '../../assets/css/theme-dark.min.css'



export const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
