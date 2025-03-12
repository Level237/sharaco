import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
type UserType = 'freelancer' | 'enterprise' | ''

export default function UserTypeForm() {
  const [selectedType, setSelectedType] = useState<UserType>('')
  const { toast } = useToast()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedType === '') {
      toast({
        title: 'Erreur',
        description: 'Veuillez sélectionner un type de compte',
        variant: 'destructive'
      })
      return
    }
    if (selectedType) {
      // Handle form submission
      console.log('Selected type:', selectedType)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 md:gap-8 w-full'>
      <div className='flex flex-col gap-4'>
        <label htmlFor="userType" className='text-gray-700 font-medium'>
          Vous êtes ?
        </label>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedType('freelancer')}
            className={`p-4 md:p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-3
              ${selectedType === 'freelancer'
                ? 'border-sky-600 bg-sky-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'}`}
          >
            <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className={`font-medium ${selectedType === 'freelancer' ? 'text-sky-600' : 'text-gray-700'}`}>
              Freelancer
            </span>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedType('enterprise')}
            className={`p-4 md:p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-3
              ${selectedType === 'enterprise'
                ? 'border-sky-600 bg-sky-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'}`}
          >
            <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className={`font-medium ${selectedType === 'enterprise' ? 'text-sky-600' : 'text-gray-700'}`}>
              Entreprise
            </span>
          </motion.button>
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={!selectedType}
        className={`w-full sm:w-auto self-center sm:self-end rounded-full px-8 py-3 font-medium transition-all duration-200
          ${selectedType
            ? 'bg-sky-600 hover:bg-sky-700 text-white'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
      >
        Continuer
      </motion.button>
    </form>
  )
}
