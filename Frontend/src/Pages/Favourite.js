import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function FavoritesPage() {
  const { getUserIdFromAuthentication } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userId = getUserIdFromAuthentication();
        const response = await fetch(`http://localhost:8081/favorites/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [getUserIdFromAuthentication]);

  const handleRemoveFavorite = async (id) => {
    try {
      const userId = getUserIdFromAuthentication();
      const response = await fetch(`http://localhost:8081/favorites/${userId}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Remove the favorite from the local state
      setFavorites(favorites.filter((venue) => venue.id !== id));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites saved yet.</p>
      ) : (
        <ul>
          {favorites.map((venue) => (
            <li key={venue.id}>
              <Link to={`/details/${venue.id}`}>{venue.name}</Link>{" "}
              <button onClick={() => handleRemoveFavorite(venue.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
