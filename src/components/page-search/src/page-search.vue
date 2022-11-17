<template>
  <div class="page-serch">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">搜索</el-button>
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
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    HyForm
  },
  setup(props) {
    //双向绑定的属性应该是由配置文件的field来决定
    //1.优化一 formData当中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    const handleResetClick = () => {
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
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
