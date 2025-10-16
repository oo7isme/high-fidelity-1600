export interface Product {
  id: string;
  title: string;
  category: string;
  material: string;
  region: string;
  price: string;
  unit: string;
  condition: string;
  image: string;
  supplier: string;
  weight?: string;
  thickness?: string;
  length?: string;
  width?: string;
  availability?: string;
  description?: string;
  origin?: string;
  location?: string;
}

export interface BasketItem {
  id: number;
  title: string;
  image: string;
  price: string;
  weight: string;
  quantity: number;
}

export interface Message {
  id: number;
  itemId: number;
  productTitle: string;
  productImage: string;
  productWeight: string;
  productPrice: string;
  messageText: string;
  timestamp: string;
  status: 'sendt';
}

export interface AppState {
  currentPage: string;
  activeFilters: Set<string>;
  products: Product[];
  filteredProducts: Product[];
  basket: BasketItem[];
  messages: Message[];
  receipts: Receipt[];
  orders: Order[];
  savedFilters: SavedFilter[];
  notifications: Notification[];
}

export interface FilterSection {
  title: string;
  filters: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface OrderItem {
  id: number;
  title: string;
  image: string;
  price: string;
  weight: string;
  quantity: number;
  supplier: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  totalAmount: number;
  supplier: string;
  deliveryAddress?: string;
  notes?: string;
  paymentMethod?: string;
}

export interface Receipt {
  id: string;
  orderNumber: string;
  date: string;
  type: 'purchase' | 'sale';
  items: OrderItem[];
  totalAmount: number;
  supplier: string;
  buyer?: string;
  seller?: string;
  status: 'completed' | 'pending' | 'cancelled';
  notes?: string;
  paymentMethod?: string;
}

export interface SavedFilter {
  id: string;
  name: string;
  description?: string;
  filters: {
    searchTerm?: string;
    categories: string[];
    materials: string[];
    regions: string[];
    priceRange?: { min: number; max: number };
    weightRange?: { min: number; max: number };
  };
  notificationsEnabled: boolean;
  createdAt: string;
  lastChecked: string;
  matchCount: number;
}

export interface Notification {
  id: string;
  type: 'filter_match' | 'new_message' | 'order_update' | 'general';
  title: string;
  message: string;
  filterId?: string;
  productId?: string;
  read: boolean;
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
}

export interface UserProfile {
  name: string;
  title: string;
  location: string;
  avatar: string;
  badges: string[];
  stats: {
    orders: number;
    rating: number;
    memberYears: number;
  };
  about: string;
  contact: {
    email: string;
    phone: string;
    company: string;
  };
  interests: string[];
  recentOrders: {
    title: string;
    date: string;
    status: string;
    image: string;
  }[];
}
