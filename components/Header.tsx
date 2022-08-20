import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';

const Header = () => (
  <header className="flex justify-between">
    <Link href='/'>
      <a><Image src="/images/logo.svg" width={40} height={40} /></a>
    </Link>
    <Menu />
  </header>
);

export default Header;