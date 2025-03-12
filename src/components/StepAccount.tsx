import { Check, Image, Lock, User, UserPen } from 'lucide-react'
import React from 'react'

export default function StepAccount({ typeStep }: any) {
    const steps = [
        { icon: <UserPen />, label: "User type" },
        { icon: <Lock />, label: "Your Personal Information" },
        { icon: <User />, label: "your account" },
        { icon: <Check />, label: "Success" },
    ]

    return (
        <>
            {/* Version desktop */}
            <ol className="relative text-gray-500 border-s border-gray-200 dark:border-sky-600 dark:text-gray-400 md:block hidden">
                {steps.map((step, index) => (
                    <li key={index} className={`${index !== steps.length - 1 ? "mb-8 md:mb-16" : ""} flex items-center ms-6`}>
                        <span className={`absolute flex items-center ${typeStep === index ? "bg-white ring-white" : "bg-gray-400 ring-gray-400"} justify-center w-6 md:w-8 h-6 md:h-8 rounded-full -start-3 md:-start-4 ring-4`}>
                            {React.cloneElement(step.icon, { className: 'w-3 md:w-4 h-3 md:h-4 text-black font-bold' })}
                        </span>
                        <h3 className={`font-medium ${typeStep === index ? "text-white" : ""} text-sm md:text-md ml-2 leading-tight`}>
                            {step.label}
                        </h3>
                    </li>
                ))}
            </ol>

            {/* Version mobile avec icônes */}
            <div className="flex justify-center items-center gap-6 md:hidden">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${typeStep === index ? "bg-white" : "bg-gray-400"
                            }`}>
                            {React.cloneElement(step.icon, {
                                className: `w-4 h-4 ${typeStep === index ? "text-black" : "text-gray-600"} font-bold`
                            })}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}
