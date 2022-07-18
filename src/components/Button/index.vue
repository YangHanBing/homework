<template>
  <div id="app">
    <button
      class="zy-button"
      :disabled="disabled"
      :style="[minWidthCss]"
      :class="[theme, isRound, isBorder, isSize]"
    >
      <span>
        <slot></slot>
      </span>
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
    size: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
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
    },
    isSize() {
      return this.size ? `yang-button-${this.size}` : ''
    },
    minWidthCss() {
      if (!this.minWidth) return ''
      return { 'min-width': this.minWidth }
    }
  }
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
