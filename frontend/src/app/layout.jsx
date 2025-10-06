"use client";

import "./globals.scss";
import  Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "posts",
    label: "Posts",
  }
];


export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <nav>
          {
            links.map((link) => {
              return(
                <Link key={link.href} href={link.href} className="nav-link"
                  style={pathname == link.href ? {color: "orangered", borderBottom: "1px solid orangered"} : {}}
                  >
                  {link.label}
                </Link>
              )
            })
          }
        </nav>
        {children}
      </body>
    </html>
  );
}
