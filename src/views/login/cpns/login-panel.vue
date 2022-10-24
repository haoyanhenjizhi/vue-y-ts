<template>
  <div class="loginpancel">
    <h1 class="tittle">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'
export default defineComponent({
  components: {
    LoginPhone,
    LoginAccount
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.loginpancel {
  margin-bottom: 120px;
  width: 320px;
  .tittle {
    text-align: center;
  }
}
</style>
