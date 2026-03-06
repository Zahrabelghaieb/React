import { useParams } from "react-router-dom";
import { Container, Card, Button, Badge } from "react-bootstrap";
import useEventStore from "../../store/useEventStore";
import useFavoriteStore from "../../store/useFavoriteStore";

const EventDetails = () => {
  const { id } = useParams();

  const getEventById = useEventStore((state) => state.getEventById);
  const event = getEventById(Number(id));

  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
  const favorite = isFavorite(Number(id));

  if (!event) {
    return <h1>Event does not exist</h1>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img
          variant="top"
          src={`/images/${event.image}`}
          alt={event.name}
          style={{ height: 300, objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title><h2>{event.name}</h2></Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <p><strong>Prix :</strong> {event.price} TND</p>
          <p>
            <strong>Billets :</strong>{" "}
            {event.nbTickets === 0
              ? <Badge bg="danger">Sold Out</Badge>
              : <Badge bg="success">{event.nbTickets} disponibles</Badge>
            }
          </p>
          <p><strong>Participants :</strong> {event.nbParticipants}</p>

          <Button
            variant={favorite ? "warning" : "outline-warning"}
            onClick={() =>
              favorite ? removeFavorite(Number(id)) : addFavorite(event)
            }
          >
            {favorite ? '⭐ Retirer des favoris' : '⭐ Ajouter aux favoris'}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetails;