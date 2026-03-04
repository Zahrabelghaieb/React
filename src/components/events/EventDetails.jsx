import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getallEvents } from "../../services/api";
const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getallEvents(id)
            .then((res) => setEvent(res.data))
            .catch(() => setEvent(null));
    }, [id]);

    if (!event) {
        return <h1>Event does not exist</h1>;
    }

    return (
        <div>
            <h1>Event Details for {event.name}</h1>
            <div>
                <p>Description: {event.description}</p>
                <p>Price: {event.price} €</p>
            </div>
        </div>
    );
};

export default EventDetails;