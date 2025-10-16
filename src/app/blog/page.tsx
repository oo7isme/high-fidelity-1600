'use client';

import BlogContent from '@/components/BlogContent';

export default function BlogPage() {
  return (
    <div className="page">
      <div className="blog-container">
        <div className="blog-header">
          <h1>Bærekraftig bygging</h1>
          <p className="blog-subtitle">Tips, triks og inspirasjon for gjenbruk av byggematerialer</p>
        </div>
        
        <BlogContent />
      </div>
    </div>
  );
}
