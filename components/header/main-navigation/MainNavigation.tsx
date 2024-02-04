'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import MainNavHeader from './main-navigation-header/MainNavHeader';



const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Masáže',
    href: '/sluzby/masaze',
    description:
      'Masáž je terapeutický způsob manipulace měkkých tkání těla, zaměřený na uvolnění napětí, zlepšení průtoku krve a dosažení celkové relaxace a pohody.',
  },
  {
    title: 'Lymfodrenáže',
    href: '/sluzby/lymfodrenaze',
    description:
      'Lymfodrenáž je terapeutická technika stimulující odtok lymfy, podporující detoxikaci a snižující otoky.',
  },
  {
    title: 'Solárium',
    href: '/sluzby/solarium',
    description:
      'Solarium je zařízení umožňující opalování pomocí umělého ultrafialového záření, často využívané k dosažení opálení nebo stimulaci tvorby vitamínu D.',
  },
  {
    title: 'VacuShape',
    href: '/sluzby/vacushape',
    description:
      'VacuShape je zařízení pro tvarování těla, které využívá kombinaci cvičení a podtlaku k posilování svalů a redukci tukových vrstev..',
  },
];


export default function MainNavigation() {
  return (
    <header className='z-10 fixed bg-white hidden sm:block'>
  
     <MainNavHeader />
      <NavigationMenu className='border-b'>
        <NavigationMenuList className='w-screen justify-evenly text-4xl'>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Domů
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Služby</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='flex flex-col w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[600px] '>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/o-nas' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                O nás
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/cenik' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Ceník
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/galerie' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Galerie
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='/kontakt' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Kontakt
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';