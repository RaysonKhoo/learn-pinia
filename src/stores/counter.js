import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id:'counter',
  state : () =>({
     count: ref(0)
  }),
  actions:{
    addCount(){
      this.count++;
    },
    decreaseCount(){
      this.count--;
    },
  },
  getters:{
    oddOrEven:(state) =>{
      if (state.count % 2  === 0)return 'even'
      else{
        return 'odd'
      }
    }
  }
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
