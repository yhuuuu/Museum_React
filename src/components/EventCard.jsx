


function EventCard({ event }) {
    console.log('event', event);
    function handleButtonClick() {
        window.location.href = event.rsvp_link; navigate(event.image_url);

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