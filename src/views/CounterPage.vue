<template>
    <div class="count">
      {{ countStore.count }}
    </div>
</template>
<script>
import {computed } from "vue";
import { useCounterStore } from "../stores/counter";
export default {
  setup() {
    const countStore = useCounterStore();
    return {
      count: computed(() => countStore.count),
      countStore,
    };
  },
};
</script>
<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.button button {
  font-size: 40px;
  margin: 10px;
}
</style>