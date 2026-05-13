import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavUser({
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
          </div>

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-bold">Hassan</span>

            <span className="truncate text-xs text-muted-foreground">
              hcodex5@gmail.com
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
