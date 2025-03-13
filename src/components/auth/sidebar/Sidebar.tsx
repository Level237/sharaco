
import { cn } from "@/lib/utils"
import { ScrollArea } from '@/components/ui/scroll-area'
import { navItems } from '@/data/navItemsData'
import { NavItem } from './NavItem'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from "@/components/ui/logo"

export default function Sidebar({ setIsSidebarOpen, isSidebarOpen }: { setIsSidebarOpen: any, isSidebarOpen: boolean }) {
  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64  transform transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r dark:border-[#ffffff17] bg-background bg-gray-100 dark:bg-slate-900">
          {/* Logo */}
          <div className="flex h-16 items-center border-b dark:border-[#ffffff17] px-6">
            <Link to={"/dashboard"}>
              <Logo width={28} height={12} />
            </Link>

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
              Sharaco v1.0
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}

