import axios from "axios"
import { useState, useEffect } from "react"
import ArtworkCard from "../components/ArtworkCard"

function CollectionPage() {

  //Collection state for storing all artworks
  const [collection, setCollection] = useState(null)
  //Config state for storing the configuration object
  const [imgUrl, setImageUrl] = useState(null)

  const url = `https://api.artic.edu/api/v1/artworks`
  async function getAllCollection() {
    try {
      let res = await axios.get(url)
      const { data, info, config } = res.data;
      console.log('data:', data)
      console.log('info:', info)
      console.log('config:', config)

      //Set the collection state with api data
      setCollection(data)

      //Set the config state
      setImageUrl(config.iiif_url)
      

    } catch (err) {
      console.error(err);
    }
  }

  //`getAllCollection function only once when the component mounts.`
  useEffect(() => {
    getAllCollection()
  }, [])

  return (
    <>

      {collection && (
        <ul>
          {collection.map((artwork, index) => (
            <ArtworkCard key = {index} artwork = {artwork} imgUrl={imgUrl}/>
            // <li key={index}>
            //   <img src={`${config.iiif_url}/${artwork.image_id}/full/!100,100/0/default.jpg`} alt={artwork.title} />{/* Display the image */}
            //   <div>{artwork.title}</div>
            // </li>
          ))}
        </ul>
      )}
    </>

  )
}

export default CollectionPage