<template>
  <div id="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import { defineComponent } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zhCn
    }
  },
  name: 'App'
})
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
