import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import FreelanceModal from './freelance-modal'
import { useSearchParams } from 'react-router-dom'
import { useGetClientQuery } from '@/services/client'
import { useDispatch, useSelector } from 'react-redux'

export default function ButtonDownloadPdf() {
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get("client");
    const fileName=searchParams.get('filename')
    const {data,isLoading:load,error}=useGetClientQuery(clientId)
    const {dataDesignation}=useSelector((state:any)=>state.designation)
  
    const dispatch=useDispatch()
    const [total,setTotal]=useState(0)
    let totalDesignation=0;
    console.log(fileName)
    useEffect(()=>{
      totalDesignation=dataDesignation.reduce((accumulateur:any, objet:any) => accumulateur + objet.total, 0); 
    setTotal(totalDesignation)
    },[dataDesignation])
  return (
    <div>
        <PDFDownloadLink document={<FreelanceModal fileName={fileName} client={data} dataDesignation={dataDesignation} total={total} />} fileName={`${fileName}.pdf`}>
            <Button className="text-white"><Download/>Telecharger</Button>
      </PDFDownloadLink>
    </div>
  )
}
