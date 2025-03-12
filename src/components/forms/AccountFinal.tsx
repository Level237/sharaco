import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPassword } from '@/store/registerSlice';

export default function AccountFinal() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPasswordForm] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (password.length < 8) {
      setPasswordError('Le mot de passe doit contenir au moins 8 caractères');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('Les mots de passe ne correspondent pas');
      return;
    }

    setPasswordError('');
    setIsLoading(true);

    // Simuler une requête API
    await new Promise(resolve => setTimeout(resolve, 2000));
    dispatch(setPassword(password));
    navigate('/account-generating');
    // Rediriger vers la page suivante ou afficher un message de succès
    setIsLoading(false);
  };

  // Fonction pour vérifier la force du mot de passe
  const getPasswordStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 8) return 2;

    let strength = 3;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return Math.min(strength, 5);
  };

  const strengthLabels = ['', 'Très faible', 'Faible', 'Moyen', 'Fort', 'Très fort'];
  const strengthColors = ['', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-400', 'bg-green-600'];
  const passwordStrength = getPasswordStrength();

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="password" className='text-gray-600 font-medium'>
          Mot de passe
        </label>
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            value={password}
            onChange={(e) => setPasswordForm(e.target.value)}
            className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4 pr-10
              focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
              transition-all duration-200'
            placeholder='Entrez votre mot de passe'
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Indicateur de force du mot de passe */}
        {password.length > 0 && (
          <div className='mt-2 space-y-1'>
            <div className='flex gap-1 h-1'>
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`h-full flex-1 rounded-full ${passwordStrength >= level ? strengthColors[passwordStrength] : 'bg-gray-200'
                    }`}
                />
              ))}
            </div>
            <p className='text-xs text-gray-500'>
              Force: {strengthLabels[passwordStrength]}
            </p>
          </div>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="confirmPassword" className='text-gray-600 font-medium'>
          Confirmer le mot de passe
        </label>
        <div className='relative'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4 pr-10
              focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
              transition-all duration-200'
            placeholder='Confirmez votre mot de passe'
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {passwordError && (
        <div className='text-red-500 text-sm'>
          {passwordError}
        </div>
      )}

      <div className='flex items-end justify-end pt-4'>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isLoading}
          className='bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 py-3
            font-medium transition-all duration-200 w-full sm:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          {!isLoading ? 'Créer mon compte' : (
            <div className='flex items-center justify-center gap-2'>
              <Loader2 className='w-4 h-4 animate-spin' /> Chargement...
            </div>
          )}
        </motion.button>
      </div>
    </form>
  )
}
