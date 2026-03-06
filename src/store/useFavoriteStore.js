import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (event) => {
        const already = get().favorites.find((e) => e.id === event.id);
        if (!already) {
          set((state) => ({ favorites: [...state.favorites, event] }));
        }
      },
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((e) => e.id !== id),
        })),
      isFavorite: (id) => !!get().favorites.find((e) => e.id === id),
    }),
    { name: 'favorite-storage' }
  )
);

export default useFavoriteStore;