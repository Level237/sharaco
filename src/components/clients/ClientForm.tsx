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
export default function ClientForm() {
 
  const [addClient,{isLoading,isError,error}]=useAddClientMutation()
  const navigate=useNavigate()
  const [searchParams] = useSearchParams();

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
      const t=await addClient(clientObject)
      console.log(t)
      navigate('/clients');
    }catch(e:any){
      console.log("ll")
    }
  }
  console.log(inputs)
  return (
    <section className='flex h-[100vh] flex-col gap-5'>
      <form onSubmit={handleSubmit} className='mx-8' action="">

        <div>
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
        <div className='flex mx-5 justify-end'>
            <Button type='submit'>Enregistrer</Button>
        </div>
        </div>
      
      </form>
    </section>
  )
}
