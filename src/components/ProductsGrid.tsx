'use client';

import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/AppContext';

export default function ProductsGrid() {
  const { state } = useAppContext();
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="products-grid">
      {state.filteredProducts.map((product, index) => (
        <div 
          key={product.id} 
          className="product-card slide-in"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => handleProductClick(product.id)}
        >
          <div className="product-image">
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-img"
              loading="lazy"
            />
            <div className="availability-badge">
              {product.availability}
            </div>
          </div>
          <div className="product-info">
            <h4>{product.title}</h4>
            <p className="location-info">Fra {product.region || 'Norge'}</p>
            <p className="weight-info">Vekt {product.weight}</p>
            <p className="reuse-info">Gjenbrukt materiale</p>
          </div>
        </div>
      ))}
    </div>
  );
}
