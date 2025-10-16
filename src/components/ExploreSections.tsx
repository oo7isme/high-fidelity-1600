'use client';

import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/AppContext';

export default function ExploreSections() {
  const router = useRouter();
  const { dispatch } = useAppContext();

  const handleExploreClick = (item: string) => {
    dispatch({ type: 'ADD_FILTER', payload: item });
    router.push('/products');
  };

  const regions = ['Nord-Norge', 'Trøndelag', 'Vestlandet', 'Østlandet', 'Sørlandet'];
  const categories = ['Gulv', 'Bjelker', 'Vinduer', 'Dører', 'Fliser'];
  const materials = ['Eik', 'Furu', 'Tre/Glass', 'Keramikk', 'Stål'];

  return (
    <div className="explore-sections">
      <div className="explore-card">
        <h3>Velg landsdel</h3>
        <p className="explore-description">Finn materialer fra din region</p>
        <ul className="explore-list">
          {regions.map((region) => (
            <li key={region} onClick={() => handleExploreClick(region)}>
              {region}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="explore-card">
        <h3>Kategori av materiale</h3>
        <p className="explore-description">Brukte byggematerialer</p>
        <ul className="explore-list">
          {categories.map((category) => (
            <li key={category} onClick={() => handleExploreClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="explore-card">
        <h3>Materialtype</h3>
        <p className="explore-description">Gjenbrukte materialer</p>
        <ul className="explore-list">
          {materials.map((material) => (
            <li key={material} onClick={() => handleExploreClick(material)}>
              {material}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
