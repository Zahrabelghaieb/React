import React from 'react';
import { Card, Col, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { deleteEvent } from "../../services/api";

function Event({ event, buy }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteEvent(event.id);
    window.location.reload();
  };

  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={`/images/${event.image}`}
          alt={event.name}
          style={{ height: 200 }}
        />

        <Card.Body>
          <Card.Title>
            <Link to={`/events/${event.id}`}>
              {event.name}
            </Link>
          </Card.Title>

          <Card.Text>{event.description}</Card.Text>

          <p><strong>Prix :</strong> {event.price} TND</p>

          <p>
            <strong>Billets :</strong>{" "}
            {event.nbTickets === 0
              ? <Badge bg="secondary">Sold Out</Badge>
              : <Badge bg="secondary">{event.nbTickets}</Badge>
            }
          </p>

          <p><strong>Participants :</strong> {event.nbParticipants}</p>

          {/* Bouton Book */}
          <Button
            variant="light"
            onClick={() => buy(event.id)}
            disabled={event.nbTickets === 0}
            className="me-2"
          >
            {event.nbTickets === 0 ? 'Sold Out' : 'Book'}
          </Button>

          {/* Bouton Like */}
          <Button
            variant="light"
            onClick={() => buy(event.id, 'like')}
            className="me-2"
          >
            {event.like ? 'Dislike' : 'Like'}
          </Button>

          {/* Bouton Update */}
          <Button
            variant="light"
            onClick={() => navigate(`/update/${event.id}`)}
            className="me-2 mt-2"
          >
            Update
          </Button>

          {/* Bouton Delete */}
          <Button
            variant="light"
            onClick={handleDelete}
            className="mt-2"
          >
            Delete
          </Button>

        </Card.Body>
      </Card>
    </Col>
  );
}

export default Event;