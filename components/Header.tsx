"use client";

import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMenu, IoMoonOutline } from "react-icons/io5";
import ProfileButton from "./ui/ProfileButton";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
  {
    href: "/",
    label: "Products",
  },
  {
    href: "/",
    label: "Category",
  },
  {
    href: "/",
    label: "Sale",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:flex  sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full border">
          <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <IoMenu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.href}
                    className="block px-2 py-1 text-lg"
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-semibold">Shopify</h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((link, i) => (
              <Button asChild variant="ghost">
                <Link key={i} href={link.href}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="shooping cart"
              className="mr-2"
            >
              <MdOutlineShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shooping Cart</span>
            </Button>
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-6"
              variant={"ghost"}
              size="icon"
              aria-label="Toggle theme"
            >
              <MdOutlineWbSunny className="h-6 w-6 rotate-0 scale-100 transition-all drak:-rotate-90 dark:scale-0" />
              <IoMoonOutline className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
