import { create } from "zustand";

interface GameQuery {
  genreId?: number | null;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (text: string) => void;
}

const useGameQueryStoreStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenreId: (id: number) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genreId: id,
      },
    })),
  setPlatformId: (id: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: id },
    })),
  setSortOrder: (order: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: order },
    })),
  setSearchText: (text: string) =>
    set(() => ({
      gameQuery: { searchText: text },
    })),
}));

export default useGameQueryStoreStore;
