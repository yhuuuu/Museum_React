// import React, { useState } from "react";
// import axios from "axios";

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.artic.edu/api/v1/artworks/search?q=${query}`
//       );
//       setResults(response.data.data);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for artworks..."
//         value={query}
//         onChange={handleChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {/* <div>
//         {results.map((artwork) => (
//           <div key={artwork.id}>
//             <h2>{artwork.title}</h2>
//             <img src={artwork.thumbnail.url} alt={artwork.title} />
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default SearchBar;