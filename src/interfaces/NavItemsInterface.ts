export interface NavItemInterface {
    title: string
    icon: React.ReactNode
    href?: string
    submenu?: NavItemInterface[]
  }