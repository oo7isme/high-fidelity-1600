'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AppState, Product, BasketItem, Message, Receipt, Order, SavedFilter, Notification } from '@/types';

// Initial state
const initialState: AppState = {
  currentPage: 'home',
  activeFilters: new Set(),
  products: [],
  filteredProducts: [],
  basket: [],
  messages: [],
  receipts: [],
  orders: [],
  savedFilters: [],
  notifications: []
};

// Action types
type AppAction = 
  | { type: 'SET_CURRENT_PAGE'; payload: string }
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_FILTERED_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_FILTER'; payload: string }
  | { type: 'REMOVE_FILTER'; payload: string }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'ADD_TO_BASKET'; payload: BasketItem }
  | { type: 'REMOVE_FROM_BASKET'; payload: number }
  | { type: 'UPDATE_ITEM_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'DELETE_MESSAGE'; payload: number }
  | { type: 'ADD_RECEIPT'; payload: Receipt }
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { id: string; status: Order['status'] } }
  | { type: 'ADD_SAVED_FILTER'; payload: SavedFilter }
  | { type: 'UPDATE_SAVED_FILTER'; payload: { id: string; updates: Partial<SavedFilter> } }
  | { type: 'DELETE_SAVED_FILTER'; payload: string }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'MARK_NOTIFICATION_READ'; payload: string }
  | { type: 'DELETE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_ALL_NOTIFICATIONS' }
  | { type: 'LOAD_STATE'; payload: Partial<AppState> };

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    
    case 'SET_PRODUCTS':
      return { 
        ...state, 
        products: action.payload,
        filteredProducts: action.payload 
      };
    
    case 'SET_FILTERED_PRODUCTS':
      return { ...state, filteredProducts: action.payload };
    
    case 'ADD_FILTER':
      const newFilters = new Set(state.activeFilters);
      newFilters.add(action.payload);
      return { ...state, activeFilters: newFilters };
    
    case 'REMOVE_FILTER':
      const updatedFilters = new Set(state.activeFilters);
      updatedFilters.delete(action.payload);
      return { ...state, activeFilters: updatedFilters };
    
    case 'CLEAR_FILTERS':
      return { ...state, activeFilters: new Set() };
    
    case 'ADD_TO_BASKET':
      const existingItem = state.basket.find(item => item.title === action.payload.title);
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return { ...state, basket: [...state.basket, action.payload] };
    
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_ITEM_QUANTITY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          basket: state.basket.filter(item => item.id !== action.payload.id)
        };
      }
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    
    case 'DELETE_MESSAGE':
      return {
        ...state,
        messages: state.messages.filter(msg => msg.id !== action.payload)
      };
    
    case 'ADD_RECEIPT':
      return { ...state, receipts: [...state.receipts, action.payload] };
    
    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.payload] };
    
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        )
      };
    
    case 'ADD_SAVED_FILTER':
      return { ...state, savedFilters: [...state.savedFilters, action.payload] };
    
    case 'UPDATE_SAVED_FILTER':
      return {
        ...state,
        savedFilters: state.savedFilters.map(filter =>
          filter.id === action.payload.id
            ? { ...filter, ...action.payload.updates }
            : filter
        )
      };
    
    case 'DELETE_SAVED_FILTER':
      return {
        ...state,
        savedFilters: state.savedFilters.filter(filter => filter.id !== action.payload)
      };
    
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [action.payload, ...state.notifications] };
    
    case 'MARK_NOTIFICATION_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload
            ? { ...notification, read: true }
            : notification
        )
      };
    
    case 'DELETE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.id !== action.payload)
      };
    
    case 'CLEAR_ALL_NOTIFICATIONS':
      return {
        ...state,
        notifications: []
      };
    
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider component
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load products on mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        // Direct import for immediate availability
        const productsData = await import('@/data/products.json');
        const products: Product[] = productsData.products.map((product: any) => ({
          id: `product-${product.id}`,
          title: product.title || '',
          region: product.region || '',
          material: product.material || '',
          category: product.category || '',
          price: `${product.price}kr/${product.unit}`,
          unit: product.unit || '',
          condition: product.condition || '',
          image: product.image || '',
          supplier: product.supplier || '',
          weight: `${Math.floor(Math.random() * 5) + 0.5} tonn`,
          thickness: `${Math.floor(Math.random() * 20) + 5}mm`,
          length: `${Math.floor(Math.random() * 1000) + 500} mm`,
          width: `${Math.floor(Math.random() * 300) + 100} mm`,
          availability: `${Math.floor(Math.random() * 200) + 50} ${product.unit} tilgjengelig`,
          description: `Gjenbrukt ${product.category?.toLowerCase() || 'materiale'} fra ombruksanlegg i ${product.region || 'Norge'}. ${product.condition || 'Brukt'}. Materialet er perfekt for bærekraftige byggeprosjekter.`,
          origin: `Fra ${product.supplier || 'Lokal leverandør'} - ${product.condition || 'Brukt'}`
        }));
        
        dispatch({ type: 'SET_PRODUCTS', payload: products });
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('byggOm_state');
      if (savedState) {
        try {
          const parsedState = JSON.parse(savedState);
          // Convert arrays back to Sets for filters
          if (parsedState.activeFilters) {
            parsedState.activeFilters = new Set(parsedState.activeFilters);
          }
          dispatch({ type: 'LOAD_STATE', payload: parsedState });
        } catch (error) {
          console.error('Error loading saved state:', error);
        }
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stateToSave = {
        ...state,
        activeFilters: Array.from(state.activeFilters)
      };
      localStorage.setItem('byggOm_state', JSON.stringify(stateToSave));
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
