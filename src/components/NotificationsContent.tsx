'use client';

import { useState, useEffect } from 'react';
import { useAppContext } from '@/lib/AppContext';
import { Notification } from '@/types';

export default function NotificationsContent() {
  const { state, dispatch } = useAppContext();
  const [filter, setFilter] = useState<'all' | 'unread' | 'filter_match'>('all');
  
  // Static notifications for demonstration
  const staticNotifications: Notification[] = [
    {
      id: '1',
      type: 'filter_match',
      title: 'Nye treff på ditt filter!',
      message: 'Du har 3 nye produkter som matcher "Eik Gulv" filteret ditt',
      filterId: '1',
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 min ago
      priority: 'high'
    },
    {
      id: '2',
      type: 'new_message',
      title: 'Ny melding mottatt',
      message: 'Erik Hansen har sendt deg en melding om Furubjelke 200x50 mm',
      productId: '2',
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      priority: 'medium'
    },
    {
      id: '3',
      type: 'filter_match',
      title: 'Nye treff på ditt filter!',
      message: 'Du har 2 nye produkter som matcher "Vestlandet" filteret ditt',
      filterId: '2',
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      priority: 'medium'
    },
    {
      id: '4',
      type: 'order_update',
      title: 'Bestilling oppdatert',
      message: 'Din bestilling #ORD-2024-001 har blitt sendt',
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
      priority: 'low'
    },
    {
      id: '5',
      type: 'general',
      title: 'Velkommen til ByggOm!',
      message: 'Takk for at du registrerte deg. Utforsk våre gjenbrukte byggematerialer!',
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 1 week ago
      priority: 'low'
    }
  ];

  // Generate sample notifications for demonstration
  useEffect(() => {
    // Always add sample notifications for demonstration
    const sampleNotifications: Notification[] = [
        {
          id: '1',
          type: 'filter_match',
          title: 'Nye treff på ditt filter!',
          message: 'Du har 3 nye produkter som matcher "Eik Gulv" filteret ditt',
          filterId: '1',
          read: false,
          createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 min ago
          priority: 'high'
        },
        {
          id: '2',
          type: 'new_message',
          title: 'Ny melding mottatt',
          message: 'Erik Hansen har sendt deg en melding om Furubjelke 200x50 mm',
          productId: '2',
          read: false,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
          priority: 'medium'
        },
        {
          id: '3',
          type: 'filter_match',
          title: 'Nye treff på ditt filter!',
          message: 'Du har 2 nye produkter som matcher "Vestlandet" filteret ditt',
          filterId: '2',
          read: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
          priority: 'medium'
        },
        {
          id: '4',
          type: 'order_update',
          title: 'Bestilling oppdatert',
          message: 'Din bestilling #ORD-2024-001 har blitt sendt',
          read: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
          priority: 'low'
        },
        {
          id: '5',
          type: 'general',
          title: 'Velkommen til ByggOm!',
          message: 'Takk for at du registrerte deg. Utforsk våre gjenbrukte byggematerialer!',
          read: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 1 week ago
          priority: 'low'
        }
      ];

      sampleNotifications.forEach(notification => {
        dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
      });
  }, [dispatch]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} min siden`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} ${hours === 1 ? 'time' : 'timer'} siden`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} ${days === 1 ? 'dag' : 'dager'} siden`;
    }
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'filter_match':
        return 'fas fa-search';
      case 'new_message':
        return 'fas fa-comment';
      case 'order_update':
        return 'fas fa-shopping-cart';
      case 'general':
        return 'fas fa-info-circle';
      default:
        return 'fas fa-bell';
    }
  };

  const getPriorityColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return 'priority-low';
    }
  };

  // Use static notifications for demonstration
  const notifications = staticNotifications;
  
  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'filter_match') return notification.type === 'filter_match';
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    dispatch({ type: 'MARK_NOTIFICATION_READ', payload: id });
  };

  const deleteNotification = (id: string) => {
    dispatch({ type: 'DELETE_NOTIFICATION', payload: id });
  };

  const markAllAsRead = () => {
    state.notifications.forEach(notification => {
      if (!notification.read) {
        dispatch({ type: 'MARK_NOTIFICATION_READ', payload: notification.id });
      }
    });
  };

  const clearAllNotifications = () => {
    dispatch({ type: 'CLEAR_ALL_NOTIFICATIONS' });
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1>Varslinger</h1>
        <p className="notifications-subtitle">Hold deg oppdatert på nye treff og aktivitet</p>
        
        {unreadCount > 0 && (
          <div className="notifications-actions">
            <button onClick={markAllAsRead} className="btn-secondary">
              <i className="fas fa-check-double"></i>
              Merk alle som lest
            </button>
            <button onClick={clearAllNotifications} className="btn-secondary">
              <i className="fas fa-trash"></i>
              Slett alle
            </button>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="notifications-tabs">
        <button
          className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          <i className="fas fa-list"></i>
          Alle ({notifications.length})
        </button>
        <button
          className={`tab-btn ${filter === 'unread' ? 'active' : ''}`}
          onClick={() => setFilter('unread')}
        >
          <i className="fas fa-envelope-open"></i>
          Ulest ({unreadCount})
        </button>
        <button
          className={`tab-btn ${filter === 'filter_match' ? 'active' : ''}`}
          onClick={() => setFilter('filter_match')}
        >
          <i className="fas fa-search"></i>
          Filter treff ({notifications.filter(n => n.type === 'filter_match').length})
        </button>
      </div>

      {/* Notifications List */}
      <div className="notifications-content">
        <div className="notifications-list">
          {filteredNotifications.length === 0 ? (
            <div className="empty-notifications">
              <i className="fas fa-bell-slash"></i>
              <h3>Ingen varsler</h3>
              <p>
                {filter === 'unread' 
                  ? 'Du har ingen uleste varsler'
                  : filter === 'filter_match'
                  ? 'Ingen filter treff ennå'
                  : 'Du har ingen varsler'
                }
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`notification-card ${!notification.read ? 'unread' : ''} ${getPriorityColor(notification.priority)}`}
                onClick={() => !notification.read && markAsRead(notification.id)}
              >
                <div className="notification-icon">
                  <i className={getNotificationIcon(notification.type)}></i>
                </div>
                
                <div className="notification-content">
                  <div className="notification-header">
                    <h4>{notification.title}</h4>
                    <div className="notification-meta">
                      <span className="notification-time">{formatDate(notification.createdAt)}</span>
                      {notification.priority === 'high' && (
                        <span className="priority-badge high">Høy prioritet</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="notification-message">{notification.message}</p>
                  
                  {notification.filterId && (
                    <div className="notification-context">
                      <i className="fas fa-filter"></i>
                      <span>Relatert til lagret filter</span>
                    </div>
                  )}
                </div>
                
                <div className="notification-actions">
                  {!notification.read && (
                    <button 
                      className="mark-read-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        markAsRead(notification.id);
                      }}
                      title="Merk som lest"
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  )}
                  <button 
                    className="delete-notification-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                    title="Slett varsel"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
