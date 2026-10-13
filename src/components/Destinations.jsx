import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PLACES = [
  { id: 'DUbai', name: 'Dubai', country: 'UAE', price: 22000, tier: 'budget' },
  { id: 'Malaysia', name: 'kuala lumpur', country: 'Malaysia', price: 26000, tier: 'premium' },
  { id: 'New york', name: 'New york', country: 'America', price: 12000, tier: 'budget' }
];

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get('budgetTier') || 'all';

  const displayedPlaces = PLACES.filter(place => {
    if (currentFilter === 'budget') return place.price <= 22000;
    if (currentFilter === 'premium') return place.price > 22000;
    return true;
  });

  return (
    <div className="container">
                  <h2>Where do you want to Go Next?</h2>
      <h3>  Handpicked international holiday packages at the best prices,created just for you.</h3>
      
      
      <div className="filter-buttons">
        <button className="btn-secondary" onClick={() => setSearchParams({})}>Show All Destinations</button>
        <button className="btn-secondary" onClick={() => setSearchParams({ budgetTier: 'budget' })}>Under rupees 22000</button>
        <button className="btn-secondary" onClick={() => setSearchParams({ budgetTier: 'premium' })}>Above 22000 </button>
      </div>

      <div className="grid">
        {displayedPlaces.map(place => (
          <div key={place.id} className="card">
            <h3>{place.name}, {place.country}</h3>
            <p className="price-tag">Price: {place.price} per head</p>
            <Link to={`/destinations/${place.id}`} className="btn-small">Book Package</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
