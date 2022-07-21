<template>
  <div id="app">
    form表单
    <zy-Form :item="formItem" :field="formField" :button="formButton"></zy-Form>
  </div>
</template>

<script>
export default {
  components: {
    zyForm: () => import('@/components/Form')
  },
  data() {
    return {
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          valueType: 'password',
          prop: 'password',
          required: true
        },
        {
          label: '邮箱',
          type: 'input',
          valueType: 'email',
          prop: 'email',
          required: true
        },
        {
          label: '年龄',
          type: 'select',
          prop: 'age',
          required: true
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: ''
      },
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
