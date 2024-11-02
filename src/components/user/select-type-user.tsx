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
  
  export function SelectTypeUser({children}:{children:React.ReactNode}) {

    const [selected,setSelected]=useState(null)
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    const handleSelectTemplate=(id:any)=>{
        setSelected(id)
    }

    const handleClear=()=>{
        setSelected(null)
    }

    const handleSelected=async(e:any)=>{
        e.preventDefault()
        setIsLoading(true)
        await timeout(3000).then(()=>{
            navigate('/new/quote')
        })
        //console.log(isLoading)
        
           
        
    }
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
         {children}
        </AlertDialogTrigger>
        <AlertDialogContent className="  border dark:border-[#ffffff17]">
          <AlertDialogHeader>
            <AlertDialogTitle className="dark:text-white">Clients</AlertDialogTitle>
            <Separator/>
            <AlertDialogDescription>
                <span className="mt-12">Choisir un type de client à ajouter</span>
             
             
              <div className="flex  justify-around mt-8">
                    <div  className="flex cursor-pointer  flex-col justify-center gap-3">
                        <div className="border hover:bg-[#0285c736] hover:border-primary hover:border-[0.3rem] hover:text-primary rounded dark:border-[#ffffff17] p-10">
                            <User className="w-16 h-16"/>
                        </div>
                        <h2 className="text-lg text-center">Particulier</h2>
                       
                        
                    </div>
                    
                    <div  className="flex cursor-pointer  flex-col justify-center gap-3">
                        <div className="border hover:bg-[#0285c736] hover:border-primary hover:border-[0.3rem] hover:text-primary rounded dark:border-[#ffffff17] p-10">
                            <Building className="w-16 h-16"/>
                        </div>
                        <h2 className="text-lg text-center">Entreprise</h2>
                       
                        
                    </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel onClick={handleClear}  className="dark:text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSelected} disabled={selected==null || isLoading}>{isLoading ? "Loading..." : "Continue"}</AlertDialogAction>
            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  