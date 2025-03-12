import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepAccount from '../../components/StepAccount';
import { CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setUserType, setPersonalInformation, setProfession, setPassword, clearRegister } from '@/store/registerSlice';
import { RootState } from '@/store';
import { useLoginMutation, useRegisterMutation } from '@/services/auth';
import { authTokenChange } from '@/store/authSlice';

export default function AccountGeneratingPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userType, personalInformation, profession, password } = useSelector((state: RootState) => state.register);
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    useEffect(() => {
        const formData = {
            isCompany: userType === 'entreprise' ? 1 : 0,
            lastName: personalInformation.lastname,
            firstName: personalInformation.firstname,
            email: personalInformation.email,
            phone_number: personalInformation.phone,
            password: password,
            profession_id: profession,
        }
        console.log(formData);
        const handleRegisterAndLogin = async () => {
            try {
                const response = await register(formData);
                console.log(response);
                const userData = await login({ email: personalInformation.email, password: password });

                const userState = {
                    'refreshToken': userData.data.refresh_token,
                    'accessToken': userData.data.access_token
                }
                dispatch(authTokenChange(userState))
            } catch (error) {
                console.log(error);
            }
        }
        handleRegisterAndLogin();


        const timer1 = setTimeout(() => {
            setIsLoading(false);
            setIsComplete(true);
        }, 3000);

        // Rediriger vers la page d'accueil après la création du compte
        const timer2 = setTimeout(() => {
            dispatch(clearRegister());
            navigate('/dashboard');
        }, 5000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [navigate]);

    return (
        <section className="flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-sky-50 via-white to-purple-50 items-center min-h-screen h-screen max-sm:h-full w-full">
            <div className="w-full md:w-96 flex justify-center md:justify-start items-center h-32 md:h-screen bg-gradient-to-br from-sky-700 via-purple-800 to-sky-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="flex px-4 md:pl-12 justify-start items-start relative z-10">
                    <StepAccount typeStep={3} />
                </div>
            </div>
            <div className="flex flex-1 flex-col px-6 md:pl-20 lg:pl-40 gap-8 py-12 md:py-24 w-full max-w-2xl items-center md:items-start">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-700 to-purple-700 bg-clip-text text-transparent">
                        {isComplete ? 'Compte créé avec succès!' : 'Création de votre compte'}
                    </h2>
                    <p className="text-gray-600">
                        {isComplete
                            ? 'Votre compte a été créé. Vous allez être redirigé vers votre tableau de bord.'
                            : 'Veuillez patienter pendant que nous configurons votre compte...'}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center py-12 w-full">
                    {isLoading ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <Loader2 className="w-20 h-20 text-sky-600 animate-spin" />
                            <p className="text-gray-600 font-medium">Création de votre compte en cours...</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <CheckCircle className="w-24 h-24 text-green-500" />
                            <p className="text-gray-700 font-medium text-xl">Votre compte a été créé avec succès!</p>
                            <p className="text-gray-500">Vous allez être redirigé vers votre tableau de bord...</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}