<template>
  <div class="home">
    <zy-button disabled>默认按钮</zy-button>
    <zy-button type="primary" round prefix="xingqing">成功按钮</zy-button>
    <zy-button type="danger" suffix="tongzhi">危险按钮</zy-button>
    <zy-button type="warning">警告按钮</zy-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    zyButton: () => import('../components/Button')
  }
}
</script>
