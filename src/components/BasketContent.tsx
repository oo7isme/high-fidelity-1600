'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/AppContext';

export default function BasketContent() {
  const { state, dispatch } = useAppContext();
  const router = useRouter();
  const [showMessageModal, setShowMessageModal] = useState<number | null>(null);
  const [messageText, setMessageText] = useState('');

  const removeFromBasket = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: itemId });
  };

  const sendMessage = (itemId: number) => {
    if (!messageText.trim()) {
      alert('Vennligst skriv en melding før du sender.');
      return;
    }

    const item = state.basket.find(item => item.id === itemId);
    if (!item) return;

    const message = {
      id: Date.now(),
      itemId: itemId,
      productTitle: item.title,
      productImage: item.image,
      productWeight: item.weight,
      productPrice: item.price,
      messageText: messageText,
      timestamp: new Date().toLocaleString('no-NO'),
      status: 'sendt' as const
    };

    dispatch({ type: 'ADD_MESSAGE', payload: message });
    removeFromBasket(itemId);
    setShowMessageModal(null);
    setMessageText('');
  };

  if (state.basket.length === 0) {
    return (
      <div className="basket-content">
        <div className="basket-items">
          <div className="empty-basket">
            <i className="fas fa-shopping-cart"></i>
            <h3>Handlekurven din er tom</h3>
            <p>Legg til noen gjenbrukte byggematerialer for å komme i gang</p>
            <button 
              className="browse-btn" 
              onClick={() => router.push('/products')}
            >
              Bla gjennom produkter
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="basket-content">
      <div className="basket-items">
        <div className="basket-items-list">
          {state.basket.map(item => (
            <div key={item.id} className="basket-item">
              <img 
                src={item.image} 
                alt={item.title} 
                className="basket-item-image"
              />
              <div className="basket-item-info">
                <h4 className="basket-item-title">{item.title}</h4>
                <p className="basket-item-details">Vekt: {item.weight}</p>
                <p className="basket-item-price">{item.price}</p>
              </div>
              <div className="basket-item-actions">
                <button 
                  className="message-btn" 
                  onClick={() => setShowMessageModal(item.id)}
                >
                  <i className="fas fa-envelope"></i> Send melding
                </button>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromBasket(item.id)}
                >
                  <i className="fas fa-trash"></i> Fjern
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="message-modal">
          <div className="modal-overlay" onClick={() => setShowMessageModal(null)}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Send melding til selger</h3>
              <button 
                className="close-modal" 
                onClick={() => setShowMessageModal(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="message-product-info">
                <img 
                  src={state.basket.find(item => item.id === showMessageModal)?.image} 
                  alt={state.basket.find(item => item.id === showMessageModal)?.title} 
                  className="message-product-image"
                />
                <div className="message-product-details">
                  <h4>{state.basket.find(item => item.id === showMessageModal)?.title}</h4>
                  <p>Vekt: {state.basket.find(item => item.id === showMessageModal)?.weight}</p>
                  <p>Pris: {state.basket.find(item => item.id === showMessageModal)?.price}</p>
                </div>
              </div>
              <div className="message-form">
                <label htmlFor="message-text">Din melding:</label>
                <textarea 
                  id="message-text" 
                  placeholder="Skriv melding inkluder mengde ønsket og leveringsalternativer..." 
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                ></textarea>
                <div className="modal-actions">
                  <button 
                    className="btn-secondary" 
                    onClick={() => setShowMessageModal(null)}
                  >
                    Avbryt
                  </button>
                  <button 
                    className="btn-primary" 
                    onClick={() => sendMessage(showMessageModal)}
                  >
                    Send melding
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
