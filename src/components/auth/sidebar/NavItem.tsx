import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { NavItemInterface } from "@/interfaces/NavItemsInterface"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import React from "react"


export function NavItem({ item }: { item: NavItemInterface }) {
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