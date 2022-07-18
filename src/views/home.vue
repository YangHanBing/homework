<template>
  <div class="home">
    <zy-button disabled>默认按钮</zy-button>
    <zy-button type="primary" round :loading="flag" @click="handleSubmit"
      >成功按钮</zy-button
    >
    <zy-button type="danger" suffix="tongzhi">危险按钮</zy-button>
    <zy-button type="warning" block>警告按钮</zy-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      flag: false
    }
  },
  components: {
    zyButton: () => import('../components/Button')
  },
  methods: {
    handleSubmit() {
      this.flag = true
      setTimeout(() => {
        console.log('123')
        this.flag = false
      }, 3000)
    }
  }
}
</script>
