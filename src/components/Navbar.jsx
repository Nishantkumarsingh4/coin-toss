

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const Item = ({ href, children }) => (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-xl transition ${
        pathname === href
          ? 'bg-indigo-50 text-indigo-700'
          : 'hover:bg-slate-100'
      }`}
      onClick={() => setIsOpen(false)} // close menu after click
    >
      {children}
    </Link>
  );

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
      <nav className="container-app flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          🪙 CoinToss
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          <Item href="/">Home</Item>
          <Item href="/results">Results</Item>
          <Item href="/leaderboard">Leaderboard</Item>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <>
              <span className="text-sm text-slate-600">
                Hi, {session.user?.name || session.user?.email}
              </span>
              <button
                className="btn-primary !py-2 !px-4"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="btn-primary !py-2 !px-4" href="/auth/login">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-2">
          <Item href="/">Home</Item>
          <Item href="/results">Results</Item>
          <Item href="/leaderboard">Leaderboard</Item>

          <div className="border-t pt-3">
            {session ? (
              <>
                <span className="block text-sm text-slate-600 mb-2">
                  Hi, {session.user?.name || session.user?.email}
                </span>
                <button
                  className="w-full btn-primary !py-2"
                  onClick={() => {
                    setIsOpen(false);
                    signOut();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                className="w-full block text-center btn-primary !py-2"
                href="/auth/login"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
