import React, { useState, useEffect } from 'react';
import { Row, Alert, Container } from 'react-bootstrap';
import Event from './Event';
import { getallEvents } from "../../services/api";
function Events() {
  const [events, setEvents] = useState([]);
  const [showWelcome, setShowWelcome] = useState(false);
  const [bookingMsg, setBookingMsg] = useState('');

  useEffect(() => {
    console.log('Composant monté');
    setShowWelcome(true);

    getallEvents().then((res) => setEvents(res.data));

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      console.log('Composant démonté');
    };
  }, []);

  useEffect(() => {
    console.log('Composant mis à jour');
  });

  const buy = (id, action = 'book') => {
    setEvents(events.map(event => {
      if (event.id === id) {
        if (action === 'like') {
          return { ...event, like: !event.like };
        }
        if (event.nbTickets > 0) {
          setBookingMsg('You have booked an event !');
          setTimeout(() => setBookingMsg(''), 2000);
          return {
            ...event,
            nbTickets: event.nbTickets - 1,
            nbParticipants: event.nbParticipants + 1
          };
        }
      }
      return event;
    }));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Gestion des Événements</h2>

      {showWelcome && (
        <Alert variant="info" className="text-center">
           Bienvenue sur notre plateforme d'événements !
        </Alert>
      )}

      {bookingMsg && (
        <Alert variant="success" className="text-center">
          ✅ {bookingMsg}
        </Alert>
      )}

      <Row>
        {events.map(event => (
          <Event key={event.id} event={event} buy={buy} />
        ))}
      </Row>
    </Container>
  );
}

export default Events;