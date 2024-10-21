import React, { ReactNode } from 'react'
import '../../assets/css/vendor.min.css'
import '../../assets/css/theme.min-1.css'







export const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='bg-[#fafafa] dark:bg-[#1e2022]'>
      {children}
    </div>
  )
}
