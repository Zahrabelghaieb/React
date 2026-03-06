import React, { useState, useEffect } from "react";
import useEventStore from "../store/useEventStore";

const EventForm = ({ eventId = null, onDone }) => {
  const addEvent = useEventStore((state) => state.addEvent);
  const updateEvent = useEventStore((state) => state.updateEvent);
  const getEventById = useEventStore((state) => state.getEventById);

  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    if (eventId) {
      const existing = getEventById(eventId);
      if (existing) setForm({ title: existing.title, description: existing.description });
    }
  }, [eventId]);

  const handleSubmit = () => {
    if (eventId) {
      updateEvent(eventId, form);
    } else {
      addEvent(form);
    }
    onDone && onDone();
  };

  return (
    <div>
      <h2>{eventId ? "Modifier" : "Ajouter"} un événement</h2>
      <input
        placeholder="Titre"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button onClick={handleSubmit}>{eventId ? "Modifier" : "Ajouter"}</button>
    </div>
  );
};

export default EventForm;