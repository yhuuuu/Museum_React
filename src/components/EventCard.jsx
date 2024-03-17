import { useNavigate } from "react-router-dom";



function EventCard({ event }) {
    const navigate = useNavigate();
    console.log('event', event);
    function handleButtonClick() {
        const url = event.rsvp_link.startsWith("http") ? event.rsvp_link : `https://your-base-url/${event.rsvp_link}`;
        navigate(url);

    }

    return (
        <div>
            <img src={`${event.image_url}`} alt="{event.title}" />
            <h4>{event.title}</h4>
            <p>date: {event.date_display}</p>
            <button onClick={handleButtonClick}>RSVP</button>
        </div>
    )
}

export default EventCard