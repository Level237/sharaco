import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { NavItemInterface } from "@/interfaces/NavItemsInterface"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavItem({ item }: { item: NavItemInterface }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = item.href === pathname || (item.submenu && item.submenu.some(sub => sub.href === pathname))
  const isSubmenuActive = item.submenu && item.submenu.some(sub => sub.href === pathname)

  // Auto-open submenu if a child is active
  React.useEffect(() => {
    if (isSubmenuActive) {
      setIsOpen(true)
    }
  }, [isSubmenuActive])

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-1">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-between font-medium transition-all duration-200 group relative",
              isActive
                ? "text-sky-600 dark:text-sky-400"
                : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-foreground"
            )}
          >
            {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-sky-500 rounded-r-full" />}
            <span className="flex items-center pl-2">
              {React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<any>, {
                className: cn("h-4 w-4 mr-3 transition-colors", isActive ? "text-sky-500" : "text-muted-foreground group-hover:text-foreground")
              })}
              <span>{item.title}</span>
            </span>
            <ChevronRight className={cn("h-4 w-4 transition-transform duration-200 opacity-50", isOpen && "rotate-90")} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6 space-y-0.5 relative">
          {/* Vertical line for hierarchy */}
          <div className="absolute left-[1.65rem] top-0 bottom-0 w-[1px] bg-border/50" />

          {item.submenu.map((subItem, index) => (
            <NavItem key={index} item={subItem} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  const isCurrent = item.href === pathname

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start mb-0.5 font-medium transition-all duration-200 h-9 relative group",
        isCurrent
          ? "bg-sky-50/50 dark:bg-sky-900/10 text-sky-600 dark:text-sky-400"
          : "text-muted-foreground hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
      )}
      asChild
    >
      <Link href={item.href}>
        {isCurrent && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-sky-500 rounded-r-full" />}
        <span className={cn("flex text-md items-center", isCurrent ? "pl-2" : "pl-2")}>
          {React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<any>, {
            className: cn("h-4 w-4 mr-3 transition-colors", isCurrent ? "text-sky-500" : "text-muted-foreground group-hover:text-foreground")
          })}
          <span>{item.title}</span>
        </span>
      </Link>
    </Button>
  )
}