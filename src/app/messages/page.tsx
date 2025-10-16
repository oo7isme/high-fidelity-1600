'use client';

import { useAppContext } from '@/lib/AppContext';
import MessagesContent from '@/components/MessagesContent';

export default function MessagesPage() {
  const { state } = useAppContext();

  return (
    <div className="page">
      <div className="messages-container">
        <div className="messages-header">
          <h1>Meldinger</h1>
          <p className="messages-subtitle">Sendte meldinger til selgere</p>
        </div>
        
        <MessagesContent />
      </div>
    </div>
  );
}
