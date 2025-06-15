import React from 'react';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Container from './Container';

const Header = () => {
  return (
    <header className="bg-white border-b py-5">
      {/* left bar */}

      <Container className='flex items-center justify-between gap-7 text-lightColor'>
        <HeaderMenu />
        {/* logo */}
        <Logo />
        {/* right bar */}
        <div className="">right</div>
      </Container>
    </header>
  );
};

export default Header;
