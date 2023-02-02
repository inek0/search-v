<template>
  <div>
    <div class="search__container">
      <div>
        <SelectImageType @change="selectImageTypeHandler" />
      </div>
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
import SelectImageType from "@/components/SelectImageType.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CatSearchView",
  components: { SearchInput, SearchResultList, SelectImageType },
  data() {
    return { searchQuery: "", imageType: "" };
  },
  computed: {
    ...mapGetters({
      getFetchedCount: "catsSlice/getFetchedCount",
      getItems: "catsSlice/getItems",
    }),
    changedProps() {
      const { searchQuery, imageType } = this;
      return { searchQuery, imageType };
    },
  },
  watch: {
    changedProps: {
      handler(value) {
        const payload = {
          query: value.searchQuery,
          imageType: value.imageType,
        };
        this.fetchCatsSearch(payload);
      },
    },
  },
  methods: {
    ...mapActions({
      fetchCatsSearch: "catsSlice/fetchCatsSearch",
    }),
    onSearchHandler(query) {
      this.searchQuery = query;
    },
    selectImageTypeHandler(type) {
      this.imageType = type;
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
