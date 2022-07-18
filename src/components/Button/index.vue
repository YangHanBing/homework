<template>
  <div id="app">
    <button
      class="zy-button"
      @click="change"
      :disabled="disabled || loading"
      :style="[minWidthCss]"
      :class="[theme, isRound, isBorder, isSize, blockCss]"
    >
      <span>
        <i v-if="loading" class="iconfont icon-prefix icon-loading"></i>
        <i v-if="prefix" class="iconfont icon-prefix" :class="iconPrefix"></i>
        <slot></slot>
        <i v-if="suffix" class="iconfont icon-suffix" :class="iconSuffix"></i>
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
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean
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
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : ''
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : ''
    },
    blockCss() {
      return this.block ? 'zy-button-block' : ''
    }
  },
  methods: {
    change() {
      this.$emit('click')
    }
  }
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
