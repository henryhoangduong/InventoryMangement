import {
    WalletCards,
    User,
    Barcode,
    Settings,
    LayoutDashboard,
    ContactRound,
    CalendarArrowUpIcon,
    Container,
    Building2,
    Store,
    TriangleAlertIcon,
} from 'lucide-react';

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
} from './ui/sidebar';
import Logo from './Logo';
import { useTheme } from './thems-provider';
import { cn } from '../lib/utils';
// Menu items.
const items = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Customer',
        url: '/customer',
        icon: ContactRound,
    },
    {
        title: 'Users',
        url: '/users',
        icon: User,
    },
    {
        title: 'Products',
        url: '/products',
        icon: Barcode,
    },
    {
        title: 'Orders',
        url: '/orders',
        icon: CalendarArrowUpIcon,
    },
    {
        title: 'Suppliers',
        url: '/suppliers',
        icon: Container,
    },
    {
        title: 'Companies',
        url: '/companies',
        icon: Building2,
    },
    {
        title: 'Stores',
        url: '/stores',
        icon: Store,
    },
    {
        title: 'Brands',
        url: '/brands',
        icon: TriangleAlertIcon,
    },
    {
        title: 'Settings',
        url: '#',
        icon: Settings,
    },
];

export function AppSidebar() {
    const theme = useTheme();
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
                                        <a
                                            href={item.url}
                                            className={cn(
                                                theme.theme == 'light'
                                                    ? 'text-black'
                                                    : 'text-white',
                                            )}
                                        >
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
