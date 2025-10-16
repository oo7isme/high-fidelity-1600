'use client';

import { useAppContext } from '@/lib/AppContext';
import { SavedFilter } from '@/types';

export default function FiltersSidebar() {
  const { state, dispatch } = useAppContext();

  const materials = ['Eik', 'Furu', 'Tre', 'Glass', 'Keramikk', 'Stål'];
  const categories = ['Gulv', 'Bjelker', 'Vinduer', 'Dører', 'Fliser'];
  const regions = ['Vestlandet', 'Trøndelag', 'Østlandet', 'Sørlandet', 'Nord-Norge'];

  const handleFilterChange = (filter: string, checked: boolean) => {
    if (checked) {
      dispatch({ type: 'ADD_FILTER', payload: filter });
    } else {
      dispatch({ type: 'REMOVE_FILTER', payload: filter });
    }
  };

  const applySavedFilter = (savedFilter: SavedFilter) => {
    // Clear current filters
    dispatch({ type: 'CLEAR_FILTERS' });
    
    // Apply saved filter
    const allFilters = [
      ...savedFilter.filters.categories,
      ...savedFilter.filters.materials,
      ...savedFilter.filters.regions
    ];
    
    allFilters.forEach(filter => {
      dispatch({ type: 'ADD_FILTER', payload: filter });
    });
  };

  return (
    <aside className="filters-sidebar">
      <div className="filter-header">
        <i className="fas fa-filter"></i>
        <h3>Filtrer</h3>
      </div>


      {/* Saved Filters Section */}
      {state.savedFilters.length > 0 && (
        <div className="filter-section">
          <h4>Lagrede filtre</h4>
          <div className="saved-filters-list">
            {state.savedFilters.map((savedFilter) => (
              <div key={savedFilter.id} className="saved-filter-item">
                <div className="saved-filter-info">
                  <h5>{savedFilter.name}</h5>
                  {savedFilter.description && (
                    <p>{savedFilter.description}</p>
                  )}
                  <div className="saved-filter-tags">
                    {[...savedFilter.filters.categories, ...savedFilter.filters.materials, ...savedFilter.filters.regions].map(tag => (
                      <span key={tag} className="filter-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="saved-filter-actions">
                  <button 
                    className="apply-filter-btn"
                    onClick={() => applySavedFilter(savedFilter)}
                    title="Bruk filter"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  <button 
                    className="delete-filter-btn"
                    onClick={() => dispatch({ type: 'DELETE_SAVED_FILTER', payload: savedFilter.id })}
                    title="Slett filter"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="filter-section">
        <h4>Materiale</h4>
        {materials.map(material => (
          <label key={material}>
            <input 
              type="checkbox" 
              value={material}
              checked={state.activeFilters.has(material)}
              onChange={(e) => handleFilterChange(material, e.target.checked)}
            /> 
            {material}
          </label>
        ))}
      </div>
      
      <div className="filter-section">
        <h4>Kategori</h4>
        {categories.map(category => (
          <label key={category}>
            <input 
              type="checkbox" 
              value={category}
              checked={state.activeFilters.has(category)}
              onChange={(e) => handleFilterChange(category, e.target.checked)}
            /> 
            {category}
          </label>
        ))}
      </div>
      
      <div className="filter-section">
        <h4>Region</h4>
        {regions.map(region => (
          <label key={region}>
            <input 
              type="checkbox" 
              value={region}
              checked={state.activeFilters.has(region)}
              onChange={(e) => handleFilterChange(region, e.target.checked)}
            /> 
            {region}
          </label>
        ))}
      </div>
      
      <div className="filter-section">
        <h4>Pris</h4>
        <div className="price-inputs">
          <input type="number" placeholder="Min." />
          <input type="number" placeholder="Max." />
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Vekt</h4>
        <div className="weight-inputs">
          <input type="number" placeholder="Min." />
          <input type="number" placeholder="Max." />
        </div>
      </div>
    </aside>
  );
}
