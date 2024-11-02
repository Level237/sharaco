import { NavItemInterface } from "@/interfaces/NavItemsInterface";
import {
    ChevronRight,
    Home,
    Users,
    UserCircle,
    CreditCard,
    ShoppingCart,
    Briefcase,
    Key,
    FileText,
    Trash,
  } from "lucide-react";

export const navItems: NavItemInterface[] = [
    {
      title: "Dashboards",
      icon: <Home className="h-4 w-4" />,
      submenu: [
        { title: "Analytics", icon: <ChevronRight className="h-4 w-4" />, href: "#" },
        { title: "CRM", icon: <ChevronRight className="h-4 w-4" />, href: "#" },
        { title: "eCommerce", icon: <ChevronRight className="h-4 w-4" />, href: "#" },
      ],
    },
    { title: "Quotes", icon: <FileText className="h-4 w-4" />, href: "/quotes" },
    { title: "Clients", icon: <Users className="h-4 w-4" />, href: "/quotes" },
    { title: "Corbeille", icon: <Trash className="h-4 w-4" />, href: "#" },
    { title: "Account", icon: <CreditCard className="h-4 w-4" />, href: "#" },
    { title: "E-commerce", icon: <ShoppingCart className="h-4 w-4" />, href: "#" },
    { title: "Projects", icon: <Briefcase className="h-4 w-4" />, href: "#" },
    { title: "Authentication", icon: <Key className="h-4 w-4" />, href: "#" },
    { title: "API Keys", icon: <Key className="h-4 w-4" />, href: "#" },
    { title: "Welcome Page", icon: <FileText className="h-4 w-4" />, href: "#" },
    
  ]