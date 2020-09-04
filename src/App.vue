<template>
  <div style="text-align:center;">
    <img src="./logo.png" />
    <h3>BEYOND</h3>
    <el-button type="success" @click="inc">Clicked {{ count }} times.</el-button>
    <hr />
    <child></child>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Child from './components/child/index.vue'

export default {
  components: { Child },
  // setup 入口
  setup() {
    // 定义响应式数据
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    return {
      count,
      inc
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
