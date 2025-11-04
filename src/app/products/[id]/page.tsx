'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useAppContext } from '@/lib/AppContext';
import { Product } from '@/types';

export default function ProductDetailPage() {
  const { state, dispatch } = useAppContext();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const productId = params.id as string;
    const foundProduct = state.products.find(p => p.id === productId);
    setProduct(foundProduct || null);
  }, [params.id, state.products]);

  const handleAddToBasket = () => {
    if (!product) return;

    const basketItem = {
      id: Date.now(),
      title: product.title,
      image: product.image,
      price: product.price,
      weight: product.weight || '3 tonn',
      quantity: 1
    };

    dispatch({ type: 'ADD_TO_BASKET', payload: basketItem });
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'basket-notification';
    notification.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>Produkt lagt til i handlekurven!</span>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      font-family: Inter, sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  if (!product) {
    return (
      <div className="page">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-600">Produkt ikke funnet</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="product-detail-container">
        <h1 className="product-title">{product.title}</h1>
        
        <div className="product-detail-content">
          <div className="product-image-column gap-2">
            <div className="product-image-large">
              <img 
                src={product.image} 
                alt={`${product.title} - detaljert bilde`} 
                className="product-detail-img"
              />
            </div>
            
            {/* Seller Information Box */}
            <div className="seller-info-box">
              <div className="seller-header">
                <h3>
                  <i className="fas fa-user"></i>
                  Om selgeren
                </h3>
              </div>
              
              <div className="seller-content">
                <div className="seller-profile">
                  <div className="seller-avatar">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                      alt="Erik Hansen" 
                    />
                    <div className="seller-status online"></div>
                  </div>
                  
                  <div className="seller-info">
                    <h4>Erik Hansen</h4>
                    <p className="seller-title">Byggentreprenør</p>
                    <p className="seller-location">
                      <i className="fas fa-map-marker-alt"></i>
                      Bergen, Vestlandet
                    </p>
                  </div>
                </div>
                
                <div className="seller-rating">
                  <div className="rating-display">
                    <div className="rating-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="rating-value">4.8</span>
                    <span className="rating-count">(24 vurderinger)</span>
                  </div>
                </div>
                
                <div className="seller-badges">
                  <span className="seller-badge verified">
                    <i className="fas fa-check-circle"></i>
                    Verifisert
                  </span>
                  <span className="seller-badge premium">
                    <i className="fas fa-crown"></i>
                    Premium medlem
                  </span>
                  <span className="seller-badge member">
                    <i className="fas fa-calendar"></i>
                    3 år medlem
                  </span>
                </div>
                
                <div className="seller-stats">
                  <div className="seller-stat">
                    <span className="stat-number">12</span>
                    <span className="stat-label">Bestillinger</span>
                  </div>
                  <div className="seller-stat">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Svarfrekvens</span>
                  </div>
                  <div className="seller-stat">
                    <span className="stat-number">&lt;1t</span>
                    <span className="stat-label">Gjennomsnittlig svar</span>
                  </div>
                </div>
                
                <Link href="/profile" className="view-profile-btn">
                  <i className="fas fa-user-circle"></i>
                  Se full profil
                </Link>
              </div>
            </div>
          </div>
          
          <div className="product-details">
            <h3>Info om materialet</h3>
            
            <div className="specifications">
              <div className="spec-item">
                <span className="spec-label">Tykkelse:</span>
                <span className="spec-value">{product.thickness}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Vekt:</span>
                <span className="spec-value">{product.weight}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Lengde:</span>
                <span className="spec-value">{product.length}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Bredde:</span>
                <span className="spec-value">{product.width}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Pris:</span>
                <span className="spec-value">{product.price}</span>
              </div>
            </div>
            
            <div className="product-description">
              <div className="description-header">
                <i className="fas fa-info-circle"></i>
                <span>Beskrivelse</span>
              </div>
              <p>{product.description}</p>
            </div>
            
            {product.origin && (
              <div className="material-origin">
                <div className="origin-header">
                  <i className="fas fa-history"></i>
                  <span>Materialets historie</span>
                </div>
                <p>{product.origin}</p>
              </div>
            )}
            
            <button className="order-btn" onClick={handleAddToBasket}>
              Legg til i lista
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
