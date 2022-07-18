<template>
  <div id="app">
    <button
      class="zy-button"
      :disabled="disabled"
      :class="[theme, isRound, isBorder]"
    >
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
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean
  },
  computed: {
    theme() {
      return this.type ? `zy-button-${this.type}` : ''
    },
    isRound() {
      return this.round ? 'is-round' : ''
    },
    isBorder() {
      return this.border ? 'is-border' : ''
    }
  }
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
