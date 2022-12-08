<template>
  <div>One组件:{{ $store.state.token }}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this);
  },
  methods: {},
};
</script>
<style scoped></style>
