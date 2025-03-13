import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground />
      <header className={ classes.header }>
        <Link href="/" className={classes.logo}>
          <Image src={logoImage} alt="logo" priority />
          NextLevel Food
        </Link>

        <nav className={ classes.nav }>
          <ul>
            <li>
              <NavLink route={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink route={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
