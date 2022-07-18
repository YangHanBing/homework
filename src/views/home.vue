<template>
  <div class="home">
    <zy-button disabled>默认按钮</zy-button>
    <zy-button type="primary" round size="medium">成功按钮</zy-button>
    <zy-button type="danger" border size="small">危险按钮</zy-button>
    <zy-button type="warning" size="mini">警告按钮</zy-button>
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
