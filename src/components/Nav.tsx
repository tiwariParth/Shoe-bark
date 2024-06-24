"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Component, ComponentProps } from "react";

const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-between px-4 mx-auto scroll-smooth">
      <div>
        <img
          src="/smart-kicks.png"
          alt="Smart-Kicks"
          className="w-[4rem] h-[4rem] cursor-pointer"
          onClick={() => {
            window.location.href = "/admin";
          }}
        />
      </div>
      <div className="flex justify-center">{children}</div>
    </nav>
  );
};

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathName = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary transition-all delay-100 hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathName === props.href && "bg-background text-foreground"
      )}
    />
  );
}

export default Nav;
