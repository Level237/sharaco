

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
import Header from "../auth/Header"

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
    <div className="flex  bg-background h-[100%]">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64  transform transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r dark:border-[#ffffff17] bg-background bg-slate-900">
          {/* Logo */}
          <div className="flex h-16 items-center border-b dark:border-[#ffffff17] px-6">
            <span className="text-2xl dark:text-primary   font-bold">Sharaco</span>
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
          <div className="border-t dark:border-[#ffffff17] p-4">
            <Button variant="ghost" className="w-full dark:border-[#ffffff17] dark:text-white" onClick={() => setIsSidebarOpen(false)}>
              <Menu className="mr-2 h-4 w-4 dark:text-white" />
              Collapse Sidebar
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn("flex-1 transition-all duration-300 ease-in-out", isSidebarOpen ? "ml-64" : "ml-0")}>
        {/* Header */}
        <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
        

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