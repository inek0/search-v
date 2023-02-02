import { client, CLIENT_KEY } from "@/api";

type CatsSliceState = {
  cats: Array<unknown>;
  total: number;
  totalHits: number;
  idx: Array<string>;
  map: Record<string, unknown>;
};

const state: CatsSliceState = {
  cats: [],
  total: 0,
  totalHits: 0,
  idx: [],
  map: {},
};

export const catsSlice = {
  namespaced: true,
  state,
  getters: {
    getTotalCount: (state: CatsSliceState) => state.total,
    getFetchedCount: (state: CatsSliceState) => state.cats.length,
    getItems: (state: CatsSliceState) => state.idx,
    getItemById: (state: CatsSliceState) => (id) => state.map[id],
  },
  actions: {
    async fetchCatsSearch({ commit }, payload: string) {
      try {
        const response = await client.get(
          `https://pixabay.com/api/?key=${CLIENT_KEY}&q=${payload}`
        );
        const { hits, total, totalHits } = response.data;
        commit("SET_CATS", { hits, total, totalHits });
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  mutations: {
    SET_CATS(
      state: CatsSliceState,
      payload: { hits: Array<unknown>; total: number; totalHits: number }
    ) {
      const { hits, total, totalHits } = payload;
      state.cats = hits;
      state.total = total;
      state.totalHits = totalHits;
      state.idx = hits.map((item) => item.id);
      state.map = hits.reduce((acc, current) => {
        Object.assign(acc, { [current.id]: { ...current } });
        return acc;
      }, {});
    },
  },
};
