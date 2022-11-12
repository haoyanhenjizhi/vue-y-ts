<template>
  <div class="hy-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="proItem in propList" :key="proItem.prop">
        <el-table-column v-bind="proItem" align="center">
          <template #default="scope">
            <slot :name="proItem.slotName" :row="scope.row">
              {{ scope.row[proItem.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
