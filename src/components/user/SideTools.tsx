import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export default function SideTools({setIsSidebarOpen,isSidebarOpen}:{setIsSidebarOpen:any,isSidebarOpen:boolean}) {
    return (
      <>
         <aside
          className={cn(
            "fixed left-0 top-0 z-40 h-screen w-72  transform transition-transform duration-300 ease-in-out",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
         <div className="flex h-full flex-col border-r dark:border-[#ffffff17] bg-background bg-slate-900">
         <div className="flex h-16 items-center border-b dark:border-[#ffffff17] px-6">
            <Link to={"/dashboard"}>
            <span className="text-2xl dark:text-primary   font-bold">Sharaco</span>
            </Link>
           
          </div>
        
       
         </div>
        </aside>
      </>
    )
  }
