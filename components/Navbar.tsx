// import { Button } from "./ui/button";
// import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   CircleQuestionMark,
//   CreditCardIcon,
//   LogOut,
//   Mail,
//   Settings,
//   User,
//   Home,
//   Inbox,
//   Calendar,
//   Search,
// } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// const Navbar = () => {
//   const items = [
//     { title: "Home", url: "/", icon: Home },
//     { title: "Inbox", url: "/", icon: Inbox },
//     { title: "Calander", url: "/", icon: Calendar },
//     { title: "Search", url: "/", icon: Search },
//     { title: "Settings", url: "/", icon: Settings },
//   ];

//   return (
//     <nav className="flex justify-between items-center px-4 py-2 border-b border-[#e9e4e5]">
//       {/* Left Side  */}

//       <div className="flex gap-3">
//         Collapsible button
//         <h2>Dashboard</h2>
//       </div>

//       {/* Right Side  */}
//       <div className="flex gap-5 items-center">
//         <Button
//           variant={"ghost"}
//           className="border border-[#e9e4e5] rounded-sm shadow-xs px-4 cursor-pointer"
//         >
//           <Link href="/" className="flex gap-2 items-center">
//             <CreditCardIcon /> Billing
//           </Link>
//         </Button>

//         {/* Help & Setting  */}

//         <DropdownMenu>
//           <DropdownMenuTrigger className="cursor-pointer">
//             <CircleQuestionMark strokeWidth={1.5} size={20} />
//           </DropdownMenuTrigger>
//           <DropdownMenuContent sideOffset={20} className="w-55">
//             <DropdownMenuGroup>
//               <DropdownMenuLabel>Help & Support</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="flex gap-3">
//                 <Settings /> Settings
//               </DropdownMenuItem>
//               <DropdownMenuItem className="flex gap-3">
//                 <CreditCardIcon /> Billing & Invoices
//               </DropdownMenuItem>
//               <DropdownMenuItem className="flex gap-3">
//                 <Mail /> Contact support
//               </DropdownMenuItem>
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         {/* Profile  */}

//         <DropdownMenu>
//           <DropdownMenuTrigger className="flex items-center gap-3 hover:bg-[#e9e4e5] px-3 py-2 cursor-pointer rounded-md">
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>H</AvatarFallback>
//             </Avatar>
//             <span>Hassan</span>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent sideOffset={5} className="w-55">
//             <DropdownMenuGroup>
//               <DropdownMenuLabel>Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="flex gap-3">
//                 <User /> Profile
//               </DropdownMenuItem>
//               <DropdownMenuItem className="flex gap-3">
//                 <Settings /> Settings
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuGroup>
//                 <DropdownMenuItem variant="destructive">
//                   <LogOut /> Sign out
//                 </DropdownMenuItem>
//               </DropdownMenuGroup>
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
