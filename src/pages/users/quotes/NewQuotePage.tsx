import { PDFViewer } from '@react-pdf/renderer';
import { SimpleQuoteTemplate } from '@/components/pdf-templates/SimpleQuoteTemplate';
import { BrandedQuoteTemplate } from '@/components/pdf-templates/BrandedQuoteTemplate';
import { QuoteTemplateType } from '@/types/quote-templates';
import { useSearchParams } from 'react-router-dom';
import { useGetClientQuery } from '@/services/client';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, Download, Share2 } from 'lucide-react';
import { getUniqueQuoteNumber } from '@/utils/quoteNumberGenerator';
import { DeveloperQuoteTemplate } from '@/components/pdf-templates/DeveloperQuoteTemplate';
// Importez les icônes si vous utilisez heroicons


// Assurez-vous que ce mapping correspond exactement aux valeurs de QuoteTemplateType
export const TEMPLATE_COMPONENTS = {
  [QuoteTemplateType.SIMPLE]: SimpleQuoteTemplate,
  [QuoteTemplateType.BRANDED]: BrandedQuoteTemplate,
  [QuoteTemplateType.DEVELOPER]: DeveloperQuoteTemplate
};

export default function NewQuotePage() {
  const [searchParams] = useSearchParams();
  const clientId = searchParams.get("client");
  const template = searchParams.get("template") as QuoteTemplateType;

  const { data: client, isLoading } = useGetClientQuery(clientId);
  const { dataDesignation } = useSelector((state: any) => state.designation);
  const [total, setTotal] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [quoteNumber, setQuoteNumber] = useState<string>('');
  const { documentSettings } = useSelector((state: any) => state.quote);
  useEffect(() => {
    setIsClient(true);
    // Générer un numéro de devis unique au chargement
    getUniqueQuoteNumber().then(number => setQuoteNumber(number));
  }, []);

  useEffect(() => {
    const totalDesignation = dataDesignation.reduce(
      (acc: number, obj: any) => acc + obj.total,
      0
    );
    setTotal(totalDesignation);
  }, [dataDesignation]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  if (isLoading || !isClient) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const TemplateComponent = TEMPLATE_COMPONENTS[template] || SimpleQuoteTemplate;

  return (
    <div className="relative w-full h-screen bg-gray-50">
      {/* En-tête avec informations du devis */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-sm z-10 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Devis #{quoteNumber}
            </h1>
            <span className="text-sm text-gray-500">
              {client?.name || 'Client'}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </button>
          </div>
        </div>
      </div>

      {/* Container du PDF avec marge pour l'en-tête */}
      <div className="pt-16 w-full h-full">
        {isClient && (
          <PDFViewer
            className="w-full h-full"
            showToolbar={false}
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top left',

            }}
          >
            <TemplateComponent
              fileName={quoteNumber}
              client={client}
              dataDesignation={dataDesignation}
              total={total}
              documentSettings={documentSettings}
            />
          </PDFViewer>
        )}
      </div>

      {/* Contrôles de zoom flottants */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 p-3 bg-white rounded-full shadow-lg border border-gray-200">
        <button
          onClick={handleZoomOut}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          title="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium px-2">{zoom}%</span>
        <button
          onClick={handleZoomIn}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          title="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
