import { cn } from "@/lib/utils"
import { ScrollArea } from '@/components/ui/scroll-area'
import { navItems } from '@/data/navItemsData'
import { NavItem } from './NavItem'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import Logo from "@/components/logo"


export default function Sidebar({ setIsSidebarOpen, isSidebarOpen }: { setIsSidebarOpen: any, isSidebarOpen: boolean }) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col backdrop-blur-xl bg-background/80 dark:bg-slate-950/90 border-r border-gray-200 dark:border-slate-800">
        {/* Logo and Mobile Close Button */}
        <div className="flex h-20 items-center justify-center border-b border-gray-100 dark:border-slate-800/50">
          <Link href={"/dashboard"}>
            <Logo width={140} height={140} />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute right-4"
          >
            <X className="h-5 w-5 dark:text-white" />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-6 px-4">
          <nav className="space-y-1.5">
            {navItems.map((item, index) => (
              item.isHeader ? (
                <div key={index} className="px-2 pt-5 pb-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/70">
                    {item.title}
                  </span>
                </div>
              ) : (
                <NavItem key={index} item={item} />
              )
            ))}
          </nav>
        </ScrollArea>

        {/* Rich Footer (User Profile) */}
        <div className="p-4 border-t border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/30">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer group border border-transparent hover:border-gray-200 dark:hover:border-slate-700">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
              JD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold truncate text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                John Doe
              </p>
              <p className="text-xs text-muted-foreground truncate">
                admin@sharaco.com
              </p>
            </div>
            {/* Check if icons are imported, if not use text or simplified icon */}
            <div className="text-muted-foreground group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-settings-2"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

