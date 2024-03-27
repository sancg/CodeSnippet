import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/snippet/new'>Snippets</Link>
      </nav>
    </header>
  );
}
