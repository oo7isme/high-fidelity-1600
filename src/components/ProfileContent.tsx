export default function ProfileContent() {
  return (
    <>
      <div className="profile-header">
        <div className="profile-header-content">
          <div className="profile-avatar">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Erik Hansen" 
              className="avatar-img"
            />
            <div className="status-indicator online"></div>
          </div>
          <div className="profile-info">
            <h1>Erik Hansen</h1>
            <p className="profile-title">Byggentreprenør</p>
            <p className="profile-location">
              <i className="fas fa-map-marker-alt"></i>
              Bergen, Vestlandet
            </p>
            <div className="profile-badges">
              <span className="profile-badge">Verifisert</span>
              <span className="profile-badge">Premium medlem</span>
              <span className="profile-badge">Miljøvennlig</span>
            </div>
          </div>
          <button className="edit-profile-btn">
            <i className="fas fa-edit"></i>
            Rediger profil
          </button>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-card-content">
              <div className="stat-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">12</span>
                <span className="stat-label">Bestillinger</span>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-card-content">
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Vurdering</span>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-card-content">
              <div className="stat-icon">
                <i className="fas fa-calendar"></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">3</span>
                <span className="stat-label">År medlem</span>
              </div>
            </div>
          </div>
          <div className="profile-section">
            <h3>Mine blogginnlegg</h3>
            <div className="profile-blog-posts">
              <div className="profile-blog-item">
                <div className="profile-blog-image">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Bærekraftig bygging"
                  />
                </div>
                <div className="profile-blog-content">
                  <span className="profile-blog-category">Miljø</span>
                  <h4>Fremtiden for bærekraftig bygging i Norge</h4>
                  <p>Norge har satt ambisiøse mål for å redusere klimautslippene fra byggebransjen. Gjenbruk av byggematerialer er en av de viktigste strategiene...</p>
                  <div className="profile-blog-meta">
                    <span className="profile-blog-date">
                      <i className="fas fa-calendar"></i>
                      15. januar 2024
                    </span>
                    <span className="profile-blog-read-time">
                      <i className="fas fa-clock"></i>
                      5 min lesetid
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="profile-blog-item">
                <div className="profile-blog-image">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Gjenbruk av parkett"
                  />
                </div>
                <div className="profile-blog-content">
                  <span className="profile-blog-category">Gjenbruk</span>
                  <h4>Hvordan restaurere gammelt parkett</h4>
                  <p>En steg-for-steg guide til å gi nytt liv til gammelt parkett. Fra rengjøring til oljebehandling...</p>
                  <div className="profile-blog-meta">
                    <span className="profile-blog-date">
                      <i className="fas fa-calendar"></i>
                      12. januar 2024
                    </span>
                    <span className="profile-blog-read-time">
                      <i className="fas fa-clock"></i>
                      3 min lesetid
                    </span>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        
        <div className="profile-sections">
          <div className="profile-section">
            <h3>Om meg</h3>
            <p>Jeg er en erfaren byggentreprenør fra Bergen som spesialiserer meg på bærekraftige byggeprosjekter. Jeg har jobbet med gjenbruk av byggematerialer i over 10 år og er lidenskapelig opptatt av å redusere avfall i byggebransjen.</p>
          </div>
          
          
          
          <div className="profile-section">
            <h3>Interesser</h3>
            <div className="interests">
              <span className="interest-tag">Bærekraftig bygging</span>
              <span className="interest-tag">Gjenbruk</span>
              <span className="interest-tag">Miljøvennlig materialer</span>
              <span className="interest-tag">Renovering</span>
            </div>
          </div>
          
          <div className="profile-section">
            <h3>Nylige bestillinger</h3>
            <div className="recent-orders">
              <div className="order-item">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Eik parkett"
                />
                <div className="order-details">
                  <h4>Eikeparkett fra Voss</h4>
                  <p>Bestilt 15. januar 2024</p>
                  <span className="order-status completed">Levert</span>
                </div>
              </div>
              
              <div className="order-item">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Thai_House_Trat_Wooden_Beams.JPG" 
                  alt="Furubjelke"
                />
                <div className="order-details">
                  <h4>Furubjelke 200x50 mm</h4>
                  <p>Bestilt 8. januar 2024</p>
                  <span className="order-status in-transit">Under levering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
