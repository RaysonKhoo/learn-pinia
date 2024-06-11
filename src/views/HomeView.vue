<template>
  <div class="home">
    <CounterPages/>
    <div class="button">
      <button @click="countStore.decreaseCount">-</button>
      <button @click="countStore.addCount">+</button>
    </div>
    <br>
    <div>This counter is : {{ countStore.oddOrEven }}</div>
 
    <br>
    <div>
      <h3>Edit Counter:</h3>
      <input type="number" v-model="countStore.count" />
    </div>
  </div>
</template>

<script>
import {computed } from "vue";
import { useCounterStore } from "../stores/counter";
import CounterPages from "./CounterPage.vue";
export default {
  components:{
    'CounterPages':CounterPages
  },
  setup() {
    // const count =ref(0)
    // return {count}
    const countStore = useCounterStore();
    return {
      count: computed(() => countStore.count),
      countStore,
    };
  },
  // methods: {
  //   addNumber(){
  //     this.count.count++
  //   },
  //   decreaseNumber(){
  //     this.count.count--
  //   },
  // },
  // computed:{
  //   oddOrEven(){
  //     if (this.count % 2  === 0)return 'even'
  //     else{
  //       return 'odd'
  //     }
  //   }
  // }
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
