<template>
  <div class="loginpancel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currenTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'
export default defineComponent({
  components: {
    LoginPhone,
    LoginAccount
  },
  setup() {
    const isKeepPassword = ref(true)
    const currenTab = ref<string>('account')
    const accountRef = ref<InstanceType<typeof LoginAccount>>() //这里是定义类型 严格代码
    const phoneRef = ref<InstanceType<typeof LoginPhone>>() //这里是定义类型 严格代码

    const handleLoginClick = () => {
      if (currenTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('手机登录')
      }
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currenTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.loginpancel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
