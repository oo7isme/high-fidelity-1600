import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          
          <h1>404 - Side ikke funnet</h1>
          <p className="not-found-message">
            Beklager, siden du leter etter eksisterer ikke eller har blitt flyttet.
          </p>
          
          <div className="not-found-actions">
            <Link href="/" className="btn-primary">
              <i className="fas fa-home"></i>
              Gå til hjemmesiden
            </Link>
            <Link href="/products" className="btn-secondary">
              <i className="fas fa-box"></i>
              Se produkter
            </Link>
          </div>
          
          <div className="not-found-suggestions">
            <h3>Populære sider:</h3>
            <ul>
              <li><Link href="/products">Produkter</Link></li>
              <li><Link href="/annonse">Ny annonse</Link></li>
              <li><Link href="/basket">Handlekurv</Link></li>
              <li><Link href="/varsler">Varsler</Link></li>
              <li><Link href="/profile">Profil</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
