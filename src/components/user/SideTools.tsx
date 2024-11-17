import { cn } from '@/lib/utils'
import React, { useCallback, useEffect, useState } from 'react'
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
import { Button } from '../ui/button'
import { DesignationType } from '@/types/Designation'
import { generateRandomId } from '@/lib/generateId'
import { addDesignation } from '@/store/DesignationSlice'


export default function SideTools({setIsSidebarOpen,isSidebarOpen}:{setIsSidebarOpen:any,isSidebarOpen:boolean}) {

  const [id,setIdClient]=useQueryState("client", parseAsInteger.withDefault(0))
  const [tabQuote,setTabQuote]=useQueryState('tabs',{defaultValue:'header'})
  const dispatch=useDispatch()
  const {data:clients,isLoading}=useGetClientsQuery('Clients')
 const {data,isLoading:load,isError}=useGetClientQuery(id)
  const [designation,setDesignation]=useState<DesignationType>({
    id:"",
    title:"",
    quantity:"",
    price:"",
    total:0
  })

const clear=()=>{
  setDesignation({
    id:"",
    title:"",
    quantity:"",
    price:"",
    total:0
  })
}
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

  const onChangeDesignation=(e:any,identifier:string)=>{
    
    
    setDesignation((currInputs)=>{
      
return{
...currInputs,
[identifier]:e.target.value
}

})
  }

  const addDesignationHandler=(e:any)=>{
    e.preventDefault();

      const designationObject={
        designationObject:{
          id:generateRandomId(),
        title:designation.title,
        quantity:designation.quantity,
        price:designation.price,
        total:designation.price * designation.quantity
        }
      }
      dispatch(addDesignation(designationObject))
    clear()
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
              <div onClick={()=>setTabQuote('header')} className={`rounded-2xl py-2 ${tabQuote==="header" && "bg-[#0285c736]"}  cursor-pointer text-muted-foreground`}>
                <h2 className={`text-sm text-center ${tabQuote==="header" && "text-primary"} `}>Entete</h2>
              </div>
              <div onClick={()=>setTabQuote('body')} className={`rounded-2xl py-2 ${tabQuote==="body" && "bg-[#0285c736]"}  cursor-pointer text-muted-foreground`}>
                <h2 className={`text-sm text-center ${tabQuote==="body" && "text-primary"} `}>Body</h2>
              </div>
              <div onClick={()=>setTabQuote('footer')} className={`rounded-2xl py-2 ${tabQuote==="footer" && "bg-[#0285c736]"}  cursor-pointer text-muted-foreground`}>
                <h2 className={`text-sm text-center ${tabQuote==="footer" && "text-primary"} `}>Footer</h2>
              </div>
         </div>
         <Separator className='mt-4'/>
         
         <ScrollArea className="flex-1  py-4">
        {tabQuote==="header" &&  <div className='mb-6 mx-5'>
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
          </div>}
          {tabQuote==="body" && <div className='mb-6 mx-5'>
            <form onSubmit={addDesignationHandler}>
            <div>
            <Label className='text-white'>Designation</Label>
            <Input name='title' value={designation.title} onChange={(e:any)=>onChangeDesignation(e,'title')} 
            
            placeholder='Enter a designation' className='mt-3 h-11 text-slate-50'/>
            </div>
            <div className='mt-3'>
            <Label className='text-white'>Quantity</Label>
            <Input name='quantity' value={designation.quantity} onChange={(e:any)=>onChangeDesignation(e,'quantity')} type='number'  placeholder='Enter a Quantity' className='mt-3 h-11 text-slate-50'/>
            </div>
            <div className='mt-3'>
            <Label className='text-white'>Price</Label>
            <Input name='price' value={designation.price} onChange={(e:any)=>onChangeDesignation(e,'price')} type='text'  placeholder='Enter a Price' className='mt-3 h-11 text-slate-50'/>
            </div>
            <div className='mt-6'>
                  <Button type='submit'>Save</Button>
            </div>
            </form>
            </div>}
         </ScrollArea>
         </div>
         
        </aside>
      </>
    )
  }
