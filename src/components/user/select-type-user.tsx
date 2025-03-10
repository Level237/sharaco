import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React, { useState } from "react"
import { Separator } from "../ui/separator"
import { useNavigate } from "react-router-dom"
import { timeout } from "@/lib/delay"
import { Building, User } from "lucide-react"

// Définition du type de client
type ClientType = 'particulier' | 'entreprise' | null;

interface ClientOption {
  id: ClientType;
  title: string;
  icon: React.ReactNode;
}

const CLIENT_OPTIONS: ClientOption[] = [
  {
    id: 'particulier',
    title: 'Particulier',
    icon: <User className="w-16 h-16" />,
  },
  {
    id: 'entreprise',
    title: 'Entreprise',
    icon: <Building className="w-16 h-16" />,
  },
];

export function SelectTypeUser({ children }: { children: React.ReactNode }) {

  const [selected, setSelected] = useState<ClientType>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const handleSelectTemplate = (type: ClientType) => {
    setSelected(type)
  }

  const handleSelected = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!selected) return

    setIsLoading(true)
    try {
      await timeout(1000)
      navigate(`/add/client?type=${selected}`)
    } catch (error) {
      console.error('Navigation error:', error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="  border dark:border-[#ffffff17]">
        <AlertDialogHeader>
          <AlertDialogTitle className="dark:text-white">Clients</AlertDialogTitle>
          <Separator />
          <AlertDialogDescription>
            <span className="mt-12 block text-lg">Choisir un type de client à ajouter</span>


            <div className="flex  justify-around mt-8">
              {CLIENT_OPTIONS.map((option) => (
                <div key={option.id} className="flex cursor-pointer flex-col justify-center gap-3">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleSelectTemplate(option.id)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSelectTemplate(option.id)}
                    className={`
                                    border rounded p-10 transition-all duration-200
                                    hover:bg-[#0285c736] hover:border-primary hover:border-[0.3rem] hover:text-primary
                                    dark:border-[#ffffff17]
                                    ${selected === option.id ? 'bg-[#0285c736] border-primary text-primary' : ''}
                                `}
                  >
                    {option.icon}
                  </div>
                  <h2 className="text-lg text-center">{option.title}</h2>
                </div>
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel onClick={() => setSelected(null)} className="dark:text-white">Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleSelected} disabled={!selected || isLoading}>{isLoading ? "Chargement..." : "Continuer"}</AlertDialogAction>

        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
