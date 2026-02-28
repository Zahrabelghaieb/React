import React, { useState, useEffect } from 'react';
import { Row, Alert, Container } from 'react-bootstrap';
import Event from './Event';
import eventsData from "./data/events.json";
function Events() {
  const [events, setEvents] = useState(eventsData);
  const [showWelcome, setShowWelcome] = useState(false);
  const [bookingMsg, setBookingMsg] = useState('');

  // ✅ useEffect — Message de bienvenue au montage
  useEffect(() => {
    console.log('Composant monté');
    setShowWelcome(true);

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      console.log('Composant démonté');
    };
  }, []);

  // ✅ useEffect — Surveiller les changements d'events
  useEffect(() => {
    console.log('Composant mis à jour');
  });

  // ✅ Fonction buy — Book ou Like/Dislike
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

      {/* Message de bienvenue */}
      {showWelcome && (
        <Alert variant="info" className="text-center">
          👋 Bienvenue sur notre plateforme d'événements !
        </Alert>
      )}

      {/* Message de réservation */}
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