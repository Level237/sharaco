import { Search, Bell, ChevronDown, Menu, Settings, LogOut, Sun, Moon, AlertCircle } from "lucide-react"

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

import { useGetUserQuery, useLogoutMutation } from "@/services/auth"
import { logoutUser } from "@/store/authSlice"
import { useDispatch } from "react-redux"
import ButtonDownloadPdf from "../documents/button-download-pdf"
import { SwitchTheme } from "../ui/switch-theme"

export default function Header({ 
  setIsSidebarOpen, 
  isQuoteLayout, 
  isSidebarOpen, 
  isShowLogo,
  isMobile = false 
}: { 
  setIsSidebarOpen: any, 
  isSidebarOpen: boolean, 
  isShowLogo: boolean, 
  isQuoteLayout: boolean,
  isMobile?: boolean 
}) {
  const { data, isLoading, error } = useGetUserQuery('Auth')
  console.log(error)
  const [logout] = useLogoutMutation()

  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout("Auth");
    dispatch(logoutUser())

  }
  return (
    <header className="sticky bg-slate-900 top-0 z-30 bg-transparent backdrop-blur-xl flex h-16 items-center justify-between border-b dark:border-[#ffffff17] px-4 sm:px-6">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden mr-2"
        >
          <Menu className="h-6 w-6 dark:text-white" />
        </Button>
        {isShowLogo && (
          <span className="text-xl md:text-2xl dark:text-primary font-bold">
            Sharaco
          </span>
        )}
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Search bar - hidden on mobile */}
        {!isQuoteLayout && (
          <div className="relative hidden md:block">
            <Search className="absolute dark:text-white left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search in front"
              className="w-[300px] dark:border-[#ffffff17] dark:text-white pl-8"
            />
          </div>
        )}

        {/* Mobile search button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5 dark:text-white" />
        </Button>

        {/* Actions - Some hidden on mobile */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 dark:text-white" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 dark:text-white" />
          </Button>
        </div>

        <SwitchTheme />

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -right-1">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              <span className="hidden md:inline font-medium dark:text-white">
                {!isLoading && (data?.name || data?.firstName)}
              </span>
              <ChevronDown className="h-4 w-4 dark:text-white text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 dark:text-white dark:border-[#ffffff17]">
            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center justify-between">
              Compléter mon profil
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </DropdownMenuItem>
            <DropdownMenuItem>Profil</DropdownMenuItem>
            <DropdownMenuItem>Paramètres</DropdownMenuItem>
            <DropdownMenuItem>Tableau de bord</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Se déconnecter</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
