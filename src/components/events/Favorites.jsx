import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import useFavoriteStore from '../../store/useFavoriteStore';

function Favorites() {
  const { favorites, removeFavorite } = useFavoriteStore();

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">⭐ Mes Favoris</h2>

      {favorites.length === 0 ? (
        <Alert variant="warning" className="text-center">
          Aucun élément en favoris
        </Alert>
      ) : (
        <Row>
          {favorites.map((event) => (
            <Col key={event.id} md={3} lg={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`/images/${event.image}`}
                  alt={event.name}
                  style={{ height: 200 }}
                />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <p><strong>Prix :</strong> {event.price} TND</p>
                  <Button
                    variant="danger"
                    onClick={() => removeFavorite(event.id)}
                  >
                    ❌ Retirer des favoris
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Favorites;