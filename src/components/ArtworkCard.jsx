import { Link } from "react-router-dom"

function ArtworkCard({ artwork, imgUrl }) {

  return (
    <Link to={`/artworks/${artwork.id}`}>
      <div className='artwork-card'>
        <div>
          <img src={`${imgUrl}/${artwork.image_id}/full/200,/0/default.jpg`} alt={artwork.title} />{/* Display the image */}
        </div>
        <h6>{artwork.title}</h6>
      </div>
    </Link>
  )
}

export default ArtworkCard