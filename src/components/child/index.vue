<template>
  <div>
    <div>label:{{label}}</div>
    <div>value:{{value}}</div>
    <el-button type="primary" @click="increment">Click</el-button>
    <div>state:{{state}}</div>
    <div>name:{{name}}</div>
  </div>
</template>
<script>
import { reactive, computed, toRefs, ref } from 'vue'
export default {
  // 文件入口
  setup() {
    // 定义响应式数据
    const name = ref('leslie')
    // 定义响应式数据
    const state = reactive({
      label: 'my-label',
      value: 100
    })

    // 解构取值: 解构后的字段是一个代理对象
    let { label, value } = toRefs(state)
    console.info('label', label) // ObjectRefImpl {_object: Proxy, _key: "label", __v_isRef: true}
    console.info('value', value) // ObjectRefImpl {_object: Proxy, _key: "value", __v_isRef: true}
    console.info('label.value', label.value) // my-label
    console.info('value.value', value.value) // 100

    // 方法里需要使用.value对变量赋值和取值
    const increment = () => {
      value.value++;
      label.value = 'my-label' + value.value
      name.value = 'KK' + '' + value.value
      printState()
    }
    const printState = () => {
      console.info(`current value: ${state.value}`)
      console.info(`current label: ${state.label}`)
    }
    return {
      state,
      increment,
      label,
      value,
      name
    }
  }
}
</script>

