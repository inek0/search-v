<template>
  <div>
    <div>{{ getItemProps.tags }}</div>
    <img :src="getItemProps.previewURL" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LisItem",
  props: {
    item: {
      type: Number || String,
    },
  },
  computed: {
    ...mapGetters({ getItemById: "catsSlice/getItemById" }),
    getItemProps() {
      return this.getItemById(this.item);
    },
  },
};
</script>

<style scoped></style>
