<template>
  <div>
    <el-form label-width="60px" :model="phone">
      <el-form-item label="手机" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })
    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.btn {
  margin-left: 9px;
  flex: 0;
}
</style>
