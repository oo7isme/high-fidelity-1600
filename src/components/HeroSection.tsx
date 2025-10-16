'use client';

interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export default function HeroSection({ searchTerm, onSearchChange, onSearch }: HeroSectionProps) {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
          alt="Bærekraftig gjenbruk av byggematerialer" 
          className="hero-img"
        />
        <div className="hero-overlay">
          <h2>Gjenbruk av byggematerialer</h2>
          <p>Finn bærekraftige byggematerialer fra ombruksanlegg over hele Norge</p>
        </div>
      </div>
      
      <div className="search-section">
        <form onSubmit={onSearch} className="search-bar">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            placeholder="Søk..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
