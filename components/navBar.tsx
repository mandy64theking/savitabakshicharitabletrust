import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavBar({ className }: { className?: string }) {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className={className}>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden">
            <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Articles</NavigationMenuLink>
              <NavigationMenuLink>Events</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Get Involved!
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="https://rzp.io/rzp/sbct-donate-now"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  " bg-linear-to-b from-orange-400 to-orange-600 font-bold hover:bg-linear-to-b hover:from-orange-600 hover:to-orange-400 text-white"
                }
              >
                Make a Donation!
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
