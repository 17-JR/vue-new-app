<template>
  <div class="header-contaier">
    <van-nav-bar :title="title" @click="$router.back()" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
    //
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: blueviolet;
}
/deep/ .van-nav-bar__title {
  color: #fff;
  font-size: 20px;
}
</style>
