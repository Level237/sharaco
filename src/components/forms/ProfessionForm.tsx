import { setProfession } from "@/store/registerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useGetProfessionsQuery } from "@/services/guardService";

export default function ProfessionForm() {
  const [data, setData] = useState({
    profession: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: professions, isLoading: isProfessionsLoading } = useGetProfessionsQuery("guard");
  console.log(professions);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    dispatch(setProfession(data.profession));
    setIsLoading(false);
    navigate('/step-final/account');
  }
  return (
    <div className='flex flex-col gap-8'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 md:gap-8 w-full'>
        <div className=' flex flex-col gap-2 flex-1'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="profession" className='text-gray-500'>Quelle est votre profession ?</label>
            <select className='w-full border border-gray-200 rounded-lg bg-white/50 py-3 px-4
            focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
            transition-all duration-200 appearance-none' name="profession"
              value={data.profession}
              onChange={(e) => setData({ ...data, profession: parseInt(e.target.value) })}
              id="profession">
              {!isProfessionsLoading && professions?.map((profession: any) => (
                <option value={profession.id}>{profession.name}</option>
              ))}

            </select>
          </div>
        </div>
        <div className='flex items-end justify-end'>
          <motion.button
            type="submit"
            disabled={data.profession === 0}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-sky-700 text-white rounded-full px-8 py-3
            font-medium transition-all duration-200 w-full sm:w-auto'
          >
            {!isLoading ? 'Continuer' : <div className='flex items-center justify-center gap-2'><Loader2 className='w-4 h-4 animate-spin' /> Chargement...</div>}
          </motion.button>
        </div>
      </form>
    </div>
  )
}
