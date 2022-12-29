import create from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteRepoStore = {
  favoriteRepoIds: number[];
  addToFavorite: (id: number) => void;
  removeFromFavorite: (id: number) => void;
};

const useFavoriteRepoStore = create(
  persist<FavoriteRepoStore>((set) => ({
    favoriteRepoIds: [],
    addToFavorite: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: [...state.favoriteRepoIds, repoId],
      }));
    },
    removeFromFavorite: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: [
          ...state.favoriteRepoIds.filter((id) => id !== repoId),
        ],
      }));
    },
  }), {
    name: 'repo-storage'
  })
);

export default useFavoriteRepoStore;
