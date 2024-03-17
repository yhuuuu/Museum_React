import axios from "axios"
import { useState, useEffect } from "react"
import ArtworkCard from "../components/ArtworkCard"
import SideBar from "../components/SideBar"
import Pagination from "../components/Pagination"

function ArtworkPage() {

  //Collection state for storing all artworks
  const [collection, setCollection] = useState(null)
  //img url state for storing the configuration object
  const [imgUrl, setImageUrl] = useState(null)

  //current page object
  const [currentPage, setCurrentPage] = useState(1)
  //total page object
  const [totalPage, setTotalPage] = useState(1)

  const [nextPageUrl, setNextPageUrl] = useState(null)

  const url = `https://api.artic.edu/api/v1/artworks`
  async function getAllArtwork(page) {
    try {
      let res = await axios.get(`${url}?page=${currentPage}`)
      console.log(res);

      const { pagination, data, config } = res.data;
      //Set the collection state with api data
      setCollection(data)

      //Set the config state
      setImageUrl(config.iiif_url)

      //set the pagination state
      setTotalPage(pagination.total_pages)

      setNextPageUrl(pagination.next_url)

    } catch (err) {
      console.error(err);
    }
  }
  function handleNextPage() {
    if (nextPageUrl) {
      setCurrentPage(page => page + 1)
    }
  }
  function handlePreviousPage() {
    setCurrentPage(page => page - 1)
  }
  useEffect(() => {
    getAllArtwork(currentPage)
  }, [currentPage])


  return (
    <>

      {collection && (
        <div>
          <div className="collection-container">
            <SideBar />
            <div className="artwork-container">
              {collection.map((artwork, index) => (
                <ArtworkCard key={index} artwork={artwork} imgUrl={imgUrl} />
              ))}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            nextPageUrl={nextPageUrl}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage} />
        </div>


      )}
    </>

  )
}

export default ArtworkPage