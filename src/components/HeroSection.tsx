'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    title: 'Fremtiden for bærekraftig bygging',
    description: 'Oppdag hvordan gjenbruk av byggematerialer reduserer klimautslipp',
    category: 'Miljø'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    title: 'Hvordan restaurere gammelt parkett',
    description: 'En steg-for-steg guide til å gi nytt liv til gammelt parkett',
    category: 'Gjenbruk'
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Thai_House_Trat_Wooden_Beams.JPG',
    title: 'Gjenbruk av bjelker og trekonstruksjoner',
    description: 'Oppdag hvordan gamle bjelker kan få nye oppgaver i moderne prosjekter',
    category: 'Konstruksjon'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    title: 'Klimaavtrykket av gjenbruk',
    description: 'Hvor mye CO2 sparer du ved å gjenbruke byggematerialer?',
    category: 'Miljø'
  }
];

export default function HeroSection({ searchTerm, onSearchChange, onSearch }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="hero-section">
      <div className="hero-carousel">
        <div className="carousel-container">
          {carouselSlides.map((slide, index) => (
            <Link 
              key={slide.id} 
              href="/blog"
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="hero-img"
              />
              <div className="hero-overlay">
                <span className="hero-category">{slide.category}</span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="hero-link-hint">
                  <span>Klikk for å lese mer</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel Controls */}
        <button 
          className="carousel-btn carousel-btn-prev opacity-50" 
          onClick={(e) => {
            e.preventDefault();
            goToPrevious();
          }}
          aria-label="Forrige slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          className="carousel-btn carousel-btn-next opacity-50" 
          onClick={(e) => {
            e.preventDefault();
            goToNext();
          }}
          aria-label="Neste slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselSlides.map((slide, index) => (
            <button
              key={slide.id}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                goToSlide(index);
              }}
              aria-label={`Gå til slide ${index + 1}`}
            />
          ))}
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
