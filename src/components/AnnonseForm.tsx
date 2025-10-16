'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnnonseForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    if (files.length > 5) {
      alert('Du kan maksimalt laste opp 5 bilder');
      return;
    }
    
    files.forEach(file => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`Bildet "${file.name}" er for stort. Maksimal størrelse er 5MB.`);
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePreviewImage = (index: number) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/products');
    }, 1500);
  };

  return (
    <form className="annonse-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Grunnleggende informasjon</h3>
        <div className="form-group">
          <label htmlFor="product-title">Tittel på materialet *</label>
          <input 
            type="text" 
            id="product-title" 
            name="title" 
            placeholder="F.eks. Eikeparkett fra Voss" 
            required 
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Kategori *</label>
            <select id="category" name="category" required>
              <option value="">Velg kategori</option>
              <option value="Gulv">Gulv</option>
              <option value="Bjelker">Bjelker</option>
              <option value="Vinduer">Vinduer</option>
              <option value="Dører">Dører</option>
              <option value="Fliser">Fliser</option>
              <option value="Annet">Annet</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="material">Materiale *</label>
            <select id="material" name="material" required>
              <option value="">Velg materiale</option>
              <option value="Eik">Eik</option>
              <option value="Furu">Furu</option>
              <option value="Tre/Glass">Tre/Glass</option>
              <option value="Keramikk">Keramikk</option>
              <option value="Stål">Stål</option>
              <option value="Annet">Annet</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Detaljer og spesifikasjoner</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="weight">Vekt (tonn)</label>
            <input 
              type="number" 
              id="weight" 
              name="weight" 
              step="0.1" 
              placeholder="2.5" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="price">Pris (kr per enhet)</label>
            <input 
              type="number" 
              id="price" 
              name="price" 
              placeholder="50" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="unit">Enhet</label>
            <select id="unit" name="unit">
              <option value="m²">m²</option>
              <option value="stk">stk</option>
              <option value="meter">meter</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="condition">Tilstand</label>
          <select id="condition" name="condition">
            <option value="Ny">Ny</option>
            <option value="Brukt - utmerket">Brukt - utmerket</option>
            <option value="Brukt - god">Brukt - god</option>
            <option value="Brukt - brukbar">Brukt - brukbar</option>
            <option value="Trenger reparasjon">Trenger reparasjon</option>
          </select>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Lokasjon og levering</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="region">Region *</label>
            <select id="region" name="region" required>
              <option value="">Velg region</option>
              <option value="Vestlandet">Vestlandet</option>
              <option value="Trøndelag">Trøndelag</option>
              <option value="Østlandet">Østlandet</option>
              <option value="Sørlandet">Sørlandet</option>
              <option value="Nord-Norge">Nord-Norge</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="city">By/sted</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              placeholder="F.eks. Bergen, Oslo, Trondheim" 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="delivery">Levering</label>
          <select id="delivery" name="delivery">
            <option value="Selvhenting">Selvhenting</option>
            <option value="Levering mot betaling">Levering mot betaling</option>
            <option value="Gratis levering">Gratis levering</option>
            <option value="Diskuter">Diskuter</option>
          </select>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Beskrivelse og bilder</h3>
        <div className="form-group">
          <label htmlFor="description">Beskrivelse *</label>
          <textarea 
            id="description" 
            name="description" 
            rows={5} 
            placeholder="Beskriv materialet, dets historie, tilstand og hvorfor du selger det..." 
            required 
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="images">Last opp bilder</label>
          <div className="image-upload">
            <input 
              type="file" 
              id="images" 
              name="images" 
              multiple 
              accept="image/*" 
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <button 
              type="button" 
              className="upload-btn" 
              onClick={() => document.getElementById('images')?.click()}
            >
              <i className="fas fa-camera"></i>
              Velg bilder
            </button>
            <span className="upload-info">Maksimalt 5 bilder, opptil 5MB hver</span>
          </div>
          <div className="image-preview">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="preview-image">
                <img src={preview} alt={`Preview ${index + 1}`} />
                <button 
                  type="button" 
                  className="remove-image" 
                  onClick={() => removePreviewImage(index)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Kontaktinformasjon</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">Navn *</label>
            <input 
              type="text" 
              id="contact-name" 
              name="contactName" 
              placeholder="Ditt fulle navn" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contact-phone">Telefon</label>
            <input 
              type="tel" 
              id="contact-phone" 
              name="contactPhone" 
              placeholder="+47 123 45 678" 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="contact-email">E-post *</label>
          <input 
            type="email" 
            id="contact-email" 
            name="contactEmail" 
            placeholder="din@epost.no" 
            required 
          />
        </div>
      </div>
      
      <div className="form-actions">
        <button 
          type="button" 
          className="btn-secondary" 
          onClick={() => router.push('/products')}
        >
          Avbryt
        </button>
        <button 
          type="submit" 
          className="btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Publiserer...
            </>
          ) : (
            <>
              <i className="fas fa-plus"></i>
              Publiser annonse
            </>
          )}
        </button>
      </div>
    </form>
  );
}
