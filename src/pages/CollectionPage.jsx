import axios from "axios"
import { useState, useEffect } from "react"

function CollectionPage() {

  //Collection state for storing all artworks
  const [collection, setCollection] = useState(null)
  //Config state for storing the configuration object
  const [config, setConfig] = useState(null)

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
      setConfig(config)

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAllCollection()
  }, [])



  return (
    <>
      <div>CollectionPage</div>
      {collection && (
        <ul>
          {collection.map((artwork, index) => (
            <li key={index}>
              <div>{artwork.title}</div>
              <img src={`${config.iiif_url}/${artwork.image_id}/full/!100,100/0/default.jpg`} alt={artwork.title} />{/* Display the image */}
            </li>
          ))}
        </ul>
      )}
    </>

  )
}

export default CollectionPage