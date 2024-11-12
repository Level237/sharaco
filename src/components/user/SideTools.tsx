import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'
import { useDispatch, useSelector} from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { useGetClientQuery, useGetClientsQuery } from '@/services/client'
import { setClient, setClientId } from '@/store/quoteSlice'
import { parseAsInteger, useQueryState } from 'nuqs'


export default function SideTools({setIsSidebarOpen,isSidebarOpen}:{setIsSidebarOpen:any,isSidebarOpen:boolean}) {

  const [id,setIdClient]=useQueryState("client", parseAsInteger.withDefault(0))
  const dispatch=useDispatch()
  console.log(id)
  const {data:clients,isLoading}=useGetClientsQuery('Clients')
 const {data,isLoading:load,isError}=useGetClientQuery(id)

  console.log(data)
  

  const onChangeClient=(value:any)=>{
    //dispatch(setClientId({id:value}))
    setIdClient(value)
    const clientObjet={
      client_name:data?.client_name,
      email:data?.client_email,
      town:data?.country,
      phone:data?.phone_number
    }
    dispatch(setClient(clientObjet))
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
         <div>
          {id!==null && <div className='mt-5'>
            
            <h2 className='text-muted-foreground text-sm'>Client selected: {  data?.client_name || "c" }</h2>
            </div>}
         </div>
          </div>
         </ScrollArea>
         </div>
         
        </aside>
      </>
    )
  }
