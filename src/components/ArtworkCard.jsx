
function ArtworkCard({artwork, imgUrl}) {
    
  return (
    <div className='artwork-card'>
         <img src={`${imgUrl}/${artwork.image_id}/full/!100,100/0/default.jpg`} alt={artwork.title} />{/* Display the image */}
         <h6>{artwork.title}</h6>
    </div>
  )
}

export default ArtworkCard