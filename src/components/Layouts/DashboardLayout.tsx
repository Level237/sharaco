

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/components/theme-provider";

import {
  ChevronDown,
  ChevronRight,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  Home,
  Users,
  UserCircle,
  CreditCard,
  ShoppingCart,
  Briefcase,
  Key,
  FileText,
  Moon,
  Sun,
} from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface NavItem {
  title: string
  icon: React.ReactNode
  href?: string
  submenu?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Dashboards",
    icon: <Home className="h-4 w-4" />,
    submenu: [
      { title: "Analytics", icon: <ChevronRight className="h-4 w-4" />, href: "#" },
      { title: "CRM", icon: <ChevronRight className="h-4 w-4" />, href: "#" },
      { title: "eCommerce", icon: <ChevronRight className="h-4 w-4" />, href: "#" },
    ],
  },
  { title: "Users", icon: <Users className="h-4 w-4" />, href: "#" },
  { title: "User Profile", icon: <UserCircle className="h-4 w-4" />, href: "#" },
  { title: "Account", icon: <CreditCard className="h-4 w-4" />, href: "#" },
  { title: "E-commerce", icon: <ShoppingCart className="h-4 w-4" />, href: "#" },
  { title: "Projects", icon: <Briefcase className="h-4 w-4" />, href: "#" },
  { title: "Authentication", icon: <Key className="h-4 w-4" />, href: "#" },
  { title: "API Keys", icon: <Key className="h-4 w-4" />, href: "#" },
  { title: "Welcome Page", icon: <FileText className="h-4 w-4" />, href: "#" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  const { setTheme } = useTheme();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64  transform transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r dark:border-[#ffffff28] bg-background text-card-foreground">
          {/* Logo */}
          <div className="flex h-16 items-center border-b dark:border-[#ffffff28] px-6">
            <span className="text-2xl dark:text-white   font-bold">Sharaco</span>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-4">
            <nav className="space-y-1 px-3">
              {navItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </nav>
          </ScrollArea>

          {/* Footer */}
          <div className="border-t dark:border-[#ffffff28] p-4">
            <Button variant="ghost" className="w-full dark:border-[#ffffff28] dark:text-white" onClick={() => setIsSidebarOpen(false)}>
              <Menu className="mr-2 h-4 w-4 dark:text-white" />
              Collapse Sidebar
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn("flex-1 transition-all duration-300 ease-in-out", isSidebarOpen ? "ml-64" : "ml-0")}>
        {/* Header */}
        <header className="sticky top-0 z-30  flex h-16 items-center  justify-between border-b dark:border-[#ffffff28]  px-4 sm:px-6">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6 dark:text-white" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="relative ">
              <Search className="absolute  dark:text-white left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search in front"
                className="w-[300px] dark:border-[#ffffff28] dark:text-white pl-8"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 dark:text-white" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 dark:text-white" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5 dark:text-white" />
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
              <span className="font-medium dark:text-white">John Doe</span>
              <ChevronDown className="h-4 w-4 dark:text-white text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 dark:text-white dark:border-[#ffffff28]">
            <DropdownMenuLabel >Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profil</DropdownMenuItem>
            <DropdownMenuItem>Paramètres</DropdownMenuItem>
            <DropdownMenuItem>Tableau de bord</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

function NavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full hover:bg-[#00000018] justify-between dark:hover:bg-[#ffffff1a]">
            <span className="flex dark:text-white items-center">
              {item.icon}
              <span className="ml-2 dark:text-white">{item.title}</span>
            </span>
            <ChevronRight className={cn("h-4 w-4 dark:text-white transition-transform", isOpen && "rotate-90")} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1  dark:text-white px-2">
          {item.submenu.map((subItem, index) => (
            <NavItem key={index} item={subItem} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Button variant="ghost" className="w-full hover:bg-[#00000018] dark:hover:bg-[#ffffff1a] dark:text-white justify-start" asChild>
      <a href={item.href} >
        {item.icon}
        <span className="ml-2 dark:text-white">{item.title}</span>
      </a>
    </Button>
  )
}