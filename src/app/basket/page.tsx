'use client';

import { useAppContext } from '@/lib/AppContext';
import BasketContent from '@/components/BasketContent';

export default function BasketPage() {
  const { state } = useAppContext();

  return (
    <div className="page">
      <div className="basket-container">
        <div className="basket-header">
          <h1>Varelise</h1>
          <p className="basket-subtitle">Gjenbrukte byggematerialer</p>
        </div>
        
        <BasketContent />
      </div>
    </div>
  );
}
