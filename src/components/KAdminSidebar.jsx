import {
  AlertCircle,
  Contact,
  HelpCircle,
  Layout,
  ScanLine,
  Settings,
} from "lucide-react";

const data = {
  navMain: [
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "Alert",
          url: "/components/alert",
          icon: AlertCircle,
        },
      ],
    },
    {
      title: "Sections",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon: ScanLine,
        },
        {
          title: "Contacts",
          url: "#",
          icon: Contact,
          isActive: true,
        },
        {
          title: "Layouts",
          url: "#",
          icon: Layout,
        },
      ],
    },
    {
      title: "Other",
      url: "#",
      items: [
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
        {
          title: "Help Center",
          url: "#",
          icon: HelpCircle,
        },
      ],
    },
  ],
};

export default function KAdminSidebar({ ...props }) {
  return (
    <KSidebar {...props}>
      <KSidebarHeader>
        <h1 className="font-semibold text-xl text-center">Kira-Kit</h1>
      </KSidebarHeader>
      <KSidebarContent>
        {data.navMain.map((item) => (
          <KSidebarGroup key={item.title}>
            <KSidebarGroupLabel className="uppercase text-muted-foreground/90">
              {item.title}
            </KSidebarGroupLabel>
            <KSidebarGroupContent className="px-2">
              <KSidebarMenu>
                {item.items.map((item) => (
                  <KSidebarMenuItem key={item.title}>
                    <KSidebarMenuButton
                      className="group/menu-button font-medium gap-3 h-9 rounded-md bg-gradient-to-r hover:bg-transparent hover:from-sidebar-accent hover:to-sidebar-accent/60 data-[active=true]:from-primary data-[active=true]:to-primary/70 data-[active=true]:shadow data-[active=true]:shadow-primary/50 [&>svg]:size-auto"
                      isActive={item.isActive}
                      to={item.url}
                    >
                      {item.icon && (
                        <item.icon
                          className="text-muted-foreground group-data-[active=true]/menu-button:text-background"
                          size={24}
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-foreground group-data-[active=true]/menu-button:text-background">
                        {item.title}
                      </span>
                    </KSidebarMenuButton>
                  </KSidebarMenuItem>
                ))}
              </KSidebarMenu>
            </KSidebarGroupContent>
          </KSidebarGroup>
        ))}
      </KSidebarContent>
    </KSidebar>
  );
}
