<template>
  <div class="about">
    <h1>about</h1>
    <button class="counter-button" @click="countStore.addCount">{{ countStore.count }}</button>
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
<style scoped>
.counter-button{
  font-size: 50px;
}
</style>
