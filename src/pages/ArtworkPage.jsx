import axios from "axios"
import { useState, useEffect } from "react"
import ArtworkCard from "../components/ArtworkCard"
import SideBar from "../components/SideBar"

function ArtworkPage() {

  //Collection state for storing all artworks
  const [collection, setCollection] = useState(null)
  //Config state for storing the configuration object
  const [imgUrl, setImageUrl] = useState(null)

  const url = `https://api.artic.edu/api/v1/artworks`
  async function getAllArtwork() {
    try {
      let res = await axios.get(url)
      const { data, info, config } = res.data;
      // console.log('data:', data)
      // console.log('info:', info)
      // console.log('config:', config)

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
    getAllArtwork()
  }, [])

  return (
    <>

      {collection && (

        <div className="collection-container">
          <SideBar />
          <div className="artwork-container">
            {collection.map((artwork, index) => (
              <ArtworkCard key={index} artwork={artwork} imgUrl={imgUrl} />
            ))}
          </div>
        </div>
      )}
    </>

  )
}

export default ArtworkPage