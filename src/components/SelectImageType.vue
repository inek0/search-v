<template>
  <div>
    <select v-model="selectedValue" @change="onChangeHandler">
      <option v-for="option in optionList" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectImageType",
  data() {
    return {
      selectedValue: "all",
      optionList: ["all", "photo", "illustration", "vector"],
    };
  },
  watch: {
    selectedValue: {
      handler(val) {
        this.selectedValue = val;
      },
      deep: false,
    },
  },
  methods: {
    onChangeHandler() {
      this.$emit("change", this.selectedValue);
    },
  },
};
</script>

<style scoped></style>
