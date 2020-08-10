<template>
  <div class="container">
    <h1>{{initData}}</h1>
    <Button>按钮</Button>
    <Icon type="ios-checkmark" />
  </div>
</template>

<script>
import { Button, Icon } from 'view-design'
export default {
  data() {
    return {
      initData: 'Vue开发'
    }
  },
  components: {Button, Icon}
}
</script>

<style lang="less" scoped>
  .container {
    color: red;
  }
</style>>