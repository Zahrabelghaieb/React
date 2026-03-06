import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useEventStore = create(
  persist(
    (set, get) => ({
      events: [],
      populateEvents: (events) => set({ events }),
      getEventById: (id) => get().events.find((e) => e.id === id),
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),
      updateEvent: (updatedEvent) =>
        set((state) => ({
          events: state.events.map((e) =>
            e.id === updatedEvent.id ? updatedEvent : e
          ),
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),
    }),
    { name: 'event-storage' }
  )
);

export default useEventStore;