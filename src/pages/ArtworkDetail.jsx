import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ArtworkInfoDetail from "../components/ArtworkInfoDetail"


function ArtworkDetail() {
  //reteieved the artworkid from the url parameter
  const { id } = useParams()

  //artwork state storing the artwork detail
  const [artwork, setArtwork] = useState({})
  const [artworkImg, setArtworkImg] = useState({})

  //call the fetchArtwork function again only when the id parameter changes.
  useEffect(() => {
    async function fetchArtwork() {
      try {
        let res = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
        console.log('res', res);
        const { data, info, config } = res.data;

        setArtwork(data)

        setArtworkImg(config)
      }
      catch (err) {
        console.error(err);
      }
    }

    fetchArtwork()
  }, [id])
  console.log(artwork);
  console.log(artworkImg);

  return (
    <>

      <div className="artworkDetail-top-section">
        {/* Check if artwork and artworkImg are not null before accessing their properties */}
        {artwork && (
          <div className="artwork-info">
            <h3>{artwork.title}</h3>
            <p>{artwork.artist_display}</p>
            <p>{artwork.date_display}</p>
          </div>
         )}
        {artworkImg && artwork && (
          <div className="artwork-img">
            <img src={`${artworkImg.iiif_url}/${artwork.image_id}/full/600,/0/default.jpg`} alt={artwork.title} />
          </div>
        )}
      </div>

      <div className="artworkDetail-mid-section">
          <ArtworkInfoDetail artwork={artwork}/>
      </div>

    </>

  )
}

export default ArtworkDetail