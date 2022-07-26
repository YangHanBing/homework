<template>
  <div id="app">
    <el-form ref="form" :model="field" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item
          :rules="item.rules"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
        >
          <component
            :value.sync="field[item.prop]"
            :config="item"
            :is="!item.type ? 'com-text' : `com-${item.type}`"
          ></component>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button
          @click="handleButton(item)"
          :loading="item.loading"
          v-for="item in button"
          v-bind="item"
          :key="item.key"
          >{{ item.label }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import createRules from './createRules'
// 引入封装的controll模块
const modules = {}
const files = require.context('../control', true, /index.vue$/i)
files.keys().forEach((item) => {
  const key = item.split('/')
  const name = key[1]
  modules[`com-${name}`] = files(item).default
})
console.log(modules)
export default {
  name: 'zyForm',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => []
    },
    beforeSubmit: Function
  },
  components: { ...modules },
  data() {
    return { formItem: [] }
  },
  created() {},
  mounted() {},
  methods: {
    handleButton(item) {
      if (item.key === 'submit') {
        this.handleSubmit(item)
        return
      }
      if (item.key === 'cancel') {
        this.handleCancel(item)
      }
    },
    handleSubmit(item) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('表单提交')
        }
      })
    },
    handleCancel(item) {
      this.$refs.form.resetFields()
      item.callback && item.callback()
    }
  },
  beforeMount() {
    this.formItem = createRules(this.item)
  }
}
</script>
<style scoped lang="scss"></style>
