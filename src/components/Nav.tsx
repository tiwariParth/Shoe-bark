"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Component, ComponentProps } from "react";

const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className=" text-black text-primary-foreground flex justify-between items-center px-4 scroll-smooth">
      <div>
        <img
          src="/smart-kicks.png"
          alt="Smart-Kicks"
          className="w-[4rem] h-[4rem] cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </div>
      <div className="flex justify-center gap-2">{children}</div>
    </nav>
  );
};

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathName = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "px-4 py-2 hover:bg-yellow-500  gap-3 rounded-md transition-all delay-100 hover:text-white hover:shadow-xl focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathName === props.href &&
          "bg-background text-foreground border-b shadow-md"
      )}
    />
  );
}

export default Nav;
