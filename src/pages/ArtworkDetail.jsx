import axios from "axios"
import { useParams } from "react-router-dom"


function ArtworkDetail() {
  const {id} = useParams()
  
  return (
    <div>{`id:${id}`}</div>
  )
}

export default ArtworkDetail