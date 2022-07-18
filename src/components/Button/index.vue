<template>
  <div id="app">
    <button class="zy-button" :class="[theme]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    theme() {
      return this.type ? `zy-button-${this.type}` : ''
    }
  }
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
