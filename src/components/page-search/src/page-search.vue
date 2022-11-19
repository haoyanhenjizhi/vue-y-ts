<template>
  <div class="page-serch">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleQueryClick"
            >搜索</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleResetClick"
            >重置</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  emits: ['resetBtnClick', 'queryBtnClick'],
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    HyForm
  },
  setup(props, { emit }) {
    //双向绑定的属性应该是由配置文件的field来决定
    //1.优化一 formData当中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.优化二: 当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    // 3.优化三: 当用户点击搜索
    const handleQueryClick = () => {
      console.log(111)

      emit('queryBtnClick', formData.value)
    }
    return {
      formItems,
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.header {
  text-align: center;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
