import StepAccount from '../../components/StepAccount'
import AccountFinal from '../../components/forms/AccountFinal';

export default function AccountStepPage() {
  return (
    <section className="flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-sky-50 via-white to-purple-50 items-center min-h-screen w-full">
      <div className="w-full md:w-96 flex justify-center md:justify-start items-center h-32 md:h-screen bg-gradient-to-br from-sky-700 via-purple-800 to-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="flex px-4 md:pl-12 justify-start items-start relative z-10">
          <StepAccount typeStep={2} />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 md:pl-20 lg:pl-40 gap-8 py-12 md:py-24 w-full max-w-2xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-700 to-purple-700 bg-clip-text text-transparent">
            Sécurisez votre compte
          </h2>
          <p className="text-gray-600">
            Créez un mot de passe sécurisé pour protéger votre compte
          </p>
        </div>
        <div className='w-full max-w-md mx-auto md:mx-0'>
          <AccountFinal />
        </div>
      </div>
    </section>
  )
}
