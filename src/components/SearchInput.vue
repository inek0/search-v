<template>
  <input v-model="value" @change="onChangeHandler" />
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    defaultValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onChangeHandler() {
      this.$emit("change", this.value);
    },
  },
};
</script>

<style scoped></style>
