import React, { useMemo, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '../ui/button'
import countryList from 'react-select-country-list'
import { useAddClientMutation } from '@/services/client'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ToastAction } from '../ui/toast'
import { useToast } from '@/hooks/use-toast'

export default function ClientForm() {
 
  const [addClient,{isLoading,isError,error}]=useAddClientMutation()
  const navigate=useNavigate()
  const [searchParams] = useSearchParams();
  const { toast } = useToast()
  const type = searchParams.get("type"); 
  const [inputs,setInputs]=useState({
    name:{value:'',isValid:true},
    email:{value:'',isValid:true},
    country:{value:'',isValid:true},
    town:{value:'',isValid:true},
    phone:{value:'',isValid:true},
  }
  )

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value:any) => {
    setInputs((currInputs)=>{
      return{
        ...currInputs,
        country:{value:value,isValid:true}
      }
    })
  };
  const inputChangeHandler=(e:any,inputIdentifier:any)=>{
    setInputs((currInputs)=>{
      return{
        ...currInputs,
        [inputIdentifier]:{value:e.target.value,isValid:true}
      }
    })
  }
  const handleSubmit=async(e:any)=>{
    try{
      e.preventDefault();
      let isCompany=1;
      if(type==="particulier"){
        isCompany=0;
      }
      const clientObject={client_name:inputs.name.value,country:inputs.country.value,town:inputs.town.value,client_email:inputs.email.value,isCompany:isCompany,phone_number:inputs.phone.value}
      await addClient(clientObject)
      toast({
        title: `Client ${inputs.name.value} Created successfuly`,
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })
      navigate('/clients');
    }catch(e:any){
      
    }
  }
  return (
    <section className='flex h-[100vh] flex-col gap-5'>
      <form onSubmit={handleSubmit} className='mx-8' action="">

    <div className='flex flex-row gap-3'>
        <div className='flex-1'>
                <div className='flex flex-row gap-3'>
                <div className='mb-6 mx-5 flex-1'>
                  <Label className='text-white'>Nom du client</Label>
                <Input className='mt-3 h-11 text-slate-50' type="text" onChange={(e:any)=>inputChangeHandler(e,"name")} value={inputs.name.value} placeholder="Nom du Client" />
                  </div>
                  <div className='mb-6 mx-5 flex-1'>
                  <Label className='text-white'>Email du client</Label>
                <Input className='mt-3 h-11 text-slate-50' type="email" onChange={(e:any)=>inputChangeHandler(e,"email")} value={inputs.email.value}   placeholder="Email du client" />
                  </div>
                </div>
                <div className='flex flex-row gap-3'>
                <div className='mb-6 mx-5 flex-1'>
                  <Label className='text-white'>Pays du client</Label>
                  <Select onValueChange={changeHandler}>
              <SelectTrigger className="flex-1 text-white mt-3 h-11">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup >
                  <SelectLabel>Pays</SelectLabel>
                  
              {options.map((country:any)=><SelectItem   key={country.value} value={country.label}>{country.label}</SelectItem>)}
                </SelectGroup>
              </SelectContent>
            </Select>
                  </div>
                  <div className='mb-6 mx-5 flex-1'>
                  <Label className='text-white'>Ville du client</Label>
                <Input className='mt-3 h-11 text-slate-50' type="text" onChange={(e:any)=>inputChangeHandler(e,"town")} value={inputs.town.value}  placeholder="Ville du client" />
                  </div>
                </div>
                <div className='flex flex-row gap-3'>
                <div className='mb-6 mx-5 flex-1'>
                  <Label className='text-white'>Numéro de téléphone</Label>
                <Input className='mt-3 h-11 text-slate-50' type="text" onChange={(e:any)=>inputChangeHandler(e,"phone")} value={inputs.phone.value} placeholder="Numéro de téléphone" />
                  </div>
                  
                  
                </div>
               
        </div>
        <div className='w-80'>

<div className="flex items-center justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 

        </div>
    </div>
        
    <div className='flex mx-5 justify-end'>
                    <Button disabled={isLoading} type='submit'>{!isLoading && "Enregistrer"} {isLoading && <div role="status">
            <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>}</Button>
                </div>
      </form>
    </section>
  )
}
