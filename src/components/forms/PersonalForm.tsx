import { motion } from 'framer-motion';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonalInformation } from '../../store/registerSlice';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
export default function PersonalForm() {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    source: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.firstname === '' || data.lastname === '' || data.phone === '' || data.source === '') {
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    dispatch(setPersonalInformation(JSON.stringify(data)));
    setIsLoading(false);
    navigate('/step-two/profession');
  }

  return (
    <form onSubmit={handleSubmit} className='flex  flex-col gap-6 md:gap-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="prenom" className='text-gray-600 font-medium'>
            Prénom
          </label>
          <input
            type='text'
            name='firstname'
            value={data.firstname}
            onChange={(e) => setData({ ...data, firstname: e.target.value })}
            id='prenom'
            className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4
              focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
              transition-all duration-200'
            placeholder='Entrez votre prénom'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="nom" className='text-gray-600 font-medium'>
            Nom
          </label>
          <input
            type='text'
            name='lastname'
            value={data.lastname}
            onChange={(e) => setData({ ...data, lastname: e.target.value })}
            id='nom'
            className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4
              focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
              transition-all duration-200'
            placeholder='Entrez votre nom'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="phone" className='text-gray-600 font-medium'>
            Numéro de téléphone
          </label>
          <input
            type='tel'
            name='phone'
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            id='phone'
            className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4
            focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
            transition-all duration-200'
            placeholder='+33 6 XX XX XX XX'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-gray-600 font-medium'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            id='email'
            className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4
            focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
            transition-all duration-200'
            placeholder='Entrez votre email'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="source" className='text-gray-600 font-medium'>
          Comment avez-vous entendu parler de Sharaco ?
        </label>
        <select
          name="source"
          id="source"
          value={data.source}
          onChange={(e) => setData({ ...data, source: e.target.value })}
          className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4
            focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
            transition-all duration-200 appearance-none'
        >
          <option value="" disabled selected>Sélectionnez une option</option>
          <option value="facebook">Sur Facebook</option>
          <option value="search">Recherche sur le net</option>
          <option value="referral">Proches, amis, collègues</option>
          <option value="linkedin">Sur LinkedIn</option>
          <option value="other">Autres</option>
        </select>
      </div>

      <div className='flex items-end justify-end pt-4'>
        <motion.button
          type="submit"
          disabled={data.firstname === '' || data.lastname === '' || data.phone === '' || data.source === ''}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-sky-700 text-white rounded-full px-8 py-3
            font-medium transition-all duration-200 w-full sm:w-auto'
        >
          {!isLoading ? 'Continuer' : <div className='flex items-center justify-center gap-2'><Loader2 className='w-4 h-4 animate-spin' /> Chargement...</div>}
        </motion.button>
      </div>
    </form>
  )
}
