'use client';

import AnnonseForm from '@/components/AnnonseForm';

export default function AnnonsePage() {
  return (
    <div className="page">
      <div className="annonse-container">
        <div className="annonse-header">
          <h1>Legg ut ny annonse</h1>
          <p className="annonse-subtitle">Del dine gjenbrukte byggematerialer med andre</p>
        </div>
        
        <AnnonseForm />
      </div>
    </div>
  );
}
