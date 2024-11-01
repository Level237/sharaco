
import { Search, Bell, ChevronDown, Menu, Settings, LogOut, Sun, Download } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "../theme-provider"
import { useGetUserQuery, useLogoutMutation } from "@/services/auth"
import { logoutUser } from "@/store/authSlice"
import { useDispatch } from "react-redux"

export default function Header({setIsSidebarOpen,isQuoteLayout,isSidebarOpen,isShowLogo}:{setIsSidebarOpen:any,isSidebarOpen:boolean,isShowLogo:boolean,isQuoteLayout:boolean}){
  const {data,isLoading}=useGetUserQuery('Auth')
  console.log(data)
  const [logout]=useLogoutMutation()
  const { setTheme } = useTheme();
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    await logout();
    dispatch(logoutUser())

  }
  return (
    
    <>
     <header className="sticky bg-slate-900 top-0 z-30 bg-transparent backdrop-blur-xl  flex h-16 items-center  justify-between border-b dark:border-[#ffffff17]  px-4 sm:px-6">
      {!isShowLogo && <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6 dark:text-white" />
            
            
          </Button>} 
          
          {isShowLogo && <span className="text-2xl dark:text-primary   font-bold">Sharaco</span>}
          <div className="flex items-center space-x-4">
            {!isQuoteLayout && <div className="relative ">
              <Search className="absolute  dark:text-white left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search in front"
                className="w-[300px] dark:border-[#ffffff17] dark:text-white pl-8"
              />
            </div>}
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 dark:text-white" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 dark:text-white" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut onClick={handleLogout} className="h-5 w-5 dark:text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme("dark")}
            >
                <Sun className="h-5 w-5 dark:text-white" />

            </Button>
            <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {!isLoading && <span className="font-medium dark:text-white">{data.name}</span>}
              
              <ChevronDown className="h-4 w-4 dark:text-white text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 dark:text-white dark:border-[#ffffff17]">
            <DropdownMenuLabel >Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profil</DropdownMenuItem>
            <DropdownMenuItem>Paramètres</DropdownMenuItem>
            <DropdownMenuItem>Tableau de bord</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Se déconnecter</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {isQuoteLayout  && <div>
          <Button className="text-white"><Download/> Exporter</Button>
        </div>}
        
          </div>
        </header>
    </>
  )
}
