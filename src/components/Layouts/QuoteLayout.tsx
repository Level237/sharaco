import React from 'react'
import Header from '../auth/Header'
import { cn } from '@/lib/utils'
import SideTools from '../user/SideTools'

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)


    return (
      <div className="flex  bg-background h-[100%]">

<SideTools setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
        {/* Main Content */}
        <div className={cn("flex-1 transition-all duration-300 ease-in-out", isSidebarOpen ? "ml-72" : "ml-0")}>
          {/* Header */}
          <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} isQuoteLayout={true} isShowLogo={false}/>
          
  
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    )
    }