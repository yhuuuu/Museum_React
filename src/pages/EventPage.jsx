import axios from "axios"
import { useState, useEffect } from "react"
import EventCard from "../components/EventCard"

function EventPage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const res = await axios.get(`https://api.artic.edu/api/v1/events`)
        console.log(res.data);
        
        const { pagination, data, config } = res.data
        setEvents(data)

      }
      catch (err) {
        console.error(err);

      }


    }
    getAllEvents()
  }, [])
  console.log(events);

  return (
    <div>
      {
        events.map((event,index)=>(
          <EventCard 
          key={index}
          event={event}
          />

        ))
       

      }
    </div>
  )
}

export default EventPage