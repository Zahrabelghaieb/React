import { useParams } from "react-router-dom";
import events from "./data/events";
const EventDetails = () => {
    const { name } = useParams();
    const event = events.find(e => e.name === name);
    if (!event) {
        return <h1>Event Not Found</h1>;
    }
  return ( 
    <div>
        <h1>Event Details for {name}</h1>
        {event && (
            <div>
                <p>Description: {event.description}</p>
                <p>Price: {event.price} €</p>     
    </div>
        )}
    </div>
   );
};
export default EventDetails;