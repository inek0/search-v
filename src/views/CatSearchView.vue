<template>
  <div>
    <div class="search__container">
      <div class="search__input">
        <SearchInput :default-value="searchQuery" @change="onSearchHandler" />
      </div>
      <div class="search__btn">
        <button>Search</button>
      </div>
    </div>
    <div>Stored count: {{ getFetchedCount }}</div>
    <SearchResultList :list="getItems" />
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import SearchResultList from "@/components/SearchResultList.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CatSearchView",
  components: { SearchInput, SearchResultList },
  data() {
    return { searchQuery: "" };
  },
  computed: {
    ...mapGetters({
      getFetchedCount: "catsSlice/getFetchedCount",
      getItems: "catsSlice/getItems",
    }),
  },
  methods: {
    ...mapActions({
      fetchCatsSearch: "catsSlice/fetchCatsSearch",
    }),
    onSearchHandler(query) {
      this.fetchCatsSearch(query);
    },
  },
};
</script>

<style scoped>
.search__container {
  display: flex;
}
.search__input {
}
.search__btn {
}
</style>
