import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Car } from "lucide-react";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="flex items-center gap-3">
          <div className="flex aspect-square size-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A7DF8] to-[#24B8E5] text-sidebar-primary-foreground font-bold shadow-md shadow-[#C9E0FF]">
            <Car />
          </div>

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-bold">Peham ltd</span>

            <span className="truncate text-xs text-muted-foreground">
              car-dealership
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
