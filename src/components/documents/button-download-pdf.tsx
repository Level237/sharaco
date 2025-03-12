import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import FreelanceModal from './freelance-modal'
import { useSearchParams } from 'react-router-dom'
import { useGetClientQuery } from '@/services/client'
import { useDispatch, useSelector } from 'react-redux'
import { QuoteTemplateType } from '@/types/quote-templates'
import { SimpleQuoteTemplate } from '../pdf-templates/SimpleQuoteTemplate'
import { TEMPLATE_COMPONENTS } from '@/pages/users/quotes/NewQuotePage'

export default function ButtonDownloadPdf() {
  const [searchParams] = useSearchParams();
  const clientId = searchParams.get("client");
  const fileName = searchParams.get('filename')
  const { data, isLoading: load, error } = useGetClientQuery(clientId)
  const { dataDesignation } = useSelector((state: any) => state.designation)
  const documentSettings = useSelector((state: any) => state.quote.documentSettings)

  const template = searchParams.get("template") as QuoteTemplateType;

  const TemplateComponent = TEMPLATE_COMPONENTS[template] || SimpleQuoteTemplate;
  const [total, setTotal] = useState(0)
  let totalDesignation = 0;
  console.log(fileName)
  useEffect(() => {
    totalDesignation = dataDesignation.reduce((accumulateur: any, objet: any) => accumulateur + objet.total, 0);
    setTotal(totalDesignation)
  }, [dataDesignation])
  return (
    <div>
      <PDFDownloadLink document={<TemplateComponent fileName={fileName} client={data} dataDesignation={dataDesignation} total={total} documentSettings={documentSettings} />} fileName={`${fileName}.pdf`}>
        <Button className="text-white"><Download />Telecharger</Button>
      </PDFDownloadLink>
    </div>
  )
}
