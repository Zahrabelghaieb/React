import React, { useState, useEffect } from 'react';
import { Row, Alert, Container } from 'react-bootstrap';
import Event from './Event';
import { getallEvents } from "../../services/api";
import useEventStore from '../../store/useEventStore';
import useFavoriteStore from '../../store/useFavoriteStore';

function Events() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [bookingMsg, setBookingMsg] = useState('');

  const { events, populateEvents, updateEvent, deleteEvent } = useEventStore();
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  useEffect(() => {
    console.log('Composant monté');
    setShowWelcome(true);

    getallEvents().then((res) => populateEvents(res.data));

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
    const event = events.find(e => e.id === id);
    if (!event) return;

    if (action === 'like') {
      updateEvent({ ...event, like: !event.like });
      return;
    }

    if (action === 'delete') {
      deleteEvent(id);
      return;
    }

    if (action === 'favorite') {
      if (isFavorite(id)) {
        removeFavorite(id);
      } else {
        addFavorite(event);
      }
      return;
    }

    if (event.nbTickets > 0) {
      setBookingMsg('You have booked an event !');
      setTimeout(() => setBookingMsg(''), 2000);
      updateEvent({
        ...event,
        nbTickets: event.nbTickets - 1,
        nbParticipants: event.nbParticipants + 1
      });
    }
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
          <Event
            key={event.id}
            event={event}
            buy={buy}
            isFavorite={isFavorite(event.id)}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Events;