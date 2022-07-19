<template>
  <div id="app">
    <zy-table
      init-request
      :tableData="tableData"
      :column="column"
      index
      checkbox
      :data="data_1"
      :params="params_1"
      url="/name/"
      method="post"
    >
      <template v-slot:operation="slot">
        <zy-button type="primary" @click="handleEdit(slot.data)"
          >编辑</zy-button
        >
        <zy-button type="danger" @click="handleDelete(slot.data)"
          >删除</zy-button
        >
        <zy-button type="success" @click="handleEdit(slot.data)"
          >编辑</zy-button
        >
        <zy-button type="warning" @click="handleDelete(slot.data)"
          >删除</zy-button
        >
      </template></zy-table
    >
  </div>
</template>

<script>
export default {
  components: {
    zyButton: () => import('@/components/Button'),
    zyTable: () => import('@/components/Table')
  },
  data() {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '创建时间', prop: 'create_date' },
        { label: 'amount1', prop: 'amount1' },
        { label: 'amount2', prop: 'amount2' },
        { label: 'amount3', prop: 'amount3' },
        {
          label: '操作',
          type: 'slot',
          slot_name: 'operation',
          prop: 'operation'
        }
      ],
      tableData: [
        {
          id: '1',
          name: '张三',
          amount1: '234',
          amount2: '4.43',
          amount3: 10
        },
        {
          id: '1',
          name: '张三',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '1',
          name: '张三',
          amount1: '324',
          amount2: '4.43',
          amount3: 9
        },
        {
          id: '2',
          name: '李四',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '2',
          name: '李四',
          amount1: '324',
          amount2: '4.43',
          amount3: 9
        },
        {
          id: '3',
          name: '王五',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '3',
          name: '王五',
          amount1: '324',
          amount2: '4.43',
          amount3: 9
        },
        {
          id: '3',
          name: '王五',
          amount1: '324',
          amount2: '4.43',
          amount3: 9
        },
        {
          id: '4',
          name: '刘六',
          amount1: '324',
          amount2: '4.43',
          amount3: 9
        },
        {
          id: '4',
          name: '刘六',
          amount1: '324',
          amount2: '4.43',
          amount3: 9
        }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
