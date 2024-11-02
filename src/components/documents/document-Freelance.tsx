import { PenBoxIcon, PlusCircle } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';

export default function DocumentFreelance() {
  const {client_name,localisation} = useSelector((state:any) => state.quote);
  return (
  
      <section className='flex flex-col gap-4'>
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
                  <h2 className='font-bold text-right text-sm'>{client_name} </h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
              <div>
              <div className='relative'>
                  <h2 className='text-xs text-right text-black'>{localisation}</h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
                <div className='relative'>
                  <h2 className='text-xs text-right text-black'>6903852 Douala</h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
                <div className='relative'>
                  <h2 className='text-xs text-right text-black'>Cameroon</h2>
                  <div className='absolute cursor-pointer  top-[-5px] right-[-17px]'>
                    <PenBoxIcon className='w-[14px]  text-primary'/>
                  </div>
                </div>
                <div className='relative'>
                  <h2 className='text-xs text-right text-black'>690394365</h2>
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
                        <tr className="bg-white border-b  ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr className="bg-white border-b  ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr className="bg-white border-b  ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                      
                    </tbody>
                    
                </table>
                <div className='absolute bottom-[-7px] cursor-pointer right-[-7px]'>
                          <PlusCircle className='text-primary w-5'/>
                        </div>
            </div>

            </div>
            <div className='flex mt-5 flex-row items-center justify-between'>
              <div>

              </div>
              <div>
              <h2 className='text-sm'>Total: <span className='font-bold'>34 898 Fcfa</span></h2>
              </div>
            </div>
      </section>

  )
}
