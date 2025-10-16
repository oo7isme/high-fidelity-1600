'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppContext } from '@/lib/AppContext';
import FiltersSidebar from '@/components/FiltersSidebar';
import ProductsGrid from '@/components/ProductsGrid';
import { SavedFilter } from '@/types';

export default function ProductsPage() {
  const { state, dispatch } = useAppContext();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSaveFilter, setShowSaveFilter] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [filterDescription, setFilterDescription] = useState('');
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  useEffect(() => {
    filterProducts();
  }, [state.products, state.activeFilters, searchTerm]);

  const filterProducts = () => {
    let filtered = state.products;

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        (product.title?.toLowerCase().includes(term)) ||
        (product.region?.toLowerCase().includes(term)) ||
        (product.material?.toLowerCase().includes(term)) ||
        (product.category?.toLowerCase().includes(term))
      );
    }

    // Apply active filters
    if (state.activeFilters.size > 0) {
      filtered = filtered.filter(product =>
        Array.from(state.activeFilters).some(filter =>
          (product.material?.toLowerCase().includes(filter.toLowerCase())) ||
          (product.category?.toLowerCase().includes(filter.toLowerCase())) ||
          (product.region?.toLowerCase().includes(filter.toLowerCase()))
        )
      );
    }

    dispatch({ type: 'SET_FILTERED_PRODUCTS', payload: filtered });
  };

  const materials = ['Eik', 'Furu', 'Tre', 'Glass', 'Keramikk', 'Stål'];
  const categories = ['Gulv', 'Bjelker', 'Vinduer', 'Dører', 'Fliser'];
  const regions = ['Vestlandet', 'Trøndelag', 'Østlandet', 'Sørlandet', 'Nord-Norge'];

  const saveCurrentFilter = () => {
    if (!filterName.trim()) return;

    const savedFilter: SavedFilter = {
      id: Date.now().toString(),
      name: filterName.trim(),
      description: filterDescription.trim(),
      filters: {
        searchTerm: searchTerm.trim() || undefined,
        categories: Array.from(state.activeFilters).filter(f => categories.includes(f)),
        materials: Array.from(state.activeFilters).filter(f => materials.includes(f)),
        regions: Array.from(state.activeFilters).filter(f => regions.includes(f))
      },
      notificationsEnabled: true,
      createdAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      matchCount: 0
    };

    dispatch({ type: 'ADD_SAVED_FILTER', payload: savedFilter });
    setFilterName('');
    setFilterDescription('');
    setShowSaveFilter(false);
  };

  const hasActiveFiltersOrSearch = state.activeFilters.size > 0 || searchTerm.trim().length > 0;


  return (
    <div className="page">
      <div className="products-container">
        <FiltersSidebar />
        <div className="products-main">
          <div className="products-header">
            <div className="search-section">
              <div className="search-bar">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Skriv inn søk her" 
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {hasActiveFiltersOrSearch && (
                <div className="save-filter-section">
                  {!showSaveFilter ? (
                    <button 
                      className="save-filter-btn"
                      onClick={() => setShowSaveFilter(true)}
                      title="Lagre dette filteret"
                    >
                      <i className="fas fa-bookmark"></i>
                      Lagre filter
                    </button>
                  ) : (
                    <div className="save-filter-form">
                      <input
                        type="text"
                        placeholder="Filter navn..."
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                        className="filter-name-input"
                        autoFocus
                      />
                      <input
                        type="text"
                        placeholder="Beskrivelse (valgfritt)..."
                        value={filterDescription}
                        onChange={(e) => setFilterDescription(e.target.value)}
                        className="filter-description-input"
                      />
                      <div className="save-filter-actions">
                        <button 
                          className="save-btn"
                          onClick={saveCurrentFilter}
                          disabled={!filterName.trim()}
                        >
                          <i className="fas fa-save"></i>
                          Lagre
                        </button>
                        <button 
                          className="cancel-btn"
                          onClick={() => {
                            setShowSaveFilter(false);
                            setFilterName('');
                            setFilterDescription('');
                          }}
                        >
                          <i className="fas fa-times"></i>
                          Avbryt
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="active-filters">
              {searchTerm && (
                <span className="filter-tag search-tag">
                  Søk: "{searchTerm}"
                  <i 
                    className="fas fa-times cursor-pointer" 
                    onClick={() => setSearchTerm('')}
                  ></i>
                </span>
              )}
              {Array.from(state.activeFilters).map(filter => (
                <span key={filter} className="filter-tag">
                  {filter} 
                  <i 
                    className="fas fa-times cursor-pointer" 
                    onClick={() => dispatch({ type: 'REMOVE_FILTER', payload: filter })}
                  ></i>
                </span>
              ))}
            </div>
          </div>
          
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
