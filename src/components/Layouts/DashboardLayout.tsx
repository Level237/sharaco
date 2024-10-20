import React, { ReactNode } from 'react'
import '../../assets/css/vendor.min.css'
import '../../assets/css/theme.min-1.css'
import '../../assets/css/theme-dark.min.css'
import '../../assets/js/script.js'
import '../../assets/js/hs.theme-appearance.js'

import '../../assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside-mini-cache.js'

import '../../assets/js/theme.min.js'




export const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
