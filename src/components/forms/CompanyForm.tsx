import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export default function CompanyForm() {
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <form className='flex flex-col md:flex-row gap-8'>
        {/* Section Logo */}
        <div className='w-full md:w-1/3'>
          <div className='flex flex-col gap-4'>
            <label htmlFor="logo" className='text-gray-600 font-medium'>
              Logo de l'entreprise
            </label>
            <div className='relative group'>
              <input
                type='file'
                id='logo'
                accept="image/*"
                onChange={handleLogoChange}
                className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10'
              />
              <div className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed 
                rounded-xl transition-all duration-200 overflow-hidden
                ${logoPreview
                  ? 'border-sky-500 bg-sky-50'
                  : 'border-gray-300 bg-gray-50 group-hover:border-sky-400 group-hover:bg-sky-50'}`}
              >
                {logoPreview ? (
                  <div className='relative w-full h-full'>
                    <img
                      src={logoPreview}
                      alt="Aperçu du logo"
                      className='w-full h-full object-contain p-4'
                    />
                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200 flex items-center justify-center'>
                      <p className='text-white text-sm font-medium'>Changer le logo</p>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center gap-3 p-4 text-center'>
                    <div className='p-3 rounded-full bg-sky-100 text-sky-600'>
                      <Upload size={24} />
                    </div>
                    <div className='space-y-2'>
                      <p className='text-sm font-medium text-gray-700'>
                        Glissez votre logo ici ou
                      </p>
                      <p className='text-sm text-gray-500'>
                        Cliquez pour parcourir
                      </p>
                    </div>
                    <p className='text-xs text-gray-400 mt-2'>
                      PNG, JPG jusqu'à 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section Informations */}
        <div className='flex-1'>
          <div className='space-y-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="companyName" className='text-gray-600 font-medium'>
                Nom d'entreprise
              </label>
              <input
                type='text'
                id='companyName'
                placeholder='Entrez le nom de votre entreprise'
                className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4
                  focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
                  transition-all duration-200'
              />
            </div>

            <div className='pt-4'>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 py-3
                  font-medium transition-all duration-200 w-full sm:w-auto'
              >
                Continuer
              </motion.button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

