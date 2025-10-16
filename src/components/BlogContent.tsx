'use client';

import { useState } from 'react';

export default function BlogContent() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      alert('Takk for at du abonnerte!');
    }, 1000);
  };

  return (
    <div className="blog-content">
      <div className="featured-article">
        <div className="article-image">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Bærekraftig bygging" 
          />
        </div>
        <div className="article-content">
          <span className="article-category">Miljø</span>
          <h2>Fremtiden for bærekraftig bygging i Norge</h2>
          <p>Norge har satt ambisiøse mål for å redusere klimautslippene fra byggebransjen. Gjenbruk av byggematerialer er en av de viktigste strategiene for å oppnå disse målene.</p>
          <div className="article-meta">
            <span className="author">Av Erik Hansen</span>
            <span className="date">15. januar 2024</span>
            <span className="read-time">5 min lesetid</span>
          </div>
        </div>
      </div>
      
      <div className="blog-grid">
        <article className="blog-card">
          <div className="card-image">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Gjenbruk av parkett" 
            />
          </div>
          <div className="card-content">
            <span className="card-category">Gjenbruk</span>
            <h3>Hvordan restaurere gammelt parkett</h3>
            <p>En steg-for-steg guide til å gi nytt liv til gammelt parkett. Fra rengjøring til oljebehandling.</p>
            <div className="card-meta">
              <span className="author">Av Maria Larsen</span>
              <span className="date">12. januar 2024</span>
            </div>
          </div>
        </article>
        
        <article className="blog-card">
          <div className="card-image">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Thai_House_Trat_Wooden_Beams.JPG" 
              alt="Trekonstruksjoner" 
            />
          </div>
          <div className="card-content">
            <span className="card-category">Konstruksjon</span>
            <h3>Gjenbruk av bjelker og trekonstruksjoner</h3>
            <p>Oppdag hvordan gamle bjelker kan få nye oppgaver i moderne byggeprosjekter.</p>
            <div className="card-meta">
              <span className="author">Av Thomas Andersen</span>
              <span className="date">10. januar 2024</span>
            </div>
          </div>
        </article>
        
        <article className="blog-card">
          <div className="card-image">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/EURO_68_wooden_window_profile_with_insulated_glazing_01.JPG" 
              alt="Vinduer" 
            />
          </div>
          <div className="card-content">
            <span className="card-category">Renovering</span>
            <h3>Gjenbruk av vinduer og dører</h3>
            <p>Tips for å finne og installere brukte vinduer og dører som matcher ditt byggeprosjekt.</p>
            <div className="card-meta">
              <span className="author">Av Lisa Wang</span>
              <span className="date">8. januar 2024</span>
            </div>
          </div>
        </article>
        
        <article className="blog-card">
          <div className="card-image">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Miljøvennlig" 
            />
          </div>
          <div className="card-content">
            <span className="card-category">Miljø</span>
            <h3>Klimaavtrykket av gjenbruk</h3>
            <p>Hvor mye CO2 sparer du egentlig ved å gjenbruke byggematerialer? Vi har regnet det ut.</p>
            <div className="card-meta">
              <span className="author">Av Olav Nordahl</span>
              <span className="date">5. januar 2024</span>
            </div>
          </div>
        </article>
        
        <article className="blog-card">
          <div className="card-image">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Garnet_red_ceramic_cemented_clean_tile_pattern_floor_ground_texture.jpg" 
              alt="Fliser" 
            />
          </div>
          <div className="card-content">
            <span className="card-category">DIY</span>
            <h3>Kreativ gjenbruk av fliser</h3>
            <p>Inspirerende prosjekter som viser hvordan du kan bruke gamle fliser på nye måter.</p>
            <div className="card-meta">
              <span className="author">Av Anne Berg</span>
              <span className="date">3. januar 2024</span>
            </div>
          </div>
        </article>
        
        <article className="blog-card">
          <div className="card-image">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Marked" 
            />
          </div>
          <div className="card-content">
            <span className="card-category">Marked</span>
            <h3>Markedet for gjenbrukte materialer</h3>
            <p>En oversikt over hvordan markedet for gjenbrukte byggematerialer utvikler seg i Norge.</p>
            <div className="card-meta">
              <span className="author">Av Kristian Olsen</span>
              <span className="date">1. januar 2024</span>
            </div>
          </div>
        </article>
      </div>
      
      <div className="newsletter-signup">
        <div className="newsletter-content">
          <h3>Hold deg oppdatert</h3>
          <p>Få de nyeste tipsene om bærekraftig bygging rett i innboksen din.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Din e-postadresse" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" disabled={isSubscribing}>
              {isSubscribing ? 'Abonnerer...' : 'Abonner'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
