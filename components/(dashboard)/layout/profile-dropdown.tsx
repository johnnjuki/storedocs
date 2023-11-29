import { User } from "@prisma/client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@storedocs/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@storedocs/components/ui/avatar";
import { Button } from "@storedocs/components/ui/button";
import { DropdownMenuContent } from "@storedocs/components/ui/dropdown-menu";

export type ProfileDropdownProps = {
  user: User;
};

export const ProfileDropdown = ({ user }: ProfileDropdownProps) => {
  const avatarFallback = user.email?.slice(0, 1).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="">
        <DropdownMenuItem onSelect={() => void signOut({ callbackUrl: "/" })}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
