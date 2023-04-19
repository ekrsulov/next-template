import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Yenda",
  description:
    "Venta de poleras personalizadas.",
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },   
    {
      title: "Ejemplos",
      href: "/examples",
    },
    {
      title: "Ayuda",
      href: "/help",
    },
    {
      title: "Contacto",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
