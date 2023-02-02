<template>
  <div v-if="isHasElements" class="list">
    <div v-for="item in list" :key="item"><LisItem :item="item" /></div>
  </div>
  <div v-else>Try to search some</div>
</template>

<script>
import LisItem from "@/components/LisItem.vue";
export default {
  name: "SearchResultList",
  components: { LisItem },
  props: {
    list: {
      type: Array,
      defaultValue: [],
    },
  },
  computed: {
    isHasElements() {
      return Boolean(this.list.length);
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
