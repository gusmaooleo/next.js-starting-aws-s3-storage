"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ route, children }) {
  const path = usePathname();

  return (
    <Link
      href={route}
      className={path.startsWith(route) ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
}
