import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'

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
              <div className='rounded-2xl py-2 bg-[#0285c736]  cursor-pointer text-muted-foreground'>
                <h2 className='text-sm text-center text-primary '>Entete</h2>
              </div>
              <div className='rounded-2xl py-1   cursor-pointer text-muted-foreground'>
                <h2 className='text-sm text-center'>Body</h2>
              </div>
              <div className='rounded-2xl py-1   cursor-pointer text-muted-foreground'>
                <h2 className='text-sm text-center'>Footer</h2>
              </div>
         </div>
         <Separator className='mt-4'/>
         
         <ScrollArea className="flex-1  py-4">
         <div className='mb-6 mx-5'>
          <Label className='text-white'>Client name</Label>
         <Input className='mt-3 text-slate-50' type="text" placeholder="Client name" />
          </div>
          <div className='mb-6 mx-5'>
          <Label className='text-white'>Localisation (Quartier)</Label>
         <Input className='mt-3 text-slate-50' type="text" placeholder="Localisation" />
          </div>
          <div className='mb-6 mx-5'>
          <Label className='text-white'>Ville</Label>
         <Input className='mt-3 text-slate-50' type="text" placeholder="Ville" />
          </div>
          <div className='mb-6 mx-5'>
          <Label className='text-white'>Pays</Label>
         <Input className='mt-3 text-slate-50' type="text" placeholder="Pays" />
          </div>
            <div className='mb-6 mx-5'>
          <Label className='text-white'>Numéro de téléphone</Label>
         <Input className='mt-3 text-slate-50' type="text" placeholder="Numéro de télephone" />
          </div>
         </ScrollArea>
         
          
       
         
         </div>
         
        </aside>
      </>
    )
  }
