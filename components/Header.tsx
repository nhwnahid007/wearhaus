import React from 'react';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Container from './Container';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ListOrdered } from 'lucide-react';

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="bg-white border-b py-5">
      {/* left bar */}

      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        {/* logo */}
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo className="">WearHaus</Logo>
        </div>
        {/* right bar */}
        <div className="w-auto flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={'/orders'} className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
                <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-darkColor hoverEffect ">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
