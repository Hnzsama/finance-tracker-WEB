"use client"

import * as React from "react"
import {
  IconChartBar,
  IconCreditCard,
  IconDashboard,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconWallet,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useTranslation } from "@/i18n/client"

import {
  Bot,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t, i18n } = useTranslation('common')
  const lang = i18n.language || 'en'

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: t('app_name'),
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
    ],
    navMain: [
      {
        title: t('menu.dashboard'),
        url: `/${lang}/dashboard`,
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: t('menu.transactions'),
        url: `/${lang}/transactions`,
        icon: Bot,
      },
      {
        title: t('menu.analytics'),
        url: `/${lang}/analytics`,
        icon: PieChart,
      },
      {
        title: t('menu.accounts'),
        url: `/${lang}/accounts`,
        icon: IconWallet,
      },
      {
        title: t('menu.reports'),
        url: `/${lang}/reports`,
        icon: IconReport,
      },
    ],
    navSecondary: [
      {
        title: t('menu.settings'),
        url: `/${lang}/settings`,
        icon: Settings2,
      },
      {
        title: t('menu.get_help'),
        url: `/${lang}/help`,
        icon: IconHelp,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconCreditCard className="!size-5" />
                <span className="text-base font-semibold">{t('app_name')}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
