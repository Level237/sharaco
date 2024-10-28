

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
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


  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r bg-card text-card-foreground">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <span className="text-2xl font-bold">Front</span>
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
          <div className="border-t p-4">
            <Button variant="outline" className="w-full" onClick={() => setIsSidebarOpen(false)}>
              <Menu className="mr-2 h-4 w-4" />
              Collapse Sidebar
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn("flex-1 transition-all duration-300 ease-in-out", isSidebarOpen ? "ml-64" : "ml-0")}>
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search in front"
                className="w-[300px] pl-8"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
             
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
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
          <Button variant="ghost" className="w-full justify-between">
            <span className="flex items-center">
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </span>
            <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 px-2">
          {item.submenu.map((subItem, index) => (
            <NavItem key={index} item={subItem} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Button variant="ghost" className="w-full justify-start" asChild>
      <a href={item.href}>
        {item.icon}
        <span className="ml-2">{item.title}</span>
      </a>
    </Button>
  )
}