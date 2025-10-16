'use client';

import { useAppContext } from '@/lib/AppContext';
import NotificationsContent from '@/components/NotificationsContent';

export default function NotificationsPage() {
  return (
    <div className="page">
      <div className="notifications-container">
        <NotificationsContent />
      </div>
    </div>
  );
}
