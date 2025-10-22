'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  basketCount: number;
  messageCount: number;
  notificationCount: number;
}

export default function MobileMenu({ isOpen, onClose, basketCount, messageCount, notificationCount }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu active">
      <div className="mobile-menu-overlay" onClick={onClose}></div>
      <div className="mobile-menu-content">
        <div className="mobile-menu-header">
          <h3>Meny</h3>
          <button className="close-menu" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <Link href="/" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-home"></i>
            <span>Hjem</span>
          </Link>
          <Link href="/products" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-box"></i>
            <span>Produkter</span>
          </Link>
          <Link href="/annonse" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-wrench"></i>
            <span>Ny Annonse</span>
          </Link>
          <Link href="/messages" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-comments"></i>
            <span>Meldinger</span>
            {messageCount > 0 && (
              <span className="menu-badge">{messageCount}</span>
            )}
          </Link>
          <Link href="/basket" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-shopping-cart"></i>
            <span>Handlekurv</span>
            {basketCount > 0 && (
              <span className="menu-badge">{basketCount}</span>
            )}
          </Link>
          <Link href="/kvittering" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-receipt"></i>
            <span>Kvitteringer</span>
          </Link>
          <Link href="/profile" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-user"></i>
            <span>Profil</span>
          </Link>
          <Link href="/blog" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-blog"></i>
            <span>Blog</span>
          </Link>
          <Link href="/varsler" className="mobile-menu-item" onClick={onClose}>
            <i className="fas fa-bell"></i>
            <span>Varsler</span>
            {notificationCount > 0 && (
              <span className="menu-badge">{notificationCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
}
