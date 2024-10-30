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
  import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { Separator } from "../ui/separator"
  
  export function SelectModel({children}:{children:React.ReactNode}) {

    const [selected,setSelected]=useState(null)
    const handleSelectTemplate=(id:any)=>{
        setSelected(id)
    }

    const handleClear=()=>{
        setSelected(null)
    }
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
         {children}
        </AlertDialogTrigger>
        <AlertDialogContent className="h-[90%]  border dark:border-[#ffffff17]">
          <AlertDialogHeader>
            <AlertDialogTitle className="dark:text-white">Templates</AlertDialogTitle>
            <Separator/>
            <AlertDialogDescription>
                <span className="mt-12">Choose one template for your quote</span>
             
             
              <div className="flex mt-16 justify-between gap-2 mx-6">
                    <div  className="flex cursor-pointer  flex-col justify-center gap-3">
                        <img onClick={()=>handleSelectTemplate("1")} className={`w-44 ${selected==="1" && "border-primary border-[0.4rem] rounded-md"} ${selected!=="1" && "hover:border hover:border-primary"} `} src="/devis.webp" alt="" />
                        <h2 className="text-md">Devis Freelance</h2>
                       
                        
                    </div>
                    <div  className="flex cursor-pointer  flex-col justify-center gap-3">
                        <img onClick={()=>handleSelectTemplate("2")} className={`w-44 ${selected==="2" && "border-primary border-[0.4rem] rounded-md"} ${selected!=="2" && "hover:border hover:border-primary"} `} src="/devis.webp" alt="" />
                        <h2 className="text-md">Devis Entreprise</h2>
                    </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="absolute bottom-8 right-8">
            <AlertDialogCancel onClick={handleClear}  className="dark:text-white">Cancel</AlertDialogCancel>
            {selected ==null && <AlertDialogAction disabled>Continue</AlertDialogAction>}
            {selected !==null && <AlertDialogAction>Continue</AlertDialogAction>}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  