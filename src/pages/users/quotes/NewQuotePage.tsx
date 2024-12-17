import DocumentFreelance from '@/components/documents/document-Freelance'
import { Separator } from '@/components/ui/separator'
import React, { useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactDOMServer from "react-dom/server"
import { PDFViewer } from '@react-pdf/renderer';
import TestPdf from '@/components/documents/test-pdf';
export default function NewQuotePage() {

  const pdfRef = useRef();
  
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
    <TestPdf />
  </PDFViewer>
  )
}
