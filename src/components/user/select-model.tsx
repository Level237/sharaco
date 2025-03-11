import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { timeout } from "@/lib/delay"
import { generateUniqueQuoteFileName } from "@/lib/generateQuoteFIleName"
import { QuoteTemplateType, QUOTE_TEMPLATES, QuoteTemplateCategory } from "@/types/quote-templates"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Layout, Grid, FileText } from "lucide-react"

export function SelectModel({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<QuoteTemplateType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<QuoteTemplateCategory | 'all'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const quoteId = uuidv4();
  const navigate = useNavigate()

  const filteredTemplates = QUOTE_TEMPLATES.filter(template =>
    selectedCategory === 'all' || template.category === selectedCategory
  );

  const handleSelectTemplate = (templateId: QuoteTemplateType) => {
    setSelected(templateId)
  }

  const handleClear = () => {
    setSelected(null)
  }

  const handleSelected = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    await timeout(3000).then(() => {
      navigate(`/new/quote/?id=${quoteId}&client=null&filename=${generateUniqueQuoteFileName()}&template=${selected}`)
    })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90vw] h-[90vh] max-w-[1200px] p-0 overflow-hidden">
        {/* Header avec titre et filtres */}
        <div className="p-6 border-b dark:border-[#ffffff17]">
          <div className="flex items-center justify-between mb-6">
            <AlertDialogTitle className="text-2xl font-bold dark:text-white">
              Sélectionner un modèle
            </AlertDialogTitle>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
                  }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
                  }`}
              >
                <Layout size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select
              value={selectedCategory}
              onValueChange={(value: QuoteTemplateCategory | 'all') => setSelectedCategory(value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Toutes les catégories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                {Object.values(QuoteTemplateCategory).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">
              {filteredTemplates.length} modèle{filteredTemplates.length > 1 ? 's' : ''} disponible{filteredTemplates.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className={`
            ${viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'flex flex-col gap-4'
            }
          `}>
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => handleSelectTemplate(template.id)}
                className={`
                  group cursor-pointer rounded-lg border dark:border-[#ffffff17] overflow-hidden
                  transition-all duration-200 hover:shadow-lg
                  ${selected === template.id ? 'ring-2 ring-primary' : ''}
                  ${viewMode === 'list' ? 'flex items-center' : 'flex flex-col'}
                `}
              >
                <div className={`
                  relative overflow-hidden
                  ${viewMode === 'list' ? 'w-48 h-32' : 'w-full aspect-[4/3]'}
                `}>
                  <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className={`
                  flex flex-col gap-2 p-4
                  ${viewMode === 'list' ? 'flex-1' : ''}
                `}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium dark:text-white">{template.name}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer avec actions */}
        <div className="p-6 border-t dark:border-[#ffffff17] bg-gray-50 dark:bg-gray-900">
          <AlertDialogFooter className="flex items-center justify-between sm:justify-end gap-4">
            <AlertDialogCancel
              onClick={handleClear}
              className="mt-0 dark:text-white"
            >
              Annuler
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSelected}
              disabled={selected == null || isLoading}
              className="flex items-center gap-2"
            >
              <FileText size={18} />
              {isLoading ? "Chargement..." : "Créer le devis"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
