import React from 'react'
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
export default function ClientForm() {
  return (
    <section className='flex h-[100vh] flex-col gap-5'>
      <form className='mx-8' action="">

        <div>
        <div className='flex flex-row gap-3'>
        <div className='mb-6 mx-5 flex-1'>
          <Label className='text-white'>Nom du client</Label>
         <Input className='mt-3 h-11 text-slate-50' type="text" placeholder="Nom du Client" />
          </div>
          <div className='mb-6 mx-5 flex-1'>
          <Label className='text-white'>Email du client</Label>
         <Input className='mt-3 h-11 text-slate-50' type="email" placeholder="Email du client" />
          </div>
        </div>
        <div className='flex flex-row gap-3'>
        <div className='mb-6 mx-5 flex-1'>
          <Label className='text-white'>Pays du client</Label>
          <Select>
      <SelectTrigger className="flex-1 text-white mt-3 h-11">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pays</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          <div className='mb-6 mx-5 flex-1'>
          <Label className='text-white'>Ville du client</Label>
         <Input className='mt-3 h-11 text-slate-50' type="text" placeholder="Ville du client" />
          </div>
        </div>
        <div className='flex flex-row gap-3'>
        <div className='mb-6 mx-5 flex-1'>
          <Label className='text-white'>Numéro de téléphone</Label>
         <Input className='mt-3 h-11 text-slate-50' type="text" placeholder="Numéro de téléphone" />
          </div>
          <div className='mb-6 mx-5 flex-1'>
          <Label className='text-white'>Email du client</Label>
         <Input className='mt-3 h-11 text-slate-50' type="email" placeholder="Email du client" />
          </div>
          
        </div>
        <div className='flex mx-5 justify-end'>
            <Button>Enregistrer</Button>
        </div>
        </div>
      
      </form>
    </section>
  )
}
