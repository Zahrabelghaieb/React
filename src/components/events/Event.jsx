import React from 'react';
import { Card, Col, Button, Badge } from 'react-bootstrap';
// import placeholder from '../../assets/placeholder.jpg';

function Event({ event, buy }) {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={`/images/${event.image}`} // Assuming images are in public/images/
          alt={event.name}
          style={{ height: 200}}
        />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <p><strong>Prix :</strong> {event.price} TND</p>
          <p>
            <strong>Billets :</strong>{' '}
            {event.nbTickets === 0
              ? <Badge bg="danger">Sold Out</Badge>
              : <Badge bg="success">{event.nbTickets}</Badge>
            }
          </p>
          <p><strong>Participants :</strong> {event.nbParticipants}</p>

          {/* Bouton Book */}
          <Button
            variant="primary"
            onClick={() => buy(event.id)}
            disabled={event.nbTickets === 0}
            className="me-2"
          >
            {event.nbTickets === 0 ? 'Sold Out' : 'Book an event'}
          </Button>

          {/* Bouton Like/Dislike */}
          <Button
            variant={event.like ? 'danger' : 'outline-danger'}
            onClick={() => buy(event.id, 'like')}
          >
            {event.like ? '❤️ Dislike' : '🤍 Like'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Event;