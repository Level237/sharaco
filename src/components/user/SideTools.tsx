import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'
import { useDispatch, useSelector} from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { useGetClientsQuery } from '@/services/client'

export default function SideTools({setIsSidebarOpen,isSidebarOpen}:{setIsSidebarOpen:any,isSidebarOpen:boolean}) {

  const dispatch=useDispatch()

  const {data:clients,isLoading,isSuccess,isError,error}=useGetClientsQuery('Clients')
  

  const onChangeClientName=(e:any)=>{
    e.preventDefault();
    //dispatch(setClientName({client_name:e.target.value}))
  }

  const onChangeClient=(value:any)=>{
    console.log(value)
  }
  const onChangeLocalisation=(e:any)=>{
    e.preventDefault();
   
  }
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
          <Label className='text-white'>Select client</Label>
          {!isLoading &&  <Select onValueChange={onChangeClient}>
              <SelectTrigger className="flex-1 text-white mt-3 h-11">
                <SelectValue placeholder="Select a client" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup >
                  <SelectLabel>Client</SelectLabel>
                  
              {clients.map((client:any)=><SelectItem   key={client.id} value={client.id}>{client.client_name}</SelectItem>)}
                </SelectGroup>
              </SelectContent>
            </Select>}
         
          </div>
         </ScrollArea>
         
          
       
         
         </div>
         
        </aside>
      </>
    )
  }
