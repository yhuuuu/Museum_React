import { Link } from "react-router-dom"

function ArtworkCard({ artwork, imgUrl }) {

  return (
    <Link to= {`/artworks/${artwork.id}`}>
      <div className='artwork-card'>
        <img src={`${imgUrl}/${artwork.image_id}/full/100,/0/default.jpg`} alt={artwork.title} />{/* Display the image */}
        <h6>{artwork.title}</h6>
      </div>
    </Link>
  )
}

export default ArtworkCard