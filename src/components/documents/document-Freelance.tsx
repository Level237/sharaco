import { useGetClientQuery } from '@/services/client';
import { PenBoxIcon, PlusCircle, Trash2, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DesignationType } from '../../types/Designation';
import { removeItem } from '@/store/DesignationSlice';

export default function DocumentFreelance() {

  const [searchParams] = useSearchParams();

  const clientId = searchParams.get("client"); 
  const {dataDesignation}=useSelector((state:any)=>state.designation)
  const {data,isLoading:load,error}=useGetClientQuery(clientId)
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  let totalDesignation=0;

  useEffect(()=>{
    totalDesignation=dataDesignation.reduce((accumulateur:any, objet:any) => accumulateur + objet.total, 0); 
  setTotal(totalDesignation)
  },[dataDesignation])
  
  const removeHandler=(id:any)=>{
    dispatch(removeItem({id:id}))
    console.log('dd')
  }
  return (
  
      <section   className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col gap-3'>
                <div>
                  <h2 className='font-bold text-sm'>Martin Lunel</h2>
                </div>
              
              <div>
                <h2 className='text-xs text-black'>2e rue de douala</h2>
                <h2 className='text-xs text-black'>6903852 Douala</h2>
                <h2 className='text-xs text-black'>Cameroon</h2>
                <h2 className='text-xs text-black'>690394365</h2>
              </div>
             
              </div>
            
              <div className='flex flex-col gap-3'>
              <div className='relative'>
              <h2 className='font-bold text-right text-sm'>{  data?.client_name || "Nom" } </h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
              <div>
              <div className='relative'>
                  <h2 className='text-xs text-right text-black'>{ data?.phone_number || "Numéro de Téléphone"}</h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
                <div className='relative'>
                  <h2 className='text-xs text-right text-black'>{ data?.town || "Ville"}</h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
                <div className='relative'>
                  <h2 className='text-xs text-right text-black'>{ data?.country || "Pays"}</h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
                <div className='relative'>
                  <h2 className='text-xs text-right text-black'>{data?.client_email || "Email"}</h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
                
              </div>
             
              </div>
            </div>
            <div className='mt-7'>
              <h1 className='font-bold text-sm'>Devis D738362</h1>
            </div>
            <div className='flex flex-row justify-between'>
              <div className=''>

              </div>
              <div className='flex flex-col gap-2'>
              <h2 className='text-xs text-left text-muted'>Emis le 01/01/2024</h2>
              <h2 className='text-xs text-left text-muted'>Valide jusqu'au 31/01/2024</h2>
              </div>
            </div>
            <div>


            <div className="relative  mt-12">
                <table className="w-full  text-sm text-left border  rtl:text-right text-black">
                    <thead className="text-xs  text-white uppercase bg-gray-50 dark:bg-primary ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                              Designation
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                                
                            </th>
                        </tr>
                       
                    </thead>
                    <tbody>
                      {dataDesignation?.map((designation:DesignationType)=>{
                        return(
                          <tr key={designation.id} className="bg-white border-b relative ">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {designation.title}
                          </th>
                          <td className="px-6 py-4">
                              {designation.price}
                          </td>
                          <td className="px-6 py-4">
                              {designation.quantity}
                          </td>
                          <td className="px-6 py-4">
                              {designation.total}
                          </td>
                          <div onClick={()=>removeHandler(designation.id)} className='absolute top-[35%] z-[100] cursor-pointer left-[-25px]'>
                          <Trash2 className='text-red-600  w-5'/>
                        </div>
                      </tr>
                        )
                      })}
                       
                    </tbody>
                    
                </table>
                <div className='absolute bottom-[-7px] z-[100] cursor-pointer right-[-7px]'>
                          <PlusCircle  className='text-white rounded-3xl bg-black w-5'/>
                        </div>
                       
            </div>

            </div>
            <div className='flex mt-5 flex-row items-center justify-between'>
              <div>

              </div>
              <div>
              <h2 className='text-sm'>Total: <span className='font-bold'>{total} Fcfa</span></h2>
              </div>
            </div>
      </section>

  )
}
