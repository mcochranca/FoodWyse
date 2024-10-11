import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Recipe } from '../types';

interface WorldMapProps {
  recipes: Recipe[];
}

const WorldMap: React.FC<WorldMapProps> = ({ recipes }) => {
  useEffect(() => {
    // Initialize the map and set its view to a reasonable default (centered)
    const map = L.map('map').setView([20, 0], 2); // World view

    // Set up tile layer for the map (OpenStreetMap in this case)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Plot recipe markers on the map
    recipes.forEach((recipe) => {
      const marker = L.marker([recipe.location.lat, recipe.location.lng])
        .addTo(map)
        .bindPopup(`<b>${recipe.name}</b><br>${recipe.location.name}`);
    });

    // Clean up function to remove the map instance
    return () => {
      map.remove();
    };
  }, [recipes]);

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
};

export default WorldMap;
