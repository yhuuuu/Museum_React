import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${query}`);
      setSearchResults(response.data.data);
      
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleArtworkClick = (artworkId) => {
    navigate(`/artworks/${artworkId}`); // Navigate to artwork detail page
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for artwork..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((artwork) => (
          <li key={artwork.id} onClick={() => handleArtworkClick(artwork.id)}>
            {artwork.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
