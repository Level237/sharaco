import React, { useCallback, useMemo, useState } from 'react'
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
import { useToast } from '@/hooks/use-toast'
import { Image, X } from 'lucide-react'
import { FileUploader } from 'react-drag-drop-files'

export default function ClientForm() {

  const [addClient, { isLoading, isError, error }] = useAddClientMutation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const { toast } = useToast()
  const type = searchParams.get("type");
  const [inputs, setInputs] = useState({
    name: { value: '', isValid: true },
    email: { value: '', isValid: true },
    country: { value: '', isValid: true },
    town: { value: '', isValid: true },
    phone: { value: '', isValid: true },
  }
  )

  const [picture, setPicture] = useState("")
  const fileTypes = ["JPG", "PNG", "JPEG"]
  const [fileSizeError, setFileSizeError] = useState('')

  const handleChange = (file: any) => {
    setFileSizeError('')
    setPicture(file)

  }
  const handleSizeError = () => {
    setFileSizeError('The file size must not be greater than 2MB.')
  }

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value: any) => {
    setInputs((currInputs) => {
      return {
        ...currInputs,
        country: { value: value, isValid: true }
      }
    })
  };
  const inputChangeHandler = (e: any, inputIdentifier: any) => {
    setInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: { value: e.target.value, isValid: true }
      }
    })
  }
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      let isCompany = type === "particulier" ? 0 : 1;

      const formData = new FormData()
      formData.append('client_name', inputs.name.value)
      formData.append('country', inputs.country.value)
      formData.append('town', inputs.town.value)
      formData.append('client_email', inputs.email.value)
      formData.append('isCompany', isCompany)
      formData.append('phone_number', inputs.phone.value)

      formData.append('logo', picture)
      console.log(formData.get('logo'))
      try {

        const response = await addClient(formData);
        //Traitez la réponse comme il se doit  
        console.log(response);

        toast({
          title: `Client ${inputs.name.value} created successfully.`,
          description: "Client has been added.",
        });
        // Redirection ou autre logique si nécessaire  
        navigate('/clients');
      } catch (err: any) {
        console.error('Failed to add client:', err);
        toast({
          title: 'Error creating client',
          description: err.message || 'An error occurred.',
        });
      }
      //navigate('/clients');
    } catch (e: any) {

    }
  }
  return (
    <section className='flex h-[100vh] flex-col gap-5'>
      <form onSubmit={handleSubmit} className='mx-8' encType='multipart/form-data' >

        <div className={`${type === "entreprise" && "items-center"} flex flex-row gap-3 `}>
          <div className='flex-1'>
            <div className='flex flex-row gap-3'>
              <div className='mb-6 mx-5 flex-1'>
                <Label className='text-white'>Nom du client</Label>
                <Input className='mt-3 h-11 text-slate-50' type="text" name='client_name' onChange={(e: any) => inputChangeHandler(e, "name")} value={inputs.name.value} placeholder="Nom du Client" />
              </div>
              <div className='mb-6 mx-5 flex-1'>
                <Label className='text-white'>Email du client</Label>
                <Input className='mt-3 h-11 text-slate-50' type="email" onChange={(e: any) => inputChangeHandler(e, "email")} value={inputs.email.value} placeholder="Email du client" />
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

                      {options.map((country: any) => <SelectItem key={country.value} value={country.label}>{country.label}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='mb-6 mx-5 flex-1'>
                <Label className='text-white'>Ville du client</Label>
                <Input className='mt-3 h-11 text-slate-50' type="text" onChange={(e: any) => inputChangeHandler(e, "town")} value={inputs.town.value} placeholder="Ville du client" />
              </div>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='mb-6 mx-5 flex-1'>
                <Label className='text-white'>Numéro de téléphone</Label>
                <Input className='mt-3 h-11 text-slate-50' type="text" onChange={(e: any) => inputChangeHandler(e, "phone")} value={inputs.phone.value} placeholder="Numéro de téléphone" />
              </div>


            </div>

          </div>

          {type === "entreprise" && <div className='w-80'>

            <div className="flex items-center justify-center w-full">
              <div className='mb-3'>
                <FileUploader
                  handleChange={handleChange}
                  name="logo"
                  types={fileTypes}

                  maxSize={2}
                  onSizeError={handleSizeError}
                  classes="drop_area"

                />

                {!picture && <div className='w-full h-44 gap-3 items-center bg-[#0285c718] p-10 mt-6 rounded-lg flex justify-center'><Image className='text-primary' /><span className='text-sm text-primary font-bold'>Your Logo</span></div>}
                {
                  fileSizeError && <div className="text-white my-2 rounded p-2 bg-danger">
                    {fileSizeError}
                  </div>
                }
                {
                  picture &&
                  <img
                    src={URL.createObjectURL(picture)}
                    alt="Picture"

                    className="rounded w-44 h-44 my-2"
                  />
                }
              </div>

            </div>

          </div>}

        </div>

        <div className='flex mx-5 justify-end'>
          <Button disabled={isLoading} type='submit'>{!isLoading && "Enregistrer"} {isLoading && <div role="status">
            <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>}</Button>
        </div>
      </form>
    </section>
  )
}
