'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/lib/AppContext';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { state, dispatch } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const basketItemCount = state.basket.reduce((sum, item) => sum + item.quantity, 0);
  const messageCount = state.messages.length;
  const notificationCount = state.notifications.filter(n => !n.read).length;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <Link href="/" className="nav-btn">
              <i className="fas fa-home"></i>
            </Link>
            <Link href="/messages" className="nav-btn">
              <i className="fas fa-comments"></i>
            </Link>
          </div>
          
          <div className="header-center">
            <Link href="/" className="header-logo">
              <div className="logo-b">B</div>
              <div className="logo-text">ByggOm</div>
            </Link>
          </div>
          
          <div className="header-right">
            <Link href="/annonse" className="nav-btn">
              <i className="fas fa-wrench"></i>
              <span>Ny Annonse</span>
            </Link>
            <Link href="/varsler" className="nav-btn">
              <i className="fas fa-bell"></i>
              {notificationCount > 0 && (
                <span className="messages-count show">{notificationCount}</span>
              )}
            </Link>
            <Link href="/basket" className="nav-btn">
              <i className="fas fa-shopping-cart"></i>
              {basketItemCount > 0 && (
                <span className="basket-count show">{basketItemCount}</span>
              )}
            </Link>
            <Link href="/kvittering" className="nav-btn">
              <i className="fas fa-receipt"></i>
              <span>Kvitteringer</span>
            </Link>
            <Link href="/profile" className="nav-btn">
              <i className="fas fa-user"></i>
            </Link>
            <Link href="/blog" className="nav-btn">
              <i className="fas fa-blog"></i>
            </Link>
            <button 
              className="nav-btn mobile-menu-toggle lg:hidden"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={toggleMobileMenu}
        basketCount={basketItemCount}
        messageCount={messageCount}
        notificationCount={notificationCount}
      />
    </>
  );
}
