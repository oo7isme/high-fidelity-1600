'use client';

import { useAppContext } from '@/lib/AppContext';
import ReceiptContent from '@/components/ReceiptContent';

export default function ReceiptPage() {
  const { state } = useAppContext();

  return (
    <div className="page">
      <div className="receipt-container">
        <ReceiptContent />
      </div>
    </div>
  );
}
