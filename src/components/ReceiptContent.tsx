'use client';

import { useState, useEffect } from 'react';
import { useAppContext } from '@/lib/AppContext';
import { Receipt, Order } from '@/types';

export default function ReceiptContent() {
  const { state, dispatch } = useAppContext();
  const [activeTab, setActiveTab] = useState<'receipts' | 'orders'>('receipts');
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null);
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  // Generate sample receipts and orders for demonstration
  useEffect(() => {
    if (state.receipts.length === 0 && state.orders.length === 0) {
      // Generate sample receipts
      const sampleReceipts: Receipt[] = [
        {
          id: '1',
          orderNumber: 'KV-2024-001',
          date: '2024-01-15',
          type: 'purchase',
          items: [
            {
              id: 1,
              title: 'Eikeparkett fra Voss #1',
              image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Parquet_floor_wood_texture.jpg',
              price: '50kr/m²',
              weight: '2.5 tonn',
              quantity: 20,
              supplier: 'Ombruk Voss'
            }
          ],
          totalAmount: 1000,
          supplier: 'Ombruk Voss',
          status: 'completed',
          notes: 'Levert til adresse i Bergen',
          paymentMethod: 'Vipps'
        },
        {
          id: '2',
          orderNumber: 'KV-2024-002',
          date: '2024-01-20',
          type: 'sale',
          items: [
            {
              id: 2,
              title: 'Furubjelke 200x50 mm #2',
              image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Thai_House_Trat_Wooden_Beams.JPG',
              price: '12kr/meter',
              weight: '1.8 tonn',
              quantity: 50,
              supplier: 'Nord-Norge Ombruk'
            }
          ],
          totalAmount: 600,
          supplier: 'Nord-Norge Ombruk',
          buyer: 'Erik Hansen',
          status: 'completed',
          paymentMethod: 'Bankoverførsel'
        },
        {
          id: '3',
          orderNumber: 'KV-2024-003',
          date: '2024-02-01',
          type: 'purchase',
          items: [
            {
              id: 3,
              title: 'Vinduer 120x150 cm, 2-lags #3',
              image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/EURO_68_wooden_window_profile_with_insulated_glazing_01.JPG',
              price: '900kr/stk',
              weight: '0.8 tonn',
              quantity: 2,
              supplier: 'Oslo Ombruk'
            }
          ],
          totalAmount: 1800,
          supplier: 'Oslo Ombruk',
          status: 'pending',
          paymentMethod: 'Kredittkort'
        }
      ];

      // Generate sample orders
      const sampleOrders: Order[] = [
        {
          id: '1',
          orderNumber: 'ORD-2024-001',
          date: '2024-01-15',
          status: 'delivered',
          items: [
            {
              id: 1,
              title: 'Eikeparkett fra Voss #1',
              image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Parquet_floor_wood_texture.jpg',
              price: '50kr/m²',
              weight: '2.5 tonn',
              quantity: 20,
              supplier: 'Ombruk Voss'
            }
          ],
          totalAmount: 1000,
          supplier: 'Ombruk Voss',
          deliveryAddress: 'Bergen, Norge',
          notes: 'Levert på døren',
          paymentMethod: 'Vipps'
        },
        {
          id: '2',
          orderNumber: 'ORD-2024-002',
          date: '2024-01-20',
          status: 'shipped',
          items: [
            {
              id: 2,
              title: 'Furubjelke 200x50 mm #2',
              image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Thai_House_Trat_Wooden_Beams.JPG',
              price: '12kr/meter',
              weight: '1.8 tonn',
              quantity: 50,
              supplier: 'Nord-Norge Ombruk'
            }
          ],
          totalAmount: 600,
          supplier: 'Nord-Norge Ombruk',
          deliveryAddress: 'Tromsø, Norge',
          paymentMethod: 'Bankoverførsel'
        },
        {
          id: '3',
          orderNumber: 'ORD-2024-003',
          date: '2024-02-01',
          status: 'pending',
          items: [
            {
              id: 3,
              title: 'Vinduer 120x150 cm, 2-lags #3',
              image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/EURO_68_wooden_window_profile_with_insulated_glazing_01.JPG',
              price: '900kr/stk',
              weight: '0.8 tonn',
              quantity: 2,
              supplier: 'Oslo Ombruk'
            }
          ],
          totalAmount: 1800,
          supplier: 'Oslo Ombruk',
          deliveryAddress: 'Oslo, Norge',
          paymentMethod: 'Kredittkort'
        }
      ];

      // Add sample data to state
      sampleReceipts.forEach(receipt => {
        dispatch({ type: 'ADD_RECEIPT', payload: receipt });
      });

      sampleOrders.forEach(order => {
        dispatch({ type: 'ADD_ORDER', payload: order });
      });
    }
  }, [state.receipts.length, state.orders.length, dispatch]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nb-NO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'delivered':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'shipped':
      case 'confirmed':
        return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'cancelled':
        return 'text-red-600 bg-red-100 border-red-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Fullført';
      case 'delivered':
        return 'Levert';
      case 'pending':
        return 'Venter';
      case 'shipped':
        return 'Sendt';
      case 'confirmed':
        return 'Bekreftet';
      case 'cancelled':
        return 'Avbrutt';
      default:
        return status;
    }
  };

  const openReceiptModal = (receipt: Receipt) => {
    setSelectedReceipt(receipt);
    setShowReceiptModal(true);
  };

  const closeReceiptModal = () => {
    setSelectedReceipt(null);
    setShowReceiptModal(false);
  };

  const printReceipt = () => {
    window.print();
  };

  return (
    <>
      <div className="receipt-container">
        <div className="receipt-header">
          <h1>Kvitteringer & Bestillinger</h1>
          <p className="receipt-subtitle">Oversikt over dine kjøp og salg</p>
        </div>

        {/* Tabs */}
        <div className="receipt-tabs">
          <button
            className={`tab-btn ${activeTab === 'receipts' ? 'active' : ''}`}
            onClick={() => setActiveTab('receipts')}
          >
            <i className="fas fa-receipt"></i>
            Kvitteringer ({state.receipts.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <i className="fas fa-shopping-cart"></i>
            Bestillinger ({state.orders.length})
          </button>
        </div>

        {/* Content */}
        <div className="receipt-content">
          {activeTab === 'receipts' ? (
            <div className="receipts-list">
              {state.receipts.length === 0 ? (
                <div className="empty-receipts">
                  <i className="fas fa-receipt"></i>
                  <h3>Ingen kvitteringer ennå</h3>
                  <p>Dine kjøp og salg vil vises her</p>
                </div>
              ) : (
                state.receipts.map((receipt) => (
                  <div key={receipt.id} className="receipt-card" onClick={() => openReceiptModal(receipt)}>
                    <div className="receipt-header-info">
                      <div className="receipt-number">
                        <h4>{receipt.orderNumber}</h4>
                        <span className={`receipt-type ${receipt.type === 'purchase' ? 'purchase' : 'sale'}`}>
                          {receipt.type === 'purchase' ? 'Kjøp' : 'Salg'}
                        </span>
                      </div>
                      <div className="receipt-date">
                        {formatDate(receipt.date)}
                      </div>
                    </div>
                    
                    <div className="receipt-items">
                      {receipt.items.map((item, index) => (
                        <div key={index} className="receipt-item">
                          <img src={item.image} alt={item.title} className="receipt-item-image" />
                          <div className="receipt-item-info">
                            <h5>{item.title}</h5>
                            <p>{item.quantity} x {item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="receipt-footer">
                      <div className="receipt-total">
                        <span>Totalt: {receipt.totalAmount}kr</span>
                      </div>
                      <div className={`receipt-status ${getStatusColor(receipt.status)}`}>
                        {getStatusText(receipt.status)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="orders-list">
              {state.orders.length === 0 ? (
                <div className="empty-orders">
                  <i className="fas fa-shopping-cart"></i>
                  <h3>Ingen bestillinger ennå</h3>
                  <p>Dine aktive bestillinger vil vises her</p>
                </div>
              ) : (
                state.orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div className="order-number">
                        <h4>{order.orderNumber}</h4>
                        <span className="order-date">{formatDate(order.date)}</span>
                      </div>
                      <div className={`order-status ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </div>
                    </div>

                    <div className="order-items">
                      {order.items.map((item, index) => (
                        <div key={index} className="order-item">
                          <img src={item.image} alt={item.title} className="order-item-image" />
                          <div className="order-item-info">
                            <h5>{item.title}</h5>
                            <p>{item.quantity} x {item.price}</p>
                            <p className="order-supplier">Fra: {item.supplier}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="order-footer">
                      <div className="order-total">
                        <span>Totalt: {order.totalAmount}kr</span>
                      </div>
                      {order.deliveryAddress && (
                        <div className="order-address">
                          <i className="fas fa-map-marker-alt"></i>
                          {order.deliveryAddress}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Receipt Modal */}
      {showReceiptModal && selectedReceipt && (
        <div className="receipt-modal">
          <div className="modal-overlay" onClick={closeReceiptModal}></div>
          <div className="modal-content receipt-modal-content">
            <div className="modal-header">
              <h3>Kvittering - {selectedReceipt.orderNumber}</h3>
              <div className="modal-actions">
                <button onClick={printReceipt} className="btn-secondary">
                  <i className="fas fa-print"></i>
                  Skriv ut
                </button>
                <button onClick={closeReceiptModal} className="close-modal">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div className="receipt-details">
                <div className="receipt-info">
                  <div className="info-row">
                    <span className="info-label">Ordrenummer:</span>
                    <span className="info-value">{selectedReceipt.orderNumber}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Dato:</span>
                    <span className="info-value">{formatDate(selectedReceipt.date)}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Type:</span>
                    <span className={`info-value receipt-type ${selectedReceipt.type === 'purchase' ? 'purchase' : 'sale'}`}>
                      {selectedReceipt.type === 'purchase' ? 'Kjøp' : 'Salg'}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Status:</span>
                    <span className={`info-value ${getStatusColor(selectedReceipt.status)}`}>
                      {getStatusText(selectedReceipt.status)}
                    </span>
                  </div>
                  {selectedReceipt.paymentMethod && (
                    <div className="info-row">
                      <span className="info-label">Betalingsmetode:</span>
                      <span className="info-value">{selectedReceipt.paymentMethod}</span>
                    </div>
                  )}
                </div>

                <div className="receipt-items-detail">
                  <h4>Varer</h4>
                  {selectedReceipt.items.map((item, index) => (
                    <div key={index} className="receipt-item-detail">
                      <img src={item.image} alt={item.title} className="receipt-item-image" />
                      <div className="receipt-item-details">
                        <h5>{item.title}</h5>
                        <p>Antall: {item.quantity}</p>
                        <p>Pris: {item.price}</p>
                        <p>Vekt: {item.weight}</p>
                        <p>Leverandør: {item.supplier}</p>
                      </div>
                      <div className="receipt-item-total">
                        {selectedReceipt.totalAmount}kr
                      </div>
                    </div>
                  ))}
                </div>

                {selectedReceipt.notes && (
                  <div className="receipt-notes">
                    <h4>Merknad</h4>
                    <p>{selectedReceipt.notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
