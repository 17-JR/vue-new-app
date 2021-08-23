<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header :title="title"></Header>
  </div>
</template>

<script>
// 导入头部引用
import Header from '@/components/header'

export default {
  name: 'Home',
  components: {
    // 引用的模板
    Header
  },
  data () {
    return {
      title: '黑马头条'
    }
  }
}
</script>
