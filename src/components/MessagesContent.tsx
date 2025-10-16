'use client';

import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/AppContext';

export default function MessagesContent() {
  const { state, dispatch } = useAppContext();
  const router = useRouter();

  const deleteMessage = (messageId: number) => {
    if (confirm('Er du sikker på at du vil slette denne meldingen?')) {
      dispatch({ type: 'DELETE_MESSAGE', payload: messageId });
    }
  };

  if (state.messages.length === 0) {
    return (
      <div className="messages-content">
        <div className="empty-messages">
          <i className="fas fa-comments"></i>
          <h3>Ingen meldinger ennå</h3>
          <p>Meldinger du sender til selgere vil vises her</p>
          <button 
            className="browse-btn" 
            onClick={() => router.push('/products')}
          >
            Bla gjennom produkter
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="messages-content">
      <div className="messages-list">
        {state.messages.map(message => (
          <div key={message.id} className="message-card">
            <div className="message-product-info">
              <img 
                src={message.productImage} 
                alt={message.productTitle} 
                className="message-product-image"
              />
              <div className="message-product-details">
                <h4>{message.productTitle}</h4>
                <p>Vekt: {message.productWeight}</p>
                <p>Pris: {message.productPrice}</p>
              </div>
            </div>
            <div className="message-content">
              <div className="message-header">
                <span className={`message-status ${message.status}`}>
                  {message.status}
                </span>
                <span className="message-time">{message.timestamp}</span>
              </div>
              <div className="message-text">{message.messageText}</div>
            </div>
            <div className="message-actions">
              <button 
                className="delete-message-btn" 
                onClick={() => deleteMessage(message.id)}
              >
                <i className="fas fa-trash"></i> Slett
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
