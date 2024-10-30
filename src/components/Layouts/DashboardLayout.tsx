

import * as React from "react"
import { cn } from "@/lib/utils"
import Header from "../auth/Header"
import Sidebar from "../auth/sidebar/Sidebar"




export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)


  return (
    <div className="flex  bg-background h-[100%]">
      {/* Sidebar */}
      
    <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
      {/* Main Content */}
      <div className={cn("flex-1 transition-all duration-300 ease-in-out", isSidebarOpen ? "ml-64" : "ml-0")}>
        {/* Header */}
        <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} isShowLogo={false}/>
        

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

