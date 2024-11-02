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
          <div className='grid mt-5 mx-5 gap-5 grid-cols-3'>
              <div className='rounded-2xl py-1 bg-[#0285c736]  cursor-pointer text-muted-foreground'>
                <h2 className='text-sm text-center text-primary '>Entete</h2>
              </div>
              <div className='rounded-2xl py-1   cursor-pointer text-muted-foreground'>
                <h2 className='text-sm text-center'>Body</h2>
              </div>
              <div className='rounded-2xl py-1   cursor-pointer text-muted-foreground'>
                <h2 className='text-sm text-center'>Footer</h2>
              </div>
         </div>
         </div>
         
        </aside>
      </>
    )
  }
