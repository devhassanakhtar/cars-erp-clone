import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleQuestionMark,
  CreditCardIcon,
  LogOut,
  Mail,
  Settings,
  User,
  Home,
  Inbox,
  Calendar,
  Search,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav>
      {/* Billing Button  */}
      <div className="flex gap-2 md:gap-5 items-center">
        
          <Link href="/billing" className="hidden link_hover transition md:flex gap-2 items-center border border-[#e9e4e5] rounded-sm shadow-xs px-4 py-1 cursor-pointer">
            <CreditCardIcon size={18}/> Billing
          </Link>
        

        {/* Help & Setting  */}

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <CircleQuestionMark strokeWidth={1.5} size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={20} className="w-55">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Help & Support</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-3">
                <Settings /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-3">
                <CreditCardIcon /> Billing & Invoices
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-3">
                <Mail /> Contact support
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile  */}

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 transition duration-300 hover:bg-[#f8f6f6] px-3 py-2 cursor-pointer rounded-md">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <span className="hidden md:block">Hassan</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={5} className="w-55">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-3">
                <User /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-3">
                <Settings /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <LogOut /> Sign out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
