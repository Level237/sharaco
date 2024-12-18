import DocumentFreelance from '@/components/documents/document-Freelance'
import { Separator } from '@/components/ui/separator'
import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactDOMServer from "react-dom/server"
import { PDFViewer } from '@react-pdf/renderer';
import TestPdf from '@/components/documents/test-pdf';
import { useSearchParams } from 'react-router-dom';
import { useGetClientQuery } from '@/services/client';
import { useDispatch, useSelector } from 'react-redux';
export default function NewQuotePage() {

  const pdfRef = useRef();
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
  const handleGeneratePDF = () => {
    html2canvas(pdfRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const margin = 10;
        pdf.addImage(imgData, 'PNG',10,10,pdfWidth, pdfHeight);
        pdf.save('devis.pdf');
    });
};
  return (
    <PDFViewer className='w-[100%] h-[100vh]'>
    <TestPdf fileName={fileName} client={data} dataDesignation={dataDesignation} total={total} />
  </PDFViewer>
  )
}
