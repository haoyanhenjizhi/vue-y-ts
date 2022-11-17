<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content-config'
import PageContent from '@/components/page-content/index'
export default defineComponent({
  components: { PageSearch, PageContent },
  name: 'users',
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
