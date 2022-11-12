<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <bread-crumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import BreadCrumb, { IBreadcrumb } from '@/base-ui/breadcrumb/index'

import { pathMapBreadcrumbs } from '@/untils/map-menus'
export default defineComponent({
  components: {
    UserInfo,
    BreadCrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const breadcrumbs: IBreadcrumb[] = []
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
  }
}
</style>
