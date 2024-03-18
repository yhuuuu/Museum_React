
function EventCard({ event }) {
    console.log('event', event);
    function handleButtonClick() {
        window.location.href = event.rsvp_link; navigate(event.image_url);
    }

    return (
        <div className="event-card">
            <img src={`${event.image_url}`} alt="{event.title}" />
            <h4>{event.title}</h4>
            <p dangerouslySetInnerHTML={{__html: event.short_description}}/>
            <p>Date: {event.date_display ? event.date_display: "Event Ended"}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: artwork.description }} /> */}
            <button onClick={handleButtonClick}>RSVP</button>
        </div>
    )
}

export default EventCard