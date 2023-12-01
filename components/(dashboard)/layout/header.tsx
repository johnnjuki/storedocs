"use client";

import Link from "next/link";
import { User } from "@prisma/client";
import { HTMLAttributes, useEffect, useState } from "react";

import { ProfileDropdown } from "./profile-dropdown";
import { cn } from "@storedocs/lib/utils";

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  user: User;
};

export const Header = ({ className, user, ...props }: HeaderProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 w-full items-center border-b border-b-transparent backdrop-blur-2xl duration-200 ",
        scrollY > 5 && "border-b-border",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 md:px-8">
        <Link href="/">
          <div className="font-medium">Storedocs</div>
        </Link>

        <ProfileDropdown user={user} />
      </div>
    </header>
  );
};
