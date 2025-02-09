import {
  WalletCards,
  User,
  Barcode,
  Settings,
  LayoutDashboard,
  ContactRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "./ui/sidebar";
import Logo from "./Logo";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customer",
    url: "/customer",
    icon: ContactRound,
  },
  {
    title: "Users",
    url: "/users",
    icon: User,
  },
  {
    title: "Products",
    url: "/products",
    icon: Barcode,
  },
  {
    title: "Order",
    url: "#",
    icon: WalletCards,
  },
  {
    title: "Suppliers",
    url: "/suppliers",
    icon: WalletCards,
  },
  {
    title: "Companies",
    url: "/companies",
    icon: WalletCards,
  },
  {
    title: "Stores",
    url: "/stores",
    icon: WalletCards,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
